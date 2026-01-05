<template>
  <div class="learning-path-container">
    
    <!-- 欢迎动画屏幕 -->
    <transition name="welcome-fade">
      <div v-if="showWelcome" class="welcome-screen">
        <div class="welcome-content">
          <!-- 转圈动画 -->
          <div class="spinner-container">
            <div class="spinner"></div>
            <div class="spinner-glow"></div>
          </div>
          
          <!-- 欢迎文字 - 实色白字加彩色阴影 -->
          <h1 class="welcome-title artistic-font">
            <span v-for="(char, index) in welcomeText" :key="index" 
                  class="char" 
                  :style="{ animationDelay: index * 0.1 + 's' }">
              {{ char }}
            </span>
          </h1>
          
          <!-- 副标题文字 - 实色白字 -->
          <transition name="slide-up">
            <p v-if="showSubtitle" class="welcome-subtitle artistic-font">
              {{ subtitleText }}
            </p>
          </transition>
        </div>
      </div>
    </transition>

    <!-- 头部区域 -->
    <div class="path-header" ref="headerRef">
      <div class="header-content">
        <div class="header-icon">🎯</div>
        <div class="header-text">
          <h1 class="header-title">个性化学习路线</h1>
          <p class="header-subtitle">根据你的技能水平和目标，为你量身定制学习计划</p>
        </div>
      </div>
    </div>

    <!-- 主内容区域 - 添加滚动 -->
    <div class="scrollable-content">

    <!-- 技能评估区域 -->
    <div class="assessment-section" v-if="!hasAssessment">
      <div class="assessment-card" ref="assessmentCardRef">
        <div class="card-header">
          <span class="card-icon">📊</span>
          <h2 class="card-title">全方位学习评估</h2>
          <p class="card-subtitle">请尽可能真实、详细地填写，以便为你定制最精准的学习路线</p>
        </div>
        
        <div class="assessment-content">
          
          <!-- 一、基本信息 -->
          <div class="form-section required-section" ref="basicInfoRef">
            <h3 class="section-title">
              <span class="section-number">1</span>
              基本信息
              <span class="required-badge">必填</span>
            </h3>
            
            <div class="form-row" ref="ageRef">
              <label class="form-label">年龄段 <span class="required-star">*</span></label>
              <div class="radio-group">
                <label v-for="age in ageRanges" :key="age" class="radio-option">
                  <input type="radio" v-model="formData.ageRange" :value="age" />
                  <span>{{ age }}</span>
                </label>
              </div>
            </div>

            <div class="form-row">
              <label class="form-label">当前身份（可多选） <span class="required-star">*</span></label>
              <div class="checkbox-group">
                <label v-for="identity in identities" :key="identity.id" class="checkbox-option">
                  <input type="checkbox" v-model="formData.identities" :value="identity.id" />
                  <span>{{ identity.label }}</span>
                </label>
              </div>
            </div>

            <div class="form-row">
              <label class="form-label">编程基础 <span class="required-star">*</span></label>
              <div class="radio-group">
                <label v-for="level in programmingLevels" :key="level.id" class="radio-option">
                  <input type="radio" v-model="formData.programmingLevel" :value="level.id" />
                  <span>{{ level.label }}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- 二、学习目标 -->
          <div class="form-section required-section" ref="goalsRef">
            <h3 class="section-title">
              <span class="section-number">2</span>
              学习目标定位
              <span class="required-badge">必填</span>
            </h3>
            
            <div class="form-row">
              <label class="form-label">你的最终目标（可多选）</label>
              <div class="checkbox-group grid-3">
                <label v-for="goal in finalGoals" :key="goal.id" class="checkbox-option">
                  <input type="checkbox" v-model="formData.finalGoals" :value="goal.id" />
                  <span>{{ goal.icon }} {{ goal.label }}</span>
                </label>
              </div>
            </div>

            <div class="form-row">
              <label class="form-label">目标时间周期</label>
              <div class="radio-group">
                <label v-for="period in timePeriods" :key="period" class="radio-option">
                  <input type="radio" v-model="formData.timePeriod" :value="period" />
                  <span>{{ period }}</span>
                </label>
              </div>
            </div>
          </div>

          <!-- 三、时间投入 -->
          <div class="form-section collapsible-section" :class="{ collapsed: optionalSections.time }">
            <div class="section-title collapsible-header">
              <div>
                <span class="section-number">3</span>
                时间投入
                <span class="optional-badge">可选</span>
              </div>
              <button type="button" class="collapse-toggle" @click="toggleSection('time')">
                {{ optionalSections.time ? '展开' : '收起' }}
              </button>
            </div>
            
            <transition name="collapse">
              <div v-if="!optionalSections.time" class="collapsible-body">
                <div class="form-row">
                  <label class="form-label">每周可投入时间</label>
                  <div class="radio-group">
                    <label v-for="time in weeklyTimes" :key="time" class="radio-option">
                      <input type="radio" v-model="formData.weeklyTime" :value="time" />
                      <span>{{ time }}</span>
                    </label>
                  </div>
                </div>

                <div class="form-row">
                  <label class="form-label">每天可用学习时间</label>
                  <div class="radio-group">
                    <label v-for="time in dailyTimes" :key="time" class="radio-option">
                      <input type="radio" v-model="formData.dailyTime" :value="time" />
                      <span>{{ time }}</span>
                    </label>
                  </div>
                </div>

                <div class="form-row">
                  <label class="form-label">能坚持的连续周期</label>
                  <div class="radio-group">
                    <label v-for="duration in durations" :key="duration" class="radio-option">
                      <input type="radio" v-model="formData.duration" :value="duration" />
                      <span>{{ duration }}</span>
                    </label>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- 四、技能自评 -->
          <div class="form-section required-section" ref="skillsRef">
            <h3 class="section-title">
              <span class="section-number">4</span>
              已有技能评估
              <span class="required-badge">必填</span>
            </h3>
            <p class="section-desc">请按 0-10 分评价自己的掌握程度（0=不会，10=非常熟练）</p>
            
            <div class="skill-ratings">
              <div v-for="skill in skillsToRate" :key="skill.id" class="skill-rating-item">
                <div class="skill-rating-header">
                  <span class="skill-rating-name">{{ skill.name }}</span>
                  <span class="skill-rating-value">{{ formData.skillRatings[skill.id] || 0 }}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="10" 
                  v-model.number="formData.skillRatings[skill.id]"
                  class="skill-slider"
                />
                <div class="skill-rating-labels">
                  <span>不会</span>
                  <span>一般</span>
                  <span>熟练</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 五、项目经验 -->
          <div class="form-section collapsible-section" :class="{ collapsed: optionalSections.projects }">
            <div class="section-title collapsible-header">
              <div>
                <span class="section-number">5</span>
                已有项目经验
                <span class="optional-badge">可选</span>
              </div>
              <button type="button" class="collapse-toggle" @click="toggleSection('projects')">
                {{ optionalSections.projects ? '展开' : '收起' }}
              </button>
            </div>
            
            <transition name="collapse">
              <div v-if="!optionalSections.projects" class="collapsible-body">
                <div class="form-row">
                  <label class="form-label">做过的项目类型（可多选）</label>
                  <div class="checkbox-group grid-3">
                    <label v-for="project in projectTypes" :key="project.id" class="checkbox-option">
                      <input type="checkbox" v-model="formData.projectTypes" :value="project.id" />
                      <span>{{ project.icon }} {{ project.label }}</span>
                    </label>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- 六、学习偏好 -->
          <div class="form-section collapsible-section" :class="{ collapsed: optionalSections.preferences }">
            <div class="section-title collapsible-header">
              <div>
                <span class="section-number">6</span>
                学习偏好
                <span class="optional-badge">可选</span>
              </div>
              <button type="button" class="collapse-toggle" @click="toggleSection('preferences')">
                {{ optionalSections.preferences ? '展开' : '收起' }}
              </button>
            </div>
            
            <transition name="collapse">
              <div v-if="!optionalSections.preferences" class="collapsible-body">
                <div class="form-row">
                  <label class="form-label">倾向的学习方式（可多选）</label>
                  <div class="checkbox-group grid-2">
                    <label v-for="method in learningMethods" :key="method.id" class="checkbox-option">
                      <input type="checkbox" v-model="formData.learningMethods" :value="method.id" />
                      <span>{{ method.icon }} {{ method.label }}</span>
                    </label>
                  </div>
                </div>

                <div class="form-row">
                  <label class="form-label">学习中常遇到的问题（可多选）</label>
                  <div class="checkbox-group grid-2">
                    <label v-for="problem in learningProblems" :key="problem.id" class="checkbox-option">
                      <input type="checkbox" v-model="formData.learningProblems" :value="problem.id" />
                      <span>{{ problem.label }}</span>
                    </label>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- 七、兴趣方向 -->
          <div class="form-section collapsible-section" :class="{ collapsed: optionalSections.interests }">
            <div class="section-title collapsible-header">
              <div>
                <span class="section-number">7</span>
                兴趣方向
                <span class="optional-badge">可选</span>
              </div>
              <button type="button" class="collapse-toggle" @click="toggleSection('interests')">
                {{ optionalSections.interests ? '展开' : '收起' }}
              </button>
            </div>
            <p class="section-desc">请选择你感兴趣的前端方向（可多选）</p>
            
            <transition name="collapse">
              <div v-if="!optionalSections.interests" class="collapsible-body">
                <div class="interest-categories">
                  <div v-for="category in interestCategories" :key="category.id" class="interest-category">
                    <h4 class="interest-category-title">{{ category.name }}</h4>
                    <div class="checkbox-group grid-2">
                      <label v-for="interest in category.items" :key="interest.id" class="checkbox-option">
                        <input type="checkbox" v-model="formData.interests" :value="interest.id" />
                        <span>{{ interest.icon }} {{ interest.label }}</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- 八、限制条件 -->
          <div class="form-section collapsible-section" :class="{ collapsed: optionalSections.limits }">
            <div class="section-title collapsible-header">
              <div>
                <span class="section-number">8</span>
                限制条件
                <span class="optional-badge">可选</span>
              </div>
              <button type="button" class="collapse-toggle" @click="toggleSection('limits')">
                {{ optionalSections.limits ? '展开' : '收起' }}
              </button>
            </div>
            
            <transition name="collapse">
              <div v-if="!optionalSections.limits" class="collapsible-body">
                <div class="form-row">
                  <label class="form-label">英语能力</label>
                  <div class="radio-group">
                    <label v-for="level in englishLevels" :key="level" class="radio-option">
                      <input type="radio" v-model="formData.englishLevel" :value="level" />
                      <span>{{ level }}</span>
                    </label>
                  </div>
                </div>

                <div class="form-row">
                  <label class="form-label">数学能力</label>
                  <div class="radio-group">
                    <label v-for="level in mathLevels" :key="level" class="radio-option">
                      <input type="radio" v-model="formData.mathLevel" :value="level" />
                      <span>{{ level }}</span>
                    </label>
                  </div>
                </div>

                <div class="form-row">
                  <label class="form-label">付费课程预算</label>
                  <div class="radio-group">
                    <label v-for="budget in budgets" :key="budget" class="radio-option">
                      <input type="radio" v-model="formData.budget" :value="budget" />
                      <span>{{ budget }}</span>
                    </label>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- 九、开放问题 -->
          <div class="form-section collapsible-section" :class="{ collapsed: optionalSections.expectations }">
            <div class="section-title collapsible-header">
              <div>
                <span class="section-number">9</span>
                你的期望
                <span class="optional-badge">可选</span>
              </div>
              <button type="button" class="collapse-toggle" @click="toggleSection('expectations')">
                {{ optionalSections.expectations ? '展开' : '收起' }}
              </button>
            </div>
            
            <transition name="collapse">
              <div v-if="!optionalSections.expectations" class="collapsible-body">
                <div class="form-row">
                  <label class="form-label">你最希望学习路线帮你解决什么问题？</label>
                  <textarea 
                    v-model="formData.mainProblem"
                    class="form-textarea"
                    placeholder="例如：我不知道从哪里开始学；每次学一点就忘了；想做项目但不知道做什么..."
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </transition>

          </div>

          <!-- 生成按钮 -->
          <button 
            class="generate-btn"
            @click="generateLearningPath"
            :disabled="!isFormValid"
            ref="generateBtnRef"
          >
            <span class="btn-icon">✨</span>
            <span class="btn-text">生成个性化学习路线</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 学习路线展示区域 -->
    <div class="learning-path-section" v-if="hasAssessment && learningPath">
      <div class="ai-dashboard">
        <div class="ai-main">
          <div class="hero-card">
            <div class="hero-pills">
              <span class="pill pill-dark">AI 个性化</span>
              <span class="pill pill-light">{{ learningPath.summary?.title || '全栈成长路线' }}</span>
            </div>
            <h1 class="hero-title">{{ learningPath.summary?.title || '投资你的学习力' }}</h1>
            <p class="hero-subtitle">{{ learningPath.summary?.description || '基于你的目标生成的全栈成长路线，精选内容高效达成学习成就。' }}</p>
            <div class="hero-stat-row">
              <div class="hero-stat">
                <span class="stat-label">学习周期</span>
                <span class="stat-value">{{ learningPath.summary?.estimatedWeeks || totalWeeks }}周</span>
              </div>
              <div class="hero-stat">
                <span class="stat-label">总学时</span>
                <span class="stat-value">{{ learningPath.summary?.totalHours || '-' }}h</span>
              </div>
              <div class="hero-stat">
                <span class="stat-label">难度</span>
                <span class="stat-value">{{ learningPath.summary?.difficulty || '循序渐进' }}</span>
              </div>
            </div>
            <div class="hero-action-row">
              <div class="hero-tags">
                <span v-for="goal in learningPath.summary?.highlights || ['系统规划','项目驱动','资源精选']" :key="goal" class="soft-chip">
                  {{ goal }}
                </span>
              </div>
              <button class="ghost-button" @click="resetAssessment">重新评估</button>
            </div>
          </div>

          <div class="path-card-grid">
            <div 
              v-for="card in overviewCards" 
              :key="card.id"
              class="path-card"
              :class="['tone-' + card.tone, { active: activeCardId === card.id }]"
              @click="activeCardId = card.id"
            >
              <div class="card-top">
                <span class="card-pill">{{ card.tag }}</span>
                <span class="card-rating" v-if="card.rating">{{ card.rating }}</span>
              </div>
              <h3 class="card-title">{{ card.title }}</h3>
              <p class="card-desc">{{ card.desc }}</p>
              <div class="card-footer">
                <span class="card-meta">{{ card.meta }}</span>
                <span class="card-link">查看详情 →</span>
              </div>
            </div>
          </div>
        </div>

        <div class="insight-sidebar">
          <div class="insight-card radar-preview-card">
            <div class="insight-header">
              <div>
                <p class="insight-label">技能雷达</p>
                <h3 class="insight-title">掌握度概览</h3>
              </div>
              <span class="mini-pill">点击可展开</span>
            </div>
            <div class="radar-preview">
              <svg :width="radarSize * 0.7" :height="radarSize * 0.7" class="radar-svg">
                <g class="radar-grid">
                  <circle 
                    v-for="level in 5" 
                    :key="level"
                    :cx="radarSize*0.35" 
                    :cy="radarSize*0.35" 
                    :r="(radarSize*0.35 - 25) * level / 5"
                    fill="none" 
                    :stroke="level === 5 ? '#e2e8f0' : '#f1f5f9'"
                    :stroke-width="level === 5 ? 2 : 1"
                  />
                </g>
                <polygon 
                  :points="radarPolygonPointsMini"
                  fill="url(#radarGradient)"
                  fill-opacity="0.25"
                  stroke="url(#radarStroke)"
                  stroke-width="3"
                />
              </svg>
              <div class="radar-legend">
                <span v-for="skill in radarSkills.slice(0,4)" :key="skill.name" class="legend-item">
                  <span class="legend-dot" :style="{ backgroundColor: skill.color }"></span>
                  {{ skill.name }} {{ skill.score }}/10
                </span>
              </div>
            </div>
          </div>

          <div class="insight-card monthly-preview-card" v-if="monthlyPreviewBars.length > 0">
            <div class="insight-header">
              <div>
                <p class="insight-label">月度计划</p>
                <h3 class="insight-title">节奏预览</h3>
              </div>
              <span class="mini-pill">{{ totalWeeks }} 周</span>
            </div>
            <div class="mini-bar-grid">
              <div 
                v-for="bar in monthlyPreviewBars" 
                :key="bar.label" 
                class="mini-bar"
                :title="`预计${bar.hours}小时`"
              >
                <div class="bar-fill" :style="{ height: (bar.hours / maxMonthlyHours) * 100 + '%' }"></div>
                <span class="bar-label">{{ bar.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-detail-stack">
      
      <!-- Summary概览卡片 -->
      <div class="summary-overview" v-if="learningPath.summary" v-show="activeCardId === 'overview'">
        <div class="summary-card">
          <div class="summary-header">
            <div class="summary-icon">🎯</div>
            <div class="summary-content">
              <h1 class="summary-title">{{ learningPath.summary.title }}</h1>
              <p class="summary-description">{{ learningPath.summary.description }}</p>
            </div>
          </div>
          
          <div class="summary-stats">
            <div class="stat-box">
              <span class="stat-icon">📅</span>
              <div class="stat-info">
                <span class="stat-value">{{ learningPath.summary.estimatedWeeks }}</span>
                <span class="stat-label">周学习周期</span>
              </div>
            </div>
            <div class="stat-box">
              <span class="stat-icon">⏱️</span>
              <div class="stat-info">
                <span class="stat-value">{{ learningPath.summary.totalHours }}h</span>
                <span class="stat-label">总学时</span>
              </div>
            </div>
            <div class="stat-box">
              <span class="stat-icon">📊</span>
              <div class="stat-info">
                <span class="stat-value">{{ learningPath.summary.difficulty }}</span>
                <span class="stat-label">难度等级</span>
              </div>
            </div>
          </div>
          
          <button class="reset-btn-summary" @click="resetAssessment">
            <span>🔄</span>
            <span>重新评估</span>
          </button>
        </div>
      </div>
      
      <!-- 技能雷达图 -->
      <div class="radar-chart-section" v-show="activeCardId === 'foundation'">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">📊</span>
            技能水平分析
          </h2>
          <p class="section-desc">基于你的自评，展示当前各项技能水平</p>
        </div>
        
        <div class="radar-chart-container">
          <div class="radar-chart" style="justify-content: center;">
            <svg :width="radarSize" :height="radarSize" class="radar-svg">
              <!-- 背景网格 -->
              <g class="radar-grid">
                <circle 
                  v-for="level in 5" 
                  :key="level"
                  :cx="radarSize/2" 
                  :cy="radarSize/2" 
                  :r="(radarSize/2 - 40) * level / 5"
                  fill="none" 
                  :stroke="level === 5 ? '#e2e8f0' : '#f1f5f9'"
                  :stroke-width="level === 5 ? 2 : 1"
                />
                <g v-for="(skill, index) in radarSkills" :key="skill.name">
                  <line 
                    :x1="radarSize/2" 
                    :y1="radarSize/2"
                    :x2="radarSize/2 + (radarSize/2 - 40) * Math.cos(index * 2 * Math.PI / radarSkills.length - Math.PI/2)"
                    :y2="radarSize/2 + (radarSize/2 - 40) * Math.sin(index * 2 * Math.PI / radarSkills.length - Math.PI/2)"
                    stroke="#e2e8f0"
                    stroke-width="1"
                  />
                </g>
              </g>
              
              <!-- 数据多边形 -->
              <polygon 
                :points="radarPolygonPoints"
                fill="url(#radarGradient)"
                fill-opacity="0.3"
                stroke="url(#radarStroke)"
                stroke-width="3"
              />
              
              <!-- 数据点 -->
              <g v-for="(point, index) in radarDataPoints" :key="index">
                <circle 
                  :cx="point.x" 
                  :cy="point.y" 
                  r="5"
                  fill="#3b82f6"
                  stroke="white"
                  stroke-width="2"
                />
              </g>
              
              <!-- 技能标签 -->
              <g v-for="(skill, index) in radarSkills" :key="skill.name + '-label'">
                <text 
                  :x="radarSize/2 + (radarSize/2 - 20) * Math.cos(index * 2 * Math.PI / radarSkills.length - Math.PI/2)"
                  :y="radarSize/2 + (radarSize/2 - 20) * Math.sin(index * 2 * Math.PI / radarSkills.length - Math.PI/2)"
                  text-anchor="middle"
                  dominant-baseline="middle"
                  class="radar-label"
                  :class="{ 'radar-label-top': index < radarSkills.length/2 }"
                >
                  {{ skill.name }}
                </text>
              </g>
              
              <!-- 渐变定义 -->
              <defs>
                <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:0.8" />
                  <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.6" />
                </linearGradient>
                <linearGradient id="radarStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#3b82f6" />
                  <stop offset="100%" style="stop-color:#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        <!-- 技能列表 - 移到雷达图下方 -->
        <div class="radar-skills-list">
          <div v-for="skill in radarSkills" :key="skill.name" class="skill-item-radar">
            <div class="skill-color" :style="{ backgroundColor: skill.color }"></div>
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <div class="skill-score">
                <div class="score-bar">
                  <div class="score-fill" :style="{ width: skill.score * 10 + '%', backgroundColor: skill.color }"></div>
                </div>
                <span class="score-text">{{ skill.score }}/10</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 学习阶段横向时间轴 -->
      <div class="stages-timeline-section" v-show="activeCardId === 'foundation'">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">🎯</span>
            学习阶段总览
          </h2>
          <p class="section-desc">从基础到进阶，一步步掌握前端核心技能</p>
        </div>
        
        <div class="stages-horizontal-timeline">
          <div v-for="(stage, index) in learningPath.phases" :key="stage.id" class="stage-item">
            <div class="stage-marker" :class="{ 'active': stage.current, 'completed': stage.completed }">
              <span class="stage-icon">{{ stage.icon }}</span>
              <div class="stage-pulse" v-if="stage.current"></div>
            </div>
            
            <div class="stage-content-box">
              <div class="stage-header">
                <h3 class="stage-title">{{ stage.name }}</h3>
                <span class="stage-duration">{{ stage.duration }}</span>
              </div>
              <p class="stage-desc">{{ stage.description }}</p>
              
              <div class="stage-quick-info">
                <span class="quick-info-item">📚 {{ stage.topics?.length || 0 }} 个主题</span>
                <span class="quick-info-item">🎯 {{ stage.projects?.length || 0 }} 个项目</span>
                <span class="quick-info-item">💡 {{ stage.skills?.length || 0 }} 项技能</span>
              </div>
              
              <button 
                class="stage-start-btn"
                :class="{ 'active': stage.current, 'expanded': expandedPhaseId === stage.id }"
                @click="togglePhaseDetails(stage.id)"
              >
                {{ expandedPhaseId === stage.id ? '收起详情 ↑' : '查看详情 →' }}
              </button>
            </div>
            
            <div v-if="index < learningPath.phases.length - 1" class="stage-connector-line"></div>
          </div>
        </div>
        
        <!-- 展开的阶段详情 -->
        <div v-if="expandedPhaseId" class="phase-details-panel">
          <div class="phase-details-content" v-for="phase in learningPath.phases" :key="phase.id">
            <div v-if="phase.id === expandedPhaseId" class="details-container">
              
              <!-- 主题列表 -->
              <div class="details-section" v-if="phase.topics && phase.topics.length > 0">
                <h3 class="details-section-title">
                  <span class="details-icon">📚</span>
                  学习主题
                </h3>
                <div class="topics-grid">
                  <div v-for="topic in phase.topics" :key="topic.id" class="topic-card">
                    <div class="topic-header">
                      <input 
                        type="checkbox" 
                        :id="topic.id" 
                        v-model="topic.completed"
                        @change="updateProgress"
                        class="topic-checkbox"
                      />
                      <label :for="topic.id" class="topic-name">{{ topic.name }}</label>
                      <span class="topic-hours">{{ topic.hours }}h</span>
                    </div>
                    <p class="topic-description">{{ topic.description }}</p>
                    
                    <!-- 主题资源 -->
                    <div class="topic-resources" v-if="topic.resources && topic.resources.length > 0">
                      <div class="resource-tag-label">推荐资源:</div>
                      <div class="resource-tags">
                        <component 
                          v-for="(resource, rIdx) in topic.resources" 
                          :key="rIdx"
                          :is="resource.url ? 'a' : 'span'"
                          :href="resource.url || undefined"
                          :target="resource.url ? '_blank' : undefined"
                          :rel="resource.url ? 'noopener noreferrer' : undefined"
                          class="resource-tag"
                          :class="{ 'no-link': !resource.url }"
                        >
                          <span class="resource-tag-type">{{ resource.type }}</span>
                          <span class="resource-tag-name">{{ resource.name }}</span>
                          <span v-if="resource.difficulty" class="resource-tag-difficulty">{{ resource.difficulty }}</span>
                        </component>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 项目列表 -->
              <div class="details-section" v-if="phase.projects && phase.projects.length > 0">
                <h3 class="details-section-title">
                  <span class="details-icon">🎯</span>
                  实战项目
                </h3>
                <div class="projects-grid">
                  <div v-for="project in phase.projects" :key="project.name" class="project-card">
                    <div class="project-header">
                      <h4 class="project-name">{{ project.name }}</h4>
                      <span class="project-hours">{{ project.hours }}h</span>
                    </div>
                    <p class="project-description">{{ project.description }}</p>
                    
                    <div class="project-techs" v-if="project.techs && project.techs.length > 0">
                      <span class="tech-label">技术栈:</span>
                      <div class="tech-tags">
                        <span v-for="tech in project.techs" :key="tech" class="tech-tag">{{ tech }}</span>
                      </div>
                    </div>
                    
                    <div class="project-features" v-if="project.features && project.features.length > 0">
                      <span class="features-label">核心功能:</span>
                      <ul class="features-list">
                        <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 技能目标 -->
              <div class="details-section" v-if="phase.skills && phase.skills.length > 0">
                <h3 class="details-section-title">
                  <span class="details-icon">💡</span>
                  掌握技能
                </h3>
                <div class="skills-tags">
                  <span v-for="skill in phase.skills" :key="skill" class="skill-tag">✓ {{ skill }}</span>
                </div>
              </div>
              
              <!-- 学习目标 -->
              <div class="details-section" v-if="phase.goals && phase.goals.length > 0">
                <h3 class="details-section-title">
                  <span class="details-icon">🎓</span>
                  学习目标
                </h3>
                <ul class="goals-list">
                  <li v-for="goal in phase.goals" :key="goal">{{ goal }}</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <!-- 基础学习时间轴 -->
      <div class="timeline-section" v-show="activeCardId === 'foundation'">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">📚</span>
            基础学习路径
          </h2>
          <p class="section-desc">系统化的前端基础课程学习时间线</p>
        </div>
        
        <div class="timeline-container">
          <div v-for="phase in timelinePhases" :key="phase.id" class="timeline-item">
            <div class="timeline-marker" :class="{ 'active': phase.current, 'completed': phase.completed }">
              <span class="timeline-icon">{{ phase.icon }}</span>
            </div>
            
            <div class="timeline-content">
              <div class="timeline-card">
                <div class="timeline-header">
                  <h3 class="timeline-title">{{ phase.title }}</h3>
                  <span class="timeline-duration">{{ phase.duration }}</span>
                </div>
                <p class="timeline-desc">{{ phase.description }}</p>
                
                <div class="timeline-topics">
                  <span v-for="topic in phase.topics" :key="topic" class="timeline-topic">
                    {{ topic }}
                  </span>
                </div>
                
                <div class="timeline-progress">
                  <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: phase.progress + '%' }"></div>
                  </div>
                  <span class="progress-text">{{ phase.progress }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 月计划甘特图 -->
      <div class="gantt-section" v-if="learningPath.monthlyPlan && learningPath.monthlyPlan.length > 0" v-show="activeCardId === 'foundation'">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">📅</span>
            月度学习计划
          </h2>
          <p class="section-desc">根据你的时间安排制定详细的月度计划</p>
        </div>
        
        <div class="gantt-container">
          <div class="gantt-chart">
            <!-- 月份标签 -->
            <div class="gantt-header">
              <div class="gantt-task-name-header">任务名称</div>
              <div class="gantt-weeks-header">
                <div v-for="month in Math.ceil(totalWeeks / 4)" :key="month" class="gantt-week">第{{ month }}月</div>
              </div>
            </div>
            
            <!-- 任务条 -->
            <div v-for="task in flattenedTasks" :key="task.id" class="gantt-row">
              <div class="gantt-task-name">
                <input 
                  type="checkbox" 
                  :id="'task-' + task.id" 
                  v-model="task.completed"
                  class="task-checkbox"
                />
                <label :for="'task-' + task.id">{{ task.name }}</label>
              </div>
              <div class="gantt-timeline">
                <div 
                  class="gantt-bar"
                  :style="{
                    left: ((task.weekNumber - 1) * (100 / totalWeeks)) + '%',
                    width: ((task.duration || 1) * (100 / totalWeeks)) + '%',
                    backgroundColor: task.completed ? '#10b981' : getTaskColor(task.weekNumber)
                  }"
                  :class="{ 'completed': task.completed }"
                  :title="`第${task.weekNumber}周开始，持续${task.duration || 1}周`"
                >
                  <span class="gantt-bar-label">{{ task.duration || 1 }}周</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 项目阶梯图 -->
      <div class="project-ladder-section" v-if="learningPath.projects && learningPath.projects.length > 0" v-show="activeCardId === 'projects'">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">🎯</span>
            项目实战路线
          </h2>
          <p class="section-desc">从简到难的项目实战，巩固学习成果（共{{ learningPath.projects.length }}个项目）</p>
        </div>
        
        <div class="project-ladder">
          <div v-for="(project, index) in learningPath.projects" :key="project.id" class="project-step">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span class="project-difficulty" :class="project.difficulty">
                  <span class="difficulty-dot"></span>
                  {{ project.difficulty }}
                </span>
              </div>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-stats">
                <div class="stat">
                  <span class="stat-label">时长：</span>
                  <span class="stat-value">{{ project.duration }}</span>
                </div>
                <div class="stat">
                  <span class="stat-label">技术栈：</span>
                  <span class="stat-value">{{ project.techs.join(' / ') }}</span>
                </div>
              </div>
              
              <div class="project-features">
                <div v-for="feature in project.features" :key="feature" class="feature-tag">
                  ✓ {{ feature }}
                </div>
              </div>
            </div>
            
            <!-- 连接线 -->
            <div v-if="index < learningPath.projects.length - 1" class="step-connector">
              <svg width="2" height="60" viewBox="0 0 2 60">
                <line x1="1" y1="0" x2="1" y2="60" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- 学习资源列表 -->
      <div class="resources-section" v-show="activeCardId === 'resources'">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-icon">📖</span>
            精选学习资源
          </h2>
          <p class="section-desc">根据你的学习偏好推荐的优质资源</p>
        </div>
        
        <div class="resources-tabs">
          <button 
            v-for="method in ['video', 'article', 'course', 'book']" 
            :key="method"
            class="resource-tab"
            :class="{ active: activeResourceTab === method }"
            @click="activeResourceTab = method"
          >
            <span class="method-icon">
              {{ method === 'video' ? '📺' : method === 'article' ? '📰' : method === 'course' ? '🎓' : '📚' }}
            </span>
            {{ method === 'video' ? '视频课程' : method === 'article' ? '技术文章' : method === 'course' ? '付费课程' : '推荐书籍' }}
          </button>
        </div>
        
        <div class="resources-grid">
          <div 
            v-for="resource in filteredResources" 
            :key="resource.id"
            class="resource-card"
          >
            <div class="resource-cover">
              <img :src="resource.cover" :alt="resource.name" />
              <div class="resource-badge">{{ resource.type }}</div>
            </div>
            <div class="resource-info">
              <h3 class="resource-name">{{ resource.name }}</h3>
              <p class="resource-author">{{ resource.author }}</p>
              <div class="resource-rating">
                <span v-for="star in 5" :key="star" class="star" :class="{ active: star <= resource.rating }">★</span>
                <span class="rating-text">({{ resource.rating }}/5)</span>
              </div>
              <a :href="resource.url" class="resource-action" target="_blank">
                {{ resource.actionText }} →
              </a>
            </div>
          </div>
        </div>
      </div>



    </div>

      <!-- 进度统计 -->
      <div class="progress-stats">
        <div class="stats-card">
          <h3 class="stats-title">学习进度</h3>
          <div class="progress-bar-container">
            <div class="progress-bar">
              <div 
                class="progress-fill"
                :style="{ width: learningProgress + '%' }"
              ></div>
            </div>
            <span class="progress-text">{{ learningProgress }}% 已完成</span>
          </div>
          
          <div class="achievement-list">
            <div 
              v-for="achievement in achievements" 
              :key="achievement.id"
              class="achievement-item"
              :class="{ 'unlocked': achievement.unlocked }"
            >
              <span class="achievement-icon">{{ achievement.icon }}</span>
              <div class="achievement-info">
                <h4 class="achievement-name">{{ achievement.name }}</h4>
                <p class="achievement-desc">{{ achievement.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 加载状态 -->
    <div v-if="isGenerating" class="loading-overlay">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p class="loading-text">AI 正在为你生成个性化学习路线...</p>
      </div>
    </div>
    
    </div><!-- 结束 scrollable-content -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// ==================== 欢迎动画状态 ====================
const showWelcome = ref(true);
const showSubtitle = ref(false);
const welcomeText = '欢迎来到个性化学习路线推荐';
const subtitleText = '请完成下述量表';

// 本地持久化（按账号区分，若无账号则使用 default）
const STORAGE_KEY_PREFIX = 'learningPathState:';
const getStorageKey = () => {
  if (typeof window === 'undefined') return `${STORAGE_KEY_PREFIX}default`;
  const currentUser = localStorage.getItem('currentUserId') || 'default';
  return `${STORAGE_KEY_PREFIX}${currentUser}`;
};

const persistAssessmentState = () => {
  if (typeof window === 'undefined') return;
  const key = getStorageKey();
  localStorage.setItem(
    key,
    JSON.stringify({
      formData: formData.value,
      learningPath: learningPath.value,
      hasAssessment: hasAssessment.value
    })
  );
};

const clearAssessmentState = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(getStorageKey());
};

const loadAssessmentState = () => {
  if (typeof window === 'undefined') return;
  const raw = localStorage.getItem(getStorageKey());
  if (!raw) return;
  try {
    const parsed = JSON.parse(raw);
    if (parsed.formData) formData.value = parsed.formData;
    if (parsed.learningPath) learningPath.value = parsed.learningPath;
    hasAssessment.value = !!parsed.hasAssessment && !!parsed.learningPath;
    if (hasAssessment.value) {
      showWelcome.value = false;
      showSubtitle.value = true;
      console.log('📦 已载入本地保存的评估与学习路线');
    }
  } catch (err) {
    console.warn('⚠️ 载入本地评估数据失败:', err);
  }
};



// 表单数据
const formData = ref({
  // 基本信息
  ageRange: '',
  identities: [] as string[],
  programmingLevel: '',
  
  // 学习目标
  finalGoals: [] as string[],
  timePeriod: '',
  
  // 时间投入
  weeklyTime: '',
  dailyTime: '',
  duration: '',
  
  // 技能评估
  skillRatings: {} as Record<string, number>,
  
  // 项目经验
  projectTypes: [] as string[],
  
  // 学习偏好
  learningMethods: [] as string[],
  learningProblems: [] as string[],
  
  // 兴趣方向
  interests: [] as string[],
  
  // 限制条件
  englishLevel: '',
  mathLevel: '',
  budget: '',
  
  // 开放问题
  mainProblem: ''
});

// 选项数据
const ageRanges = ['12岁以下', '12-18岁', '18-25岁', '25-35岁', '35岁以上'];

const identities = [
  { id: 'student', label: '中学生/大学生' },
  { id: 'graduate', label: '应届毕业生' },
  { id: 'employee', label: '在职人员（非技术岗）' },
  { id: 'developer', label: '在职开发者（转前端）' },
  { id: 'freelance', label: '自由职业/创业者' },
  { id: 'other', label: '其他' }
];

const programmingLevels = [
  { id: 'zero', label: '零基础' },
  { id: 'basic', label: '会一点点（HTML/CSS）' },
  { id: 'intermediate', label: '能写简单页面' },
  { id: 'advanced', label: '已会其他语言（Python/Java等）' }
];

const finalGoals = [
  { id: 'job', label: '找前端工作', icon: '💼' },
  { id: 'fullstack', label: '成为全栈工程师', icon: '🚀' },
  { id: 'interest', label: '兴趣爱好', icon: '❤️' },
  { id: 'side-project', label: '做自己的项目', icon: '🎯' },
  { id: 'freelance', label: '接外包赚钱', icon: '💰' },
  { id: 'startup', label: '创业/做产品', icon: '🌟' },
  { id: 'upgrade', label: '在职提升', icon: '📈' },
  { id: 'exam', label: '应付考试', icon: '📚' }
];

const timePeriods = ['1个月内', '3个月内', '半年内', '1年内', '1年以上'];

const weeklyTimes = ['<5小时', '5-10小时', '10-20小时', '20-30小时', '30-40小时', '>40小时'];
const dailyTimes = ['<1小时', '1-2小时', '2-4小时', '>4小时'];
const durations = ['1-3个月', '3-6个月', '6-12个月', '1年以上'];

const skillsToRate = [
  { id: 'html', name: 'HTML' },
  { id: 'css', name: 'CSS' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'vue', name: 'Vue' },
  { id: 'react', name: 'React' },
  { id: 'node', name: 'Node.js' },
  { id: 'webpack', name: '工程化工具（Webpack/Vite）' },
  { id: 'git', name: 'Git' },
  { id: 'ui', name: 'UI框架（Ant Design/Element等）' },
  { id: 'mobile', name: '移动端开发' },
  { id: 'performance', name: '性能优化' }
];

const projectTypes = [
  { id: 'personal-blog', label: '个人网站/博客', icon: '📝' },
  { id: 'todo', label: 'Todo/记账等小工具', icon: '✅' },
  { id: 'admin', label: '后台管理系统', icon: '🖥️' },
  { id: 'ecommerce', label: '电商网站', icon: '🛒' },
  { id: 'social', label: '社交类应用', icon: '💬' },
  { id: 'game', label: '小游戏', icon: '🎮' },
  { id: 'data-viz', label: '数据可视化', icon: '📊' },
  { id: 'mobile-app', label: '移动端H5', icon: '📱' },
  { id: 'mini-program', label: '小程序', icon: '🔲' },
  { id: 'company', label: '公司项目', icon: '🏢' },
  { id: 'open-source', label: '开源项目', icon: '🌐' }
];

const learningMethods = [
  { id: 'video', label: '看视频教程', icon: '📺' },
  { id: 'book', label: '看书/文档', icon: '📚' },
  { id: 'practice', label: '动手做项目', icon: '💻' },
  { id: 'blog', label: '看博客/技术文章', icon: '📰' },
  { id: 'course', label: '报班/买课', icon: '🎓' },
  { id: 'community', label: '社区交流', icon: '👥' }
];

const learningProblems = [
  { id: 'no-direction', label: '不知道学什么' },
  { id: 'forget', label: '学了就忘' },
  { id: 'no-time', label: '没时间' },
  { id: 'no-project', label: '不知道做什么项目' },
  { id: 'stuck', label: '经常卡住' },
  { id: 'no-motivation', label: '没动力坚持' }
];

const interestCategories = [
  {
    id: 'basic',
    name: '基础技术',
    items: [
      { id: 'html-css-deep', label: 'HTML/CSS 深入', icon: '🎨' },
      { id: 'js-advanced', label: 'JavaScript 进阶', icon: '⚡' },
      { id: 'ts', label: 'TypeScript', icon: '📘' }
    ]
  },
  {
    id: 'engineering',
    name: '工程化',
    items: [
      { id: 'build-tools', label: '构建工具', icon: '📦' },
      { id: 'ci-cd', label: 'CI/CD', icon: '🔄' },
      { id: 'testing', label: '自动化测试', icon: '🧪' }
    ]
  },
  {
    id: 'framework',
    name: '框架生态',
    items: [
      { id: 'vue-eco', label: 'Vue 全家桶', icon: '💚' },
      { id: 'react-eco', label: 'React 全家桶', icon: '⚛️' }
    ]
  },
  {
    id: 'visualization',
    name: '可视化',
    items: [
      { id: 'chart', label: '图表库', icon: '📊' },
      { id: 'canvas', label: 'Canvas', icon: '🖼️' },
      { id: '3d', label: '3D/WebGL', icon: '🎮' }
    ]
  },
  {
    id: 'mobile',
    name: '移动端',
    items: [
      { id: 'h5', label: 'H5开发', icon: '📱' },
      { id: 'mini-program', label: '小程序', icon: '🔲' },
      { id: 'rn', label: 'React Native', icon: '📲' }
    ]
  },
  {
    id: 'fullstack',
    name: '全栈',
    items: [
      { id: 'node', label: 'Node.js', icon: '🟢' },
      { id: 'database', label: '数据库', icon: '💾' },
      { id: 'server', label: '服务器运维', icon: '🖥️' }
    ]
  },
  {
    id: 'advanced',
    name: '进阶技能',
    items: [
      { id: 'performance', label: '性能优化', icon: '⚡' },
      { id: 'security', label: '安全', icon: '🔒' },
      { id: 'architecture', label: '架构设计', icon: '🏗️' }
    ]
  }
];

const englishLevels = ['基本不会', '能看懂简单文档', '能看英文文档'];
const mathLevels = ['数学不好', '一般', '数学好'];
const budgets = ['0元（只学免费）', '500元内', '1000-2000元', '不设上限'];

// 状态
const hasAssessment = ref(false);
const isGenerating = ref(false);
const learningPath = ref<any>(null);

// 可视化组件状态
const radarSize = ref(300);
const expandedPhaseId = ref<string | null>(null);
const activeCardId = ref<'overview' | 'foundation' | 'projects' | 'resources'>('overview');
const optionalSections = ref({
  time: true,
  projects: true,
  preferences: true,
  interests: true,
  expectations: true,
  limits: true
});

const toggleSection = (key: keyof typeof optionalSections.value) => {
  optionalSections.value[key] = !optionalSections.value[key];
};

// 切换阶段详情
const togglePhaseDetails = (phaseId: string) => {
  expandedPhaseId.value = expandedPhaseId.value === phaseId ? null : phaseId;
};

// 计算总周数（用于甘特图）
const totalWeeks = computed(() => {
  if (!learningPath.value?.summary?.estimatedWeeks) return 12;
  return learningPath.value.summary.estimatedWeeks;
});

// 解析用户填写的每周学习时间（小时数）
const getWeeklyHours = () => {
  const weeklyTime = formData.value.weeklyTime;
  if (!weeklyTime) return 10; // 默认10小时
  
  // 解析字符串，提取数字
  if (weeklyTime.includes('<5')) return 5;
  if (weeklyTime.includes('>40')) return 40;
  
  // 解析 "5-10小时"、"10-20小时" 等格式，取中间值
  const match = weeklyTime.match(/(\d+)-(\d+)/);
  if (match) {
    const min = parseInt(match[1]);
    const max = parseInt(match[2]);
    return (min + max) / 2; // 返回区间的平均值
  }
  
  return 10; // 默认值
};

// 展平的任务列表（从monthlyPlan提取）
const flattenedTasks = computed(() => {
  if (!learningPath.value?.monthlyPlan) return [];
  
  const weeklyHours = getWeeklyHours(); // 获取用户实际每周学习时间
  const tasks: any[] = [];
  learningPath.value.monthlyPlan.forEach((month: any, monthIndex: number) => {
    month.tasks?.forEach((task: any, taskIndex: number) => {
      // 根据任务小时数和用户实际每周学习时间计算持续周数
      const hours = task.hours || 10;
      const duration = Math.ceil(hours / weeklyHours); // 使用用户实际每周学习时间
      
      tasks.push({
        id: `month-${month.month}-task-${taskIndex}`,
        name: task.name,
        hours: hours,
        completed: task.completed || false,
        weekNumber: task.week || ((month.month - 1) * 4 + taskIndex + 1),
        duration: duration, // 任务持续周数
        monthIndex
      });
    });
  });
  
  return tasks;
});

const monthlyPreviewBars = computed(() => {
  if (!learningPath.value?.monthlyPlan) return [];
  return learningPath.value.monthlyPlan.map((month: any, idx: number) => {
    const totalHours = (month.tasks || []).reduce((sum: number, task: any) => sum + (task.hours || 0), 0);
    return {
      label: `M${month.month || idx + 1}`,
      hours: totalHours || ((month.tasks?.length || 1) * 4)
    };
  });
});

const maxMonthlyHours = computed(() => {
  const hours = monthlyPreviewBars.value.map(b => b.hours);
  if (hours.length === 0) return 1;
  return Math.max(...hours, 1);
});

// 任务颜色生成 - 莫兰迪色系
const getTaskColor = (weekNumber: number) => {
  const colors = ['#A8BEDF', '#C7D5E8', '#D8C9BA', '#EFE4D4', '#B8C5D0', '#D4C4B8'];
  return colors[weekNumber % colors.length];
};

const overviewCards = computed(() => {
  const summary = learningPath.value?.summary || {};
  const totalPhases = learningPath.value?.phases?.length || 0;
  const totalProjects = learningPath.value?.projects?.length || 0;
  const resourceCount = ['video', 'article', 'course', 'book'].reduce((sum, key) => {
    const list = (learningPath.value?.resources as any)?.[key] || [];
    return sum + (Array.isArray(list) ? list.length : 0);
  }, 0);

  return [
    {
      id: 'overview',
      tag: '学习路线总览',
      title: summary.title || 'AI 学习路线总览',
      desc: summary.description || '根据你的目标生成的全栈成长地图',
      meta: summary.estimatedWeeks ? `${summary.estimatedWeeks}周 · ${summary.totalHours || '-'}h` : '灵活节奏',
      tone: 'rose',
      rating: '热门'
    },
    {
      id: 'foundation',
      tag: '基础学习路径',
      title: '从零到一的能力曲线',
      desc: `包含 ${totalPhases} 个阶段，循序渐进消化基础知识`,
      meta: '阶段路线、雷达、甘特图',
      tone: 'amber',
      rating: ''
    },
    {
      id: 'projects',
      tag: '项目实战路线',
      title: '项目驱动巩固',
      desc: `${totalProjects} 个逐级提升的实战项目，配套技术栈`,
      meta: '难度清晰，可打卡',
      tone: 'mint',
      rating: ''
    },
    {
      id: 'resources',
      tag: '精选学习资源',
      title: '课程 / 文章 / 书单',
      desc: `为你挑选 ${resourceCount || '丰富'} 条资源，贴合学习偏好`,
      meta: '点击卡片即可过滤',
      tone: 'lilac',
      rating: ''
    }
  ];
});

// 雷达图数据
const radarSkills = computed(() => {
  const skills = [
    { name: 'HTML', key: 'html', color: '#e34c26' },
    { name: 'CSS', key: 'css', color: '#1572b6' },
    { name: 'JavaScript', key: 'javascript', color: '#f7df1e' },
    { name: 'TypeScript', key: 'typescript', color: '#3178c6' },
    { name: 'Vue', key: 'vue', color: '#4fc08d' },
    { name: 'React', key: 'react', color: '#61dafb' },
    { name: 'Node.js', key: 'node', color: '#68a063' },
    { name: '工程化', key: 'webpack', color: '#8dd6f9' },
    { name: 'Git', key: 'git', color: '#f05032' },
    { name: 'UI框架', key: 'ui', color: '#ff6b6b' },
    { name: '移动端', key: 'mobile', color: '#4ecdc4' },
    { name: '性能优化', key: 'performance', color: '#a8e6cf' }
  ];
  
  return skills.map(skill => ({
    ...skill,
    score: formData.value.skillRatings[skill.key] || 0
  }));
});

// 雷达图多边形点
const radarPolygonPoints = computed(() => {
  return radarSkills.value.map((skill, index) => {
    const angle = index * 2 * Math.PI / radarSkills.value.length - Math.PI / 2;
    const radius = (radarSize.value / 2 - 40) * skill.score / 10;
    const x = radarSize.value / 2 + radius * Math.cos(angle);
    const y = radarSize.value / 2 + radius * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');
});

// 雷达图数据点
const radarDataPoints = computed(() => {
  return radarSkills.value.map((skill, index) => {
    const angle = index * 2 * Math.PI / radarSkills.value.length - Math.PI / 2;
    const radius = (radarSize.value / 2 - 40) * skill.score / 10;
    const x = radarSize.value / 2 + radius * Math.cos(angle);
    const y = radarSize.value / 2 + radius * Math.sin(angle);
    return { x, y };
  });
});

// 缩略雷达图点位
const radarPolygonPointsMini = computed(() => {
  const size = radarSize.value * 0.7;
  return radarSkills.value.map((skill, index) => {
    const angle = index * 2 * Math.PI / radarSkills.value.length - Math.PI / 2;
    const radius = (size / 2 - 25) * (skill.score / 10);
    const x = size / 2 + radius * Math.cos(angle);
    const y = size / 2 + radius * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');
});

// 山脉关卡数据
// 基础学习时间轴数据
const timelinePhases = ref([
  {
    id: 'html-fundamentals',
    title: 'HTML基础',
    icon: '📝',
    duration: '2-3周',
    description: '学习HTML标签、语义化、表单等基础知识',
    topics: ['标签结构', '语义化', '表单设计', '多媒体'],
    progress: 80,
    current: false,
    completed: true
  },
  {
    id: 'css-fundamentals', 
    title: 'CSS样式',
    icon: '🎨',
    duration: '3-4周',
    description: '掌握CSS选择器、布局、动画等样式技术',
    topics: ['选择器', 'Flexbox', 'Grid', '动画', '响应式'],
    progress: 60,
    current: true,
    completed: false
  },
  {
    id: 'js-fundamentals',
    title: 'JavaScript基础',
    icon: '⚡',
    duration: '4-6周', 
    description: '学习JavaScript语法、DOM操作、异步编程',
    topics: ['语法基础', 'DOM操作', '事件处理', 'Ajax', 'ES6+'],
    progress: 20,
    current: false,
    completed: false
  },
  {
    id: 'framework',
    title: 'Vue.js框架',
    icon: '🚀',
    duration: '6-8周',
    description: '掌握Vue.js组件开发、路由、状态管理',
    topics: ['组件', '路由', 'Vuex', '项目实战'],
    progress: 0,
    current: false,
    completed: false
  }
]);

// 甘特图任务数据
const ganttTasks = ref([
  { id: 'html', name: 'HTML基础', startWeek: 1, duration: 3, color: '#e34c26', completed: true },
  { id: 'css', name: 'CSS样式', startWeek: 2, duration: 4, color: '#1572b6', completed: true },
  { id: 'js', name: 'JavaScript', startWeek: 4, duration: 5, color: '#f7df1e', completed: false },
  { id: 'vue', name: 'Vue.js', startWeek: 8, duration: 4, color: '#4fc08d', completed: false },
  { id: 'project', name: '综合项目', startWeek: 10, duration: 3, color: '#a855f7', completed: false }
]);

// 项目阶梯数据
const projectLadder = ref([
  {
    id: 'personal-blog',
    title: '个人博客网站',
    difficulty: '⭐ 简单',
    description: '使用HTML/CSS/JavaScript制作一个简单的个人博客首页',
    duration: '1-2周',
    techs: ['HTML', 'CSS', 'JavaScript'],
    features: ['响应式设计', '文章展示', '评论功能']
  },
  {
    id: 'todo-app',
    title: 'Todo应用',
    difficulty: '⭐⭐ 中等',
    description: '使用Vue.js实现一个功能完整的待办事项应用',
    duration: '2-3周',
    techs: ['Vue.js', 'LocalStorage'],
    features: ['任务增删改查', '分类标签', '本地存储']
  },
  {
    id: 'weather-app',
    title: '天气应用',
    difficulty: '⭐⭐ 中等',
    description: '集成天气API，使用Vue.js构建天气查询应用',
    duration: '2周',
    techs: ['Vue.js', 'REST API', 'CSS动画'],
    features: ['天气查询', '位置定位', '动画效果']
  },
  {
    id: 'admin-dashboard',
    title: '后台管理系统',
    difficulty: '⭐⭐⭐ 困难',
    description: '使用Vue + 组件库开发一个完整的后台管理系统',
    duration: '4-6周',
    techs: ['Vue.js', 'Element UI', 'Node.js API'],
    features: ['用户管理', '数据可视化', '权限控制']
  },
  {
    id: 'fullstack-project',
    title: '全栈项目',
    difficulty: '⭐⭐⭐⭐ 高难度',
    description: '前后端分离的完整项目，包括用户认证、数据库、部署',
    duration: '8-12周',
    techs: ['Vue.js', 'Node.js', 'MongoDB', 'Docker'],
    features: ['用户认证', '实时通知', '云部署', '性能优化']
  }
]);

// 学习资源数据
const allResources = ref([
  // 视频资源
  { id: 'v1', type: '视频', name: 'Vue3从入门到精通', author: 'Bilibili高级讲师', cover: 'https://picsum.photos/seed/vue3-guide/480/270', rating: 5, url: '#', method: 'video', actionText: '去学习' },
  { id: 'v2', type: '视频', name: 'JavaScript完全指南', author: 'YouTube', cover: 'https://picsum.photos/seed/js-complete/480/270', rating: 4.5, url: '#', method: 'video', actionText: '去学习' },
  // 文章资源
  { id: 'a1', type: '文章', name: 'CSS Grid布局完全指南', author: 'MDN', cover: 'https://picsum.photos/seed/css-grid/480/270', rating: 5, url: '#', method: 'article', actionText: '阅读' },
  { id: 'a2', type: '文章', name: 'Vue3响应式系统深度解析', author: '前端工匠', cover: 'https://picsum.photos/seed/vue-reactivity/480/270', rating: 4.8, url: '#', method: 'article', actionText: '阅读' },
  // 付费课程
  { id: 'c1', type: '课程', name: '前端工程师成长计划', author: '极客时间', cover: 'https://picsum.photos/seed/frontend-career/480/270', rating: 4.9, url: '#', method: 'course', actionText: '购买' },
  { id: 'c2', type: '课程', name: '小程序全栈开发', author: 'imooc', cover: 'https://picsum.photos/seed/miniapp-fullstack/480/270', rating: 4.7, url: '#', method: 'course', actionText: '购买' },
  // 书籍资源
  { id: 'b1', type: '书籍', name: 'JavaScript高级程序设计', author: '马特·弗里斯比', cover: 'https://picsum.photos/seed/js-design/480/270', rating: 5, url: '#', method: 'book', actionText: '购买' },
  { id: 'b2', type: '书籍', name: 'Vue.js设计与实现', author: '尤雨溪', cover: 'https://picsum.photos/seed/vue-design/480/270', rating: 5, url: '#', method: 'book', actionText: '购买' }
]);

// 资源标签页
const activeResourceTab = ref('video');

// 过滤的资源
const filteredResources = computed(() => {
  return allResources.value.filter(r => r.method === activeResourceTab.value);
});

// ==================== 欢迎动画和引导逻辑 ====================

// 初始化欢迎动画
onMounted(() => {
  console.log('🎯 LearningPath mounted');
  loadAssessmentState();
  
  // 1.5秒后显示副标题
  setTimeout(() => {
    showSubtitle.value = true;
    console.log('📝 Subtitle shown');
  }, 1500);

  // 3秒后隐藏欢迎屏幕，开始引导
  setTimeout(() => {
    showWelcome.value = false;
    console.log('👋 Welcome screen hidden');
  }, 3000);
});

// 表单验证 - 检查必填项
const isFormValid = computed(() => {
  // 基本信息必填
  const basicInfoValid = formData.value.ageRange && 
    formData.value.identities.length > 0 && 
    formData.value.programmingLevel;
  
  // 学习目标必填（至少选一个最终目标）
  const goalsValid = formData.value.finalGoals.length > 0;
  
  // 技能评估必填（至少评估一半的技能项）
  const skillsCount = Object.keys(formData.value.skillRatings).length;
  const minRequiredSkills = Math.ceil(skillsToRate.length * 0.5); // 至少评估一半
  const skillsValid = skillsCount >= minRequiredSkills;
  
  return basicInfoValid && goalsValid && skillsValid;
});



// 重置评估
const resetAssessment = () => {
  hasAssessment.value = false;
  learningPath.value = null;
  clearAssessmentState();
  // 清空表单
  formData.value = {
    ageRange: '',
    identities: [],
    programmingLevel: '',
    finalGoals: [],
    timePeriod: '',
    weeklyTime: '',
    dailyTime: '',
    duration: '',
    skillRatings: {},
    projectTypes: [],
    learningMethods: [],
    learningProblems: [],
    interests: [],
    englishLevel: '',
    mathLevel: '',
    budget: '',
    mainProblem: ''
  };
};

// 生成学习路线
const generateLearningPath = async () => {
  isGenerating.value = true;
  
  try {
    // 构建发送给 AI 的提示词
    const prompt = buildPromptFromFormData();
    
    console.log('🤖 Sending prompt to AI:', prompt.substring(0, 200) + '...');
    
    // 调用后端 AI 接口
    const response = await fetch('http://localhost:8000/api/v1/chat/stream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: prompt,
        context: '个性化学习路线生成'
      })
    });

    if (!response.ok) {
      console.error('❌ API request failed:', response.status);
      throw new Error(`生成失败: ${response.status}，请重试`);
    }

    // 解析 AI 返回的学习路线建议
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    let aiResponse = '';

    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log('🏁 流式响应读取完成');
          break;
        }
        
        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim();
            if (data === '[DONE]' || data === '') continue;
            
            try {
              const parsed = JSON.parse(data);
              console.log('📦 收到数据块:', parsed);
              
              // 后端返回格式是 {'chunk': ...}
              if (parsed.chunk) {
                aiResponse += parsed.chunk;
              }
              // 也兼容 content 格式
              if (parsed.content) {
                aiResponse += parsed.content;
              }
              
              // 检查是否完成
              if (parsed.finished) {
                console.log('✅ AI 响应完成标记收到');
              }
            } catch (e) {
              console.warn('⚠️ 解析数据块失败:', data.substring(0, 100), e);
            }
          }
        }
      }
    }

    console.log('📨 完整 AI 响应长度:', aiResponse.length, '前500字符:', aiResponse.substring(0, 500));

    // 生成结构化的学习路线数据
    learningPath.value = parseAIResponseToPath(aiResponse);
    
    isGenerating.value = false;
    hasAssessment.value = true;
    persistAssessmentState();
    
  } catch (error) {
    console.error('生成学习路线失败:', error);
    // 如果 API 调用失败，使用默认的示例数据
    learningPath.value = getDefaultLearningPath();
    isGenerating.value = false;
    hasAssessment.value = true;
    persistAssessmentState();
  }
};

