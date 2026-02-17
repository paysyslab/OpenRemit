---
hide_title: true
---

import React, { useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const ImgCard = ({ src, alt, label }) => {
  const [zoomed, setZoomed] = useState(false);
  const resolvedSrc = useBaseUrl(src);

  const styles = useMemo(() => {
    const border = '1.5px solid #e2e8f0';
    return {
      card: {
        background: '#fff',
        border,
        borderRadius: 14,
        overflow: 'hidden',
        cursor: 'zoom-in',
        display: 'flex',
        flexDirection: 'column',
      },
      topbar: {
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        padding: '8px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      },
      dots: { display: 'flex', gap: 5 },
      dot: (bg) => ({ width: 9, height: 9, borderRadius: '50%', background: bg, display: 'block' }),
      topbarTitle: {
        fontSize: 11,
        fontWeight: 600,
        color: '#8896b0',
        flex: 1,
        textAlign: 'center',
        marginRight: 44,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      imgWrap: { padding: 12, flex: 1 },
      img: {
        width: '100%',
        height: 'auto',
        borderRadius: 8,
        border: '1px solid #e2e8f0',
        display: 'block',
        background: '#f8fafc',
      },
      footer: {
        padding: '9px 14px 11px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '1px solid #e2e8f0',
        gap: 10,
      },
      pill: {
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#1E6FA8',
        background: '#e8f2fa',
        padding: '2px 10px',
        borderRadius: 20,
        whiteSpace: 'nowrap',
      },
      footerTitle: {
        fontSize: 11,
        color: '#8896b0',
        flex: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      zoomHint: {
        fontSize: 11,
        color: '#b0bac9',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        whiteSpace: 'nowrap',
      },
      overlay: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(8,18,36,0.88)',
        backdropFilter: 'blur(14px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        cursor: 'zoom-out',
      },
      modal: { position: 'relative', maxWidth: '94vw', maxHeight: '90vh' },
      closeBtn: {
        position: 'absolute',
        top: -13,
        right: -13,
        width: 34,
        height: 34,
        background: '#1E6FA8',
        border: '2px solid #fff',
        borderRadius: '50%',
        color: '#fff',
        fontSize: 16,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
      },
      modalImg: {
        maxWidth: '100%',
        maxHeight: '88vh',
        borderRadius: 12,
        display: 'block',
        boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
      },
      caption: { textAlign: 'center', marginTop: 12, fontSize: 13, color: 'rgba(255,255,255,0.42)' },
    };
  }, []);

  return (
    <>
      <div onClick={() => setZoomed(true)} title="Click to zoom" style={styles.card}>
        <div style={styles.topbar}>
          <div style={styles.dots}>
            <span style={styles.dot('#fc5f57')} />
            <span style={styles.dot('#fdbc2c')} />
            <span style={styles.dot('#33c748')} />
          </div>
          <div style={styles.topbarTitle} title={alt}>
            {alt}
          </div>
        </div>

        <div style={styles.imgWrap}>
          <img
            src={resolvedSrc}
            alt={alt}
            loading="lazy"
            style={styles.img}
            onError={(e) => {
              e.currentTarget.style.opacity = 0.35;
            }}
          />
        </div>

        <div style={styles.footer}>
          <span style={styles.pill}>{label}</span>
          <span style={styles.footerTitle} title={alt}>
            {alt}
          </span>
          <span style={styles.zoomHint}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            Zoom
          </span>
        </div>
      </div>

      {zoomed && (
        <div style={styles.overlay} onClick={() => setZoomed(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setZoomed(false)} aria-label="Close">
              ✕
            </button>
            <img src={resolvedSrc} alt={alt} style={styles.modalImg} />
            <div style={styles.caption}>{alt}</div>
          </div>
        </div>
      )}
    </>
  );
};

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
        accent: '#1E6FA8',
        iconBg: '#e8f2fa',
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
        accent: '#1E6FA8',
        iconBg: '#e8f2fa',
      },
      {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
            <line x1="1" y1="10" x2="23" y2="10" />
          </svg>
        ),
        title: 'Move to RTGS',
        desc: 'Escalate eligible transactions to Real-Time Gross Settlement for higher-value processing.',
        accent: '#F5A623',
        iconBg: '#fff8ec',
      },
    ],
    []
  );

  const s = useMemo(() => {
    const border = '1.5px solid #e2e8f0';
    return {
      root: { fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif", color: '#1a2540', paddingBottom: 64 },
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
      sectionHeading: { display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8896b0', margin: '44px 0 20px' },
      line: { flex: 1, height: 1, background: '#e2e8f0' },
      grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 },
      card: { background: '#fff', border, borderRadius: 14, padding: '24px 24px 28px' },
      iconWrap: (bg, accent) => ({ width: 46, height: 46, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg, color: accent, marginBottom: 16 }),
      title: { fontSize: 15, fontWeight: 700, color: '#1a2540', marginBottom: 8 },
      desc: { fontSize: 14, lineHeight: 1.75, color: '#6b7a99' },
      note: { fontSize: 15.5, lineHeight: 1.8, color: '#3a4a62', margin: '20px 0 24px' },
      code: { background: '#e8f2fa', color: '#1E6FA8', padding: '2px 8px', borderRadius: 5, fontSize: 13.5, fontWeight: 600, fontFamily: 'monospace' },
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
          <p style={s.sub}>Monitor, investigate, and resolve failed transactions. Repush or escalate to RTGS based on transaction status.</p>
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
          If the Transaction Status is <code style={s.code}>1LINK</code> or <code style={s.code}>RAAST</code>, the transaction can <strong>only be repushed</strong>. Moving to RTGS is not available for these statuses.
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
