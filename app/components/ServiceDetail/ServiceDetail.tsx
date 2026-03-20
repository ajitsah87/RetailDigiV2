"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./ServiceDetail.module.css";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  title: string;
  description: string;
}

interface ServiceDetailProps {
  label: string;
  title: string;
  titleHighlight?: string;
  highlightColor?: "blue" | "orange";
  description: string;
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  altBg?: boolean;
  id?: string;
}

export default function ServiceDetail({
  label,
  title,
  titleHighlight,
  highlightColor = "blue",
  description,
  features,
  imageSrc,
  imageAlt,
  reverse = false,
  altBg = false,
  id,
}: ServiceDetailProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: reverse ? 80 : -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { x: reverse ? -60 : 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stagger features
      const featureEls = contentRef.current?.querySelectorAll(
        `.${styles.featureItem}`
      );
      if (featureEls) {
        gsap.fromTo(
          Array.from(featureEls),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [reverse]);

  return (
    <section
      ref={sectionRef}
      className={`${styles.serviceDetail} ${altBg ? styles.altBg : ""}`}
      id={id}
    >
      <div
        className={`${styles.detailContainer} ${
          reverse ? styles.reverse : ""
        }`}
      >
        {/* Image */}
        <div ref={imageRef} className={styles.detailImageWrapper}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className={styles.detailImage}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div ref={contentRef} className={styles.detailContent}>
          <div className={styles.detailLabel}>{label}</div>
          <h2 className={styles.detailTitle}>
            {title}{" "}
            {titleHighlight && (
              <span className={styles[highlightColor]}>{titleHighlight}</span>
            )}
          </h2>
          <p className={styles.detailDescription}>{description}</p>

          <div className={styles.featureList}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureItem}>
                <div className={styles.featureCheck}>✓</div>
                <div className={styles.featureContent}>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