// 根据表单数据构建 AI 提示词 - 优化版本
const buildPromptFromFormData = () => {
  const data = formData.value;
  
  // 查找对应的标签值
  const getLabel = (id: string, list: any[]) => {
    const item = list.find(l => l.id === id || l === id);
    return item?.label || item?.name || id;
  };
  
  let prompt = `【个性化前端学习路线生成任务】

## 用户基本信息
- **年龄段**：${data.ageRange}
- **身份背景**：${data.identities.map(id => getLabel(id, identities)).join('、')}
- **编程基础**：${getLabel(data.programmingLevel, programmingLevels)}

## 学习目标与动机
- **最终目标**：${data.finalGoals.map(id => getLabel(id, finalGoals)).join('、')}
- **目标周期**：${data.timePeriod}
- **最迫切的问题**：${data.mainProblem || '未填写'}

## 时间与投入能力
- **每周可投入时间**：${data.weeklyTime}
- **每天可用时间**：${data.dailyTime}
- **能坚持的周期**：${data.duration}

## 技能评估（0-10分制）
${Object.entries(data.skillRatings)
  .map(([key, score]) => {
    const skill = skillsToRate.find(s => s.id === key);
    return `- ${skill?.name || key}：${score}/10分`;
  })
  .join('\n')}

## 项目与工作经验
- **做过的项目类型**：${data.projectTypes.length > 0 ? data.projectTypes.map(id => getLabel(id, projectTypes)).join('、') : '暂无项目经验'}

## 学习偏好与方式
- **倾向的学习方式**：${data.learningMethods.map(id => getLabel(id, learningMethods)).join('、')}
- **学习中的常见问题**：${data.learningProblems.map(id => getLabel(id, learningProblems)).join('、')}
- **感兴趣的方向**：${data.interests.length > 0 ? data.interests.join('、') : '通用前端'}

## 约束条件
- **英语能力**：${data.englishLevel}
- **数学基础**：${data.mathLevel}
- **付费课程预算**：${data.budget}

---

## 输出要求

**🚨 关键要求：**
1. 必须以 \`\`\`json 开头，以 \`\`\` 结尾
2. timeline必须包含正好4个学习阶段
3. projects必须包含正好3个项目
4. 输出完整的、可解析的JSON，不要有任何省略
5. **重要**：monthlyPlan的tasks必须根据用户的时间投入来规划：
   - 用户每周可投入：${data.weeklyTime}
   - 用户每天可用：${data.dailyTime}
   - 每个task的hours应合理分配，不超过用户每周可用时间
   - 根据用户能坚持的周期（${data.duration}）来设置总的month数量

请严格按照以下JSON Schema生成结构化的学习路线数据：

**必须输出的关键数据结构：**

\`\`\`json
{
  "summary": {
    "title": "学习路线标题",
    "description": "整体概述",
    "estimatedWeeks": 12,
    "totalHours": 120,
    "difficulty": "中等"
  },
  "timeline": [
    {
      "id": "phase-1",
      "name": "阶段1名称",
      "duration": "3周",
      "weeks": 3,
      "description": "这个阶段的学习目标和内容",
      "icon": "🛠️",
      "topics": [
        {
          "id": "topic-1",
          "name": "HTML5语义化",
          "hours": 8,
          "description": "HTML5新标签、SEO优化、无障碍访问",
          "resources": [
            {
              "name": "MDN HTML5文档",
              "type": "文章",
              "url": "https://developer.mozilla.org/zh-CN/docs/Web/HTML",
              "difficulty": "简单"
            }
          ]
        },
        {
          "id": "topic-2",
          "name": "CSS布局实战",
          "hours": 10,
          "description": "Flex/Grid布局、响应式设计",
          "resources": [...]
        }
      ],
      "projects": [
        {
          "name": "响应式个人作品集",
          "description": "展示你的技能项目，适配手机/PC",
          "hours": 12,
          "techs": ["HTML5", "CSS3", "JavaScript"],
          "features": ["响应式布局", "暗黑模式"]
        }
      ],
      "skills": ["语义化HTML", "CSS布局", "DOM操作"],
      "goals": ["能独立实现复杂布局", "掌握Chrome调试工具"]
    },
    {
      "id": "phase-2",
      "name": "阶段2名称",
      "duration": "3周",
      "weeks": 3,
      "description": "...",
      "icon": "⚡",
      "topics": [...],
      "projects": [...],
      "skills": [...],
      "goals": [...]
    },
    {
      "id": "phase-3",
      "name": "阶段3名称",
      "duration": "3周",
      "weeks": 3,
      "description": "...",
      "icon": "🚀",
      "topics": [...],
      "projects": [...],
      "skills": [...],
      "goals": [...]
    },
    {
      "id": "phase-4",
      "name": "阶段4名称",
      "duration": "3周",
      "weeks": 3,
      "description": "...",
      "icon": "🎯",
      "topics": [...],
      "projects": [...],
      "skills": [...],
      "goals": [...]
    }
  ],
  "monthlyPlan": [
    {
      "month": 1,
      "weeks": 4,
      "tasks": [
        {
          "week": 1,
          "name": "任务名（例如：HTML基础学习）",
          "hours": 10,
          "completed": false
        },
        {
          "week": 2,
          "name": "任务名（例如：CSS布局实战）",
          "hours": 12,
          "completed": false
        }
      ]
    },
    {
      "month": 2,
      "weeks": 4,
      "tasks": [
        {
          "week": 5,
          "name": "任务名（例如：JavaScript基础）",
          "hours": 15,
          "completed": false
        }
      ]
    }
  ],
  "projects": [
    {
      "id": "project-1",
      "title": "个人博客",
      "difficulty": "简单",
      "description": "用HTML/CSS/JavaScript做一个简单博客",
      "duration": "2周",
      "techs": ["HTML", "CSS", "JavaScript"],
      "features": ["文章展示", "分类标签"],
      "skills": ["页面布局", "DOM操作"]
    }
  ],
  "radarSkills": [
    {
      "name": "HTML",
      "current": 0,
      "target": 8,
      "topicsToCover": 5
    }
  ],
  "resources": {
    "video": [
      {
        "name": "Vue3从零到一",
        "author": "讲师名",
        "rating": 4.8,
        "url": "https://...",
        "description": "完整的Vue3教学视频"
      }
    ],
    "article": [...],
    "course": [...],
    "book": [...]
  }
}
\`\`\`

**评估质量指标：**
1. ✅ 路线切合用户的编程基础和时间投入
2. ✅ 包含可落地的项目案例和技能目标
3. ✅ 资源推荐有具体的难度和适用场景说明
4. ✅ 月计划和周任务量合理分配
5. ✅ 技能雷达数据能反映当前→目标的进度

**生成建议：**
- 如果用户时间紧张，优先安排核心技能而不是深度
- 如果有项目经验，建议从进阶项目开始
- 为不同学习方式的用户推荐对应资源
- 如果需要求职，单独生成求职面试路径

现在请生成完整的结构化JSON学习路线数据：`;
  
  return prompt;
};

