/**
 * 密码加密工具
 * 使用SHA-256对密码进行前端加密
 */

/**
 * 将字符串转换为SHA-256哈希
 * @param message 要加密的字符串
 * @returns 返回十六进制格式的哈希值
 */
export async function sha256(message: string): Promise<string> {
  // 将字符串编码为Uint8Array
  const msgBuffer = new TextEncoder().encode(message);
  
  // 使用Web Crypto API进行哈希
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  
  // 将ArrayBuffer转换为十六进制字符串
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return hashHex;
}

/**
 * 加密密码
 * 使用SHA-256 + 盐值的方式加密密码
 * @param password 明文密码
 * @returns 加密后的密码
 */
export async function encryptPassword(password: string): Promise<string> {
  // 使用固定盐值 + 密码进行SHA-256加密
  // 注意：这里的盐值是为了增加一层混淆，真正的安全性由后端bcrypt保证
  const salt = 'frontend_master_salt_2026';
  const combined = salt + password;
  
  // 进行两次SHA-256加密，增强安全性
  const firstHash = await sha256(combined);
  const secondHash = await sha256(firstHash);
  
  return secondHash;
}

/**
 * 验证密码强度
 * @param password 密码
 * @returns 强度等级 0-4
 */
export function getPasswordStrength(password: string): number {
  if (!password) return 0;
  
  let strength = 0;
  
  // 长度检查
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  
  // 包含小写字母
  if (/[a-z]/.test(password)) strength++;
  
  // 包含大写字母
  if (/[A-Z]/.test(password)) strength++;
  
  // 包含数字
  if (/\d/.test(password)) strength++;
  
  // 包含特殊字符
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  
  // 返回0-4的强度值
  return Math.min(4, Math.floor(strength / 1.5));
}
