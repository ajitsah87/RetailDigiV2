"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Contact.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneCode: "+91",
    phoneNumber: "",
    companyName: "",
    serviceRequired: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Pulse animation on CTA button
      if (btnRef.current) {
        gsap.to(btnRef.current, {
          scale: 1.04,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setStatusMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMsg("Request Received. We will get back to you shortly!");
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          phoneCode: "+91",
          phoneNumber: "",
          companyName: "",
          serviceRequired: "",
        });
      } else {
        setStatus("error");
        setStatusMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setStatusMsg("Network error. Please try again.");
    }
  };

  return (
    <section ref={sectionRef} className={styles.contact} id="contact">
      <div className={styles.contactContainer}>
        {/* Left Content */}
        <div ref={contentRef} className={styles.contactLeft}>
          <div className={styles.contactLabel}>Let&apos;s Connect</div>
          <h2 className={styles.contactTitle}>
            Ready to Scale Your Brand?
          </h2>
          <p className={styles.contactDescription}>
            Let&apos;s discuss how RetailDigi can help your brand dominate its
            category. Reach out to us today.
          </p>

          <a
            ref={btnRef}
            href="mailto:hello@retaildigi.com"
            className={styles.contactEmail}
          >
            ✉️ hello@retaildigi.com
          </a>

          <div className={styles.contactSecondary}>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactInfoIcon}>📱</div>
              <div className={styles.contactInfoLabel}>Phone</div>
              <div className={styles.contactInfoValue}>+91-9599170728</div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactInfoIcon}>📍</div>
              <div className={styles.contactInfoLabel}>Location</div>
              <div className={styles.contactInfoValue}>India</div>
            </div>
            <div className={styles.contactInfoItem}>
              <div className={styles.contactInfoIcon}>🌐</div>
              <div className={styles.contactInfoLabel}>Website</div>
              <div className={styles.contactInfoValue}>retaildigi.com</div>
            </div>
          </div>
        </div>

        {/* Right Content - Reach Out Form */}
        <div ref={formRef} className={styles.formWrapper}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Reach Out To Us!</h2>

            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Email */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email id</label>
               
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                  placeholder=""
                />
              </div>

              {/* Name */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Name</label>
               
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                  placeholder=""
                />
              </div>

              {/* Brand Name */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Brand Name</label>
               
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                  placeholder=""
                />
              </div>

              {/* Mobile No */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Mobile No</label>

                <div className={styles.phoneRow}>
                 
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={styles.phoneInput}
                    required
                    // placeholder="+01"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>What do you sell</label>
                
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={styles.formInput}
                  required
                  placeholder=""
                />
              </div>

              {/* Service Required */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Service required</label>
               
                <select
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  className={styles.formSelect}
                  required
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Website Building">Website Building</option>
                  <option value="Amazon & Flipkart">Amazon &amp; Flipkart</option>
                  <option value="Quick Commerce">Quick Commerce</option>
                  <option value="Brand Strategy">Brand Strategy</option>
                  <option value="Full Service">Full Service</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <span className={styles.spinner}></span>
                ) : (
                  "Submit"
                )}
              </button>

              {/* Status Message */}
              {statusMsg && (
                <div
                  className={`${styles.statusMsg} ${
                    status === "success" ? styles.success : styles.errorMsg
                  }`}
                >
                  {statusMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