// 解析 AI 返回的内容为结构化数据
const parseAIResponseToPath = (aiResponse: string) => {
  try {
    console.log('🔍 开始解析 AI 响应');
    console.log('📏 响应总长度:', aiResponse.length);
    console.log('📝 响应前300字符:', aiResponse.substring(0, 300));
    console.log('📝 响应后300字符:', aiResponse.substring(Math.max(0, aiResponse.length - 300)));
    
    // 策略1: 尝试匹配完整的 ```json ... ``` 代码块
    let jsonMatch = aiResponse.match(/```json\s*([\s\S]*?)\s*```/);
    
    if (!jsonMatch) {
      console.warn('⚠️ 策略1失败：未找到完整的 ```json``` 代码块');
      
      // 策略2: 查找 ```json 开始标记（可能未闭合）
      const jsonStart = aiResponse.indexOf('```json');
      if (jsonStart !== -1) {
        console.log('✓ 策略2：找到 ```json 开始标记，位置:', jsonStart);
        let jsonContent = aiResponse.substring(jsonStart + 7);
        
        // 尝试找到结束的 ```
        const jsonEnd = jsonContent.indexOf('```');
        if (jsonEnd !== -1) {
          jsonContent = jsonContent.substring(0, jsonEnd);
          console.log('✓ 找到结束标记，提取内容长度:', jsonContent.length);
        } else {
          console.warn('⚠️ 未找到结束的 ```，使用剩余全部内容');
        }
        
        jsonMatch = [aiResponse, jsonContent];
      } else {
        console.warn('⚠️ 策略2失败：未找到 ```json 标记');
        
        // 策略3: 尝试直接查找 JSON 对象（从第一个 { 到最后一个 }）
        const firstBrace = aiResponse.indexOf('{');
        const lastBrace = aiResponse.lastIndexOf('}');
        
        if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
          console.log('✓ 策略3：找到 JSON 对象边界，从', firstBrace, '到', lastBrace);
          const jsonContent = aiResponse.substring(firstBrace, lastBrace + 1);
          console.log('📦 提取的 JSON 长度:', jsonContent.length);
          jsonMatch = ['', jsonContent];
        } else {
          console.error('❌ 所有策略失败，AI响应内容:');
          console.error('前500字符:', aiResponse.substring(0, 500));
          console.error('后500字符:', aiResponse.substring(Math.max(0, aiResponse.length - 500)));
          console.warn('未找到JSON块，使用默认数据');
          return getDefaultLearningPath();
        }
      }
    } else {
      console.log('✅ 策略1成功：匹配到完整的 ```json``` 代码块');
    }
    
    let jsonStr = jsonMatch[1].trim();
    console.log('📝 提取的 JSON 字符串长度:', jsonStr.length, '前100字符:', jsonStr.substring(0, 100));
    
    // 尝试修复不完整的JSON（添加缺失的闭合括号）
    const openBraces = (jsonStr.match(/\{/g) || []).length;
    const closeBraces = (jsonStr.match(/\}/g) || []).length;
    const openBrackets = (jsonStr.match(/\[/g) || []).length;
    const closeBrackets = (jsonStr.match(/\]/g) || []).length;
    
    if (openBraces > closeBraces) {
      console.warn(`JSON不完整：缺少 ${openBraces - closeBraces} 个 }`);
      jsonStr += '}'.repeat(openBraces - closeBraces);
    }
    if (openBrackets > closeBrackets) {
      console.warn(`JSON不完整：缺少 ${openBrackets - closeBrackets} 个 ]`);
      jsonStr += ']'.repeat(openBrackets - closeBrackets);
    }
    
    const parsed = JSON.parse(jsonStr);
    console.log('✅ 成功解析AI返回的JSON:', parsed);
    
    // 更新基础时间轴组件数据
    if (parsed.timeline && Array.isArray(parsed.timeline)) {
      timelinePhases.value = parsed.timeline.map((phase: any, idx: number) => ({
        id: phase.id || `phase-${idx}`,
        title: phase.name,
        icon: phase.icon || '📚',
        duration: phase.duration,
        description: phase.description,
        topics: phase.topics?.map((t: any) => t.name) || [],
        progress: idx === 0 ? 60 : idx === 1 ? 30 : 0,
        current: idx === 0,
        completed: false
      }));
    }
    
    if (parsed.monthlyPlan && Array.isArray(parsed.monthlyPlan)) {
      const tasks: any[] = [];
      parsed.monthlyPlan.forEach((month: any) => {
        month.tasks?.forEach((task: any, idx: number) => {
          tasks.push({
            id: task.id || `task-${month.month}-${idx}`,
            name: task.name,
            startWeek: (month.month - 1) * 4 + 1,
            duration: 2,
            color: `hsl(${idx * 60}, 70%, 60%)`,
            completed: false
          });
        });
      });
      ganttTasks.value = tasks.slice(0, 5);
    }
    
    if (parsed.projects && Array.isArray(parsed.projects)) {
      projectLadder.value = parsed.projects.map((p: any, idx: number) => ({
        id: p.id || `project-${idx}`,
        title: p.title,
        difficulty: p.difficulty,
        description: p.description,
        duration: p.duration,
        techs: p.techs || [],
        features: p.features || []
      }));
    }
    
    if (parsed.radarSkills && Array.isArray(parsed.radarSkills)) {
      parsed.radarSkills.forEach((skill: any) => {
        formData.value.skillRatings[skill.name.toLowerCase().replace(/\./g, '')] = skill.current;
      });
    }
    
    // 更新学习资源数据（确保链接可点击）
    if (parsed.resources) {
      const newResources: any[] = [];
      ['video', 'article', 'course', 'book'].forEach(type => {
        const items = parsed.resources[type] || [];
        items.forEach((item: any, idx: number) => {
          // 验证URL是否有效
          const validUrl = item.url && item.url !== '' && item.url !== '#' ? item.url : null;
          const seed = encodeURIComponent(item.name || `res-${type}-${idx}`);
          const fallbackCover = `https://picsum.photos/seed/${seed}/480/270`;
          newResources.push({
            id: `res-${type}-${idx}`,
            type: type === 'video' ? '视频' : type === 'article' ? '文章' : type === 'course' ? '课程' : '书籍',
            name: item.name,
            author: item.author || '未知作者',
            cover: item.cover || fallbackCover,
            rating: item.rating || 4.5,
            url: validUrl,
            description: item.description || '',
            method: type,
            actionText: validUrl ? (type === 'course' || type === 'book' ? '查看' : '学习') : '暂无链接'
          });
        });
      });
      if (newResources.length > 0) {
        allResources.value = newResources;
      }
    }
    
    // 返回结构化的学习路线（包含完整数据）
    return {
      summary: parsed.summary || {
        title: '个性化学习路线',
        description: '根据你的技能和目标定制',
        estimatedWeeks: 12,
        totalHours: 120,
        difficulty: '中等'
      },
      totalModules: parsed.timeline?.length || 4,
      estimatedHours: parsed.summary?.totalHours || 120,
      difficulty: parsed.summary?.difficulty || '中等',
      monthlyPlan: parsed.monthlyPlan || [],
      projects: (parsed.projects || []).slice(0, 3).map((proj: any, idx: number) => ({
        id: proj.id || `project-${idx + 1}`,
        title: proj.title || '未命名项目',
        description: proj.description || '',
        difficulty: proj.difficulty || '入门',
        duration: proj.duration || '2周',
        techs: proj.techs || [],
        features: proj.features || []
      })),
      phases: (parsed.timeline || []).map((phase: any, idx: number) => ({
        id: phase.id,
        name: phase.name,
        icon: phase.icon || '📚',
        duration: phase.duration,
        description: phase.description,
        completed: false,
        current: idx === 0,
        topics: (phase.topics || []).map((t: any) => ({
          id: t.id,
          name: t.name,
          hours: t.hours || 0,
          description: t.description || '',
          completed: false,
          resources: t.resources || []
        })),
        projects: phase.projects || [],
        skills: phase.skills || [],
        goals: phase.goals || [],
        resources: (phase.topics || []).flatMap((t: any) => 
          (t.resources || []).map((r: any, rIdx: number) => ({
            id: `${phase.id}-res-${rIdx}`,
            type: r.type || '📖',
            name: r.name,
            url: r.url && r.url !== '' && r.url !== '#' ? r.url : null,
            difficulty: r.difficulty
          }))
        )
      }))
    };
  } catch (error) {
    console.error('解析AI响应失败:', error);
    return getDefaultLearningPath();
  }
};

