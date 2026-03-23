"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./MarketplaceCards.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GreenCheck = () => (
  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#22c55e" />
    <path
      d="M7 12.5L10 15.5L17 8.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const cardsData = [
  {
    id: "ecommerce-growth",
    label: "ECOMM STOREFRONT",
    title: "Ecommerce",
    titleHighlight: "Growth",
    description:
      "Comprehensive marketplace management across Amazon, Flipkart, and leading global platforms.",
    features: [
      {
        title: "Marketplace Ranking",
        description:
          "Strategic keyword deployment to dominate Page 1 organic visibility.",
        icon: <GreenCheck />,
      },
      {
        title: "Catalog Health",
        description:
          "Optimised ASIN architecture, variation mapping, and ticket resolution.",
        icon: <GreenCheck />,
      },
      {
        title: "Category Benchmarking",
        description:
          "Data-led assortment mapping to aggressively capture market share.",
        icon: <GreenCheck />,
      },
    ],
    imageSrc: "/Ecommerce-growth.webp",
    imageBg: "#EFEBE9",
  },
  {
    id: "quick-commerce",
    label: "HYPERLOCAL SALES",
    title: "Quick",
    titleHighlight: "Commerce",
    description:
      "Hyperlocal marketing that builds visibility and trust in-a-glance.",
    features: [
      {
        title: "Geo-Targeted Campaigns",
        description:
          "Precision ads on Blinkit and Zepto driven by pin-code velocity.",
        icon: <GreenCheck />,
      },
      {
        title: "Impulse Designing",
        description:
          "High-contrast hero imagery engineered for rapid mobile-first conversion.",
        icon: <GreenCheck />,
      },
      {
        title: "Catalogue Optimisation",
        description:
          "Adding trust, clarity, and delightful detail to your product presentation.",
        icon: <GreenCheck />,
      },
    ],
    imageSrc: "/Quick-commerce.webp",
    imageBg: "#FAFAFA",
  },
  {
    id: "brand-store-building",
    label: "PLATFORM BRAND EXPERIENCE",
    title: "Brand Store",
    titleHighlight: "Building",
    description:
      "Creating immersive brand storefronts that enhance product discovery and drive higher conversion.",
    features: [
      {
        title: "PDP Optimisation",
        description:
          "Structuring product pages with compelling copy, visuals and features.",
        icon: <GreenCheck />,
      },
      {
        title: "A+ Content",
        description:
          "Content enhanced to communicate solution, USPs and portray high value.",
        icon: <GreenCheck />,
      },
      {
        title: "Visual Merchandising",
        description:
          "Storytelling frameworks that guide customers through the brand journey.",
        icon: <GreenCheck />,
      },
    ],
    imageSrc: "/Brand-building.webp",
    imageBg: "#EBE3D5",
  },
];

export default function MarketplaceCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Optional GSAP animation to slightly scale down previous cards as next one slides over
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(`.${styles.card}`);
      
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // Last card doesn't need to scale down
        
        gsap.to(card, {
          scale: 0.95, // Scale down slightly as user scrolls past it
          opacity: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top 80px", // When card hits sticky top
            endTrigger: cards[index + 1], // Until the next card reaches top
            end: "top 80px",
            scrub: true,
          }
        });
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.cardsSection}>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.cardsWrapper}>
          {cardsData.map((card, index) => (
            <div
              key={card.id}
              className={`${styles.card} ${index % 2 !== 0 ? styles.cardReverse : ""}`}
              style={{
                top: `calc(80px + ${index * 20}px)`,
                zIndex: index,
              }}
            >
              {/* Left Side: Content */}
              <div className={styles.cardLeft}>
                <div className={styles.labelWrapper}>
                  <div className={styles.labelLine}></div>
                  <div className={styles.labelText}>{card.label}</div>
                </div>
                
                <h2 className={styles.title}>
                  {card.title} <span className={styles.highlightBlue}>{card.titleHighlight}</span>
                </h2>
                
                <p className={styles.description}>{card.description}</p>
                
                <div className={styles.featuresList}>
                  {card.features.map((feature, i) => (
                    <div key={i} className={styles.featureItem}>
                      {feature.icon}
                      <div className={styles.featureText}>
                        <h4 className={styles.featureTitle}>{feature.title}</h4>
                        <p className={styles.featureDesc}>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Image/Box Content */}
              <div className={styles.cardRight} style={{ backgroundColor: card.imageBg }}>
                {card.imageSrc && (
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    fill
                    className={styles.cardImage}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    priority={index === 0} // prioritize loading the first card image
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
