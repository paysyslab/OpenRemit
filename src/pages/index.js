import React from 'react';  
import Layout from '@theme/Layout'; 
import Heading from '@theme/Heading'; 
import styles from './index.module.css'; 

import overviewImage from '../overview_no_bg.png'; 

export default function Home() {
  return (
    <Layout title="OpenRemit">
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <Heading as="h1" className={styles.heroTitle}>OpenRemit</Heading>
          <Heading as="h2" className={styles.heroSubtitle}>Outward Remittance Processing Solution for Banks</Heading>
          <p className={styles.heroDescription}>
            OpenRemit is a comprehensive, API-driven outward remittance solution for banks, enabling secure integration for beneficiary validation, transaction processing, compliance screening, and settlement routing while ensuring scalability, security, regulatory compliance, and efficient international remittance operations.
          </p>
          {/* Display the image */}
          <img src={overviewImage} alt="Overview" className={styles.image} />
        </section>
      </main>
    </Layout>
  );
}
