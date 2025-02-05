import React from 'react';
import Link from 'next/link';  // Import Link

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="main-top-nav-wrapper">
        <div className="left-menu">
          <ul className="menu-list">
            <li><Link href="/">Home</Link></li>  {/* Replace <a> with <Link> */}
            <li><Link href="/beats">Beats</Link></li>  {/* Replace <a> with <Link> */}
          </ul>
        </div>
        <div className="right-menu">
          <ul className="menu-list">
            <li><Link href="/account">Account</Link></li>  {/* Replace <a> with <Link> */}
            <li><Link href="/contact">Contact</Link></li>  {/* Replace <a> with <Link> */}
          </ul>
          <div className="auth-buttons">
            <button className="bs-btn action-element">Sign Up</button>
            <button className="bs-btn action-element">Login</button>
          </div>
        </div>
      </header>

      <main>
        {/* Main content for the homepage */}
        <section className="intro">
          <h1>Welcome to 321 MAFIA</h1>
          <p>Your go-to place for premium beats</p>
        </section>

        <section className="featured-beats">
          <h2>Featured Beats</h2>
          {/* List your beats here */}
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 321 MAFIA. All rights reserved.</p>
      </footer>
    </div>
  );
}
