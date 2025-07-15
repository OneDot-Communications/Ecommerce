import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🛒 About This Project</h1>
        <p style={styles.paragraph}>
          The <strong>E-Commerce Equipment Dashboard</strong> is a powerful and responsive web application designed to streamline how users explore and manage industrial and commercial equipment for sale online. Whether you're a small business, a supplier, or an equipment reseller, this platform brings clarity, efficiency, and convenience to the buying experience.
        </p>

        <h2 style={styles.subheading}>🎯 Purpose</h2>
        <p style={styles.paragraph}>
          The primary aim of this project is to enhance the equipment e-commerce experience by providing:
        </p>
        <ul style={styles.list}>
          <li>🔹 A visual catalog of available equipment with detailed specs</li>
          <li>🔹 Real-time inventory and price updates</li>
          <li>🔹 A smooth, user-friendly interface optimized for all devices</li>
        </ul>

        <h2 style={styles.subheading}>🛠 Tech Stack</h2>
        <ul style={styles.list}>
          <li>⚛ React with TypeScript</li>
          <li>📦 RESTful APIs (for product and inventory data)</li>
          <li>🎨 Inline CSS with responsive and modern styling</li>
        </ul>

        <h2 style={styles.subheading}>📌 Disclaimer</h2>
        <p style={styles.paragraph}>
          This application is a demo built for educational and demonstration purposes. All equipment listings and prices are mock data and should not be considered real or up-to-date.
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    background: "linear-gradient(to bottom right, #1a1a1a, #333)",
    minHeight: "100vh",
    color: "#fff",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  },
  card: {
    background: "#2e2e2e",
    padding: "30px",
    maxWidth: "800px",
    margin: "auto",
    borderRadius: "12px",
    boxShadow: "0 0 12px rgba(255, 215, 0, 0.4)",
  },
  heading: {
    color: "#FFD700",
    marginBottom: "20px",
    fontSize: "32px",
    textAlign: "center",
  },
  subheading: {
    color: "#FFCC00",
    marginTop: "30px",
    marginBottom: "10px",
    fontSize: "20px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
    fontSize: "16px",
    lineHeight: "1.8",
  },
};

export default AboutPage;
