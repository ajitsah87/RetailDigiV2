"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.css";

gsap.registerPlugin(ScrollTrigger);

const platforms = [
  { name: "Meta", color: "#1877F2" },
  { name: "amazon", color: "#FF9900" },
  { name: "Google Ads", color: "#4285F4" },
  { name: "Flipkart", color: "#2874F0" },
  { name: "NYKAA", color: "#fc2779" },
  { name: "blinkit", color: "#F8CD1C" },
  { name: "Myntra", color: "#FF3F6C" },
  { name: "zepto", color: "#8B1CF8" },
  { name: "bigbasket", color: "#84C225" },
  { name: "Swiggy Instamart", color: "#FC8019" },
  { name: "firstcry", color: "#00B3E3" },
];

const capabilities = [
  { icon: "🎨", label: "Content" },
  { icon: "🎯", label: "Design" },
  { icon: "📈", label: "Performance" },
  { icon: "✨", label: "Engagement" },
  { icon: "🔄", label: "Retention" },
];

const stats = [
  { value: "10+", label: "Industry Expertise", suffix: " Years" },
  { value: "100+", label: "Scaled Worldwide", suffix: " Brands" },
  { value: "70", label: "Revenue Generated", suffix: " Cr+" },
  { value: "92", label: "Client Satisfaction", suffix: "%" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Counter animation for stats
      statsRef.current.forEach((el) => {
        if (!el) return;
        const numEl = el.querySelector("[data-count]");
        if (!numEl) return;
        const endVal = parseInt(numEl.getAttribute("data-count") || "0");

        gsap.fromTo(
          { val: 0 },
          { val: 0 },
          {
            val: endVal,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            onUpdate: function () {
              const current = Math.round(this.targets()[0].val);
              const suffix = numEl.getAttribute("data-suffix") || "";
              numEl.textContent = current + suffix;
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        {/* Header */}
        <div className={styles.aboutHeader}>
          <div className="section-label">About Us</div>
          <h2 className="section-title">
            Who <span>We Are</span>
          </h2>
          <p className={styles.aboutDescription}>
            RetailDigi is a digital commerce growth partner helping brands scale
            into category leaders by driving sales, dominating digital shelf
            space, and capturing market share across modern commerce platforms.
          </p>
        </div>

        {/* Three Cards */}
        <div ref={cardsRef} className={styles.cardsGrid}>
          {/* Card 1 - Platforms */}
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <h3 className={styles.cardTitle}>Scaling brands across:</h3>
            <div className={styles.platformGrid}>
              {platforms.map((p) => (
                <span
                  key={p.name}
                  className={styles.platformLogo}
                  style={{ color: p.color }}
                >
                  {p.name}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 - Capabilities */}
          <div className={`${styles.card} ${styles.cardOrange}`}>
            <h3 className={styles.cardTitle}>Crafting brands with:</h3>
            <ul className={styles.capList}>
              {capabilities.map((c) => (
                <li key={c.label} className={styles.capItem}>
                  <span className={styles.capIcon}>{c.icon}</span>
                  {c.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 - Stats */}
          <div className={`${styles.card} ${styles.cardTeal}`}>
            <h3 className={styles.cardTitle}>Our growth in numbers:</h3>
            <div className={styles.statsList}>
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={styles.statItem}
                  ref={(el) => { statsRef.current[i] = el; }}
                >
                  <div className={styles.statIcon}>
                    {i === 0 && "⏱"}
                    {i === 1 && "🌍"}
                    {i === 2 && "₹"}
                    {i === 3 && "⭐"}
                  </div>
                  <div>
                    <div
                      className={styles.statValue}
                      data-count={parseInt(s.value)}
                      data-suffix={s.suffix}
                    >
                      0{s.suffix}
                    </div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
