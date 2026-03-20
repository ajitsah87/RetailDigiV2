"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          {/* Brand */}
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <div className={styles.footerLogoIcon}>R</div>
              <span className={styles.footerLogoText}>RetailDigi</span>
            </div>
            <p className={styles.footerTagline}>
              Builders of Category Leaders. Scaling brands with Attention, Ads
              &amp; Analytics across D2C &amp; Ecommerce platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerColumn}>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#clients">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerColumn}>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Website Design</a></li>
              <li><a href="#services">Performance Marketing</a></li>
              <li><a href="#services">Content Marketing</a></li>
              <li><a href="#services">Marketplace Scaling</a></li>
              <li><a href="#services">Quick Commerce</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerColumn}>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:hello@retaildigi.com">hello@retaildigi.com</a>
              </li>
              <li>
                <a href="#">India</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} RetailDigi. All rights reserved.</span>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">📷</a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">💼</a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">🐦</a>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">📘</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
