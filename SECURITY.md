# 安全说明文档

## 密码安全机制

本项目实现了多层密码安全机制，确保用户密码的安全性。

### 1. 前端加密（传输层保护）

**实现位置**: `frontend-master-vue/src/utils/crypto.ts`

- 使用 **SHA-256** 算法对用户密码进行前端加密
- 采用双重哈希策略：`SHA256(SHA256(salt + password))`
- 固定盐值：`frontend_master_salt_2026`

**目的**：
- 防止在网络传输过程中密码明文泄露
- 在F12网络监听中只能看到加密后的64位十六进制字符串
- 即使在HTTP环境下也能提供基本的密码保护

**示例**：
```typescript
import { encryptPassword } from '@/utils/crypto';

// 原始密码: "myPassword123"
// 加密后: "a1b2c3d4e5f6...64位十六进制字符串"
const encrypted = await encryptPassword("myPassword123");
```

### 2. 后端存储加密（数据库保护）

**实现位置**: `backend/app/api/v1/endpoints/auth.py`

- 使用 **bcrypt** 算法对密码进行哈希存储
- bcrypt自动生成随机盐值（每次加密结果都不同）
- 存储在数据库中的是bcrypt哈希值，无法逆向解密

**双重加密流程**：
```
用户输入密码 "myPassword123"
    ↓
前端SHA-256加密 → "a1b2c3d4...（64位十六进制）"
    ↓
网络传输（HTTPS推荐）
    ↓
后端bcrypt哈希 → "$2b$12$randomsalt...（bcrypt哈希）"
    ↓
存储到数据库
```

### 3. 密码验证流程

**登录时的验证过程**：

1. 用户输入明文密码
2. 前端使用SHA-256加密
3. 发送加密后的密码到后端
4. 后端使用bcrypt验证：
   - 从数据库取出存储的bcrypt哈希
   - 对接收到的SHA-256密码再次bcrypt哈希
   - 使用bcrypt.checkpw()比对

**代码示例**：
```python
# backend/app/api/v1/endpoints/auth.py
def verify_password(plain_password: str, hashed_password: str) -> bool:
    """验证密码
    plain_password: 前端SHA-256加密后的密码
    hashed_password: 数据库中的bcrypt哈希
    """
    return bcrypt.checkpw(
        plain_password.encode('utf-8'), 
        hashed_password.encode('utf-8')
    )
```

## 安全级别

### ✅ 已实现的安全措施

1. **前端密码加密** - SHA-256双重哈希
2. **后端密码哈希** - bcrypt算法
3. **JWT Token认证** - 无状态会话管理
4. **密码强度验证** - 前端实时检查

### ⚠️ 生产环境建议

1. **必须使用HTTPS**
   - 前端加密只是额外保护层
   - HTTPS才是传输层安全的根本保证
   - 配置SSL/TLS证书

2. **密码策略**
   - 最小长度：6位（建议提高到8-12位）
   - 建议要求：大小写字母 + 数字 + 特殊字符
   - 实施密码过期策略

3. **账户安全**
   - 添加登录失败次数限制
   - 实施账户锁定机制
   - 添加验证码防止暴力破解
   - 实施双因素认证（2FA）

4. **会话管理**
   - Token刷新机制
   - Token黑名单（用于登出）
   - 设置合理的过期时间

## 密码强度检查

**实现位置**: `frontend-master-vue/src/utils/crypto.ts`

```typescript
import { getPasswordStrength } from '@/utils/crypto';

// 返回0-4的强度等级
const strength = getPasswordStrength("MyPassword123!");
// strength = 3 (中等强度)
```

**强度标准**：
- 0: 极弱（空密码）
- 1: 弱（仅字母或数字）
- 2: 一般（字母+数字）
- 3: 中等（字母+数字+大小写）
- 4: 强（字母+数字+大小写+特殊字符+长度≥12）

## 现有用户迁移

**重要提示**：如果数据库中已有用户，他们的密码是用明文密码存储的bcrypt哈希。实施新的加密机制后：

1. **新注册用户**：使用双重加密（SHA-256 + bcrypt）
2. **老用户**：首次登录可能失败，需要：
   - 选项A：清空数据库重新注册
   - 选项B：实施密码迁移脚本
   - 选项C：添加"忘记密码"功能，让用户重置密码

### 数据库迁移方案

如果需要保留现有用户，建议添加一个迁移标志：

```python
# 在User模型中添加
class User(Base):
    # ... 现有字段
    password_migrated = Column(Boolean, default=False)
```

然后在验证时检查是否已迁移：

```python
def authenticate_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)
    if not user:
        return False
    
    # 如果是老用户（未迁移）
    if not user.password_migrated:
        # 使用明文密码验证
        if verify_password(password, user.hashed_password):
            # 验证成功后，更新为加密密码
            user.hashed_password = get_password_hash(await encryptPassword(password))
            user.password_migrated = True
            db.commit()
            return user
    else:
        # 新用户，使用加密密码验证
        if verify_password(password, user.hashed_password):
            return user
    
    return False
```

## 测试建议

1. **网络监听测试**
   ```
   打开F12 → Network → 登录/注册
   查看请求payload，应该看到加密后的密码（64位十六进制）
   ```

2. **数据库检查**
   ```
   查看users表中的hashed_password字段
   应该是bcrypt格式：$2b$12$...
   ```

3. **安全测试**
   - 测试弱密码拒绝
   - 测试密码不匹配
   - 测试Token过期
   - 测试未授权访问

## 常见问题

**Q: 为什么要在前端加密？后端加密不够吗？**

A: 后端bcrypt已经足够安全地存储密码。前端加密的主要目的是：
- 防止网络监听看到明文密码
- 在没有HTTPS的开发环境提供基本保护
- 防止用户在多个网站使用相同密码时的横向泄露

**Q: 前端加密的盐值固定，安全吗？**

A: 前端加密的固定盐值主要是为了传输保护，真正的安全性由后端bcrypt的随机盐值保证。即使攻击者知道前端算法，也无法从数据库的bcrypt哈希反推出原始密码。

**Q: 如何在生产环境部署？**

A: 
1. 配置HTTPS证书（Let's Encrypt免费）
2. 修改前端API地址为https://your-domain.com
3. 配置CORS允许HTTPS源
4. 使用环境变量管理密钥和配置

## 相关文件

- `frontend-master-vue/src/utils/crypto.ts` - 前端加密工具
- `frontend-master-vue/src/services/authService.ts` - 认证服务
- `backend/app/api/v1/endpoints/auth.py` - 后端认证API
- `backend/app/models/models.py` - 用户数据模型
- `backend/app/core/config.py` - 配置文件

## 更新日志

- **2026-01-01**: 实施前端SHA-256加密 + 后端bcrypt双重加密机制
