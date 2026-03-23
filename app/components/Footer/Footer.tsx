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
               <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
               </svg>FACEBOOK
             </a>
             <a href="#" className={styles.pill}>
               <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
               </svg>TWITTER
             </a>
             <a href="#" className={styles.pill}>
               <svg viewBox="0 0 24 24" fill="currentColor">
                 <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM20.1508 10.3687C20.4074 10.8872 20.5513 11.4338 20.5513 12.0001C20.5513 13.9113 19.1672 15.6599 17.3888 16.3848C17.1528 15.6987 16.8926 15.0227 16.611 14.3601C18.0691 13.0617 19.2635 11.8344 20.1508 10.3687ZM18.7749 6.84074C19.7828 8.1691 20.3533 9.77443 20.3533 11.4908C19.5297 12.9157 18.3375 14.1206 16.8971 15.4057C16.8049 15.1953 16.7118 14.9856 16.6178 14.7766C18.1706 13.6293 19.4674 12.3934 20.3204 10.8711C19.8242 10.6173 19.3039 10.3995 18.761 10.2205C18.6655 7.9156 18.2562 5.61763 17.5024 3.42151C18.7495 4.41727 19.6417 5.75333 18.7749 6.84074ZM15.7011 2.37328C16.7329 3.09701 17.5463 4.10398 18.0347 5.26786C18.6015 7.17013 18.9103 9.14175 18.9248 11.1396C16.5913 10.6306 14.1522 10.4578 11.7583 10.6481C10.6558 8.21626 9.38927 5.92329 7.9892 3.82021C9.17647 2.65175 10.5188 2.0001 12.0001 2.0001C13.2519 2.0001 14.4981 2.14697 15.7011 2.37328ZM6.02704 3.82056C7.30906 5.86435 8.52042 8.04943 9.61056 10.3396C8.242 10.9705 6.82881 11.4587 5.37893 11.8023C5.97808 8.20572 7.74906 5.5647 6.02704 3.82056ZM3.4542 12.0001C3.4542 12.2272 3.46887 12.4516 3.49753 12.6729C4.94522 12.3276 6.43003 11.8596 7.92207 11.232C8.36952 12.2335 8.7885 13.2566 9.17726 14.2982C7.03157 15.7725 4.88588 17.1648 3.5113 18.4984C3.46782 17.8427 3.4542 17.1741 3.4542 16.5001C3.4542 14.9461 3.87321 13.4191 4.54245 12.0001H3.4542ZM4.44498 19.349C5.69838 18.1568 7.64333 16.8928 9.6151 15.5414C10.6128 18.2536 11.3733 21.0564 11.8794 21.9213C9.07342 21.7825 6.55627 20.8407 4.44498 19.349ZM13.8205 21.656C13.3855 20.8931 12.7214 18.2435 11.7583 15.6596C13.266 15.0253 14.819 14.354 16.3916 13.6231C16.6346 14.2818 16.8643 14.9453 17.0792 15.6143C16.7456 16.3117 16.3815 16.9922 15.9875 17.6534C15.352 19.2317 14.6402 20.5755 13.8205 21.656Z" />
               </svg>DRIBBLE
             </a>
             <a href="#" className={styles.pill}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
               </svg>INSTAGRAM
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