// 获取默认学习路线（当 API 失败时使用）
const getDefaultLearningPath = () => {
  return {
    totalModules: 8,
    estimatedHours: 120,
    difficulty: '中级',
    phases: [
      {
        id: 'phase-1',
        name: '基础巩固',
        icon: '📚',
        duration: '2周',
        description: '掌握 HTML、CSS 和 JavaScript 核心概念',
        completed: false,
        current: true,
        topics: [
          { id: 'topic-1-1', name: 'HTML5 语义化标签', hours: 4, completed: false },
          { id: 'topic-1-2', name: 'CSS Flexbox 布局', hours: 6, completed: false },
          { id: 'topic-1-3', name: 'JavaScript 数据类型', hours: 8, completed: false },
          { id: 'topic-1-4', name: 'DOM 事件处理', hours: 6, completed: false },
        ],
        resources: [
          { id: 'res-1-1', type: '📖', name: 'MDN Web 文档', url: '#' },
          { id: 'res-1-2', type: '🎥', name: 'JavaScript 入门视频', url: '#' },
          { id: 'res-1-3', type: '💻', name: '交互式练习', url: '#' },
        ]
      },
      {
        id: 'phase-2',
        name: 'ES6+ 现代特性',
        icon: '⚡',
        duration: '2周',
        description: '学习 ES6+ 新特性，提升 JavaScript 编程能力',
        completed: false,
        current: false,
        topics: [
          { id: 'topic-2-1', name: '箭头函数与解构', hours: 5, completed: false },
          { id: 'topic-2-2', name: 'Promise 与 async/await', hours: 8, completed: false },
          { id: 'topic-2-3', name: '模块化开发', hours: 6, completed: false },
          { id: 'topic-2-4', name: 'Class 与继承', hours: 5, completed: false },
        ],
        resources: [
          { id: 'res-2-1', type: '📖', name: 'ES6 标准入门', url: '#' },
          { id: 'res-2-2', type: '🎥', name: '异步编程实战', url: '#' },
        ]
      },
      {
        id: 'phase-3',
        name: 'Vue 3 框架',
        icon: '💚',
        duration: '3周',
        description: '深入学习 Vue 3 组合式 API 和响应式原理',
        completed: false,
        current: false,
        topics: [
          { id: 'topic-3-1', name: 'Vue 3 基础概念', hours: 8, completed: false },
          { id: 'topic-3-2', name: 'Composition API', hours: 10, completed: false },
          { id: 'topic-3-3', name: '组件通信', hours: 8, completed: false },
          { id: 'topic-3-4', name: 'Vue Router', hours: 6, completed: false },
        ],
        resources: [
          { id: 'res-3-1', type: '📖', name: 'Vue 3 官方文档', url: '#' },
          { id: 'res-3-2', type: '🎥', name: 'Vue 3 实战教程', url: '#' },
          { id: 'res-3-3', type: '💻', name: '项目实战', url: '#' },
        ]
      },
      {
        id: 'phase-4',
        name: '项目实战',
        icon: '🚀',
        duration: '4周',
        description: '完成综合项目，积累实战经验',
        completed: false,
        current: false,
        topics: [
          { id: 'topic-4-1', name: '项目架构设计', hours: 8, completed: false },
          { id: 'topic-4-2', name: '状态管理实践', hours: 10, completed: false },
          { id: 'topic-4-3', name: '性能优化', hours: 8, completed: false },
          { id: 'topic-4-4', name: '部署上线', hours: 6, completed: false },
        ],
        resources: [
          { id: 'res-4-1', type: '💻', name: '实战项目模板', url: '#' },
          { id: 'res-4-2', type: '📖', name: '最佳实践指南', url: '#' },
        ]
      }
    ]
  };
};

