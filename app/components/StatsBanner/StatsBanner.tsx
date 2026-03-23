"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./StatsBanner.module.css";

gsap.registerPlugin(ScrollTrigger);

const OdometerDigit = ({
  char,
  delay,
  direction,
}: {
  char: string;
  delay: number;
  direction: "up" | "down";
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stripRef.current || !containerRef.current || !/\d/.test(char)) return;

    const numItems = 21; // Strip length
    let startY = 0;
    let endY = -(numItems - 1);

    if (direction === "down") {
      startY = endY;
      endY = 0;
    }

    gsap.fromTo(
      stripRef.current,
      { y: `${startY}em` },
      {
        y: `${endY}em`,
        duration: 1 + Math.random() * 0.5,
        delay: delay,
        ease: "back.out(1)", // Gives it a slight overshoot/bounce for coolness
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [char, delay, direction]);

  if (/\d/.test(char)) {
    const targetDigit = parseInt(char, 10);
    const strip = [];
    const numItems = 21;

    if (direction === "down") {
      // Ends at index 0
      strip.push(targetDigit);
      for (let i = 1; i < numItems; i++) {
        strip.push((targetDigit + i) % 10);
      }
    } else {
      // Ends at index numItems - 1
      for (let i = 0; i < numItems - 1; i++) {
        // Fill reversed order roughly
        strip.push((targetDigit + 10 - ((numItems - 1 - i) % 10)) % 10);
      }
      strip.push(targetDigit);
    }

    return (
      <span ref={containerRef} className={styles.slotMachine} style={{ color: 'white' }}>
        <div ref={stripRef} className={styles.slotStrip}>
          {strip.map((d, i) => (
            <span key={i} className={styles.slotDigit}>
              {d}
            </span>
          ))}
        </div>
      </span>
    );
  }

  // Not a digit. e.g. '+' or 'C' or 'r'.
  return (
    <span
      className={styles.blueText}
      style={{ opacity: 0, display: "inline-flex", height: "1em", alignItems: "flex-end", lineHeight: 1 }}
      ref={(el) => {
        if (el) {
          gsap.to(el, {
            opacity: 1,
            duration: 0.8,
            delay: delay + 0.2,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      }}
    >
      {char}
    </span>
  );
};

const OdometerValue = ({
  value,
  baseDelay,
}: {
  value: string;
  baseDelay: number;
}) => {
  return (
    <div className={styles.valueContainer}>
      {value.split("").map((char, index) => {
        const dir = index % 2 === 0 ? "up" : "down";
        const delay = baseDelay + index * 0.2;
        if (char === " ") {
          return <span key={index} style={{ display: "inline-flex", width: "0.25em", height: "1em" }}>&nbsp;</span>;
        }
        return (
          <OdometerDigit
            key={index}
            char={char}
            delay={delay}
            direction={dir}
          />
        );
      })}
    </div>
  );
};

export default function StatsBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    textRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5 + index * 0.1, // Fade in after numbers finish rolling
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const addTextRef = (el: HTMLDivElement | null) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  return (
    <div className={styles.statsBanner} ref={containerRef}>
      <div className={styles.bgDots}></div>
      <div className={styles.container}>
        {/* Stat 1 */}
        <div className={styles.statItem}>
          <OdometerValue value="10+" baseDelay={0} />
          <div className={styles.textContainer} ref={addTextRef}>
            <div className={styles.whiteText}>YEARS OF</div>
            <div className={styles.whiteText}>INDUSTRY EXPERTISE</div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className={styles.statItem}>
          <OdometerValue value="100+" baseDelay={0.15} />
          <div className={styles.textContainer} ref={addTextRef}>
            <div className={styles.whiteText}>BRANDS SCALED</div>
            <div className={styles.whiteText}>GLOBALLY</div>
          </div>
        </div>

        {/* Stat 3 */}
        <div className={styles.statItem}>
          <OdometerValue value="70Cr+" baseDelay={0.3} />
          <div className={styles.textContainer} ref={addTextRef}>
            <div className={styles.whiteText}>TOTAL REVENUE</div>
            <div className={styles.whiteText}>DRIVEN</div>
          </div>
        </div>
      </div>
    </div>
  );
}
