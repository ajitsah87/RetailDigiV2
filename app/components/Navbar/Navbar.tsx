"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#clients" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
        id="navbar"
      >
        <div className={styles.navContainer}>
          <div className={styles.navInner}>
            <a href="#home" className={styles.logo}>
              <div className={styles.logoIcon}>R</div>
              <span className={styles.logoText}>RetailDigi</span>
            </a>

            <ul className={styles.navLinks}>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={styles.navLink}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href="#contact" className={styles.ctaBtn}>
              Partner With Us
              <span className={styles.ctaArrow}>→</span>
            </a>

            <button
              className={`${styles.menuToggle} ${menuOpen ? styles.open : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.href);
            }}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.ctaBtn}
          style={{ display: "inline-flex", marginTop: 12 }}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
        >
          Partner With Us →
        </a>
      </div>
    </>
  );
}
