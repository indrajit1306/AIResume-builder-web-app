import React from 'react';
import './LoginPage.css';
import { BrainCircuit, Mail, Lock, ArrowRight } from 'lucide-react';

function LoginPage() {
    return (
        <div className="login-container">
            {/* Background elements */}
            <div className="login-glow-1"></div>
            <div className="login-glow-2"></div>

            <div className="login-card">
                {/* Left Side: Illustration */}
                <div className="login-left">
                    <div className="login-brand">
                        <BrainCircuit className="logo-icon" size={28} />
                        <span className="logo-text">CareerForge AI</span>
                    </div>

                    <div className="login-left-content">
                        <h2>Welcome Back.</h2>
                        <p>Ready to continue your journey to your dream job?</p>
                    </div>

                    <img
                        src="/ai-assistant.png"
                        alt="AI Career Assistant"
                        className="login-illustration"
                    />
                </div>

                {/* Right Side: Login Form */}
                <div className="login-right">
                    <div className="login-header">
                        <h2>Log In</h2>
                        <p>Enter your credentials to access your account.</p>
                    </div>

                    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-wrapper">
                                <Mail className="input-icon" size={18} />
                                <input type="email" id="email" placeholder="john@example.com" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <label htmlFor="password">Password</label>
                                <a href="#forgot" className="forgot-link">Forgot password?</a>
                            </div>
                            <div className="input-wrapper">
                                <Lock className="input-icon" size={18} />
                                <input type="password" id="password" placeholder="••••••••" required />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary login-submit">
                            Log In <ArrowRight size={18} />
                        </button>
                    </form>

                    <div className="login-divider">
                        <span>Or continue with</span>
                    </div>

                    <div className="login-social">
                        <button className="btn-social">
                            {/* Google SVG Icon */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                        <button className="btn-social">
                            {/* LinkedIn SVG Icon */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2" />
                            </svg>
                            LinkedIn
                        </button>
                    </div>

                    <div className="login-footer">
                        <p>Don't have an account? <a href="#auth" className="signup-link">Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
