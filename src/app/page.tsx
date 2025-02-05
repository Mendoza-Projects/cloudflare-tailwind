"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

// Define the User interface
interface User {
  profileImage: string | null;
  // Add other properties like 'name', 'email', etc.
}

export default function HomePage() {
  const [user, setUser] = useState<User | null>(null); // Use the defined User type or null
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check Cloudflare Access JWT
    const token = Cookies.get("CF_Authorization");
    if (token) {
      fetch("/api/auth", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setUser(data.user))
        .catch(() => setUser(null));
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("CF_Authorization");
    setUser(null);
    router.push("/");
  };

  return (
    <div className="home-container">
      {/* NAVIGATION */}
      <header className="main-top-nav-wrapper">
        <div className="left-menu">
          <ul className="menu-list">
            <li><a href="/">Home</a></li>
            <li><a href="/beats">Beats</a></li>
          </ul>
        </div>

        <div className="right-menu">
          <ul className="menu-list">
            <li><a href="/contact">Contact</a></li>
          </ul>

          <div className="auth-buttons">
            {user ? (
              // Logged-in User Profile Dropdown
              <div className="profile-dropdown">
                <button onClick={() => setMenuOpen(!menuOpen)} className="bs-btn profile-btn">
                  <img src={user.profileImage || "/default-avatar.png"} alt="Profile" className="profile-pic" />
                </button>
                {menuOpen && (
                  <ul className="dropdown-menu">
                    <li><a href="/account">Manage Account</a></li>
                    <li><a href="/purchased">Purchased</a></li>
                    <li><a href="/licenses">Licenses</a></li>
                    <li><a href="/help">Help</a></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                  </ul>
                )}
              </div>
            ) : (
              // Default Sign Up & Login Buttons
              <>
                <a href="https://your-cloudflare-auth-url.com" className="bs-btn action-element">Sign Up</a>
                <a href="https://your-cloudflare-auth-url.com" className="bs-btn action-element">Login</a>
              </>
            )}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>
        <section className="intro">
          <h1>Welcome to 321 MAFIA</h1>
          <p>Your go-to place for premium beats</p>
        </section>

        <section className="featured-beats">
          <h2>Featured Beats</h2>
          {/* Beats listing here */}
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 321 MAFIA. All rights reserved.</p>
      </footer>
    </div>
  );
}
