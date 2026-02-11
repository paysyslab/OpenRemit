// import React from 'react';  
// import Layout from '@theme/Layout'; 
// import Heading from '@theme/Heading'; 
// import styles from './index.module.css'; 

// import overviewImage from '../overview3.png'; 

// export default function Home() {
//   return (
//     <Layout title="OpenRemit">
//       <main className={styles.mainContent}>
//         <section className={styles.heroSection}>
//           <Heading as="h1" className={styles.heroTitle}>OpenRemit</Heading>
//           <Heading as="h2" className={styles.heroSubtitle}>Outward Remittance Processing Solution for Banks</Heading>
//           <p className={styles.heroDescription}>
//             OpenRemit is a comprehensive, API-driven outward remittance solution for banks, enabling secure integration for beneficiary validation, transaction processing, compliance screening, and settlement routing while ensuring scalability, security, regulatory compliance, and efficient international remittance operations.
//           </p>

//           {/* Display the overview image */}
//           <img src={overviewImage} alt="Overview" className={styles.image} />

//           {/* Glowing Button */}
//           <a href="#" className={styles.glowingButton}>Learn More</a>
//         </section>
//       </main>
//     </Layout>
//   );
// }
import React, { useEffect } from 'react';
import Layout from '@theme/Layout'; 
import Heading from '@theme/Heading'; 
import styles from './index.module.css'; 
import { gsap } from 'gsap'; // Import gsap library
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

import overviewImage from '../overview3.png'; 

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export default function Home() {
  useEffect(() => {
    // GSAP ScrollTrigger animation for the image
    gsap.fromTo(".overviewImage", {
      opacity: 0, // start with the image invisible
      y: 100, // start slightly lower than its position
    }, {
      opacity: 1, // fade in the image
      y: 0, // move the image to its original position
      scrollTrigger: {
        trigger: ".heroSection", // the element that triggers the animation
        start: "top bottom", // start the animation when the section is in view
        end: "bottom top", // end the animation when the section leaves view
        scrub: true, // smooth the animation based on scroll position
        markers: false, // optional: disable scroll markers for debugging
      },
      duration: 1.5, // duration of the animation
      ease: "power4.out", // smooth easing for the animation
    });
  }, []);

  return (
    <Layout title="OpenRemit">
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <Heading as="h1" className={styles.heroTitle}>OpenRemit</Heading>
          <Heading as="h2" className={styles.heroSubtitle}>Outward Remittance Processing Solution for Banks</Heading>
          <p className={styles.heroDescription}>
            OpenRemit is a comprehensive, API-driven outward remittance solution for banks, enabling secure integration for beneficiary validation, transaction processing, compliance screening, and settlement routing while ensuring scalability, security, regulatory compliance, and efficient international remittance operations.
          </p>

          <img 
            src={overviewImage} 
            alt="Overview of Remittance Process" 
            className={`${styles.image} overviewImage`} 
          />

          {/* Glowing Button */}
          {/* <a href="#" className={styles.glowingButton}>Learn More</a> */}
        </section>
      </main>
    </Layout>
  );
}
