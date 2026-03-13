import React, { useState } from 'react';
import { 
  Check, 
  Zap, 
  Star, 
  Rocket, 
  Crown, 
  ArrowLeft, 
  Info,
  ShieldCheck,
  CreditCard,
  Gift
} from 'lucide-react';
import './PricingPage.css';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly, yearly

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '₹0',
      description: 'Perfect for getting started and trying out our basic tools.',
      icon: <Zap size={24} />,
      features: [
        '1 AI-Optimized Resume',
        'Basic Professional Template',
        'Standard PDF Export',
        'Manual Skill Entry'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '₹299',
      description: 'The standard for serious job seekers who want to stand out.',
      icon: <Star size={24} />,
      features: [
        'Unlimited AI Resumes',
        'Advanced Premium Templates',
        'Detailed ATS Scoring',
        'AI Content Rewriting',
        'Skill Gap Analysis',
        'Priority Support'
      ],
      cta: 'Upgrade to Pro',
      popular: true,
      tag: 'MOST POPULAR'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '₹799',
      description: 'The complete career accelerator for ambitious professionals.',
      icon: <Crown size={24} />,
      features: [
        'Everything in Pro+',
        'AI Interview Simulation',
        'Personal Portfolio Builder',
        'LinkedIn Profile Optimizer',
        'Dedicated Career Coach AI',
        'Early Access to New Features'
      ],
      cta: 'Go Premium',
      popular: false
    }
  ];

  return (
    <div className="pricing-page">
      <div className="pr-background">
        <div className="pr-glow pr-glow-1"></div>
        <div className="pr-glow pr-glow-2"></div>
      </div>

      <header className="pr-header">
        <div className="container pr-nav">
          <a href="#" className="back-btn">
            <ArrowLeft size={18} />
            <span>Back to CareerForge</span>
          </a>
          <div className="pr-logo">
            <Rocket className="pr-logo-icon" size={28} />
            <span>CareerForge Pricing</span>
          </div>
          <div className="spacer"></div>
        </div>
      </header>

      <main className="container pr-main">
        <section className="pr-hero animate-fade-in">
          <h1>Investment in your <span className="text-gradient">Career</span></h1>
          <p>Choose the plan that fits your professional goals. Cancel or upgrade anytime.</p>
          
          <div className="billing-toggle">
            <span className={billingCycle === 'monthly' ? 'active' : ''}>Monthly</span>
            <button 
              className={`toggle-switch ${billingCycle === 'yearly' ? 'on' : ''}`}
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            >
              <div className="toggle-knob"></div>
            </button>
            <span className={billingCycle === 'yearly' ? 'active' : ''}>Yearly <span className="save-tag">SAVE 20%</span></span>
          </div>
        </section>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div key={plan.id} className={`plan-card glass-panel ${plan.popular ? 'popular' : ''} animate-up`}>
              {plan.popular && <div className="popular-badge">{plan.tag}</div>}
              
              <div className="plan-header">
                <div className={`plan-icon-box ${plan.id}`}>
                  {plan.icon}
                </div>
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="currency">₹</span>
                  <span className="amount">{billingCycle === 'monthly' ? plan.price.slice(1) : Math.floor(parseInt(plan.price.slice(1)) * 0.8 * 12 / 12)}</span>
                  <span className="period">/month</span>
                </div>
                {billingCycle === 'yearly' && plan.id !== 'free' && (
                  <div className="yearly-total">Billed annually (₹{Math.floor(parseInt(plan.price.slice(1)) * 0.8 * 12)})</div>
                )}
                <p className="plan-desc">{plan.description}</p>
              </div>

              <div className="plan-features">
                <div className="feat-title">WHAT'S INCLUDED:</div>
                <ul>
                  {plan.features.map((feat, i) => (
                    <li key={i}>
                      <Check size={18} className="check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="plan-footer">
                <button className={`btn w-100 ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.cta}
                </button>
                <div className="guarantee">
                  <ShieldCheck size={14} />
                  <span>30-day money back guarantee</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="pricing-faq">
          <div className="faq-header">
            <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Can I switch plans later?</h4>
              <p>Yes! You can upgrade or downgrade your plan at any time from your dashboard settings. If you upgrade, the price will be prorated.</p>
            </div>
            <div className="faq-item">
              <h4>Is my payment data secure?</h4>
              <p>Absolutely. We use industry-standard encryption and partner with secure payment processors like Stripe and Razorpay to handle transactions.</p>
            </div>
            <div className="faq-item">
              <h4>What happens to my resumes if I cancel?</h4>
              <p>Your created resumes will remain in your account, but you will only be able to view and edit 1 resume if you move back to the Free plan.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer any student discounts?</h4>
              <p>Yes, we offer a 50% discount for verified students. Contact our support team with your student ID to get your unique discount code.</p>
            </div>
          </div>
        </section>

        <section className="pricing-trust">
          <div className="trust-card glass-panel">
            <div className="trust-content">
              <Gift size={32} className="trust-icon" />
              <div className="trust-text">
                <h3>Try CareerForge risk-free</h3>
                <p>Not sure yet? Start with our Free plan and see the difference AI makes in your job search.</p>
              </div>
            </div>
            <button className="btn btn-secondary">Create Your First Resume</button>
          </div>
        </section>
      </main>

      <footer className="pricing-footer">
        <div className="container">
          <div className="pf-content">
            <div className="pf-brand">
              <Rocket size={20} />
              <span>CareerForge</span>
            </div>
            <p>© 2026 AI Career Accelerator. Built for Indrajit.</p>
            <div className="pf-links">
              <span className="pf-l"><CreditCard size={14} /> Secure Payment</span>
              <span className="pf-l"><Info size={14} /> Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingPage;
