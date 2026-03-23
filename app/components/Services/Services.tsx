"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Services.module.css";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    num: "01",
    title: "Website Design",
    tags: ["BRAND DESIGN IDENTITY", "WEBSITE & SHOPIFY DESIGN", "PRODUCT & BRAND BANNERS"],
    gradient: "linear-gradient(135deg, #EBF5FF 0%, #DBEAFE 100%)",
    iconColor: "#2563EB",
    graphic: (
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color: '#2563EB'}}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    num: "02",
    title: "Content Marketing",
    tags: ["GO-TO-MARKET STRATEGY", "SOCIAL MEDIA MARKETING", "INFLUENCER MARKETING"],
    gradient: "linear-gradient(135deg, #FFF3E0 0%, #FFEDD5 100%)",
    iconColor: "#EA580C",
    graphic: (
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color: '#EA580C'}}>
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="10 8 16 12 10 16 10 8"></polygon>
      </svg>
    )
  },
  {
    num: "03",
    title: "Performance Marketing",
    tags: ["GOOGLE & META PAID ADS", "ECOMMERCE PAID ADS", "QUICK COMMERCE PAID ADS"],
    gradient: "linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)",
    iconColor: "#9333EA",
    graphic: (
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color: '#9333EA'}}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    )
  },
  {
    num: "04",
    title: "Customer Engagement",
    tags: ["SEO & SEM", "RETENTION MARKETING", "WHATSAPP & EMAIL MARKETING"],
    gradient: "linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)",
    iconColor: "#16A34A",
    graphic: (
      <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{color: '#16A34A'}}>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    )
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardInnerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Initial scroll animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Slide change animation on left card
  useEffect(() => {
    if (leftCardInnerRef.current) {
      gsap.fromTo(
        leftCardInnerRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [activeIndex]);

  const activeData = servicesData[activeIndex];

  return (
    <section ref={sectionRef} className={styles.services} id="services">
      <div className={styles.servicesContainer}>
        
        {/* Header Section */}
        <div className={styles.servicesHeader}>
          <div className="section-label">Our expertise</div>
          <h2 className={styles.mainTitle}>
            Services <span className={styles.textBlue}> We Offer.</span>
          </h2>
        </div>

        {/* Main Layout */}
        <div className={styles.servicesWrapper}>
          
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <div className={styles.leftCard}>
              <div ref={leftCardInnerRef} className={styles.leftCardContent}>
                <div className={styles.leftNum} style={{ color: activeData.iconColor }}>
                  {activeData.num}
                </div>
                
                <div className={styles.graphicContainer}>
                  <div className={styles.graphicCircle} style={{ background: activeData.gradient }}>
                    {activeData.graphic}
                  </div>
                </div>

                <div className={styles.leftBottom}>
                  <span className={styles.viewDetails}>View Details</span>
                  <div className={styles.arrowBtn} style={{ background: activeData.iconColor }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="19" x2="19" y2="5"></line>
                      <polyline points="10 5 19 5 19 14"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {servicesData.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={service.num}
                  className={`${styles.serviceItem} ${isActive ? styles.activeItem : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={styles.itemLeft}>
                    <div className={styles.itemHeader}>
                      <span 
                        className={`${styles.dot} ${isActive ? styles.activeDot : ""}`}
                        style={isActive ? { backgroundColor: service.iconColor, opacity: 1, transform: "scale(1)" } : {}}
                      ></span>
                      <h3 style={isActive ? { color: service.iconColor } : {}}>{service.title}</h3>
                    </div>
                    
                    <div className={`${styles.itemContent} ${isActive ? styles.activeContent : ""}`}>
                      <div className={styles.itemContentInner}>
                        <div className={styles.tagsContainer}>
                          {service.tags.map((tag) => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.itemRight}>
                    <div className={styles.thumbnail} style={{ background: service.gradient }}>
                       {/* Scaled down version of graphic inside thumbnail */}
                       <div style={{ transform: "scale(0.4)" }}>
                         {service.graphic}
                       </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
