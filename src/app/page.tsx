'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link"; // Import Link from next/link

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
            <li><Link href="/">Home</Link></li> {/* Use Link here */}
            <li><Link href="/beats">Beats</Link></li> {/* Use Link here */}
          </ul>
        </div>

        <div className="right-menu">
          <ul className="menu-list">
            <li><Link href="/contact">Contact</Link></li> {/* Use Link here */}
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
                    <li><Link href="/account">Manage Account</Link></li> {/* Use Link here */}
                    <li><Link href="/purchased">Purchased</Link></li> {/* Use Link here */}
                    <li><Link href="/licenses">Licenses</Link></li> {/* Use Link here */}
                    <li><Link href="/help">Help</Link></li> {/* Use Link here */}
                    <li><button onClick={handleLogout}>Logout</button></li>
                  </ul>
                )}
              </div>
            ) : (
              // Default Sign Up & Login Buttons
              <>
                <Link href="https://your-cloudflare-auth-url.com" className="bs-btn action-element">Sign Up</Link> {/* Use Link here */}
                <Link href="https://your-cloudflare-auth-url.com" className="bs-btn action-element">Login</Link> {/* Use Link here */}
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
