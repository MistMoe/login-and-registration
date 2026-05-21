import { useState } from "react";
import "./AuthPage.css";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const switchMode = (m) => {
    setMode(m);
    setShowPassword(false);
    setShowConfirm(false);
  };

  return (
    <div className="auth-overlay">
      <div className={`auth-card ${mode === "register" ? "expanded" : ""}`}>
        {/* Logo / Brand */}
        <div className="auth-brand">
          <div className="auth-logo">✦</div>
          <span className="auth-site-name">20232122212——LIMENG</span>
        </div>

        {/* Tab Switch */}
        <div className="auth-tabs">
          <button
            className={`auth-tab ${mode === "login" ? "active" : ""}`}
            onClick={() => switchMode("login")}
          >
            登录
          </button>
          <button
            className={`auth-tab ${mode === "register" ? "active" : ""}`}
            onClick={() => switchMode("register")}
          >
            注册
          </button>
          <div className={`auth-tab-indicator ${mode === "register" ? "right" : ""}`} />
        </div>

        {/* ───────── LOGIN FORM ───────── */}
        {mode === "login" && (
          <div className="auth-form" key="login">
            <p className="auth-subtitle">欢迎回来，请登录你的账户</p>

            <div className="field-group">
              <label>邮箱地址</label>
              <div className="input-wrap">
                <span className="input-icon">✉</span>
                <input type="email" placeholder="name@example.com" />
              </div>
            </div>

            <div className="field-group">
              <label>密码</label>
              <div className="input-wrap">
                <span className="input-icon">⌒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="输入你的密码"
                />
                <button className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "●" : "○"}
                </button>
              </div>
            </div>

            <div className="auth-row">
              <label className="check-label">
                <input type="checkbox" />
                <span>记住我</span>
              </label>
              <a href="#" className="auth-link">忘记密码？</a>
            </div>

            <button className="auth-submit">登 录</button>

            <div className="auth-divider"><span>或使用第三方登录</span></div>

            <div className="social-row">
              <button className="social-btn">𝔾 Google</button>
              <button className="social-btn">⌘ Apple</button>
            </div>

            <p className="auth-switch-text">
              还没有账号？
              <button className="inline-link" onClick={() => switchMode("register")}>立即注册</button>
            </p>
          </div>
        )}

        {/* ───────── REGISTER FORM ───────── */}
        {mode === "register" && (
          <div className="auth-form" key="register">
            <p className="auth-subtitle">创建你的专属账户</p>

            {/* 必填 */}
            <div className="field-row-2">
              <div className="field-group">
                <label>姓名 <span className="required">*</span></label>
                <div className="input-wrap">
                  <span className="input-icon">人</span>
                  <input type="text" placeholder="你的姓名" />
                </div>
              </div>
              <div className="field-group">
                <label>用户名 <span className="optional">选填</span></label>
                <div className="input-wrap">
                  <span className="input-icon">@</span>
                  <input type="text" placeholder="@username" />
                </div>
              </div>
            </div>

            <div className="field-group">
              <label>邮箱地址 <span className="required">*</span></label>
              <div className="input-wrap">
                <span className="input-icon">✉</span>
                <input type="email" placeholder="name@example.com" />
              </div>
            </div>

            <div className="field-row-2">
              <div className="field-group">
                <label>手机号码 <span className="optional">选填</span></label>
                <div className="input-wrap">
                  <span className="input-icon">☏</span>
                  <input type="tel" placeholder="+86 138 0000 0000" />
                </div>
              </div>
              <div className="field-group">
                <label>生日 <span className="optional">选填</span></label>
                <div className="input-wrap">
                  <span className="input-icon">◈</span>
                  <input type="date" />
                </div>
              </div>
            </div>

            <div className="field-row-2">
              <div className="field-group">
                <label>密码 <span className="required">*</span></label>
                <div className="input-wrap">
                  <span className="input-icon">⌒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="至少 8 位"
                  />
                  <button className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "●" : "○"}
                  </button>
                </div>
              </div>
              <div className="field-group">
                <label>确认密码 <span className="required">*</span></label>
                <div className="input-wrap">
                  <span className="input-icon">⌒</span>
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="再次输入"
                  />
                  <button className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? "●" : "○"}
                  </button>
                </div>
              </div>
            </div>

            <div className="field-group">
              <label>个人简介 <span className="optional">选填</span></label>
              <div className="input-wrap textarea-wrap">
                <textarea placeholder="介绍一下自己..." rows={2} />
              </div>
            </div>

            <label className="check-label terms">
              <input type="checkbox" />
              <span>我已阅读并同意 <a href="#" className="auth-link">服务条款</a> 与 <a href="#" className="auth-link">隐私政策</a></span>
            </label>

            <button className="auth-submit">创建账户</button>

            <p className="auth-switch-text">
              已有账号？
              <button className="inline-link" onClick={() => switchMode("login")}>直接登录</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
