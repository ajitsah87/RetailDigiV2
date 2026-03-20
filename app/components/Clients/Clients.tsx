"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Clients.module.css";

gsap.registerPlugin(ScrollTrigger);

const clientsRow1 = [
  { name: "Daily Objects", color: "#1a1a2e" },
  { name: "MARS", color: "#0047AB" },
  { name: "ēthos", color: "#1a1a2e" },
  { name: "That Sassy Thing", color: "#8B5CF6" },
];

const clientsRow2 = [
  { name: "BARRY CALLEBAUT", color: "#8B0000" },
  { name: "UNIBIC", color: "#DC2626" },
  { name: "TWININGS", color: "#1a1a2e" },
  { name: "VAN HOUTEN", color: "#8B6914" },
];

const clientsRow3 = [
  { name: "Pristyn Care", color: "#FF8C00" },
  { name: "TATA 1mg", color: "#1a1a2e" },
  { name: "vivo", color: "#2563EB" },
  { name: "Park+", color: "#8B5CF6" },
];

const clientsRow4 = [
  { name: "BORN GOOD", color: "#22C55E" },
  { name: "mamaearth", color: "#22C55E" },
  { name: "MODERN CREW", color: "#1a1a2e" },
];

export default function Clients() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const gridRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards1 = gridRef.current?.children;
      if (cards1) {
        gsap.fromTo(
          Array.from(cards1),
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const cards2 = gridRef2.current?.children;
      if (cards2) {
        gsap.fromTo(
          Array.from(cards2),
          { y: 40, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef2.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.clients} id="clients">
      <div className={styles.clientsContainer}>
        {/* Header */}
        <div className={styles.clientsHeader}>
          <div className={styles.clientsHeaderLeft}>
            <div className="section-label">Clientele Portfolio</div>
            <h2 className="section-title">
              Trusted By <span className="orange">The Best</span>
            </h2>
          </div>
          <div className={styles.clientsHeaderRight}>
            <div className={styles.bigNumber}>100+</div>
            <div className={styles.bigNumberLabel}>Global Brands Scaled</div>
          </div>
        </div>

        {/* Logo Grid - 4 columns */}
        <div ref={gridRef} className={styles.logoGrid}>
          {[...clientsRow1, ...clientsRow2, ...clientsRow3].map((client) => (
            <div key={client.name} className={styles.logoCard}>
              <span
                className={styles.clientName}
                style={{ color: client.color }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Last row - 3 columns */}
        <div ref={gridRef2} className={styles.logoGridSmall}>
          {clientsRow4.map((client) => (
            <div key={client.name} className={styles.logoCard}>
              <span
                className={styles.clientName}
                style={{ color: client.color }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
