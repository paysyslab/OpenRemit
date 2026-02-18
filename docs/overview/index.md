---
hide_title: true
---

import React, { useEffect, useRef, useState, useMemo } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const OpenRemitOverview = () => {

  /* ── image paths ── */
  const IMG = {
    hero:       useBaseUrl('/img/overview/overview-hero.png'),   // watercolor world map + dashboard
    features:   useBaseUrl('/img/overview/features.png'),        // OpenRemit hub diagram
    file:       useBaseUrl('/img/overview/file.png'),            // batch → individual txns
    globe:      useBaseUrl('/img/overview/globe.png'),           // global remittance globe
    highLevel:  useBaseUrl('/img/overview/highLevel.png'),       // architecture diagram
    partners:   useBaseUrl('/img/overview/multiplePartners.png'),// puzzle-piece people
    multiRail:  useBaseUrl('/img/overview/multi-rail.png'),      // train on rails
    pushPull:   useBaseUrl('/img/overview/pushPull.png'),        // pull vs push (large)
    singlePlat: useBaseUrl('/img/overview/singlePlatform.png'),  // AML/screening monitor
    subagent:   useBaseUrl('/img/overview/subagent.png'),        // family at counter
  };

  /* ── scroll reveal ── */
  const useReveal = (threshold = 0.1) => {
    const ref = useRef(null);
    const [v, setV] = useState(false);
    useEffect(() => {
      const el = ref.current; if (!el) return;
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold });
      obs.observe(el);
      return () => obs.disconnect();
    }, []);
    return [ref, v];
  };

  const Reveal = ({ children, delay = 0, style = {} }) => {
    const [ref, v] = useReveal();
    return (
      <div ref={ref} style={{ opacity: v?1:0, transform: v?'translateY(0)':'translateY(28px)', transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`, ...style }}>
        {children}
      </div>
    );
  };

  /* ── hero mount ── */
  const [hv, setHv] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHv(true), 100); return () => clearTimeout(t); }, []);

  /* ── reusable components ── */
  const Tag = ({ children, gold = false }) => (
    <div style={{ display:'inline-flex', alignItems:'center', gap:7, background: gold?'rgba(245,166,35,0.12)':'#e8f2fa', border: gold?'1px solid rgba(245,166,35,0.25)':'none', borderRadius:30, padding:'5px 14px', marginBottom:16 }}>
      <span style={{ width:6, height:6, borderRadius:'50%', background: gold?'#F5A623':'#1E6FA8', display:'inline-block' }} />
      <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.13em', textTransform:'uppercase', color: gold?'#F5A623':'#1E6FA8' }}>{children}</span>
    </div>
  );

  const SectionH2 = ({ children }) => (
    <h2 style={{ fontSize:'clamp(1.5rem,3vw,2.1rem)', fontWeight:800, color:'#0c1e35', lineHeight:1.2, letterSpacing:'-0.025em', margin:'0 0 32px', maxWidth:600 }}>{children}</h2>
  );

  /* image in macOS-style frame */
  const Frame = ({ src, alt, bg = '#f8fafc' }) => (
    <div style={{ background:'#fff', border:'1.5px solid #e2e8f0', borderRadius:18, overflow:'hidden', boxShadow:'0 6px 28px rgba(30,111,168,0.08)' }}>
      <div style={{ background: bg, borderBottom:'1px solid #e2e8f0', padding:'9px 15px', display:'flex', alignItems:'center', gap:9 }}>
        <div style={{ display:'flex', gap:5 }}>
          {['#fc5f57','#fdbc2c','#33c748'].map(c => <span key={c} style={{ width:9,height:9,borderRadius:'50%',background:c,display:'block' }} />)}
        </div>
        <span style={{ fontSize:11, fontWeight:600, color:'#8896b0', flex:1, textAlign:'center', marginRight:46 }}>{alt}</span>
      </div>
      <div style={{ padding:14 }}>
        <img src={src} alt={alt} style={{ width:'100%', borderRadius:10, display:'block', objectFit:'contain' }} />
      </div>
    </div>
  );

  /* dark frame (for multi-rail image with black bg) */
  const DarkFrame = ({ src, alt }) => (
    <div style={{ background:'#111', border:'1.5px solid #222', borderRadius:18, overflow:'hidden', boxShadow:'0 6px 28px rgba(0,0,0,0.3)' }}>
      <div style={{ background:'#1a1a1a', borderBottom:'1px solid #333', padding:'9px 15px', display:'flex', alignItems:'center', gap:9 }}>
        <div style={{ display:'flex', gap:5 }}>
          {['#fc5f57','#fdbc2c','#33c748'].map(c => <span key={c} style={{ width:9,height:9,borderRadius:'50%',background:c,display:'block' }} />)}
        </div>
        <span style={{ fontSize:11, fontWeight:600, color:'#555', flex:1, textAlign:'center', marginRight:46 }}>{alt}</span>
      </div>
      <div style={{ padding:14 }}>
        <img src={src} alt={alt} style={{ width:'100%', borderRadius:10, display:'block' }} />
      </div>
    </div>
  );

  const P = 'clamp(24px,6vw,80px)';

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <div style={{ fontFamily:"'Plus Jakarta Sans','Segoe UI',sans-serif", color:'#1a2540', overflowX:'hidden' }}>


        {/* ━━━━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━━━━ */}
        <div style={{ background:'linear-gradient(148deg,#061422 0%,#0a3356 42%,#1E6FA8 100%)', padding:`clamp(56px,10vw,108px) ${P} clamp(44px,7vw,80px)`, position:'relative', overflow:'hidden' }}>
          {/* bg orbs */}
          <div style={{ position:'absolute',top:-90,right:-90,width:420,height:420,background:'rgba(245,166,35,0.07)',borderRadius:'50%',pointerEvents:'none' }} />
          <div style={{ position:'absolute',bottom:-110,left:-70,width:320,height:320,background:'rgba(30,111,168,0.18)',borderRadius:'50%',pointerEvents:'none' }} />

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:52, alignItems:'center', maxWidth:1100, margin:'0 auto' }}>
            {/* left */}
            <div style={{ opacity:hv?1:0, transform:hv?'translateY(0)':'translateY(32px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
              <Tag gold>Outward Remittance Platform</Tag>
              <h1 style={{ fontSize:'clamp(2.6rem,5.5vw,4.4rem)', fontWeight:900, color:'#fff', lineHeight:1.05, letterSpacing:'-0.03em', margin:'0 0 10px' }}>
                Open<span style={{ color:'#F5A623' }}>Remit</span>
              </h1>
              <p style={{ fontSize:'clamp(0.9rem,1.4vw,1rem)', fontWeight:500, color:'rgba(255,255,255,0.5)', lineHeight:1.5, margin:'0 0 18px', letterSpacing:'-0.01em' }}>
                Outward Remittance Processing Solution for Banks
              </p>
              <p style={{ fontSize:'clamp(0.88rem,1.3vw,0.97rem)', color:'rgba(255,255,255,0.48)', lineHeight:1.8, margin:'0 0 30px', maxWidth:460 }}>
                A comprehensive, API-driven outward remittance solution for banks — enabling secure integration for beneficiary validation, transaction processing, compliance screening, and settlement routing while ensuring scalability, security, and regulatory compliance.
              </p>
              <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
                {['Multi-Partner','Compliance Ready','Real-Time','Scalable','Multi-Rail'].map(t => (
                  <span key={t} style={{ fontSize:12, fontWeight:600, background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.14)', color:'rgba(255,255,255,0.6)', padding:'6px 14px', borderRadius:20 }}>{t}</span>
                ))}
              </div>
            </div>
            {/* right – overview hero image */}
            <div style={{ opacity:hv?1:0, transform:hv?'translateY(0)':'translateY(32px)', transition:'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s' }}>
              <img src={IMG.hero} alt="OpenRemit Overview" style={{ width:'100%', display:'block', borderRadius:16, filter:'drop-shadow(0 20px 60px rgba(0,0,0,0.35))' }} />
            </div>
          </div>
        </div>


        {/* ━━━━━━━━━━━━━━━━━━━ ABOUT ━━━━━━━━━━━━━━━━━━━ */}
        <div style={{ background:'#fafbfd', padding:`clamp(52px,7vw,88px) ${P}` }}>
          <Reveal>
            <div style={{ maxWidth:1100, margin:'0 auto' }}>
              <Tag>About</Tag>
              <SectionH2>Revolutionizing Outward Remittance Processing</SectionH2>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))', gap:18, marginBottom:32 }}>
                {[
                  { title:'Centralized Hub', desc:'OpenRemit acts as the centralized hub for transaction lifecycle management — validation, routing, compliance checks, and settlement across multiple partners, built with high modularity.' },
                  { title:'Powered by OpenConnect', desc:'OpenConnect is the middleware layer orchestrating system-to-system communication, message transformations, and API exposure — decoupling partner communication from core processing logic.' },
                  { title:'Any Integration Model', desc:'Whether through APIs, pull-based integrations, or batch file processing, OpenRemit ensures seamless integration regardless of a partner\'s infrastructure or technical capability.' },
                ].map((c,i) => (
                  <div key={i} style={{ background:'#fff', border:'1.5px solid #e2e8f0', borderRadius:14, padding:'22px 24px 26px' }}>
                    <div style={{ width:8, height:8, borderRadius:'50%', background: i===2?'#F5A623':'#1E6FA8', marginBottom:14 }} />
                    <div style={{ fontSize:15, fontWeight:700, color:'#1a2540', marginBottom:8 }}>{c.title}</div>
                    <div style={{ fontSize:13.5, lineHeight:1.75, color:'#6b7a99' }}>{c.desc}</div>
                  </div>
                ))}
              </div>
              <Frame src={IMG.features} alt="OpenRemit Feature Hub" />
            </div>
          </Reveal>
        </div>


        {/* ━━━━━━━━━━━━━━━━━━━ WHY — row 1: partners ━━━━━━━━━━━━━━━━━━━ */}
        <div style={{ padding:`clamp(52px,7vw,88px) ${P}` }}>
          <Reveal>
            <div style={{ maxWidth:1100, margin:'0 auto 70px' }}>
              <Tag>Why OpenRemit?</Tag>
              <SectionH2>Designed to Scale With You</SectionH2>
            </div>
          </Reveal>

          {/* multiple partners */}
          <Reveal style={{ maxWidth:1100, margin:'0 auto 64px' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:52, alignItems:'center' }}>
              <Frame src={IMG.partners} alt="Multi-Partner Integration" />
              <div>
                <Tag>Multi-Partner</Tag>
                <h3 style={{ fontSize:'clamp(1.1rem,2.2vw,1.55rem)', fontWeight:800, color:'#0c1e35', lineHeight:1.25, letterSpacing:'-0.02em', margin:'0 0 14px' }}>Unlock Seamless Integration with Multiple Partners</h3>
                <p style={{ fontSize:14.5, lineHeight:1.8, color:'#5a6a88', margin:0 }}>OpenRemit facilitates integration with various remittance partners through a unified platform. Standardized APIs let banks quickly onboard numerous providers, ensuring seamless cross-border transactions with less complexity and overhead.</p>
              </div>
            </div>
          </Reveal>

          {/* subagent */}
          <Reveal delay={60} style={{ maxWidth:1100, margin:'0 auto 64px' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:52, alignItems:'center' }}>
              <div>
                <Tag gold>Subagent Network</Tag>
                <h3 style={{ fontSize:'clamp(1.1rem,2.2vw,1.55rem)', fontWeight:800, color:'#0c1e35', lineHeight:1.25, letterSpacing:'-0.02em', margin:'0 0 14px' }}>Expand Reach with Subagents</h3>
                <p style={{ fontSize:14.5, lineHeight:1.8, color:'#5a6a88', margin:0 }}>OpenRemit's subagent model allows banks to extend remittance services to regions without a physical presence. Subagents operate in underserved areas, growing the customer base beyond traditional banking infrastructure.</p>
              </div>
              <Frame src={IMG.subagent} alt="Subagent Network" />
            </div>
          </Reveal>

          {/* single platform / AML */}
          <Reveal delay={0} style={{ maxWidth:1100, margin:'0 auto 64px' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:52, alignItems:'center' }}>
              <Frame src={IMG.singlePlat} alt="Compliance & Monitoring" />
              <div>
                <Tag>Compliance & Monitoring</Tag>
                <h3 style={{ fontSize:'clamp(1.1rem,2.2vw,1.55rem)', fontWeight:800, color:'#0c1e35', lineHeight:1.25, letterSpacing:'-0.02em', margin:'0 0 14px' }}>Built-In Compliance Screening</h3>
                <p style={{ fontSize:14.5, lineHeight:1.8, color:'#5a6a88', margin:0 }}>SafeWatch screening, AML checks, and OFAC/UNSC sanctions verification are baked into every transaction flow — ensuring your bank stays compliant without slowing down operations.</p>
              </div>
            </div>
          </Reveal>

          {/* multi-rail */}
          <Reveal delay={60} style={{ maxWidth:1100, margin:'0 auto 0' }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:52, alignItems:'center' }}>
              <div>
                <Tag gold>Multi-Rail Support</Tag>
                <h3 style={{ fontSize:'clamp(1.1rem,2.2vw,1.55rem)', fontWeight:800, color:'#0c1e35', lineHeight:1.25, letterSpacing:'-0.02em', margin:'0 0 14px' }}>Multiple Payment Rails — One System</h3>
                <p style={{ fontSize:14.5, lineHeight:1.8, color:'#5a6a88', margin:0 }}>Support RAAST, 1LINK, RTGS, FT, IBFT and COC transactions from a unified interface. OpenRemit intelligently routes each transaction to the appropriate rail based on type, amount, and availability.</p>
              </div>
              <DarkFrame src={IMG.multiRail} alt="Multi-Rail Support" />
            </div>
          </Reveal>
        </div>


        {/* ━━━━━━━━━━━━━━━━━━━ ARCHITECTURE ━━━━━━━━━━━━━━━━━━━ */}
        <div style={{ background:'#fafbfd', padding:`clamp(52px,7vw,88px) ${P}` }}>
          <Reveal>
            <div style={{ maxWidth:1100, margin:'0 auto' }}>
              <Tag>Architecture</Tag>
              <SectionH2>Robust, Modular, and Scalable</SectionH2>
              <p style={{ fontSize:14.5, lineHeight:1.8, color:'#5a6a88', margin:'0 0 28px', maxWidth:700 }}>
                A centralized API gateway via Nginx routes all partner traffic into the unified OpenConnect middleware layer — orchestrating real-time processing, compliance screening (SafeWatch, ESB, TLINK), core banking integration, and full Grafana observability.
              </p>
              <Frame src={IMG.highLevel} alt="High-Level Architecture" />
            </div>
          </Reveal>
        </div>


        {/* ━━━━━━━━━━━━━━━━━━━ MECHANISMS ━━━━━━━━━━━━━━━━━━━ */}
        <div style={{ padding:`clamp(52px,7vw,88px) ${P}` }}>
          <Reveal>
            <div style={{ maxWidth:1100, margin:'0 auto' }}>
              <Tag>Transaction Mechanisms</Tag>
              <SectionH2>Three Ways to Integrate</SectionH2>
              <p style={{ fontSize:14.5, lineHeight:1.8, color:'#5a6a88', margin:'0 0 44px', maxWidth:640 }}>
                OpenRemit supports three key transaction mechanisms, each tailored to the specific capabilities and needs of remittance partners — from full API integration to batch file processing.
              </p>

              {/* Push & Pull */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center', marginBottom:60 }}>
                <Frame src={IMG.pushPull} alt="Push vs Pull Mechanism" />
                <div style={{ display:'flex', flexDirection:'column', gap:18 }}>
                  {[
                    { num:'01', title:'Push Mechanism', color:'#1E6FA8', bg:'#e8f2fa', how:'Banks push transaction data directly to OpenRemit\'s standardized APIs for immediate validation and processing.', benefit:'Direct multi-partner engagement without managing disparate systems. No reliance on external triggers.' },
                    { num:'02', title:'Pull Mechanism', color:'#1E6FA8', bg:'#e8f2fa', how:'OpenRemit pulls transaction data from partner APIs in real time, consolidating and processing centrally.', benefit:'Banks retain full control over transaction flows while supporting numerous remittance services seamlessly.' },
                  ].map((m,i) => (
                    <div key={i} style={{ background:'#fff', border:'1.5px solid #e2e8f0', borderRadius:14, padding:'20px 22px' }}>
                      <div style={{ display:'grid', gridTemplateColumns:'44px 1fr', gap:14, alignItems:'flex-start' }}>
                        <div style={{ width:44,height:44,borderRadius:12,background:m.bg,color:m.color,display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:900,flexShrink:0 }}>{m.num}</div>
                        <div>
                          <div style={{ fontSize:14.5,fontWeight:700,color:'#1a2540',marginBottom:8 }}>{m.title}</div>
                          <div style={{ fontSize:13,lineHeight:1.7,color:'#5a6a88',marginBottom:6 }}><strong style={{ color:'#1a2540',fontWeight:600 }}>How: </strong>{m.how}</div>
                          <div style={{ fontSize:13,lineHeight:1.7,color:'#5a6a88' }}><strong style={{ color:'#F5A623',fontWeight:600 }}>Benefit: </strong>{m.benefit}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* divider */}
              <div style={{ display:'flex', alignItems:'center', gap:14, margin:'0 0 40px', color:'#b0bac9', fontSize:11, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase' }}>
                <div style={{ flex:1, height:1, background:'#e2e8f0' }} />File-Based Integration<div style={{ flex:1, height:1, background:'#e2e8f0' }} />
              </div>

              {/* File mechanism */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'center' }}>
                <div style={{ background:'#fff', border:'1.5px solid #e2e8f0', borderRadius:14, padding:'26px 28px' }}>
                  <div style={{ width:44,height:44,borderRadius:12,background:'#fff8ec',color:'#F5A623',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,fontWeight:900,marginBottom:16 }}>03</div>
                  <div style={{ fontSize:15,fontWeight:700,color:'#1a2540',marginBottom:12 }}>File Mechanism</div>
                  <p style={{ fontSize:13.5,lineHeight:1.75,color:'#5a6a88',margin:'0 0 10px' }}><strong style={{ color:'#1a2540',fontWeight:600 }}>How it works: </strong>Partners without API capabilities send day-end batch transaction files. OpenRemit converts them into individual transactions for processing.</p>
                  <p style={{ fontSize:13.5,lineHeight:1.75,color:'#5a6a88',margin:0 }}><strong style={{ color:'#F5A623',fontWeight:600 }}>Key benefit: </strong>No partner is excluded regardless of technical capability. Even smaller remittance partners can fully participate in the network.</p>
                </div>
                <Frame src={IMG.file} alt="File Mechanism — Batch to Individual" />
              </div>

            </div>
          </Reveal>
        </div>


        {/* ━━━━━━━━━━━━━━━━━━━ GLOBAL REACH ━━━━━━━━━━━━━━━━━━━ */}
        <div style={{ background:'#fafbfd', padding:`clamp(52px,7vw,88px) ${P}` }}>
          <Reveal>
            <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:52, alignItems:'center' }}>
              <div>
                <Tag gold>Global Reach</Tag>
                <SectionH2>Connecting the World, One Transaction at a Time</SectionH2>
                <p style={{ fontSize:14.5, lineHeight:1.8, color:'#5a6a88', margin:0 }}>
                  OpenRemit's partner network spans multiple countries and payment corridors. Unified transaction routing, real-time FX handling, and compliance-ready architecture means your bank can serve customers wherever they need to send money.
                </p>
              </div>
              <Frame src={IMG.globe} alt="Global Remittance Network" bg="#fff" />
            </div>
          </Reveal>
        </div>


        {/* ━━━━━━━━━━━━━━━━━━━ FOOTER ━━━━━━━━━━━━━━━━━━━ */}
        <div style={{ background:'linear-gradient(130deg,#071828,#0c3f66)', padding:`clamp(44px,6vw,68px) ${P}`, textAlign:'center' }}>
          <p style={{ fontSize:12,fontWeight:700,letterSpacing:'0.15em',textTransform:'uppercase',color:'rgba(255,255,255,0.28)',marginBottom:10 }}>Explore the documentation</p>
          <h2 style={{ fontSize:'clamp(1.3rem,2.5vw,2rem)',fontWeight:800,color:'#fff',margin:'0 auto 10px',maxWidth:520,lineHeight:1.3,letterSpacing:'-0.02em' }}>Everything you need to get started</h2>
          <p style={{ fontSize:14,color:'rgba(255,255,255,0.38)',margin:'0 auto',maxWidth:420,lineHeight:1.75 }}>Back Office guides, Branch Portal workflows, API references, and integration documentation.</p>
        </div>


      </div>
    </>
  );
};

<OpenRemitOverview />

<!-- import '../custom.css'

# OpenRemit: Revolutionizing Outward Remittance Processing

OpenRemit is a powerful, flexible, and scalable outward remittance processing platform designed to address the complexities of cross-border payments. Engineered to simplify the remittance ecosystem for banks and financial institutions, OpenRemit offers an end-to-end solution that ensures secure, real-time processing, compliance, and settlement of transactions across multiple partners and systems.

At its core, OpenRemit acts as the centralized hub for transaction lifecycle management, handling validation, routing, compliance checks, and settlement functions. It is built with a high degree of modularity, ensuring that it can cater to diverse remittance partners with varying technical capabilities. Whether through APIs, pull-based integrations, or batch file processing, OpenRemit ensures seamless integration, regardless of the partner's infrastructure.

The platform is powered by OpenConnect, which serves as the middleware layer responsible for orchestrating system-to-system communication, message transformations, and API exposure. By decoupling partner communication from the core processing logic, OpenRemit ensures enhanced security, scalability, and ease of integration.




## Features

<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
  {/* Row 1 */}
  <div style={{ flex: '1 1 30%', maxWidth: '300px', padding: '20px', textAlign: 'center', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '1px solid #ddd' }}>
    <h3>Real-Time Transaction Processing</h3>
    <p>Ensures high-speed, real-time processing of financial transactions with intelligent routing and RabbitMQ queue management.</p>
  </div>

  <div style={{ flex: '1 1 30%', maxWidth: '300px', padding: '20px', textAlign: 'center', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '1px solid #ddd' }}>
    <h3>Comprehensive Payment Network Integration</h3>
    <p>Provides effortless connectivity with RAAST, 1LINK, RTGS, and national payment switches for interoperability.</p>
  </div>

  <div style={{ flex: '1 1 30%', maxWidth: '300px', padding: '20px', textAlign: 'center', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '1px solid #ddd' }}>
    <h3>Seamless Multi-Tenant Architecture</h3>
    <p>Supports multiple financial institutions with independent operation and secure data segregation on the same platform.</p>
  </div>

  {/* Row 2 */}
  <div style={{ flex: '1 1 45%', maxWidth: '300px', padding: '20px', textAlign: 'center', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '1px solid #ddd' }}>
    <h3>Secure, Scalable & Seamless API Access</h3>
    <p>Enforces strong security with JWT 2.0 authentication and ISO 8583/ISO 20022-based secure messaging.</p>
  </div>

  <div style={{ flex: '1 1 45%', maxWidth: '300px', padding: '20px', textAlign: 'center', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', border: '1px solid #ddd' }}>
    <h3>Advanced Transaction Monitoring</h3>
    <p>Enables real-time transaction tracking, fraud detection, and compliance monitoring with a comprehensive dashboard.</p>
  </div>
</div>


## Solution Architecture
OpenRemit provides a robust set of modules to enable seamless outward remittance transactions, including integrations with multiple partners and systems. The solution includes a transaction routing mechanism to support different remittance channels, an API gateway for connectivity with external systems (such as financial institutions), and a middleware layer to ensure real-time processing and monitoring of all remittance transactions. OpenRemit is designed to offer a unified platform for sending and receiving international remittances, handling diverse payment types, and enabling compliance with financial regulations.


<div style={{ display: 'flex', alignItems: 'center', padding:'10px', marginBottom: '10px' }}>
<div style={{ flex: 1 }}>
 ![Overview](/img/overview/highLevel.png)
 </div>
 </div>


## Transaction Mechanisms in OpenRemit

OpenRemit supports three key transaction mechanisms, each tailored to the specific capabilities and needs of remittance partners:

 ### 1. Push Mechanism
    **How It Works**: In this mechanism, banks push transaction data to OpenRemit’s standardized APIs. This allows banks to send remittance data to OpenRemit for further validation and processing.  
    **Key Benefit**: This model ensures that banks can directly engage with multiple partners, streamlining the process and reducing the overhead of managing various systems. It allows the bank to initiate transaction flows seamlessly without relying on external triggers.
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0px' }}>
  <div style={{ flex: 1, paddingRight: '10px' }}>
       
        ### 2. Pull Mechanism
    **How It Works**: OpenRemit pulls transaction data from various partner APIs. This gives banks the flexibility to receive transaction details from partners in real time, consolidating and processing them centrally.  
    **Key Benefit**: By pulling data, banks can retain control over transaction flows while supporting numerous remittance services. This method reduces the burden of partner management by allowing banks to consume data as needed, enhancing flexibility and operational control.

  </div>
  <div style={{ flex: 1 }}>
    ![Overview](/img/overview/pushPull-removebg-preview.png)
  </div>
</div>

 ### 3. File Mechanism
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', padding: '0' }}>
  <div style={{ flex: 1, paddingRight: '10px', margin: 0 }}>
        **How It Works**: For smaller partners who do not have API capabilities, OpenRemit supports a file-based mechanism. Partners send transaction records at the end of the day in a batch file format, and OpenRemit converts these into individual transactions for processing.  
**Key Benefit**: This ensures that even smaller remittance partners without robust API infrastructure can still participate in the remittance network. OpenRemit’s ability to convert bulk transaction data into actionable processing ensures that no partner is left out, regardless of technical capability.
  </div>
</div>

## Why OpenRemit?

<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0px' }}>
    <div style={{ flex: 1 }}>
    ![Overview](/img/overview/multiplePartners.png)
  </div>
  <div style={{ flex: 1, paddingRight: '5px' }}>
    ### Unlock Seamless Integration with Multiple Partners
    OpenRemit facilitates the integration of various remittance partners through a unified platform. By offering standardized APIs, banks can quickly integrate with numerous remittance providers, ensuring seamless cross-border transactions for their customers. This reduces complexity for banks, enabling them to access a wide network of remittance partners and offer more options to their users.
  </div>
</div>

<div class="subagent-section">
  <div style={{ flex: 1, paddingRight: '5px' }}>
    ### Expand Reach with Subagents
    One of the standout features of OpenRemit is its subagent model, which allows banks to extend remittance services to regions where they may not have a physical presence. Subagents can operate in underserved or remote areas, offering a significant opportunity for banks to grow their customer base by providing services in locations typically outside the reach of traditional banking infrastructure.
  </div>
  <div style={{ flex: 1 }}>
    ![Overview](/img/overview/subagent.png)
  </div>
</div>

<div class="subagent-section">
    <div style={{ flex: 1 }}>
    ![Overview](/img/overview/globe.png)
  </div>
  <div style={{ flex: 1, paddingRight: '10px' }}>
    ### Operational Efficiency Through a Single Platform
    OpenRemit simplifies the process of managing remittance transactions by reducing the need for different systems for each partner. With a single platform, OpenRemit helps streamline operations, reducing integration variance and providing a standardized, controlled approach for remittance processing.
  </div>
</div> -->
