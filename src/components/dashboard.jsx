import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard Overview</h2>
      <div className="card-grid">
        <div className="card">
          <h3>Total Users</h3>
          <p>1,245</p>
        </div>
        <div className="card">
          <h3>Records</h3>
          <p>328</p>
        </div>
        <div className="card">
          <h3>Active Now</h3>
          <p>42</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;