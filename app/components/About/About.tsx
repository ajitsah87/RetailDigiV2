"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  { name: "Meta", logo: "/meta.svg", height: 28 },
  { name: "amazon", logo: "/amazon.png", height: 32 },
  { name: "blinkit", logo: "/blinkit.png", height: 32 },
  { name: "zepto", logo: "/zepto.png", height: 30 },
  { name: "Google Ads", logo: "/Google_Ads_logo.svg", height: 40 },
  { name: "Flipkart", logo: "/flipkart.png", height: 32 },
  { name: "Myntra", logo: "/myntra.png", height: 32 },
  { name: "firstcry", logo: "/firstcry.png", height: 34 },
  { name: "bigbasket", logo: "/bigbasket.png", height: 34 },
  { name: "Swiggy Instamart", logo: "/swiggy.png", height: 36 },
  { name: "NYKAA", logo: "/nykaa.png", height: 26 },
];

const capabilities = [
  {
    label: "Content Strategy",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.capIcon}>
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    ),
  },
  {
    label: "UI/ UX Design",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.capIcon}>
        <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
      </svg>
    ),
  },
  {
    label: "Performance Ads",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.capIcon}>
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      </svg>
    ),
  },
  {
    label: "Marketplace SEO",
    icon: (
      <svg viewBox="0 0 24 24" className={styles.capIcon}>
        <path d="M7 2v11h3v9l7-12h-4l4-8z" />
      </svg>
    ),
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          Array.from(cards),
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        {/* Header */}
        <div className={styles.aboutHeader}>
          <div className={styles.sectionLabelWrapper}>
            <div className={styles.sectionLabelLine}></div>
            <div className={styles.sectionLabelText}>ABOUT US</div>
          </div>
          <h2 className={styles.sectionTitle}>
            Who <span className={styles.titleBlue}>We Are</span>
          </h2>
          <p className={styles.aboutDescription}>
            RetailDigi is a team of seasoned growth marketers dedicated to helping
            brands dominate the digital shelf and scale into true category leaders.
          </p>
        </div>

        {/* Two Cards */}
        <div ref={cardsRef} className={styles.cardsGrid}>
          {/* Card 1 - Capabilities */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Core Capabilities</h3>
              <p className={styles.cardSubtitle}>Crafting category leaders with</p>
            </div>
            
            <div className={styles.capList}>
              {capabilities.map((c) => (
                <div key={c.label} className={styles.capItem}>
                  <div className={styles.capIconContainer}>{c.icon}</div>
                  {c.label}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 - Platform Expertise */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Platform Expertise</h3>
              <p className={styles.cardSubtitle}>Scaling brands across the ecosystem</p>
            </div>
            
            <div className={styles.platformGrid}>
              {platforms.map((p) => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center' }}>
                  <img 
                    src={p.logo} 
                    alt={p.name} 
                    style={{ height: p.height || 30, width: 'auto', objectFit: 'contain' }} 
                  />
                </div>
              ))}
            </div>

            {/* Dashboard Mock */}
            <div className={styles.dashboardImageWrapper}>
              <img 
                src="/actual-dashboard-results.jpg" 
                alt="Actual Dashboard Results" 
                className={styles.dashboardImage}
              />
              <div className={styles.dashboardPill}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                *actual dashboard results
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
