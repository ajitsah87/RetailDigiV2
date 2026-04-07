"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./USP.module.css";

export default function USP() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

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
        formRef.current,
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
        setStatusMsg(data.message || "Message sent successfully!");
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

        {/* Right - Reach Out Form */}
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
