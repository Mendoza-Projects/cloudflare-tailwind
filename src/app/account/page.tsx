import React from 'react';

const AccountPage = () => {
  return (
    <div className="home-container">
      <div className="main-top-nav-wrapper">
        <div className="left-menu">
          <ul className="menu-list">
            <li>Home</li>
            <li>Beats</li>
          </ul>
        </div>
        <div className="right-menu">
          <ul className="menu-list">
            <li>Account</li>
            <li>Contact</li>
          </ul>
          <div className="auth-buttons">
            <button className="bs-btn">Manage Account</button>
            <button className="bs-btn">Logout</button>
          </div>
        </div>
      </div>

      <main className="account-content">
        <h1>Welcome to your account</h1>
        {/* Additional account settings or profile info can go here */}
      </main>
    </div>
  );
};

export default AccountPage;
