---
hide_title: true
---

import React, { useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const ImgCard = ({ src, alt, label }) => {
  const [zoomed, setZoomed] = useState(false);
  const resolvedSrc = useBaseUrl(src);

  const styles = useMemo(() => ({
    card: { background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: 14, overflow: 'hidden', cursor: 'zoom-in', display: 'flex', flexDirection: 'column', margin: '20px 0' },
    topbar: { background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10 },
    dots: { display: 'flex', gap: 5 },
    dot: (bg) => ({ width: 9, height: 9, borderRadius: '50%', background: bg, display: 'block' }),
    topbarTitle: { fontSize: 11, fontWeight: 600, color: '#8896b0', flex: 1, textAlign: 'center', marginRight: 44, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    imgWrap: { padding: 12, flex: 1 },
    img: { width: '100%', height: 'auto', borderRadius: 8, border: '1px solid #e2e8f0', display: 'block', background: '#f8fafc' },
    footer: { padding: '9px 14px 11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', gap: 10 },
    pill: { fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1E6FA8', background: '#e8f2fa', padding: '2px 10px', borderRadius: 20, whiteSpace: 'nowrap' },
    footerTitle: { fontSize: 11, color: '#8896b0', flex: 1, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
    zoomHint: { fontSize: 11, color: '#b0bac9', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' },
    overlay: { position: 'fixed', inset: 0, background: 'rgba(8,18,36,0.88)', backdropFilter: 'blur(14px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, cursor: 'zoom-out' },
    modal: { position: 'relative', maxWidth: '94vw', maxHeight: '90vh' },
    closeBtn: { position: 'absolute', top: -13, right: -13, width: 34, height: 34, background: '#1E6FA8', border: '2px solid #fff', borderRadius: '50%', color: '#fff', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.3)' },
    modalImg: { maxWidth: '100%', maxHeight: '88vh', borderRadius: 12, display: 'block', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' },
    caption: { textAlign: 'center', marginTop: 12, fontSize: 13, color: 'rgba(255,255,255,0.42)' },
  }), []);

  return (
    <>
      <div onClick={() => setZoomed(true)} title="Click to zoom" style={styles.card}>
        <div style={styles.topbar}>
          <div style={styles.dots}>
            <span style={styles.dot('#fc5f57')} />
            <span style={styles.dot('#fdbc2c')} />
            <span style={styles.dot('#33c748')} />
          </div>
          <div style={styles.topbarTitle} title={alt}>{alt}</div>
        </div>
        <div style={styles.imgWrap}>
          <img src={resolvedSrc} alt={alt} loading="lazy" style={styles.img} onError={(e) => { e.currentTarget.style.opacity = 0.35; }} />
        </div>
        <div style={styles.footer}>
          <span style={styles.pill}>{label}</span>
          <span style={styles.footerTitle} title={alt}>{alt}</span>
          <span style={styles.zoomHint}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            Zoom
          </span>
        </div>
      </div>
      {zoomed && (
        <div style={styles.overlay} onClick={() => setZoomed(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setZoomed(false)} aria-label="Close">✕</button>
            <img src={resolvedSrc} alt={alt} style={styles.modalImg} />
            <div style={styles.caption}>{alt}</div>
          </div>
        </div>
      )}
    </>
  );
};

export const TransactionApproval = () => {
  const s = useMemo(() => {
    const border = '1.5px solid #e2e8f0';
    return {
      root: { fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif", color: '#1a2540', paddingBottom: 64 },
      header: { background: 'linear-gradient(130deg, #0c3f66 0%, #1E6FA8 60%, #1a5e90 100%)', borderRadius: 16, padding: '32px 32px 28px', marginBottom: 28, position: 'relative', overflow: 'hidden' },
      glow1: { position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'rgba(245,166,35,0.10)', borderRadius: '50%', pointerEvents: 'none' },
      glow2: { position: 'absolute', bottom: -70, right: 100, width: 150, height: 150, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', pointerEvents: 'none' },
      h1: { fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 10px' },
      em: { fontStyle: 'normal', color: '#F5A623' },
      sub: { fontSize: 14, color: 'rgba(255,255,255,0.60)', lineHeight: 1.65, maxWidth: 520, margin: 0 },
      sectionHeading: { display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8896b0', margin: '44px 0 20px' },
      line: { flex: 1, height: 1, background: '#e2e8f0' },
      card: { background: '#fff', border, borderRadius: 14, padding: '24px 28px' },
      cardTitle: { fontSize: 16, fontWeight: 700, color: '#1a2540', marginBottom: 14 },
      list: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
      item: { display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5, lineHeight: 1.75, color: '#3a4a62' },
      bullet: { flexShrink: 0, marginTop: 8, width: 7, height: 7, borderRadius: '50%', background: '#1E6FA8', display: 'block' },
      subList: { margin: '8px 0 0 17px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
      subItem: { display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, lineHeight: 1.7, color: '#5a6a88' },
      subBullet: { flexShrink: 0, marginTop: 7, width: 5, height: 5, borderRadius: '50%', background: '#F5A623', display: 'block' },
    };
  }, []);

  const Li = ({ children }) => (
    <li style={s.item}><span style={s.bullet} /><div>{children}</div></li>
  );

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={s.root}>

        {/* Header */}
        <div style={s.header}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}>Transaction <em style={s.em}>Approval</em></h1>
          <p style={s.sub}>Maker-checker workflow for reviewing, approving, and rejecting pending transactions.</p>
        </div>

        {/* Approval History */}
        <div style={s.sectionHeading}>Transaction Approval History <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Transaction Approval History</div>
          <ul style={s.list}>
            <Li>Any rejected transactions by the checker will appear here.</Li>
            <Li>Maker can edit and resend for approval or delete the request.</Li>
          </ul>
        </div>

        {/* Transaction Approval */}
        <div style={s.sectionHeading}>Transaction Approval <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Transaction Approval</div>
          <ul style={s.list}>
            <Li>Pending transaction table.</Li>
            <Li>Checker can approve or reject transactions.</Li>
            <Li>Reason is required for rejecting.</Li>
          </ul>
        </div>

        <ImgCard src="/img/BP/maker.png" alt="Transaction Approval" label="Fig. 1" />

      </div>
    </>
  );
};

<TransactionApproval />