// 更新学习进度
const updateProgress = () => {
  if (!learningPath.value?.phases) return;
  
  learningPath.value.phases.forEach((phase: any) => {
    const completedTopics = phase.topics.filter((t: any) => t.completed).length;
    phase.progress = Math.round((completedTopics / phase.topics.length) * 100);
  });
};

// 开始阶段
const startPhase = (phaseId: string) => {
  console.log('开始学习阶段:', phaseId);
  if (learningPath.value?.phases) {
    learningPath.value.phases.forEach((p: any) => {
      p.current = p.id === phaseId;
    });
  }
};

// 切换主题完成状态
const toggleTopicCompletion = (phaseId: string, topicId: string) => {
  const phase = learningPath.value?.phases.find((p: any) => p.id === phaseId);
  if (phase) {
    const topic = phase.topics.find((t: any) => t.id === topicId);
    if (topic) {
      topic.completed = !topic.completed;
    }
  }
};

// 计算学习进度
const learningProgress = computed(() => {
  if (!learningPath.value) return 0;
  
  let totalTopics = 0;
  let completedTopics = 0;
  
  learningPath.value.phases.forEach((phase: any) => {
    phase.topics.forEach((topic: any) => {
      totalTopics++;
      if (topic.completed) completedTopics++;
    });
  });
  
  return totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
});

