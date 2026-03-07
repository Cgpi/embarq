import React from "react";
import CancelPolicy from "../assets/footer/cancellationpolicy.webp";

export default function PrivacyPolicy() {
  return (
    <div style={styles.page}>
      
      <div style={styles.banner}>
        <img
          src={CancelPolicy}
          alt="Privacy Policy"
          style={styles.bannerImage}
        />
        <div style={styles.overlay}>
          <h1 style={styles.title}>Privacy Policy</h1>
        </div>
      </div>

      <div style={styles.container}>

        <section style={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            We value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use our website and services.
          </p>
        </section>

        <section style={styles.section}>
          <h2>2. Information We Collect</h2>
          <ul>
            <li>Name, email address, and contact number</li>
            <li>Booking and travel information</li>
            <li>Payment and billing details</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To process trip bookings and payments</li>
            <li>To communicate updates regarding your trip</li>
            <li>To improve our services and website experience</li>
            <li>To provide customer support</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>4. Sharing of Information</h2>
          <p>
            We do not sell your personal data. Your information may only be
            shared with trusted service providers such as payment gateways,
            travel partners, or legal authorities if required.
          </p>
        </section>

        <section style={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section style={styles.section}>
          <h2>6. Cookies</h2>
          <p>
            Our website may use cookies to improve user experience, analyze
            website traffic, and remember your preferences.
          </p>
        </section>

        <section style={styles.section}>
          <h2>7. Your Rights</h2>
          <p>
            You have the right to request access, correction, or deletion of
            your personal data by contacting us.
          </p>
        </section>

        <section style={styles.section}>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please
            contact us at <b>enquiries@embarq.in</b>.
          </p>
        </section>
      </div>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "#f5f7fb",
    minHeight: "100vh",
  },

  banner: {
    position: "relative",
    height: "320px",
    overflow: "hidden",
  },

  bannerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: "42px",
    fontWeight: "bold",
  },

  container: {
    maxWidth: "900px",
    margin: "40px auto",
    background: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
  },

  section: {
    marginBottom: "30px",
    lineHeight: "1.7",
  },

  updated: {
    color: "#666",
    marginBottom: "30px",
  },

  
};