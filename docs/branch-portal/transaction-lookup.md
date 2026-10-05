---
hide_title: true
---

import React, { useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ImgCard } from '@site/src/components/DocKit';


export const TransactionLookup = () => {
  const s = useMemo(() => {
    const border = '1.5px solid var(--or-border)';
    return {
      root: { fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif", color: 'var(--or-text)', paddingBottom: 64 },
      header: { background: 'linear-gradient(130deg, #0c3f66 0%, #1E6FA8 60%, #1a5e90 100%)', borderRadius: 16, padding: '32px 32px 28px', marginBottom: 28, position: 'relative', overflow: 'hidden' },
      glow1: { position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'rgba(245,166,35,0.10)', borderRadius: '50%', pointerEvents: 'none' },
      glow2: { position: 'absolute', bottom: -70, right: 100, width: 150, height: 150, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', pointerEvents: 'none' },
      h1: { fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 10px' },
      em: { fontStyle: 'normal', color: '#F5A623' },
      sub: { fontSize: 14, color: 'rgba(255,255,255,0.60)', lineHeight: 1.65, maxWidth: 520, margin: 0 },
      sectionHeading: { display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--or-text-faint)', margin: '44px 0 20px' },
      line: { flex: 1, height: 1, background: 'var(--or-border)' },
      card: { background: 'var(--or-surface)', border, borderRadius: 14, padding: '24px 28px' },
      cardTitle: { fontSize: 16, fontWeight: 700, color: 'var(--or-text)', marginBottom: 14 },
      list: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
      item: { display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5, lineHeight: 1.75, color: 'var(--or-text)' },
      bullet: { flexShrink: 0, marginTop: 8, width: 7, height: 7, borderRadius: '50%', background: '#1E6FA8', display: 'block' },
      subList: { margin: '8px 0 0 17px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
      subItem: { display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, lineHeight: 1.7, color: 'var(--or-text-muted)' },
      subBullet: { flexShrink: 0, marginTop: 7, width: 5, height: 5, borderRadius: '50%', background: 'var(--or-gold)', display: 'block' },
    };
  }, []);

  const Li = ({ children }) => (
    <li style={s.item}><span style={s.bullet} /><div>{children}</div></li>
  );

  const Sub = ({ items }) => (
    <ul style={s.subList}>
      {items.map((d, i) => (
        <li key={i} style={s.subItem}><span style={s.subBullet} />{d}</li>
      ))}
    </ul>
  );

  const idFields = [
    'ID Type (NIC / NICOP / Passport)',
    'Receiver Name',
    'ID Number',
    'Veresys (Bio-Sys) OFAC/UNSC Verification',
    'Contact Number',
    'Country, Province, City',
    'ID Expiry Date',
    'Email',
    'Date of Birth',
    'Zip Code',
    'Address',
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={s.root}>

        {/* Header */}
        <div style={s.header}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}>Transaction <em style={s.em}>Lookup</em></h1>
          <p style={s.sub}>Search, identify, and initiate transactions by verifying customer and transaction details.</p>
        </div>

        <ImgCard src="/img/BP/lookup.png" alt="Transaction Lookup" label="Fig. 1" />

        {/* Lookup Flow */}
        <div style={s.sectionHeading}>Transaction Lookup <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Transaction Lookup</div>
          <ul style={s.list}>
            <Li>Maker searches transaction ID.</Li>
            <Li>System identifies the MTO of the transaction.</Li>
            <Li>If multiple matches, system lets the user choose between the transactions.</Li>
            <Li>If single match, system shows sender info, receiver info, transaction details, and teller info.</Li>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                Maker verifies the information with the customer and fills the rest of the ID verification details:
                <Sub items={idFields} />
              </div>
            </li>
            <Li>Transaction is initiated.</Li>
          </ul>
        </div>

        <ImgCard src="/img/BP/lookupdetails.png" alt="Lookup Details" label="Fig. 2" />

      </div>
    </>
  );
};

<TransactionLookup />