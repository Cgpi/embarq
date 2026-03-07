import React from "react";
import CancelPolicy from "../assets/footer/cancellationpolicy.webp";

export default function PolicyPage() {
  return (
    <div style={styles.page}>
      
      <div style={styles.banner}>
        <img
          src={CancelPolicy}
          alt="Travel Policy"
          style={styles.bannerImage}
        />
        <div style={styles.bannerOverlay}>
          <h1 style={styles.bannerTitle}>Booking & Cancellation Policy</h1>
        </div>
      </div>
      <div style={styles.container}>


        <section style={styles.section}>
          <h2>Booking Policy</h2>
          <ul>
            <li>25% of the trip cost has to be paid to confirm booking.</li>
            <li>
              Remaining 75% amount of the trip cost must be paid on or before
              45 days before the trip begins.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>Cancellation Policy</h2>
          <ul>
            <li>
              If a trip booking is cancelled 60 days prior to the start date,
              10% of the trip cost will be charged as cancellation fee.
            </li>
            <li>
              If a trip booking is cancelled within 60–45 days prior to start
              date, 25% of the trip cost will be charged as cancellation fee.
            </li>
            <li>
              If a trip booking is cancelled within 45–30 days prior to the
              start date, 50% of the trip cost will be charged as cancellation
              fee.
            </li>
            <li>
              If a trip booking is cancelled within 30 days prior to the start
              date, 100% of the trip cost will be charged as cancellation fee.
            </li>
            <li>
              If the trip is cancelled by Embarq for unavoidable circumstances,
              100% of the trip cost will be refunded.
            </li>
            <li>
              If the trip is cancelled due to any pandemic related reasons at
              any time before the start date, we will attempt to refund as much
              as possible or adjust the amount in the next trip.
            </li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2>Child Policy</h2>
          <ul>
            <li>
              Children between the age group of 0 to 4 years are not allowed on
              Embarq trips.
            </li>
            <li>
              Children between the age group of 5 to 10 years get up to 20%
              discount on the trip cost.
            </li>
            <li>
              Travellers will have to bear the cost of a child safety seat (if
              applicable) and the child’s insurance.
            </li>
            <li>
              Children with 11 years of age and above will be charged 100% trip
              cost.
            </li>
            <li>
              Persons below 18 years of age are not allowed to travel on a
              motorcycle on Embarq trips.
            </li>
            <li>
              However, children above five years of age can be a part of an
              Embarq motorcycle trip by travelling in the back-up vehicle.
            </li>
          </ul>
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

  bannerOverlay: {
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

  bannerTitle: {
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
};