// 成就系统
const achievements = ref([
  {
    id: 'ach-1',
    icon: '🌟',
    name: '初学者',
    description: '完成第一个学习主题',
    unlocked: false
  },
  {
    id: 'ach-2',
    icon: '🔥',
    name: '坚持者',
    description: '连续学习 7 天',
    unlocked: false
  },
  {
    id: 'ach-3',
    icon: '🏆',
    name: '阶段完成',
    description: '完成一个学习阶段',
    unlocked: false
  },
  {
    id: 'ach-4',
    icon: '👑',
    name: '路线大师',
    description: '完成整个学习路线',
    unlocked: false
  }
]);
</script>

<style scoped>
/* ==================== 艺术字体引入 ==================== */
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@600;700&display=swap');

/* ==================== 主容器 ==================== */
.learning-path-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f6f8fb 0%, #e9ecf1 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 
               'Microsoft YaHei', sans-serif;
  position: relative;
}

/* ==================== 欢迎屏幕 ==================== */
.welcome-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, 
    rgba(168, 181, 168, 0.95) 0%,
    rgba(157, 180, 192, 0.95) 50%,
    rgba(201, 173, 167, 0.95) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(10px);
}

.welcome-content {
  text-align: center;
  padding: 2rem;
}

/* 转圈动画容器 */
.spinner-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 3rem;
}

.spinner {
  width: 100%;
  height: 100%;
  border: 6px solid rgba(255, 255, 255, 0.3);
  border-top: 6px solid #ffffff;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

.spinner-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
}

/* 艺术字体样式 */
.artistic-font {
  font-family: 'Poppins', 'PingFang SC', sans-serif;
  font-weight: 700;
}

.welcome-title {
  font-size: 4.5rem;
  font-weight: 900;
  margin: 0 0 2.5rem 0;
  font-family: 'PingFang SC', 'Microsoft YaHei', 'STHeiti', 'Helvetica Neue', Arial, sans-serif;
  color: #ffffff;
  text-shadow: 
    0 0 40px rgba(255, 20, 147, 0.8),
    0 0 80px rgba(255, 69, 0, 0.6),
    0 0 120px rgba(255, 215, 0, 0.5),
    0 0 160px rgba(0, 255, 127, 0.4),
    0 0 200px rgba(30, 144, 255, 0.3),
    0 4px 20px rgba(0, 0, 0, 0.9),
    0 8px 40px rgba(0, 0, 0, 0.7);
  letter-spacing: 6px;
  display: inline-block;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.8));
  animation: titleGlow 3s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  0% {
    text-shadow: 
      0 0 40px rgba(255, 20, 147, 0.8),
      0 0 80px rgba(255, 69, 0, 0.6),
      0 4px 20px rgba(0, 0, 0, 0.9);
  }
  50% {
    text-shadow: 
      0 0 60px rgba(255, 215, 0, 0.9),
      0 0 100px rgba(0, 255, 127, 0.7),
      0 4px 20px rgba(0, 0, 0, 0.9);
  }
  100% {
    text-shadow: 
      0 0 50px rgba(30, 144, 255, 0.9),
      0 0 90px rgba(147, 112, 219, 0.7),
      0 4px 20px rgba(0, 0, 0, 0.9);
  }
}

.welcome-title .char {
  display: inline-block;
  animation: charFadeIn 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(30px) scale(0.8);
}

@keyframes charFadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.8) rotate(-5deg);
  }
  50% {
    transform: translateY(-5px) scale(1.05) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

.welcome-subtitle {
  font-size: 3rem;
  font-weight: 800;
  margin: 0;
  font-family: 'PingFang SC', 'Microsoft YaHei', 'STHeiti', 'Helvetica Neue', Arial, sans-serif;
  color: #ffffff;
  letter-spacing: 5px;
  text-shadow: 
    0 0 30px rgba(255, 182, 193, 0.9),
    0 0 60px rgba(173, 216, 230, 0.7),
    0 0 90px rgba(221, 160, 221, 0.6),
    0 4px 20px rgba(0, 0, 0, 0.8);
  filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.6));
  animation: subtitleGlow 2.5s ease-in-out infinite alternate;
}

@keyframes subtitleGlow {
  0% {
    text-shadow: 
      0 0 30px rgba(255, 182, 193, 0.9),
      0 0 60px rgba(173, 216, 230, 0.7),
      0 4px 20px rgba(0, 0, 0, 0.8);
  }
  100% {
    text-shadow: 
      0 0 40px rgba(221, 160, 221, 0.9),
      0 0 80px rgba(255, 228, 181, 0.8),
      0 4px 20px rgba(0, 0, 0, 0.8);
  }
}

/* 欢迎屏幕过渡动画 */
.welcome-fade-enter-active {
  animation: welcomeFadeIn 0.6s ease-out;
}

.welcome-fade-leave-active {
  animation: welcomeFadeOut 0.8s ease-in;
}

@keyframes welcomeFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes welcomeFadeOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.1);
  }
}

.slide-up-enter-active {
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ==================== 可爱风格新手引导 ==================== */
/* 半透明遮罩 */
.guide-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 9998;
  backdrop-filter: blur(3px);
}

/* 小框高亮（圆形或圆角方形） - 类似图片中的效果 */
.guide-highlight-box {
  position: absolute;
  background: rgba(255, 107, 157, 0.08);
  border: 3px solid #FF6B9D;
  box-shadow: 
    0 0 0 3px rgba(255, 107, 157, 0.2),
    0 0 20px rgba(255, 107, 157, 0.4),
    0 4px 15px rgba(255, 107, 157, 0.3),
    inset 0 0 15px rgba(255, 255, 255, 0.3);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  pointer-events: none;
  z-index: 9999;
  animation: boxPulse 2s ease-in-out infinite;
}

.guide-highlight-box.circle-box {
  border-radius: 50%;
}

.guide-highlight-box.round-box {
  border-radius: 16px;
}

@keyframes boxPulse {
  0%, 100% { 
    transform: scale(1);
    border-color: #FF6B9D;
    box-shadow: 
      0 0 0 3px rgba(255, 107, 157, 0.2),
      0 0 20px rgba(255, 107, 157, 0.4),
      0 4px 15px rgba(255, 107, 157, 0.3);
  }
  50% { 
    transform: scale(1.05);
    border-color: #FF8AB8;
    box-shadow: 
      0 0 0 5px rgba(255, 107, 157, 0.3),
      0 0 30px rgba(255, 107, 157, 0.6),
      0 6px 25px rgba(255, 107, 157, 0.4);
  }
}

/* 可爱圆形气泡 */
.cute-bubble {
  position: absolute;
  width: 220px;
  background: #ffffff;
  border-radius: 50px;
  padding: 1.5rem 1.8rem;
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.2),
    0 0 0 6px rgba(255, 192, 203, 0.1),
    0 0 30px rgba(157, 180, 192, 0.3);
  z-index: 10000;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: bubbleBounce 0.6s ease-out;
}

@keyframes bubbleBounce {
  0% { 
    transform: scale(0.5) rotate(-10deg); 
    opacity: 0; 
  }
  50% { 
    transform: scale(1.1) rotate(5deg); 
  }
  100% { 
    transform: scale(1) rotate(0deg); 
    opacity: 1; 
  }
}

.bubble-content {
  text-align: center;
}

.bubble-icon {
  font-size: 3rem;
  margin-bottom: 0.8rem;
  animation: iconFloat 2s ease-in-out infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
}

.bubble-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 1.2rem 0;
  line-height: 1.6;
  font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;
  letter-spacing: 0.5px;
}

.bubble-btn {
  width: 100%;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #FF6B9D 0%, #FFA8C5 100%);
  box-shadow: 
    0 6px 20px rgba(255, 107, 157, 0.4),
    inset 0 -2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Comic Sans MS', 'Microsoft YaHei', sans-serif;
  letter-spacing: 1px;
}

.bubble-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 
    0 10px 30px rgba(255, 107, 157, 0.5),
    inset 0 -2px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #FF8AB8 0%, #FFBDD5 100%);
}

.bubble-btn:active {
  transform: translateY(-1px) scale(1.02);
}

/* 气泡小尾巴 */
.bubble-tail {
  position: absolute;
  width: 30px;
  height: 30px;
  background: #ffffff;
  z-index: -1;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.bubble-tail.bottom {
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-radius: 0 0 50% 0;
}

.bubble-tail.top {
  top: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-radius: 50% 0 0 0;
}

.bubble-tail.top-left {
  top: 30%;
  left: -12px;
  transform: rotate(45deg);
  border-radius: 50% 0 0 0;
}

.bubble-tail.left {
  top: 50%;
  left: -12px;
  transform: translateY(-50%) rotate(45deg);
  border-radius: 50% 0 0 0;
}

/* 过渡动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* ==================== 头部区域 ==================== */
.path-header {
  background: linear-gradient(135deg, 
    #a8b5a8 0%,
    #9db4c0 35%,
    #c9ada7 70%,
    #b8b8d1 100%
  );
  border-radius: 24px;
  padding: 3rem 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 
    0 20px 60px rgba(168, 181, 168, 0.2),
    0 8px 24px rgba(157, 180, 192, 0.15);
  position: relative;
  overflow: hidden;
}

.path-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.15) 50%,
    transparent 100%
  );
  animation: shimmer 4s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.header-content {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
}

.header-icon {
  font-size: 4rem;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
  animation: iconFloat 3s ease-in-out infinite;
}

@keyframes iconFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.header-text {
  flex: 1;
}

.header-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  letter-spacing: 0.5px;
}

.header-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

/* ==================== 技能评估区域 ==================== */
.assessment-section {
  margin-bottom: 2rem;
}

.assessment-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.card-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.1));
}

.card-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.assessment-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 8rem;
}

.skill-group {
  border: 2px solid rgba(168, 181, 168, 0.15);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.skill-group:hover {
  border-color: rgba(168, 181, 168, 0.3);
  box-shadow: 0 4px 16px rgba(168, 181, 168, 0.1);
}

.skill-category-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #4a5568;
  margin: 0 0 1rem 0;
}

.skill-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.75rem;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-item:hover {
  border-color: #a8b5a8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(168, 181, 168, 0.2);
}

.skill-item.selected {
  background: linear-gradient(135deg, #a8b5a8 0%, #b8c5b8 100%);
  border-color: #a8b5a8;
  color: #ffffff;
}

.skill-emoji {
  font-size: 1.3rem;
}

.skill-name {
  flex: 1;
  font-weight: 500;
  font-size: 0.95rem;
}

.skill-level {
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.skill-item.selected .skill-level {
  background: rgba(255, 255, 255, 0.3);
}

/* 学习目标 */
.goal-selection {
  margin-top: 1rem;
}

.goal-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #4a5568;
  margin: 0 0 1rem 0;
}

.goal-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.goal-option {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: #ffffff;
  border: 2px solid #e9ecef;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.goal-option:hover {
  border-color: #9db4c0;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(157, 180, 192, 0.2);
}

.goal-option.selected {
  background: linear-gradient(135deg, #9db4c0 0%, #adc4d0 100%);
  border-color: #9db4c0;
  color: #ffffff;
}

.goal-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.1));
}

.goal-info {
  flex: 1;
}

.goal-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.goal-option.selected .goal-name {
  color: #ffffff;
}

.goal-desc {
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.8;
}

/* 生成按钮 - 超级醒目！ */
.generate-btn {
  align-self: center;
  padding: 1.5rem 4rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  background-size: 300% 100%;
  color: #ffffff;
  border: none;
  border-radius: 50px;
  font-size: 1.4rem;
  font-weight: 800;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 
    0 10px 35px rgba(102, 126, 234, 0.5),
    0 5px 20px rgba(118, 75, 162, 0.4),
    0 0 0 0 rgba(102, 126, 234, 0.7),
    inset 0 -2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 3rem;
  position: relative;
  overflow: hidden;
  letter-spacing: 1px;
  animation: btnBreath 2s ease-in-out infinite;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

@keyframes btnBreath {
  0%, 100% {
    transform: scale(1);
    box-shadow: 
      0 10px 35px rgba(102, 126, 234, 0.5),
      0 5px 20px rgba(118, 75, 162, 0.4),
      0 0 0 0 rgba(102, 126, 234, 0.7);
  }
  50% {
    transform: scale(1.03);
    box-shadow: 
      0 15px 45px rgba(102, 126, 234, 0.6),
      0 8px 25px rgba(118, 75, 162, 0.5),
      0 0 0 15px rgba(102, 126, 234, 0);
  }
}

.generate-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
  border-radius: 50%;
}

.generate-btn:hover:not(:disabled)::before {
  width: 300px;
  height: 300px;
}

.generate-btn:hover:not(:disabled) {
  background-position: 100% 0;
  transform: translateY(-6px) scale(1.08);
  box-shadow: 
    0 20px 50px rgba(102, 126, 234, 0.7),
    0 10px 30px rgba(118, 75, 162, 0.6),
    0 0 40px rgba(240, 147, 251, 0.5),
    inset 0 -2px 10px rgba(0, 0, 0, 0.2);
  animation: none;
  filter: brightness(1.15) saturate(1.2);
}

.generate-btn:active:not(:disabled) {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 6px 20px rgba(168, 181, 168, 0.4);
}

.generate-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  filter: grayscale(0.5);
}

.btn-icon {
  font-size: 1.4rem;
  animation: iconBounce 2s ease-in-out infinite;
}

@keyframes iconBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.btn-text {
  position: relative;
  z-index: 1;
}

/* ==================== 学习路线展示 ==================== */
.learning-path-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.ai-dashboard {
  display: grid;
  grid-template-columns: 1.65fr 1fr;
  gap: 1.5rem;
  align-items: start;
}

