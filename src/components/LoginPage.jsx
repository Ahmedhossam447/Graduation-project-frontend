import React, { useState } from 'react';
import LoginForm from './LoginForm';
import '../styles/LoginPage.css';

/**
 * LoginPage Component
 * Clean, centered authentication container.
 * No Intelligence Panel.
 * When logged in, displays "Welcome to SkillPilot" with a Sign Out option.
 */
export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="login-page-container centered">
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <div className="welcome-card">
          <div className="welcome-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h2>Welcome to SkillPilot</h2>
          <p>You have successfully signed in.</p>
          <button
            type="button"
            className="welcome-signout-btn"
            onClick={() => setIsLoggedIn(false)}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
