import React from "react";
import styles from "./Dashboard.module.css";
import logo from "../assets/logo.png";
const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
  <div className={styles.logoTitle}>
    <img src={logo} alt="ElectroMart Logo" className={styles.logo} />
    <h1 className={styles.title}>ElectroMart Sales Dashboard</h1>
  </div>
</header>


      <section className={styles.summarySection}>
  <div className={styles.summaryCard}>
    <h3>Total Revenue</h3>
    <p>₹18,50,000</p>
  </div>
  <div className={styles.summaryCard}>
    <h3>Total Orders</h3>
    <p>560</p>
  </div>
  <div className={styles.summaryCard}>
    <h3>User Activity</h3>
    <p>👥 12,340 active users</p>
  </div>
  <div className={styles.summaryCard}>
    <h3>⭐ Avg Product Rating</h3>
    <p>4.6 / 5.0</p>
  </div>
</section>

<section className={styles.mapSection}>
  <h3 className={styles.mapTitle}>🌍 Global Product Sales Map</h3>

  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png"
    alt="Sales Region Map"
    className={styles.mapImage}
  />
  <p className={styles.mapNote}>*Highlighted regions indicate countries where products were sold*</p>
</section>



<section className={styles.products}>
  <h2>Gadget Overview</h2>
        <div className={styles.cards}>
          <div className={styles.productCard}>
            <h3>iPhone 15 Pro</h3>
            <p>Price: ₹1,40,000</p>
            <p>Sold: 320</p>
          </div>
          <div className={styles.productCard}>
            <h3>MacBook Air M2</h3>
            <p>Price: ₹1,10,000</p>
            <p>Sold: 280</p>
          </div>
          <div className={styles.productCard}>
            <h3>iPad Pro 12.9"</h3>
            <p>Price: ₹85,000</p>
            <p>Sold: 150</p>
          </div>
          <div className={styles.productCard}>
            <h3>Samsung Galaxy Tab S9</h3>
            <p>Price: ₹65,000</p>
            <p>Sold: 180</p>
          </div>
        </div>
      </section>

      <section className={styles.graphs}>
  <div className={styles.graphCard}>
    
    <img
      src={`https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify({
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Monthly Sales ₹',
            data: [50000, 80000, 120000, 150000, 180000, 220000],
            fill: false,
            borderColor: 'blue'
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Monthly Sales Report',
            fontColor: 'black',
            fontSize: 18
          },
          layout: {
            padding: {
              top: 2
            }
          }
        }
      }))}`}
      alt="Monthly Sales Line Chart"
    />
  </div>

  <div className={styles.graphCard}>
   
    <img
      src={`https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify({
        type: 'bar',
        data: {
          labels: ['Mobiles', 'Laptops', 'Tablets', 'iPads'],
          datasets: [
            {
              label: 'June',
              data: [120, 100, 80, 60],
              backgroundColor: 'orange'
            },
            {
              label: 'July',
              data: [160, 130, 95, 85],
              backgroundColor: 'green'
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'June vs July Sellings',
            fontColor: 'black',
            fontSize: 18
          },
          layout: {
            padding: {
              top: 2
            }
          }
        }
      }))}`}
      alt="June vs July Sales Bar Chart"
    />
  </div>
</section>


    </div>
  );
};

export default Dashboard;
