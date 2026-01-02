import React from 'react';  // Import React
import Layout from '@theme/Layout'; // Import Layout component for your page
import Heading from '@theme/Heading'; // Import Heading component for titles
import styles from './index.module.css'; // Import your CSS module

// Import the image from the src folder
import overviewImage from '../overview_no_bg.png'; // Path updated to directly refer to the image in src

export default function Home() {
  return (
    <Layout title="OpenRemit">
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <Heading as="h1">OpenRemit</Heading>
          <Heading as="h2" className={styles.title}>Outward Remittance Processing Solution for Banks</Heading>
          <p className={styles.description}>
            OpenRemit is a comprehensive solution designed for financial institutions to handle international remittance transactions, offering seamless integration through secure, API-driven communication. 
            Partners can interact with banking systems for various services including beneficiary validation, transaction processing, compliance screening, and settlement routing. The API is designed to ensure scalability, security, and compliance with industry standards, providing financial remittance providers with the tools necessary to meet their operational needs.
          </p>
          {/* Display the image */}
          <img src={overviewImage} alt="Overview" className={styles.image} />
        </section>
      </main>
    </Layout>
  );
}
