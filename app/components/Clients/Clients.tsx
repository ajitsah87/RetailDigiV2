"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Clients.module.css";

gsap.registerPlugin(ScrollTrigger);

const clientsRow1 = [
  { name: "Daily Objects", logo: "/daily_objects.webp" },
  { name: "MARS", logo: "/mars.webp" },
  { name: "ēthos", logo: "/ethos.svg" },
  { name: "That Sassy Thing", logo: "/that_sassy_thing.webp" },
];

const clientsRow2 = [
  { name: "Barry Callebaut", logo: "/barry_callebaut.webp" },
  { name: "UNIBIC", logo: "/unibic.webp" },
  { name: "Twinings", logo: "/twinings.webp" },
  { name: "Van Houten", logo: "/van_houten.webp" },
];

const clientsRow3 = [
  { name: "Pristyn Care", logo: "/pristyn_care.png" },
  { name: "TATA 1mg", logo: "/tata_1mg.webp" },
  { name: "Vivo", logo: "/vivo.png" },
  { name: "Park+", logo: "/park_your_car_app.webp" },
];

const clientsRow4 = [
  { name: "Born Good", logo: "/borngood.avif" },
  { name: "mamaearth", logo: "/mama_earth.png" },
  { name: "Modern Crew", logo: "/modern_crew.jpg" },
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
              <div className={styles.logoImageWrapper}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                  className={styles.logoImg}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Last row - 3 columns */}
        <div ref={gridRef2} className={styles.logoGridSmall}>
          {clientsRow4.map((client) => (
            <div key={client.name} className={styles.logoCard}>
              <div className={styles.logoImageWrapper}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className={styles.logoImg}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
