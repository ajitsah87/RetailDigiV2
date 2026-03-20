"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Services.module.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "🌐",
    iconClass: "iconBlue",
    title: "Website Design",
    description:
      "Conversion-led UI/UX design and Shopify development to build high-performing D2C storefronts.",
  },
  {
    icon: "📝",
    iconClass: "iconOrange",
    title: "Content Marketing",
    description:
      "Brand storytelling through reels, static content, and video production that drives engagement.",
  },
  {
    icon: "📊",
    iconClass: "iconGreen",
    title: "Performance Marketing",
    description:
      "Data-driven media buying across Meta, Google, and marketplace platforms for maximum ROAS.",
  },
  {
    icon: "🤝",
    iconClass: "iconPurple",
    title: "Brand Engagement",
    description:
      "Community building, influencer partnerships, and social commerce strategies for lasting growth.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          Array.from(cards),
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.services} id="services">
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <div className="section-label">Services</div>
          <h2 className="section-title">
            We Offer
          </h2>
        </div>

        <div ref={cardsRef} className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.title} className={styles.serviceCard}>
              <div
                className={`${styles.serviceIcon} ${
                  styles[service.iconClass as keyof typeof styles]
                }`}
              >
                {service.icon}
              </div>
              <div className={styles.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className={styles.serviceArrow}>→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
