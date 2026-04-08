"use client";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.bigHeading}>
            PR
            <span className={styles.circleArrow}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7"/>
                <path d="M7 7h10v10"/>
              </svg>
            </span>
            JECT IN <i className={styles.mindText}>MIND?</i>
          </div>
          
          <div className={styles.socialPills}>
             <a href="#" className={styles.pill}>
               <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="400px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>Linkdin
             </a>
            
         
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.leftCol}>
            <div className={styles.logoArea}>
              <img src="/logo.png" alt="RetailDigi" />
            </div>
            <p className={styles.tagline}>
              We combine strategy, creativity, and technology to help brands grow in the modern digital landscape.
            </p>
            <form className={styles.emailForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email..." className={styles.emailInput} required />
              <button type="submit" className={styles.submitBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </button>
            </form>
          </div>

          <div className={styles.rightCols}>
            <div className={styles.navGroup}>
              <div className={styles.navBlock}>
                <h4>Main Pages</h4>
                <ul className={styles.pairedLinks}>
                  <li>
                    <a href="#home">Home</a>
                    <span className={styles.dot}>•</span>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                    <span className={styles.dot}>•</span>
                    <a href="#portfolio">Our Portfolio</a>
                  </li>
                  <li>
                    <a href="#blogs">Blogs</a>
                    <span className={styles.dot}>•</span>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className={styles.navBlock}>
                <h4>Services</h4>
                <ul className={styles.pairedLinks}>
                  <li>
                    <a href="#services">Website Design</a>
                    <span className={styles.dot}>•</span>
                    <a href="#services">Performance Mktg</a>
                  </li>
                  <li>
                    <a href="#services">Content Mktg</a>
                    <span className={styles.dot}>•</span>
                    <a href="#services">Marketplace</a>
                  </li>
                  <li>
                    <a href="#services">Quick Commerce</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.navGroup}>
              <div className={styles.navBlock}>
                <h4>Location</h4>
                <p>Gurgaon, India</p>
              </div>
              <div className={styles.navBlock}>
                <h4>Contact</h4>
                <p>
                  <a href="mailto:hello@retaildigi.com">hello@retaildigi.com</a><br/>
                  <a href="tel:+919599170728">+91 95991 70728</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
