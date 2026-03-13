import React, { useState } from 'react';
import { 
  Users, 
  DollarSign, 
  FileText, 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Download, 
  MoreVertical, 
  Search, 
  Bell, 
  LayoutDashboard, 
  Settings, 
  ShieldCheck, 
  CreditCard,
  PieChart as PieChartIcon,
  ArrowUpRight,
  UserCheck
} from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeRange, setActiveRange] = useState('7d');

  const stats = [
    { label: 'Total Users', value: '12,482', trend: '+12%', isPositive: true, icon: <Users size={20} />, color: 'blue' },
    { label: 'Monthly Revenue', value: '₹4,82,900', trend: '+8.4%', isPositive: true, icon: <DollarSign size={20} />, color: 'green' },
    { label: 'Resumes Generated', value: '34,201', trend: '+15%', isPositive: true, icon: <FileText size={20} />, color: 'purple' },
    { label: 'Active Sessions', value: '1,204', trend: '-2.1%', isPositive: false, icon: <Activity size={20} />, color: 'orange' }
  ];

  const recentSubscriptions = [
    { id: '#SUB-9201', user: 'Rahul Sharma', plan: 'Pro', amount: '₹299', status: 'Success', date: '2 mins ago' },
    { id: '#SUB-9200', user: 'Anita Desai', plan: 'Premium', amount: '₹799', status: 'Success', date: '15 mins ago' },
    { id: '#SUB-9199', user: 'Vikram Singh', plan: 'Pro', amount: '₹299', status: 'Pending', date: '45 mins ago' },
    { id: '#SUB-9198', user: 'Priya Patel', plan: 'Free', amount: '₹0', status: 'Success', date: '1 hour ago' },
    { id: '#SUB-9197', user: 'Sameer Khan', plan: 'Premium', amount: '₹799', status: 'Success', date: '3 hours ago' }
  ];

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="admin-brand">
          <ShieldCheck className="brand-icon" />
          <span>Admin Portal</span>
        </div>
        <nav className="admin-nav">
          <button className="nav-item active"><LayoutDashboard size={20} /> Overview</button>
          <button className="nav-item"><Users size={20} /> User Management</button>
          <button className="nav-item"><CreditCard size={20} /> Revenue & Subs</button>
          <button className="nav-item"><FileText size={20} /> Template Analytics</button>
          <button className="nav-item"><Settings size={20} /> System Settings</button>
        </nav>
        <div className="admin-footer">
          <div className="admin-user">
            <div className="admin-avatar">A</div>
            <div className="admin-info">
              <p className="admin-name">Admin User</p>
              <p className="admin-role">Super Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="admin-content">
        <header className="admin-header">
          <div className="header-search">
            <Search size={18} />
            <input type="text" placeholder="Search for users, subs, or invoices..." />
          </div>
          <div className="header-actions">
            <div className="date-selector">
              <Calendar size={16} />
              <span>Last 30 Days</span>
            </div>
            <button className="icon-btn"><Bell size={20} /></button>
            <button className="btn btn-primary btn-sm"><Download size={16} /> Export Report</button>
          </div>
        </header>

        <main className="admin-scroll">
          <div className="admin-hero">
            <h1>Platform <span className="text-gradient">Analytics</span></h1>
            <p>Monitor growth, track revenue, and optimize user engagement from a single dashboard.</p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card glass-panel">
                <div className="stat-top">
                  <div className={`stat-icon-bg ${stat.color}`}>{stat.icon}</div>
                  <div className={`stat-trend ${stat.isPositive ? 'up' : 'down'}`}>
                    {stat.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {stat.trend}
                  </div>
                </div>
                <div className="stat-body">
                  <p className="stat-label">{stat.label}</p>
                  <h2 className="stat-value">{stat.value}</h2>
                </div>
              </div>
            ))}
          </div>

          <div className="charts-row">
            <div className="chart-container main-chart glass-panel">
              <div className="chart-header">
                <h3>Revenue Growth</h3>
                <div className="chart-tabs">
                  {['1d', '7d', '30d', 'all'].map(r => (
                    <button key={r} className={activeRange === r ? 'active' : ''} onClick={() => setActiveRange(r)}>{r}</button>
                  ))}
                </div>
              </div>
              <div className="mock-chart-visual">
                {/* Simulated Chart Bars */}
                <div className="bars-container">
                  {[40, 60, 45, 80, 55, 90, 70, 85, 60, 95, 80, 100].map((h, i) => (
                    <div key={i} className="bar" style={{ height: `${h}%` }}>
                      <div className="bar-tooltip">₹{(h * 100).toLocaleString()}</div>
                    </div>
                  ))}
                </div>
                <div className="x-axis">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
              </div>
            </div>

            <div className="chart-container side-chart glass-panel">
              <div className="chart-header">
                <h3>User Distribution</h3>
                <PieChartIcon size={20} className="text-secondary" />
              </div>
              <div className="distribution-list">
                <div className="dist-item">
                  <span className="dot pro"></span>
                  <span className="label">Pro Users</span>
                  <span className="val">45%</span>
                </div>
                <div className="dist-item">
                  <span className="dot premium"></span>
                  <span className="label">Premium</span>
                  <span className="val">20%</span>
                </div>
                <div className="dist-item">
                  <span className="dot free"></span>
                  <span className="label">Free Tier</span>
                  <span className="val">35%</span>
                </div>
                <div className="conversion-cta">
                  <UserCheck size={32} />
                  <p>Target: 10% increase in Pro conversions this month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="table-section glass-panel">
            <div className="table-header">
              <h3>Recent Subscriptions</h3>
              <button className="btn-text">View All Transactions <ArrowUpRight size={16} /></button>
            </div>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Trans. ID</th>
                  <th>Customer</th>
                  <th>Plan</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {recentSubscriptions.map((sub, i) => (
                  <tr key={i}>
                    <td className="font-mono">{sub.id}</td>
                    <td>
                      <div className="user-cell">
                        <div className="user-avatar-mini">{sub.user.charAt(0)}</div>
                        {sub.user}
                      </div>
                    </td>
                    <td><span className={`plan-tag ${sub.plan.toLowerCase()}`}>{sub.plan}</span></td>
                    <td className="font-bold">{sub.amount}</td>
                    <td><span className={`status-tag ${sub.status.toLowerCase()}`}>{sub.status}</span></td>
                    <td className="text-secondary">{sub.date}</td>
                    <td><button className="icon-btn-sm"><MoreVertical size={16} /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
