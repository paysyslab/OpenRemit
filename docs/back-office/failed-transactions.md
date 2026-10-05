---
hide_title: true
---

import React, { useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ImgCard } from '@site/src/components/DocKit';


export const FailedTransactions = () => {
  const rules = useMemo(
    () => [
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        ),
        title: 'View Failed Transactions',
        desc: 'Access and monitor all failed transactions from the Back Office dashboard.',
        accent: 'var(--or-blue)',
        iconBg: 'var(--or-blue-soft)',
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <polyline points="23 20 23 14 17 14" />
            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
          </svg>
        ),
        title: 'Repush Transaction',
        desc: 'Retry a failed transaction by repushing it through the original payment channel.',
        accent: 'var(--or-blue)',
        iconBg: 'var(--or-blue-soft)',
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        ),
        title: 'Move to High-Value Rail',
        desc: 'Escalate transactions that failed on every automatic rail to the high-value rail (e.g. RTGS in Pakistan).',
        accent: 'var(--or-gold-text)',
        iconBg: 'var(--or-gold-soft)',
      },
    ],
    []
  );

  const s = useMemo(() => {
    const border = '1.5px solid var(--or-border)';
    return {
      root: { fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif", color: 'var(--or-text)', paddingBottom: 64 },
      header: {
        background: 'linear-gradient(130deg, #0c3f66 0%, #1E6FA8 60%, #1a5e90 100%)',
        borderRadius: 16,
        padding: '32px 32px 28px',
        marginBottom: 28,
        position: 'relative',
        overflow: 'hidden',
      },
      glow1: { position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'rgba(245,166,35,0.10)', borderRadius: '50%', pointerEvents: 'none' },
      glow2: { position: 'absolute', bottom: -70, right: 100, width: 150, height: 150, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', pointerEvents: 'none' },
      h1: { fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 10px' },
      em: { fontStyle: 'normal', color: '#F5A623' },
      sub: { fontSize: 14, color: 'rgba(255,255,255,0.60)', lineHeight: 1.65, maxWidth: 520, margin: 0 },
      sectionHeading: { display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--or-text-faint)', margin: '44px 0 20px' },
      line: { flex: 1, height: 1, background: 'var(--or-border)' },
      grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 },
      card: { background: 'var(--or-surface)', border, borderRadius: 14, padding: '24px 24px 28px' },
      iconWrap: (bg, accent) => ({ width: 46, height: 46, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg, color: accent, marginBottom: 16 }),
      title: { fontSize: 15, fontWeight: 700, color: 'var(--or-text)', marginBottom: 8 },
      desc: { fontSize: 14, lineHeight: 1.75, color: 'var(--or-text-muted)' },
      note: { fontSize: 15.5, lineHeight: 1.8, color: 'var(--or-text)', margin: '20px 0 24px' },
      code: { background: 'var(--or-blue-soft)', color: 'var(--or-blue)', padding: '2px 8px', borderRadius: 5, fontSize: 13.5, fontWeight: 600, fontFamily: 'monospace' },
    };
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={s.root}>
        <div style={s.header}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}>
            Failed <em style={s.em}>Transactions</em>
          </h1>
          <p style={s.sub}>Monitor, investigate, and resolve failed transactions. Repush or escalate to the high-value rail based on transaction status.</p>
        </div>

        <div style={s.sectionHeading}>
          Capabilities <div style={s.line} />
        </div>

        <div style={s.grid}>
          {rules.map((r, i) => (
            <div key={i} style={s.card}>
              <div style={s.iconWrap(r.iconBg, r.accent)}>{r.icon}</div>
              <div style={s.title}>{r.title}</div>
              <div style={s.desc}>{r.desc}</div>
            </div>
          ))}
        </div>

        <div style={s.sectionHeading}>
          Status Action Reference <div style={s.line} />
        </div>

        <p style={s.note}>
          If the Transaction Status shows the primary or secondary rail (for example <code style={s.code}>1LINK</code> or <code style={s.code}>RAAST</code> in Pakistan), the transaction can <strong>only be repushed</strong>. Moving to the high-value rail is not available for these statuses.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          <ImgCard src="/img/BO/Transactions/failed.png" alt="Failed Transactions — Overview" label="Fig. 1" />
          <ImgCard src="/img/BO/Transactions/failed2.png" alt="Failed Transactions — Detail View" label="Fig. 2" />
        </div>
      </div>
    </>
  );
};

<FailedTransactions />