.ai-main {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.hero-card {
  background: linear-gradient(135deg, #fdf7ec 0%, #f3f2ff 100%);
  border-radius: 24px;
  padding: 2.25rem;
  box-shadow: 0 18px 38px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1e8ff;
}

.hero-pills {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.pill {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.9rem;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.9rem;
}

.pill-dark {
  background: #0f172a;
  color: #fff;
}

.pill-light {
  background: rgba(255, 255, 255, 0.65);
  color: #0f172a;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.hero-title {
  font-size: 2.6rem;
  margin: 0 0 0.5rem;
  color: #0f172a;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  margin: 0 0 1.5rem;
  color: #475569;
  font-size: 1.05rem;
  line-height: 1.7;
}

.hero-stat-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.hero-stat {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 14px;
  padding: 0.85rem 1rem;
  border: 1px solid #eae8f5;
}

.stat-label {
  display: block;
  color: #94a3b8;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
}

.stat-value {
  font-weight: 700;
  color: #0f172a;
  font-size: 1.2rem;
}

.hero-action-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
}

.hero-tags {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.soft-chip {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #eae8f5;
  color: #4a5568;
  padding: 0.35rem 0.75rem;
  border-radius: 12px;
  font-weight: 600;
}

.ghost-button {
  background: #0f172a;
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 0.75rem 1.4rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.ghost-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.18);
}

.path-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.path-card {
  border-radius: 18px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  cursor: pointer;
  border: 2px solid transparent;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.path-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 0, 0, 0.06);
}

.path-card.active {
  border-color: #0f172a;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.18);
}

.tone-rose { background: #fdecef; }
.tone-amber { background: #fff4e5; }
.tone-mint { background: #e6f7f2; }
.tone-lilac { background: #f2ecff; }

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-pill {
  background: rgba(255, 255, 255, 0.8);
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  font-weight: 700;
  color: #0f172a;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.card-rating {
  background: #0f172a;
  color: #fff;
  border-radius: 999px;
  padding: 0.35rem 0.7rem;
  font-weight: 700;
  font-size: 0.85rem;
}

.card-title {
  margin: 0;
  font-size: 1.25rem;
  color: #0f172a;
}

.card-desc {
  margin: 0;
  color: #475569;
  line-height: 1.6;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0f172a;
  font-weight: 700;
}

.card-link {
  font-weight: 700;
}

.insight-sidebar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.insight-card {
  background: #f7f4ff;
  border-radius: 18px;
  padding: 1.25rem;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
  border: 1px solid #ebe7ff;
}

.radar-preview-card {
  background: #fff8f3;
}

.monthly-preview-card {
  background: #f0f7ff;
}

.insight-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.insight-label {
  margin: 0;
  color: #94a3b8;
  font-weight: 600;
}

.insight-title {
  margin: 0.2rem 0 0;
  font-size: 1.2rem;
  color: #0f172a;
}

.mini-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.8);
  color: #0f172a;
  font-weight: 700;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.radar-preview {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}

.radar-preview .radar-svg {
  filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.08));
}

.radar-legend {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.35rem 0.75rem;
  width: 100%;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #475569;
  font-weight: 600;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.mini-bar-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  gap: 0.75rem;
  align-items: end;
}

.mini-bar {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  align-items: center;
}

.bar-fill {
  width: 100%;
  background: linear-gradient(180deg, #9abcf7 0%, #8ad0c2 100%);
  border-radius: 10px;
  min-height: 12px;
}

.bar-label {
  font-size: 0.8rem;
  color: #475569;
  font-weight: 600;
}

.card-detail-stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.path-overview {
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.overview-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stat-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.1));
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
}

.stat-label {
  font-size: 0.9rem;
  color: #718096;
}

/* 路线图 */
.roadmap {
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.roadmap-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.roadmap-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.reset-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px solid #dee2e6;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: #495057;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  border-color: #a8b5a8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(168, 181, 168, 0.2);
}

.roadmap-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
}

.phase-block {
  position: relative;
}

.phase-connector {
  position: absolute;
  top: -2rem;
  left: 2rem;
  width: 4px;
  height: 2rem;
  background: linear-gradient(to bottom, #e9ecef 0%, #a8b5a8 100%);
}

.phase-card {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: linear-gradient(145deg, #ffffff 0%, #fafbfc 100%);
  border: 2px solid #e9ecef;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
}

.phase-block.current .phase-card {
  border-color: #9db4c0;
  box-shadow: 0 8px 24px rgba(157, 180, 192, 0.2);
}

.phase-block.completed .phase-card {
  border-color: #a8b5a8;
  background: linear-gradient(145deg, #f8f9fa 0%, #e9ecef 100%);
}

.phase-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a8b5a8 0%, #b8c5b8 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(168, 181, 168, 0.3);
}

.phase-block.current .phase-number {
  background: linear-gradient(135deg, #9db4c0 0%, #adc4d0 100%);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 4px 12px rgba(157, 180, 192, 0.3);
  }
  50% {
    box-shadow: 0 4px 20px rgba(157, 180, 192, 0.5);
  }
}

.phase-content {
  flex: 1;
}

.phase-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.phase-icon {
  font-size: 1.5rem;
}

.phase-title {
  flex: 1;
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.phase-duration {
  padding: 0.4rem 0.8rem;
  background: rgba(157, 180, 192, 0.15);
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #4a5568;
}

.phase-description {
  color: #718096;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
}

.phase-topics {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.topic-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: #ffffff;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.topic-item:hover {
  border-color: #a8b5a8;
  transform: translateX(4px);
}

.topic-item.completed {
  background: linear-gradient(135deg, #a8b5a8 0%, #b8c5b8 100%);
  border-color: #a8b5a8;
  color: #ffffff;
}

.topic-checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #cbd5e0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.topic-item.completed .topic-checkbox {
  background: #ffffff;
  border-color: #ffffff;
  color: #a8b5a8;
}

.topic-name {
  flex: 1;
  font-weight: 500;
}

.topic-time {
  font-size: 0.85rem;
  opacity: 0.8;
}

.phase-resources {
  margin-bottom: 1.5rem;
}

.resources-title {
  font-size: 1rem;
  font-weight: 600;
  color: #4a5568;
  margin: 0 0 0.75rem 0;
}

.resource-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.resource-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border: 1px solid #dee2e6;
  border-radius: 10px;
  text-decoration: none;
  color: #495057;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.resource-link:hover {
  border-color: #9db4c0;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(157, 180, 192, 0.2);
}

.resource-link.no-link {
  opacity: 0.6;
  cursor: default;
  background: #f1f5f9;
}

.resource-link.no-link:hover {
  background: #f1f5f9;
  transform: none;
  border-color: #e2e8f0;
  box-shadow: none;
}

.resource-difficulty {
  font-size: 0.75rem;
  padding: 0.125rem 0.5rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 8px;
  margin-left: 0.5rem;
}

.resource-type {
  font-size: 1.1rem;
}

.phase-action-btn {
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #9db4c0 0%, #adc4d0 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(157, 180, 192, 0.3);
}

.phase-action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(157, 180, 192, 0.4);
}

/* 进度统计 */
.progress-stats {
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.stats-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.progress-bar-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: #e9ecef;
  border-radius: 6px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #a8b5a8 0%, #9db4c0 50%, #c9ada7 100%);
  border-radius: 6px;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 10px rgba(168, 181, 168, 0.4);
}

.progress-text {
  font-size: 1rem;
  font-weight: 600;
  color: #4a5568;
}

.achievement-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.achievement-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border: 2px solid #e9ecef;
  border-radius: 16px;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.achievement-item.unlocked {
  opacity: 1;
  border-color: #c9ada7;
  box-shadow: 0 4px 16px rgba(201, 173, 167, 0.2);
}

.achievement-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.1));
}

.achievement-info {
  flex: 1;
}

.achievement-name {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0.25rem 0;
}

.achievement-desc {
  font-size: 0.85rem;
  color: #718096;
  margin: 0;
}

/* 加载状态 */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
}

.loading-content {
  text-align: center;
}

.loading-spinner {
  width: 60px;
  height: 60px;
  border: 4px solid #e9ecef;
  border-top-color: #9db4c0;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-text {
  font-size: 1.1rem;
  color: #4a5568;
  font-weight: 500;
}

/* ==================== 新表单样式 ==================== */
.card-subtitle {
  font-size: 0.95rem;
  color: #718096;
  margin: 0.5rem 0 0 0;
}

.form-section {
  padding: 2rem;
  background: linear-gradient(135deg, #fafbfc 0%, #ffffff 100%);
  border: 2px solid rgba(168, 181, 168, 0.1);
  border-radius: 16px;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.collapsible-section {
  border-color: #f1f5f9;
  background: #ffffff;
}

.collapsible-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
}

.collapse-toggle {
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  border-radius: 10px;
  padding: 0.35rem 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.collapse-toggle:hover {
  border-color: #94a3b8;
  transform: translateY(-1px);
}

.collapsible-body {
  margin-top: 1rem;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.25s ease;
}

.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-6px);
}

.form-section:hover {
  border-color: rgba(168, 181, 168, 0.25);
  box-shadow: 0 4px 20px rgba(168, 181, 168, 0.08);
}

.required-section {
  background: linear-gradient(135deg, #ffffff 0%, #fff7f5 100%);
  border-color: rgba(201, 173, 167, 0.2);
  box-shadow: 0 4px 14px rgba(201, 173, 167, 0.12);
}

.required-section:hover {
  border-color: rgba(201, 173, 167, 0.35);
  box-shadow: 0 6px 18px rgba(201, 173, 167, 0.18);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1.5rem 0;
  position: relative;
}

.section-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #a8b5a8 0%, #9db4c0 100%);
  color: white;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(168, 181, 168, 0.3);
}

/* 必填和可选标记 */
.required-badge,
.optional-badge {
  margin-left: auto;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.required-badge {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(255, 107, 107, 0.3);
}

.optional-badge {
  background: linear-gradient(135deg, #a8b5a8 0%, #9db4c0 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(168, 181, 168, 0.2);
}

.required-star {
  color: #ff6b6b;
  margin-left: 0.25rem;
  font-weight: 700;
}

.section-desc {
  font-size: 0.9rem;
  color: #718096;
  margin: -0.5rem 0 1.5rem 0;
  font-style: italic;
}

.form-row {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.75rem;
}

.radio-group,
.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.checkbox-group.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.checkbox-group.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}

.radio-option,
.checkbox-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.3rem;
  background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
  border: 2px solid #e9ecef;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  color: #4a5568;
  position: relative;
  overflow: hidden;
}

.radio-option::before,
.checkbox-option::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(168, 181, 168, 0.1), transparent);
  transition: left 0.5s ease;
}

.radio-option:hover::before,
.checkbox-option:hover::before {
  left: 100%;
}

.radio-option:hover,
.checkbox-option:hover {
  border-color: #a8b5a8;
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 6px 20px rgba(168, 181, 168, 0.25);
}

.radio-option input[type="radio"]:checked ~ span,
.checkbox-option input[type="checkbox"]:checked ~ span {
  font-weight: 600;
  color: #ffffff;
}

.radio-option:has(input:checked),
.checkbox-option:has(input:checked) {
  background: linear-gradient(135deg, #a8b5a8 0%, #9db4c0 100%);
  border-color: #a8b5a8;
  color: #ffffff;
  box-shadow: 0 6px 20px rgba(168, 181, 168, 0.35);
  animation: selectPulse 0.4s ease;
}

@keyframes selectPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.radio-option input[type="radio"],
.checkbox-option input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: #a8b5a8;
  cursor: pointer;
  transition: all 0.3s ease;
}

.radio-option input[type="radio"]:checked,
.checkbox-option input[type="checkbox"]:checked {
  filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.6));
}

/* 技能评分滑块 */
.skill-ratings {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-rating-item {
  background: #ffffff;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 1.2rem;
  transition: all 0.3s ease;
}

.skill-rating-item:hover {
  border-color: #9db4c0;
  box-shadow: 0 4px 16px rgba(157, 180, 192, 0.12);
}

.skill-rating-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.skill-rating-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #2d3748;
}

.skill-rating-value {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 0.5rem;
  background: linear-gradient(135deg, #a8b5a8 0%, #9db4c0 100%);
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  box-shadow: 0 2px 6px rgba(168, 181, 168, 0.25);
}

.skill-slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(90deg, #e9ecef 0%, #f8f9fa 100%);
  outline: none;
  appearance: none;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.skill-slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a8b5a8 0%, #9db4c0 100%);
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(168, 181, 168, 0.4);
  transition: all 0.2s ease;
}

.skill-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(168, 181, 168, 0.5);
}

.skill-slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a8b5a8 0%, #9db4c0 100%);
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 6px rgba(168, 181, 168, 0.4);
  transition: all 0.2s ease;
}

.skill-slider::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(168, 181, 168, 0.5);
}

.skill-rating-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #a0aec0;
}

/* 兴趣分类 */
.interest-categories {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.interest-category {
  background: #ffffff;
  border: 2px solid rgba(201, 173, 167, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.interest-category:hover {
  border-color: rgba(201, 173, 167, 0.3);
  box-shadow: 0 4px 16px rgba(201, 173, 167, 0.1);
}

.interest-category-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #4a5568;
  margin: 0 0 1rem 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid rgba(201, 173, 167, 0.15);
}

/* 求职详情 */
.job-details {
  margin-top: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #fef9f8 0%, #ffffff 100%);
  border: 2px dashed rgba(184, 184, 209, 0.3);
  border-radius: 12px;
}

/* 文本域 */
.form-textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  font-size: 0.95rem;
  font-family: inherit;
  line-height: 1.6;
  color: #2d3748;
  resize: vertical;
  transition: all 0.3s ease;
}

.form-textarea:focus {
  outline: none;
  border-color: #9db4c0;
  box-shadow: 0 0 0 4px rgba(157, 180, 192, 0.1);
}

.form-textarea::placeholder {
  color: #a0aec0;
}

/* 滚动条样式 */
.scrollable-content {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding-right: 1rem;
}

.scrollable-content::-webkit-scrollbar {
  width: 10px;
}

.scrollable-content::-webkit-scrollbar-track {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 10px;
}

.scrollable-content::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #a8b5a8 0%, #9db4c0 100%);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.scrollable-content::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #9db4c0 0%, #c9ada7 100%);
  box-shadow: 0 0 8px rgba(168, 181, 168, 0.4);
}

/* 响应式 */
@media (max-width: 768px) {
  .learning-path-container {
    padding: 1rem;
  }
  
  .path-header {
    padding: 2rem 1.5rem;
  }
  
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  
  .header-title {
    font-size: 2rem;
  }
  
  .skill-items {
    grid-template-columns: 1fr;
  }
  
  .goal-options {
    grid-template-columns: 1fr;
  }
  
  .overview-card {
    grid-template-columns: 1fr;
  }
  
  .phase-card {
    flex-direction: column;
  }
  
  .achievement-list {
    grid-template-columns: 1fr;
  }

  .form-section {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 1.2rem;
  }

  .checkbox-group.grid-2,
  .checkbox-group.grid-3 {
    grid-template-columns: 1fr;
  }

  .skill-ratings {
    grid-template-columns: 1fr;
  }
}

/* ==================== 可视化组件样式 ==================== */

/* 通用section样式 */
.radar-chart-section,
.mountain-stages-section,
.timeline-section,
.gantt-section,
.project-ladder-section,
.resources-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.section-header {
  margin-bottom: 2rem;
  text-align: center;
}

.section-header .section-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.section-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.section-desc {
  color: #718096;
  font-size: 0.95rem;
  margin: 0;
}

/* ==================== 雷达图样式 ==================== */
.radar-chart-container {
  display: flex;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.radar-chart {
  flex: 1;
  min-width: 350px;
  display: flex;
  justify-content: center;
}

.radar-svg {
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
}

.radar-label {
  font-size: 12px;
  font-weight: 600;
  fill: #4a5568;
  letter-spacing: 0.5px;
}

.radar-label-top {
  transform: translateY(-8px);
}

.radar-skills-list {
  width: 100%;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.8rem;
}

.skill-item-radar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.6rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  font-size: 0.8rem;
}

.skill-item-radar:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateX(4px);
}

.skill-color {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  flex-shrink: 0;
}

.skill-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.skill-name {
  font-size: 0.75rem;
  font-weight: 600;
  color: #2d3748;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.skill-score {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  width: 100%;
}

