---
hide_title: true
---

import React, { useEffect, useRef, useState, useMemo } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ImgCard } from '@site/src/components/DocKit';


export const Transactions = () => {
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

  const s = useMemo(() => {
    const border = '1.5px solid var(--or-border)';
    return {
      root: { fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif", color: 'var(--or-text)', paddingBottom: 64 },
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

  const columns = [
    'Txn ID',
    'Agent Code',
    'Branch Code',
    'MTO',
    'Type',
    'Amount FCY',
    'Amount (local currency)',
    'Current State',
    'Status',
    'Created',
    'Last Update',
    'Action',
  ];

  const detailSections = [
    {
      title: 'Overview',
      items: ['Transaction ID', 'Bank Reference', 'Created At', 'Last Updated', 'Current State'],
    },
    {
      title: 'Parties',
      items: ['Remitter', 'Beneficiary'],
    },
    {
      title: 'Accounts',
      items: ['Beneficiary account details'],
    },
    {
      title: 'Amounts & FX',
      items: ['Foreign currency amount', 'Local currency amount', 'Purpose'],
    },
    {
      title: 'Screening Summary',
      items: ['Screening status', 'Completed date'],
    },
    {
      title: 'Timeline',
      items: ['Stage and lifecycle of the transaction'],
    },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <div style={s.root}>

        {/* ── HERO ── */}
        <div style={{ ...s.header, opacity:hv?1:0, transform:hv?'translateY(0)':'translateY(28px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}><em style={s.em}>Transactions</em></h1>
          <p style={s.sub}>View, filter, and inspect all transactions with full lifecycle details and screening summaries.</p>
        </div>

        {/* ── TRANSACTIONS TABLE ── */}
        <Reveal>
          <div style={s.sectionHeading}>Transactions Table <div style={s.line} /></div>
          <div style={s.card}>
            <div style={s.cardTitle}>Transactions Table (with Filters)</div>
            <ul style={s.list}>
              <li style={s.item}>
                <span style={s.bullet} />
                <div>
                  Available columns:
                  <Sub items={columns} />
                </div>
              </li>
              <Li>Click the action button to view further details.</Li>
            </ul>
          </div>
          <ImgCard src="/img/BO/Transactions/table.png" alt="Transactions Table" label="Fig. 1" />
        </Reveal>

        {/* ── TRANSACTION DETAILS ── */}
        <Reveal delay={60}>
          <div style={s.sectionHeading}>Transaction Details <div style={s.line} /></div>
          <div style={s.card}>
            <div style={s.cardTitle}>Transaction Details</div>
            <ul style={s.list}>
              {detailSections.map((section, i) => (
                <li key={i} style={s.item}>
                  <span style={s.bullet} />
                  <div>
                    {section.title}:
                    <Sub items={section.items} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <ImgCard src="/img/BO/Transactions/details.png" alt="Transaction Details" label="Fig. 2" />
        </Reveal>

      </div>
    </>
  );
};

<Transactions />