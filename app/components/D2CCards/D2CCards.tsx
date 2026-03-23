"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./D2CCards.module.css";
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

const ToolsIcon = () => (
  <svg
    className={styles.featureIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2563eb"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const SearchIcon = () => (
  <svg
    className={styles.featureIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#eab308"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const BoxIcon = () => (
  <svg
    className={styles.featureIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#10b981"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const cardsData = [
  {
    id: "website-building",
    label: "ECOMM STOREFRONT",
    title: "Website",
    titleHighlight: "Building",
    description:
      "Conversion-focused digital storefronts designed to establish brand credibility and drive direct sales.",
    features: [
      {
        title: "Design",
        description:
          "High-converting UI/UX built for seamless mobile and desktop experiences.",
        icon: <ToolsIcon />,
      },
      {
        title: "SEO Foundation",
        description:
          "Technical and on-page SEO to ensure discoverability across search engines.",
        icon: <SearchIcon />,
      },
      {
        title: "Product Experience",
        description:
          "Product pages designed to improve engagement and purchase intent.",
        icon: <BoxIcon />,
      },
    ],
    imageSrc: "/website-building.webp",
    imageBg: "#D1C4E9", // A generic purple based on the screenshot
  },
  {
    id: "paid-acquisition",
    label: "PAID ACQUISITION",
    title: "Meta & Google",
    titleHighlight: "Marketing",
    description:
      "Driving aggressive acquisition through data-backed, multi-platform media buying.",
    features: [
      {
        title: "Precise Targeting",
        description:
          "Advanced audience targeting with behavioural insights and retargeting loops.",
        icon: <GreenCheck />,
      },
      {
        title: "Algorithmic Day-Parting",
        description:
          "Optimising ad delivery and bids during peak conversion windows.",
        icon: <GreenCheck />,
      },
      {
        title: "Cross-Platform Promotion",
        description:
          "Efficiently funnelling Meta & Google traffic to D2C websites and marketplaces.",
        icon: <GreenCheck />,
      },
    ],
    imageSrc: "/meta-marketing.webp",
    imageBg: "#E0E7FF",
  },
  {
    id: "social-commerce",
    label: "SOCIAL COMMERCE",
    title: "Social Media",
    titleHighlight: "Management",
    description:
      "Cultivating highly engaged organic communities that amplify brand identity and foster long-term loyalty.",
    features: [
      {
        title: "Content Production",
        description:
          "Culturally relevant, high-quality assets tailored to individual platforms.",
        icon: <GreenCheck />,
      },
      {
        title: "Community Engagement",
        description:
          "Nurturing two-way audience engagement to build authentic brand advocacy.",
        icon: <GreenCheck />,
      },
      {
        title: "Growth Analytics",
        description:
          "Data-led tracking to optimise posting schedules and maximise share of voice.",
        icon: <GreenCheck />,
      },
    ],
    imageSrc: "/social-marketing.webp",
    imageBg: "#FFF1F2",
  },
  {
    id: "brand-advocacy",
    label: "BRAND ADVOCACY",
    title: "Influencer",
    titleHighlight: "Partnerships",
    description:
      "Leveraging creator communities to build credibility, visibility and social proof for brands.",
    features: [
      {
        title: "Creator Discover",
        description:
          "Explore and shortlist creators that best suit your brand, budget and campaign.",
        icon: <GreenCheck />,
      },
      {
        title: "Authentic Storytelling",
        description:
          "Native content that integrates products naturally into creator narratives.",
        icon: <GreenCheck />,
      },
      {
        title: "Product Experience",
        description:
          "Drive discovery, engagement and purchase intent through influencer network.",
        icon: <GreenCheck />,
      },
    ],
    imageSrc: "/infulencer-partnership.webp",
    imageBg: "#FDF4FF",
  },
];

export default function D2CCards() {
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
