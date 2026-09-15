import React, { useState } from 'react';
import '../styles/LoginForm.css';

/**
 * LoginForm Component
 * Clean, centered login card for SkillPilot.
 * Accepts credentials: admin / admin
 */
export default function LoginForm({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [pocNotice, setPocNotice] = useState('');

  // Handle submit action
  const handleSubmit = (e) => {
    e.preventDefault();
    setPocNotice('');

    const newErrors = {};

    // Validate required fields
    if (!username.trim()) {
      newErrors.username = 'Username is required.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    }

    // Check credentials (must be admin / admin)
    if (username.trim() && password) {
      if (username.trim() !== 'admin' || password !== 'admin') {
        newErrors.general = 'Invalid credentials. Please try again.';
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear previous errors & trigger simulated 1.5s loading state
    setErrors({});
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
    }, 1500);
  };

  const handlePocFeatureClick = (e, featureName) => {
    e.preventDefault();
    setPocNotice(`"${featureName}" is not included in this PoC.`);
  };

  return (
    <div className="auth-card">
      {/* Brand & Title */}
      <div className="auth-header">
        <div className="brand-logo-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <circle cx="19" cy="5" r="2" />
            <circle cx="5" cy="19" r="2" />
            <path d="M10.5 13.5L6.5 17.5" />
            <path d="M17.5 6.5L13.5 10.5" />
            <path d="M19 12a7 7 0 0 0-7-7" strokeDasharray="2 2" />
          </svg>
        </div>
        <h2>SkillPilot</h2>
        <p>Sign in to your account</p>
      </div>

      {/* General credential error banner */}
      {errors.general && (
        <div className="auth-alert-box error-alert">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{errors.general}</span>
        </div>
      )}

      {/* PoC Notice banner */}
      {pocNotice && (
        <div className="auth-alert-box info-alert">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <span>{pocNotice}</span>
        </div>
      )}

      {/* Form Element */}
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        {/* Username Field */}
        <div className="form-group">
          <label className="form-label" htmlFor="username-input">
            Username
          </label>
          <div className="input-wrapper">
            <input
              id="username-input"
              type="text"
              className={`form-input ${errors.username || errors.general ? 'has-error' : ''}`}
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (errors.username || errors.general) {
                  setErrors((prev) => ({ ...prev, username: '', general: '' }));
                }
              }}
              disabled={isLoading}
              autoComplete="username"
            />
          </div>
          {errors.username && (
            <span className="field-error">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errors.username}
            </span>
          )}
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label className="form-label" htmlFor="password-input">
            Password
          </label>
          <div className="input-wrapper">
            <input
              id="password-input"
              type={showPassword ? 'text' : 'password'}
              className={`form-input ${errors.password || errors.general ? 'has-error' : ''}`}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password || errors.general) {
                  setErrors((prev) => ({ ...prev, password: '', general: '' }));
                }
              }}
              disabled={isLoading}
              autoComplete="current-password"
            />
            {/* Show / Hide Toggle */}
            <button
              type="button"
              className="toggle-password-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              title={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          {errors.password && (
            <span className="field-error">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errors.password}
            </span>
          )}
        </div>

        {/* Options Row: Remember Me (Not in PoC) & Forgot Password (Not in PoC) */}
        <div className="form-options-row">
          <label
            className="remember-label not-in-poc"
            onClick={(e) => handlePocFeatureClick(e, 'Remember Me')}
            title="Feature not included in this PoC"
          >
            <input
              type="checkbox"
              className="remember-checkbox"
              disabled
            />
            <span>Remember me <span className="poc-badge">Not in PoC</span></span>
          </label>

          <a
            href="#forgot-password"
            className="forgot-password-link not-in-poc"
            onClick={(e) => handlePocFeatureClick(e, 'Forgot Password')}
            title="Feature not included in this PoC"
          >
            Forgot password? <span className="poc-badge">Not in PoC</span>
          </a>
        </div>

        {/* Action Button with 1.5s Loading Spinner */}
        <button
          type="submit"
          className="submit-btn"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="btn-spinner" />
              <span>Authenticating...</span>
            </>
          ) : (
            <>
              <span>Sign In</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
