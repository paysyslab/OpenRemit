// // import React from 'react';  
// // import Layout from '@theme/Layout'; 
// // import Heading from '@theme/Heading'; 
// // import styles from './index.module.css'; 

// // import overviewImage from '../overview3.png'; 

// // export default function Home() {
// //   return (
// //     <Layout title="OpenRemit">
// //       <main className={styles.mainContent}>
// //         <section className={styles.heroSection}>
// //           <Heading as="h1" className={styles.heroTitle}>OpenRemit</Heading>
// //           <Heading as="h2" className={styles.heroSubtitle}>Outward Remittance Processing Solution for Banks</Heading>
// //           <p className={styles.heroDescription}>
// //             OpenRemit is a comprehensive, API-driven outward remittance solution for banks, enabling secure integration for beneficiary validation, transaction processing, compliance screening, and settlement routing while ensuring scalability, security, regulatory compliance, and efficient international remittance operations.
// //           </p>

// //           {/* Display the overview image */}
// //           <img src={overviewImage} alt="Overview" className={styles.image} />

// //           {/* Glowing Button */}
// //           <a href="#" className={styles.glowingButton}>Learn More</a>
// //         </section>
// //       </main>
// //     </Layout>
// //   );
// // }
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
// import React from 'react';
// import { Github } from 'lucide-react';

// interface HeroProps {
//   title?: string;
//   subtitle?: string;
//   primaryBtnText?: string;
//   secondaryText?: string;
// }

// const HeroSection = (props: HeroProps) => {
//   const {
//     title = "Where ideas\ntake shape",
//     subtitle = "Faster, smarter diagramming for teams —\nwith markdown-style code and AI.",
//     primaryBtnText = "Start free",
//     secondaryText = "or continue with"
//   } = props;

//   return (
//     <div className="hero-container">
//       {/* Background Decorative Elements */}
//       <div className="bg-shape shape-diamond"></div>
//       <div className="bg-shape shape-rect-left"></div>
//       <div className="bg-shape shape-rect-right"></div>
//       <div className="bg-shape shape-circle-teal"></div>
//       <div className="bg-shape shape-semi-circle"></div>

//       {/* Main Content Card */}
//       <div className="content-card">
//         <h1 className="title">
//           {title.split('\n').map((line, i) => (
//             <React.Fragment key={i}>
//               {line}
//               <br />
//             </React.Fragment>
//           ))}
//         </h1>
        
//         <p className="subtitle">
//           {subtitle.split('\n').map((line, i) => (
//             <React.Fragment key={i}>
//               {line}
//               <br />
//             </React.Fragment>
//           ))}
//         </p>

//         <div className="actions">
//           <button className="btn-primary">{primaryBtnText}</button>
          
//           <span className="divider-text">{secondaryText}</span>
          
//           <div className="social-buttons">
//             <button className="btn-social">
//               <Github size={20} />
//               <span>GitHub</span>
//             </button>
            
//             <button className="btn-social">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
//                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//               </svg>
//               <span>Google</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .hero-container {
//           position: relative;
//           width: 100%;
//           min-height: 600px;
//           background-color: #f4f7f8;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
//         }

//         /* Background Shapes */
//         .bg-shape {
//           position: absolute;
//           z-index: 1;
//         }

//         .shape-diamond {
//           width: 120px;
//           height: 120px;
//           background-color: #d9ebf1;
//           top: 10%;
//           left: 5%;
//           transform: rotate(45deg);
//         }

//         .shape-rect-left {
//           width: 180px;
//           height: 240px;
//           background-color: #d9ebf1;
//           bottom: -40px;
//           left: -20px;
//           border-radius: 60px;
//         }

//         .shape-rect-right {
//           width: 300px;
//           height: 180px;
//           background-color: #d9ebf1;
//           top: 10%;
//           right: -50px;
//         }

//         .shape-circle-teal {
//           width: 160px;
//           height: 160px;
//           background-color: #438696;
//           border-radius: 50%;
//           bottom: 10%;
//           right: 20%;
//         }

//         .shape-semi-circle {
//           width: 140px;
//           height: 280px;
//           background-color: #d9ebf1;
//           border-radius: 0 140px 140px 0;
//           bottom: 5%;
//           right: -20px;
//         }

//         /* Main Card */
//         .content-card {
//           position: relative;
//           z-index: 10;
//           background-color: #2d243f;
//           padding: 60px 80px;
//           border-radius: 48px;
//           max-width: 800px;
//           width: 90%;
//           box-shadow: 0 20px 40px rgba(0,0,0,0.1);
//         }

//         .title {
//           color: #ffffff;
//           font-size: 64px;
//           font-weight: 400;
//           line-height: 1.1;
//           margin: 0 0 32px 0;
//           letter-spacing: -0.02em;
//         }

//         .subtitle {
//           color: #ffffff;
//           font-size: 18px;
//           line-height: 1.5;
//           margin: 0 0 48px 0;
//           opacity: 0.9;
//         }

//         .actions {
//           display: flex;
//           align-items: center;
//           gap: 20px;
//           flex-wrap: wrap;
//         }

//         .btn-primary {
//           background-color: #e91e63;
//           color: white;
//           border: none;
//           padding: 14px 32px;
//           border-radius: 12px;
//           font-size: 18px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: transform 0.2s, background-color 0.2s;
//         }

//         .btn-primary:hover {
//           background-color: #d81b60;
//           transform: translateY(-1px);
//         }

//         .divider-text {
//           color: #8e889a;
//           font-size: 16px;
//           font-weight: 500;
//         }

//         .social-buttons {
//           display: flex;
//           gap: 12px;
//         }

//         .btn-social {
//           background-color: #c5dce3;
//           color: #2d243f;
//           border: none;
//           padding: 12px 20px;
//           border-radius: 12px;
//           font-size: 16px;
//           font-weight: 600;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           cursor: pointer;
//           transition: background-color 0.2s;
//         }

//         .btn-social:hover {
//           background-color: #b5ccd3;
//         }

//         @media (max-width: 768px) {
//           .content-card {
//             padding: 40px;
//             border-radius: 32px;
//           }
//           .title {
//             font-size: 40px;
//           }
//           .actions {
//             flex-direction: column;
//             align-items: flex-start;
//           }
//           .social-buttons {
//             width: 100%;
//           }
//           .btn-social {
//             flex: 1;
//             justify-content: center;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HeroSection;