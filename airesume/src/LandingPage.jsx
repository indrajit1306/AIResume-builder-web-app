import React from 'react';
import './LandingPage.css';
import {
  BrainCircuit,
  FileText,
  Target,
  Briefcase,
  Crosshair,
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  PlayCircle
} from 'lucide-react';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <BrainCircuit className="logo-icon" size={28} />
            <span>CareerForge AI</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#templates">Templates</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="nav-actions">
            <a href="#login" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Log in</a>
            <a href="#onboarding" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow-1"></div>
        <div className="hero-glow-2"></div>

        <div className="container hero-content">
          <div className="hero-badge">
            <Sparkles size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            CareerForge 2.0 is now live
          </div>
          <h1 className="hero-title">
            Build a <span className="text-gradient">Job-Winning</span> Resume with AI
          </h1>
          <p className="hero-subtitle">
            The intelligent resume builder that writes, optimizes, and matches you with top jobs instantly using advanced AI algorithms.
          </p>
          <div className="hero-cta">
            <a href="#onboarding" className="btn btn-primary">
              Create Resume Free
              <ArrowRight size={18} />
            </a>
            <button className="btn btn-secondary">
              <PlayCircle size={18} />
              See Demo
            </button>
          </div>

          <div className="hero-visual-wrapper">
            <img
              src="/hero-preview.png"
              alt="AI generating resume preview"
              className="hero-visual"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="social-proof">
        <div className="container">
          <h6 className="social-title">Trusted by professionals hired at</h6>
          <div className="logos-container">
            {/* Using text logos for demonstration, in a real app these would be SVGs */}
            <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit' }}>Google</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit' }}>Microsoft</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit' }}>amazon</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit' }}>META</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit' }}>NETFLIX</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Everything you need to <span className="text-gradient">stand out</span></h2>
            <p className="section-subtitle">
              Our AI analyzes millions of successful resumes to give you an unfair advantage in the job market.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FileText size={24} />
              </div>
              <h3 className="feature-title">AI Resume Builder</h3>
              <p className="feature-desc">Generate professional, tailored resume content with just a few prompts in seconds.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Target size={24} />
              </div>
              <h3 className="feature-title">ATS Score Analyzer</h3>
              <p className="feature-desc">Ensure your resume passes Applicant Tracking Systems with our predictive scoring engine.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Sparkles size={24} />
              </div>
              <h3 className="feature-title">Resume Tailoring</h3>
              <p className="feature-desc">Instantly adapt your resume keywords to match the exact description of any job posting.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Briefcase size={24} />
              </div>
              <h3 className="feature-title">Job Match Engine</h3>
              <p className="feature-desc">Discover roles that perfectly align with your background, skills, and career trajectory.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <Crosshair size={24} />
              </div>
              <h3 className="feature-title">Skill Gap Detector</h3>
              <p className="feature-desc">Identify missing skills holding you back and get personalized recommendations to level up.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <MessageSquare size={24} />
              </div>
              <h3 className="feature-title">AI Interview Coach</h3>
              <p className="feature-desc">Practice with our AI interviewer to master common questions specific to your target role.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding" style={{ background: 'var(--bg-card)' }}>
        <div className="container text-center">
          <div className="section-header text-center">
            <h2 className="section-title">Three steps to your <span className="text-gradient">dream job</span></h2>
            <p className="section-subtitle">
              We've streamlined the entire process so you can focus on preparing for the interview.
            </p>
          </div>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Upload Resume</h3>
              <p className="step-desc">Import your existing resume or LinkedIn profile as a starting point, or build from scratch.</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">AI Optimize</h3>
              <p className="step-desc">Our AI rewrites bullets, inserts optimal keywords, and formats everything perfectly.</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Download & Apply</h3>
              <p className="step-desc">Export your polished resume in PDF or Word format and start applying with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="section-padding templates-section">
        <div className="container text-center">
          <div className="section-header">
            <h2 className="section-title">Designs that <span className="text-gradient">get noticed</span></h2>
            <p className="section-subtitle">
              Choose from dozens of professionally crafted templates designed to beat the ATS and impress human readers.
            </p>
          </div>

          <div className="templates-showcase">
            <img
              src="/templates-preview.png"
              alt="Modern Resume Templates"
              className="templates-img"
              style={{ marginBottom: '3rem' }}
            />
            <div className="text-center">
              <a href="#templates" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                Explore Template Gallery
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Loved by <span className="text-gradient">successful candidates</span></h2>
            <p className="section-subtitle">
              See how CareerForge AI has helped thousands land their dream roles at top companies.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="rating">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="testimonial-text">
                "I was struggling to get interviews for months. CareerForge rewrote my bullets to highlight impact over duties. Within 2 weeks, I landed 4 interviews including my dream job!"
              </p>
              <div className="user-info">
                <div className="avatar" style={{ background: '#ec4899' }}></div>
                <div>
                  <div className="user-name">Sarah Jenkins</div>
                  <div className="user-role">Product Manager @ Stripe</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="rating">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="testimonial-text">
                "The ATS analyzer is a game-changer. I finally understood why my resume was getting rejected. Once I hit a 95+ score using the AI suggestions, the recruiter calls started pouring in."
              </p>
              <div className="user-info">
                <div className="avatar" style={{ background: '#6366f1' }}></div>
                <div>
                  <div className="user-name">David Chen</div>
                  <div className="user-role">Software Engineer @ Meta</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="rating">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="testimonial-text">
                "As a recent grad with limited experience, I didn't know how to market myself. The AI helped translate my university projects into professional, compelling achievements."
              </p>
              <div className="user-info">
                <div className="avatar" style={{ background: '#10b981' }}></div>
                <div>
                  <div className="user-name">Jessica Miller</div>
                  <div className="user-role">Data Analyst @ Spotify</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Simple, transparent <span className="text-gradient">pricing</span></h2>
            <p className="section-subtitle">
              Invest in your career with a plan that pays for itself with your first paycheck.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Free */}
            <div className="pricing-card">
              <h3 className="plan-name">Free</h3>
              <div className="plan-price">$0<span>/mo</span></div>
              <p className="feature-desc">Perfect for testing the waters and seeing the AI in action.</p>
              <div className="plan-features">
                <div className="plan-feature"><CheckCircle2 className="feature-check" size={18} /> 1 AI Resume Generation</div>
                <div className="plan-feature"><CheckCircle2 className="feature-check" size={18} /> Basic ATS Analysis</div>
                <div className="plan-feature"><CheckCircle2 className="feature-check" size={18} /> 3 Standard Templates</div>
                <div className="plan-feature" style={{ opacity: 0.5 }}>- AI Resume Tailoring</div>
                <div className="plan-feature" style={{ opacity: 0.5 }}>- Interview Coach Access</div>
              </div>
              <button className="btn btn-secondary" style={{ width: '100%' }}>Get Started Free</button>
            </div>

            {/* Pro */}
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3 className="plan-name">Pro</h3>
              <div className="plan-price">$19<span>/mo</span></div>
              <p className="feature-desc">Everything you need to land interviews consistently.</p>
              <div className="plan-features">
                <div className="plan-feature"><CheckCircle2 className="feature-check" size={18} /> Unlimited AI Generations</div>
                <div className="plan-feature"><CheckCircle2 className="feature-check" size={18} /> Advanced ATS Analysis</div>
                <div className="plan-feature"><CheckCircle2 className="feature-check" size={18} /> All Premium Templates</div>
                <div className="plan-feature"><CheckCircle2 className="feature-check" size={18} /> 50 Resume Tailorings/mo</div>
                <div className="plan-feature" style={{ opacity: 0.5 }}>- Interview Coach Access</div>
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Upgrade to Pro</button>
            </div>

            {/* Premium */}
            <div className="pricing-card">
              <h3 className="plan-name">Premium</h3>
              <div className="plan-price">$39<span>/mo</span></div>
              <p className="feature-desc">The ultimate toolkit for serious job seekers and executives.</p>
              <div className="plan-features">
                <div className="plan-feature"><CheckCircle2 className="feature-check" size={18} /> Everything in Pro</div>
                <div className="plan-feature"><CheckCircle2 className="feature-check" size={18} /> Unlimited Tailoring</div>
                <div className="plan-feature"><CheckCircle2 className="feature-check" size={18} /> AI Interview Coach</div>
                <div className="plan-feature"><CheckCircle2 className="feature-check" size={18} /> Priority Support</div>
                <div className="plan-feature"><CheckCircle2 className="feature-check" size={18} /> LinkedIn Optimization</div>
              </div>
              <button className="btn btn-secondary" style={{ width: '100%' }}>Get Premium</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding final-cta">
        <div className="container final-cta-content text-center">
          <h2 className="section-title">Ready to land your dream job?</h2>
          <p className="section-subtitle" style={{ color: 'var(--text-primary)', marginBottom: '2rem' }}>
            Join thousands of professionals who have accelerated their careers with CareerForge AI.
          </p>
          <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Start Building Your Resume Now
            <Sparkles size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo" style={{ fontSize: '1.25rem' }}>
                <BrainCircuit className="logo-icon" size={24} />
                CareerForge AI
              </div>
              <p className="footer-desc">
                Empowering job seekers with artificial intelligence to optimize their applications and land better roles faster.
              </p>
            </div>

            <div>
              <h4 className="footer-heading">Product</h4>
              <div className="footer-links">
                <a href="#">Resume Builder</a>
                <a href="#">ATS Checker</a>
                <a href="#">Templates</a>
                <a href="#">Cover Letters</a>
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Resources</h4>
              <div className="footer-links">
                <a href="#">Career Blog</a>
                <a href="#">Resume Examples</a>
                <a href="#">Help Center</a>
                <a href="#">Interview Guides</a>
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Company</h4>
              <div className="footer-links">
                <a href="#">About Us</a>
                <a href="#">Contact</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>&copy; 2026 CareerForge AI. All rights reserved.</div>
            <div>Designed with ❤️ for job seekers.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
