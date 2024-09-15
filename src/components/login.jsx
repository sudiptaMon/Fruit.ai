import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/loginform.css';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleTabClick = (tab) => {
    setIsLogin(tab === 'login');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="form-tabs">
          <Link
            to="/login" // Dummy link for Login tab
            className={isLogin ? 'active-tab' : ''}
            onClick={() => handleTabClick('login')}
          >
            Login
          </Link>
          <Link
            to="/register" // Dummy link for Register tab
            className={!isLogin ? 'active-tab' : 'inactive-tab'}
            onClick={() => handleTabClick('register')}
          >
            Register
          </Link>
        </div>

        {isLogin ? (
          <form className="login-form">
            <h2>Login</h2>
            <p>
              By signing in you are agreeing to our <Link to="/terms">Terms and Privacy Policy</Link>
            </p>

            <div className="input-group">
              <input type="email" placeholder="&#xf0e0; Email Address" className='input' required />
            </div>

            <div className="input-group">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="&#xf023; Password"
                className='input'
                required
              />
              <i
                className={`fa ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'} show-password-icon`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>

            <div className="remember-forgot">
              <label className="remember-password">
                <input type="checkbox" className='chbox'/> <span>Remember password</span>
              </label>
              <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
            </div>

            <button type="submit" className="login-btn">Login</button>
          </form>
        ) : (
          <div className="register-message">
            <h2>Service is not available yet</h2>
            <p>Check back later or <Link to="/register">register</Link> when it's ready.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