.score-bar {
  flex: 1;
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
}

.score-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.score-text {
  font-weight: 600;
  color: #4a5568;
  font-size: 0.7rem;
  min-width: 30px;
  text-align: right;
}

/* ==================== 山脉关卡图样式 ==================== */
.mountain-landscape {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.mountain-svg {
  width: 100%;
  height: 400px;
}

.mountain-peak {
  cursor: pointer;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.mountain-peak:hover {
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
  opacity: 0.9;
}

.mountain-peak.active {
  filter: drop-shadow(0 6px 12px rgba(59, 130, 246, 0.3));
}

.framework-icon {
  cursor: pointer;
  transition: all 0.3s ease;
}

.framework-icon:hover,
.framework-icon.active {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
}

.icon-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.icon-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
}

.framework-icon.active .icon-container {
  border-color: #3b82f6;
  background: #eff6ff;
}

.stage-name {
  font-size: 12px;
  font-weight: 600;
  fill: #4a5568;
  transition: all 0.3s ease;
}

.stage-name.active {
  fill: #3b82f6;
  font-weight: 700;
}

.stage-name.completed {
  fill: #10b981;
}

.connection-path {
  cursor: pointer;
  transition: stroke 0.3s ease;
}

.connection-path:hover {
  stroke: #3b82f6;
  stroke-dasharray: 0;
}

.stage-details {
  margin-top: 2rem;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stage-details-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3b82f6;
}

.stage-details-header {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.stage-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stage-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.stage-info {
  flex: 1;
}

.stage-info h3 {
  margin: 0 0 0.5rem;
  color: #2d3748;
}

.stage-info p {
  margin: 0;
  color: #718096;
  font-size: 0.9rem;
}

.close-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: #f1f5f9;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  color: #718096;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #e2e8f0;
  color: #2d3748;
}

.stage-tasks {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.task-item:hover {
  background: #f1f5f9;
}

.task-item input {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.task-label {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: #2d3748;
  font-weight: 500;
}

.task-duration {
  color: #a0aec0;
  font-size: 0.85rem;
  margin-left: 1rem;
}

/* ==================== 时间轴样式 ==================== */
.timeline-container {
  position: relative;
  padding: 2rem 0;
}

.timeline-item {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
}

.timeline-marker {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  position: relative;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #cbd5e1;
  transition: all 0.3s ease;
}

.timeline-marker.active {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  box-shadow: 0 0 0 2px white, 0 4px 12px rgba(59, 130, 246, 0.3);
}

.timeline-marker.completed {
  background: #10b981;
  box-shadow: 0 0 0 2px white, 0 4px 12px rgba(16, 185, 129, 0.3);
}

.timeline-marker::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 80px;
  background: #cbd5e1;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
}

.timeline-item:last-child .timeline-marker::after {
  display: none;
}

.timeline-content {
  flex: 1;
  padding-top: 0.5rem;
}

.timeline-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 3px solid #cbd5e1;
  transition: all 0.3s ease;
}

.timeline-item .timeline-marker.active ~ .timeline-content .timeline-card {
  border-left-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
}

.timeline-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateX(4px);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.timeline-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
}

.timeline-duration {
  background: #f1f5f9;
  color: #718096;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
}

.timeline-desc {
  margin: 0.75rem 0;
  color: #718096;
  font-size: 0.9rem;
}

.timeline-topics {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
}

.timeline-topic {
  display: inline-block;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.timeline-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.progress-bar {
  flex: 1;
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.progress-text {
  font-weight: 600;
  color: #4a5568;
  font-size: 0.85rem;
  min-width: 35px;
}

/* ==================== 甘特图样式 ==================== */
.gantt-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  overflow-x: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  max-width: 100%;
}

.gantt-chart {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 0;
  min-width: 1000px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

.gantt-header {
  display: contents;
}

.gantt-task-name {
  grid-column: 1;
  padding: 1rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  font-weight: 600;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
}

.gantt-week {
  padding: 1rem;
  background: linear-gradient(135deg, #A8BEDF 0%, #C7D5E8 100%);
  color: white;
  font-weight: 600;
  border-bottom: 1px solid #e2e8f0;
  text-align: center;
  font-size: 0.85rem;
  width: 60px;
  flex-shrink: 0;
}

.gantt-row {
  display: contents;
}

.gantt-row .gantt-task-name {
  background: #f8f9fa;
  color: #2d3748;
  font-weight: 500;
  border-bottom: 1px solid #e2e8f0;
  grid-column: 1;
}

.gantt-timeline {
  display: flex;
  position: relative;
  height: 50px;
  border-bottom: 1px solid #e2e8f0;
  background: white;
}

.gantt-bar {
  position: absolute;
  height: 30px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.85;
}

.gantt-bar:hover {
  opacity: 1;
  filter: brightness(1.1);
}

.gantt-bar.completed {
  opacity: 0.6;
  text-decoration: line-through;
}

.gantt-bar-label {
  color: white;
  font-weight: 600;
  font-size: 0.75rem;
}

/* ==================== 项目阶梯图样式 ==================== */
.project-ladder {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;
}

.project-step {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 2rem;
  position: relative;
  align-items: start;
}

.step-number {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  flex-shrink: 0;
}

.step-content {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 3px solid #e2e8f0;
  transition: all 0.3s ease;
}

.step-content:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-left-color: #3b82f6;
  transform: translateX(4px);
}

.project-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  justify-content: space-between;
}

.project-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
}

.project-difficulty {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.difficulty-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.project-difficulty.easy {
  background: #d1fae5;
  color: #065f46;
}

.project-difficulty.easy .difficulty-dot {
  background: #10b981;
}

.project-difficulty.medium {
  background: #fef3c7;
  color: #92400e;
}

.project-difficulty.medium .difficulty-dot {
  background: #f59e0b;
}

.project-difficulty.hard {
  background: #fee2e2;
  color: #991b1b;
}

.project-difficulty.hard .difficulty-dot {
  background: #ef4444;
}

.project-description {
  margin: 0.75rem 0;
  color: #718096;
  font-size: 0.95rem;
}

.project-stats {
  display: flex;
  gap: 1.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stat-label {
  color: #718096;
  font-size: 0.9rem;
}

.stat-value {
  color: #2d3748;
  font-weight: 600;
  font-size: 0.9rem;
}

.project-features {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.feature-tag {
  background: #f1f5f9;
  color: #4a5568;
  padding: 0.35rem 0.85rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
}

.step-connector {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

/* ==================== 资源列表样式 ==================== */
.resources-tabs {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.resource-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  color: #718096;
  transition: all 0.3s ease;
}

.resource-tab:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.resource-tab.active {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  border-color: transparent;
}

.method-icon {
  font-size: 1.2rem;
}

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.resource-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.resource-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.resource-cover {
  position: relative;
  width: 100%;
  height: 160px;
  background: #f1f5f9;
  overflow: hidden;
}

.resource-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.resource-card:hover .resource-cover img {
  transform: scale(1.05);
}

.resource-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  color: white;
  padding: 0.35rem 0.85rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
}

.resource-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.resource-name {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  line-height: 1.4;
}

.resource-author {
  margin: 0 0 0.75rem;
  color: #718096;
  font-size: 0.85rem;
}

.resource-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.star {
  color: #cbd5e1;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.star.active {
  color: #f59e0b;
}

.rating-text {
  color: #a0aec0;
  font-size: 0.8rem;
}

.resource-action {
  margin-top: auto;
  display: inline-block;
  color: #3b82f6;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
}

.resource-action:hover {
  border-bottom-color: #3b82f6;
  gap: 0.5rem;
}

/* 响应式 */
@media (max-width: 1200px) {
  .radar-chart-container {
    flex-direction: column;
    gap: 2rem;
  }
  
  .gantt-container {
    font-size: 0.9rem;
  }
  
  .gantt-week {
    width: 50px;
  }
}

@media (max-width: 768px) {
  .radar-chart-container {
    flex-direction: column;
  }
  
  .resources-grid {
    grid-template-columns: 1fr;
  }
  
  .project-step {
    grid-template-columns: 50px 1fr;
    gap: 1rem;
  }
  
  .step-number {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }
  
  .gantt-chart {
    min-width: 100%;
    grid-template-columns: 120px 1fr;
  }
  
  .stages-horizontal-timeline {
    flex-direction: column;
  }
  
  .stage-item {
    flex-direction: column;
    align-items: flex-start !important;
  }
  
  .stage-connector-line {
    display: none;
  }
}

/* ==================== 学习阶段横向时间轴样式 ==================== */
.stages-timeline-section {
  margin: 2rem 0;
}

.stages-horizontal-timeline {
  display: flex;
  gap: 0;
  padding: 2rem 0;
  overflow-x: auto;
  position: relative;
}

.stage-item {
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.stage-marker {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.stage-marker.active {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  box-shadow: 0 6px 20px rgba(245, 87, 108, 0.4);
  animation: stagePulse 2s infinite;
}

.stage-marker.completed {
  background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
}

@keyframes stagePulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.stage-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.stage-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid #f5576c;
  animation: pulseRing 2s infinite;
}

@keyframes pulseRing {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.stage-content-box {
  margin-top: 1.5rem;
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  width: 100%;
  transition: all 0.3s ease;
}

.stage-content-box:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.stage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.stage-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.stage-duration {
  font-size: 0.875rem;
  color: #667eea;
  background: #eef2ff;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 500;
}

.stage-desc {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.stage-topics-list {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stage-topic {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.stage-topic:hover {
  background: #f8fafc;
}

.stage-topic input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.stage-topic label {
  flex: 1;
  cursor: pointer;
  font-size: 0.9rem;
  color: #475569;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topic-hours {
  font-size: 0.75rem;
  color: #94a3b8;
  background: #f1f5f9;
  padding: 0.125rem 0.5rem;
  border-radius: 8px;
}

.stage-start-btn {
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.stage-start-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(102, 126, 234, 0.3);
}

.stage-start-btn.active {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  animation: btnGlow 2s infinite;
}

@keyframes btnGlow {
  0%, 100% {
    box-shadow: 0 6px 15px rgba(245, 87, 108, 0.3);
  }
  50% {
    box-shadow: 0 8px 20px rgba(245, 87, 108, 0.5);
  }
}

.stage-connector-line {
  position: absolute;
  top: 40px;
  left: 50%;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  z-index: 1;
}

/* ==================== Summary概览卡片样式 ==================== */
.summary-overview {
  margin: 2rem 0 3rem;
}

.summary-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  color: white;
  position: relative;
  overflow: hidden;
}

.summary-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: summaryGlow 8s ease-in-out infinite;
}

@keyframes summaryGlow {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-10%, -10%);
  }
}

.summary-header {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.summary-icon {
  font-size: 4rem;
  flex-shrink: 0;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.summary-content {
  flex: 1;
}

.summary-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 1rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.summary-description {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.95;
  margin: 0;
}

.summary-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.stat-box {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

.stat-box:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-4px);
}

.stat-box .stat-icon {
  font-size: 2.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
}

.reset-btn-summary {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.reset-btn-summary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* ==================== 阶段详情面板样式 ==================== */
.phase-details-panel {
  margin: 2rem 0;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.details-container {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.details-section {
  margin-bottom: 2.5rem;
}

.details-section:last-child {
  margin-bottom: 0;
}

.details-section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.details-icon {
  font-size: 1.75rem;
}

.stage-quick-info {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.quick-info-item {
  font-size: 0.85rem;
  color: #64748b;
  background: #f1f5f9;
  padding: 0.375rem 0.75rem;
  border-radius: 8px;
}

/* 主题网格 */
.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.topic-card {
  background: #f8fafc;
  border-radius: 16px;
  padding: 1.5rem;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.topic-card:hover {
  border-color: #667eea;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.15);
}

.topic-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.topic-checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.topic-name {
  flex: 1;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  cursor: pointer;
}

.topic-hours {
  font-size: 0.85rem;
  color: #667eea;
  background: #eef2ff;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  font-weight: 500;
}

.topic-description {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.topic-resources {
  margin-top: 1rem;
}

.resource-tag-label {
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.resource-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.resource-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  background: white;
  border: 1.5px solid #e2e8f0;
  padding: 0.375rem 0.75rem;
  border-radius: 8px;
  font-size: 0.85rem;
  text-decoration: none;
  color: #475569;
  transition: all 0.2s ease;
}

.resource-tag:hover:not(.no-link) {
  border-color: #667eea;
  background: #eef2ff;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
}

.resource-tag.no-link {
  opacity: 0.5;
  cursor: not-allowed;
}

.resource-tag-type {
  font-weight: 600;
  color: #667eea;
}

.resource-tag-name {
  color: #2d3748;
}

.resource-tag-difficulty {
  font-size: 0.75rem;
  background: #fef3c7;
  color: #92400e;
  padding: 0.125rem 0.5rem;
  border-radius: 6px;
}

/* 项目网格 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%);
  border-radius: 16px;
  padding: 1.5rem;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.project-card:hover {
  border-color: #f093fb;
  box-shadow: 0 6px 20px rgba(240, 147, 251, 0.2);
  transform: translateY(-4px);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.project-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
}

.project-hours {
  font-size: 0.9rem;
  color: #f093fb;
  background: white;
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  font-weight: 600;
}

.project-description {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-techs,
.project-features {
  margin-top: 1rem;
}

.tech-label,
.features-label {
  font-size: 0.85rem;
  color: #64748b;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: white;
  color: #667eea;
  padding: 0.375rem 0.875rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1.5px solid #667eea;
}

.features-list {
  margin: 0.5rem 0 0 0;
  padding-left: 1.5rem;
  color: #475569;
}

.features-list li {
  margin-bottom: 0.375rem;
}

/* 技能标签 */
.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

/* 学习目标列表 */
.goals-list {
  margin: 0;
  padding-left: 1.5rem;
  color: #475569;
}

.goals-list li {
  margin-bottom: 0.75rem;
  line-height: 1.6;
}

/* ==================== 甘特图优化样式 ==================== */
.gantt-task-name-header {
  font-weight: 700;
  color: #2d3748;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 12px 0 0 0;
  position: relative;
  z-index: 1;
  min-width: 180px;
}

.gantt-weeks-header {
  display: flex;
  flex: 1;
  background: #f8fafc;
  border-radius: 0 12px 0 0;
  position: relative;
  z-index: 1;
}

.gantt-week {
  flex: 1;
  text-align: center;
  padding: 1rem 0.5rem;
  font-weight: 600;
  color: #7891B8;
  font-size: 0.85rem;
  border-right: 1px solid #e2e8f0;
}

.gantt-week:last-child {
  border-right: none;
}

.gantt-task-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 180px;
  padding: 1rem;
  background: white;
  position: relative;
  left: 0;
  z-index: 1;
}

.task-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.gantt-task-name label {
  cursor: pointer;
  font-weight: 500;
  color: #2d3748;
}

.gantt-timeline {
  flex: 1;
  position: relative;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, transparent calc(100% / 12 - 1px), #f1f5f9 calc(100% / 12 - 1px), #f1f5f9 calc(100% / 12));
  background-size: calc(100% / 12) 100%;
}

.gantt-bar {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;
}

.gantt-bar:hover {
  transform: translateY(-50%) scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}

.gantt-bar.completed {
  opacity: 0.7;
}

.gantt-bar-label {
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1100px) {
  .ai-dashboard {
    grid-template-columns: 1fr;
  }
  .insight-sidebar {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .insight-card {
    flex: 1;
    min-width: 260px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.1rem;
  }
  .hero-action-row {
    flex-direction: column;
    align-items: flex-start;
  }
  .insight-sidebar {
    flex-direction: column;
  }
}
</style>
