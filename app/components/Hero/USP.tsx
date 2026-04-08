"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./USP.module.css";

export default function USP() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.4,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.usp} id="home">
      <div className={styles.uspContainer}>
        {/* Left Content */}
        <div ref={contentRef} className={styles.uspContent}>
          <div className={styles.brandHeader}>
            <div className={styles.brandIcon}>R</div>
            <span className={styles.brandName}>RETAILDIGI<span className={styles.primaryBlueText}>.</span></span>
          </div>
          <div className={styles.brandTagline}>
            <div className={styles.taglineLine}></div>
            <span className={styles.taglineText}>
              Builders of Category Leaders
            </span>
          </div>

          <h1 className={styles.uspTitle}>
            Scaling brands with{" "}
            <span className={styles.primaryBlueText}>
              Attention, Ads &amp; Analytics
            </span>
          </h1>

          <p className={styles.uspDescription}>
            We help E-commerce &amp; D2C brands dominate their category
            with performance-led strategy, creatives and execution.
          </p>

          <a href="#contact" className={styles.connectBtn}>
            Let&apos;s Connect
            <span className={styles.connectArrow}>→</span>
          </a>
        </div>

        {/* Right Content */}
        <div ref={imageRef} className={styles.uspImageContainer}>
          <div className={styles.blueCircle}></div>
          <Image 
            src="/girl_holding_parcel.webp" 
            alt="Girl holding parcel" 
            width={600} 
            height={600} 
            className={styles.mainImage}
            priority
          />
          
          <div className={`${styles.floatingLogo} ${styles.logoShopify}`}>
            <Image src="/shopify.webp" alt="Shopify" width={32} height={32} />
          </div>
          <div className={`${styles.floatingLogo} ${styles.logoSwiggy}`}>
            <Image src="/swiggy.webp" alt="Swiggy" width={32} height={32} />
          </div>
          <div className={`${styles.floatingLogo} ${styles.logoUnknown}`}>
            <Image src="/unkown.png" alt="Unknown" width={32} height={32} />
          </div>
          <div className={`${styles.floatingLogo} ${styles.logoMeta}`}>
            <Image src="/meta.png" alt="Meta" width={32} height={32} />
          </div>
          <div className={`${styles.floatingLogo} ${styles.logoAmazon}`}>
            <Image src="/amazon.webp" alt="Amazon" width={32} height={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
