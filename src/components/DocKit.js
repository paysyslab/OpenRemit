import React, { useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/* Shared styling primitives, matching the look already established in
   docs/back-office/*.md and docs/branch-portal/*.md (navy #0c3f66 -> #1E6FA8,
   amber #F5A623 accent, Plus Jakarta Sans). Importing these from one place
   instead of re-declaring them in every file keeps every page visually
   identical while avoiding ~200 lines of duplicated CSS-in-JS per page. */

const FONT_LINK = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';

export const DocFonts = () => <link href={FONT_LINK} rel="stylesheet" />;

const s = {
  root: { fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif", color: '#1a2540', paddingBottom: 24 },
  header: { background: 'linear-gradient(130deg, #0c3f66 0%, #1E6FA8 60%, #1a5e90 100%)', borderRadius: 16, padding: '32px 32px 28px', marginBottom: 28, position: 'relative', overflow: 'hidden' },
  glow1: { position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'rgba(245,166,35,0.10)', borderRadius: '50%', pointerEvents: 'none' },
  glow2: { position: 'absolute', bottom: -70, right: 100, width: 150, height: 150, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', pointerEvents: 'none' },
  h1: { fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 10px' },
  em: { fontStyle: 'normal', color: '#F5A623' },
  sub: { fontSize: 14, color: 'rgba(255,255,255,0.60)', lineHeight: 1.65, maxWidth: 640, margin: 0 },
  sectionHeading: { display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8896b0', margin: '44px 0 20px' },
  line: { flex: 1, height: 1, background: '#e2e8f0' },
  card: { background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: 14, padding: '24px 28px', marginBottom: 18 },
  cardAmber: { background: '#FFF8EC', border: '1.5px solid #F5A623', borderRadius: 14, padding: '20px 24px', marginBottom: 18 },
  cardTitle: { fontSize: 16, fontWeight: 700, color: '#1a2540', marginBottom: 14 },
  list: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
  item: { display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5, lineHeight: 1.75, color: '#3a4a62' },
  bullet: { flexShrink: 0, marginTop: 8, width: 7, height: 7, borderRadius: '50%', background: '#1E6FA8', display: 'block' },
  subList: { margin: '8px 0 0 17px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 },
  subItem: { display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, lineHeight: 1.7, color: '#5a6a88' },
  subBullet: { flexShrink: 0, marginTop: 7, width: 5, height: 5, borderRadius: '50%', background: '#F5A623', display: 'block' },
  stepNum: { flexShrink: 0, marginTop: 3, width: 22, height: 22, borderRadius: '50%', background: '#e8f2fa', color: '#1E6FA8', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  imgGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 },
  tableWrap: { border: '1.5px solid #e2e8f0', borderRadius: 14, overflowX: 'auto', marginBottom: 18 },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: 13.5 },
  th: { background: '#0c3f66', color: '#fff', textAlign: 'left', padding: '10px 16px', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em' },
  td: { padding: '10px 16px', borderTop: '1px solid #e2e8f0', color: '#3a4a62', verticalAlign: 'top' },
  rolesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 18 },
  roleCard: { background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: 14, padding: '22px 24px 26px' },
  roleIconWrap: { width: 44, height: 44, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  roleTitle: { fontSize: 15, fontWeight: 700, color: '#1a2540', marginBottom: 8 },
  roleDesc: { fontSize: 13.5, lineHeight: 1.75, color: '#6b7a99' },
};

export const DocPage = ({ children }) => (
  <>
    <DocFonts />
    <div style={s.root}>{children}</div>
  </>
);

export const Hero =({ title, accent, subtitle }) => (
  <div style={s.header}>
    <div style={s.glow1} />
    <div style={s.glow2} />
    <h1 style={s.h1}>
      {title}
      {accent ? <> <em style={s.em}>{accent}</em></> : null}
    </h1>
    {subtitle ? <p style={s.sub}>{subtitle}</p> : null}
  </div>
);

export const SectionHeading = ({ children }) => (
  <div style={s.sectionHeading}>{children}<div style={s.line} /></div>
);

export const Card = ({ title, children, amber }) => (
  <div style={amber ? s.cardAmber : s.card}>
    {title ? <div style={s.cardTitle}>{title}</div> : null}
    {children}
  </div>
);

export const Li = ({ children }) => (
  <li style={s.item}><span style={s.bullet} /><div>{children}</div></li>
);

export const List = ({ children }) => <ul style={s.list}>{children}</ul>;

export const Sub = ({ items }) => (
  <ul style={s.subList}>
    {items.map((d, i) => (
      <li key={i} style={s.subItem}><span style={s.subBullet} />{d}</li>
    ))}
  </ul>
);

export const Steps = ({ items }) => (
  <ol style={s.list}>
    {items.map((d, i) => (
      <li key={i} style={s.item}><span style={s.stepNum}>{i + 1}</span><div>{d}</div></li>
    ))}
  </ol>
);

export const ImgGrid = ({ children }) => <div style={s.imgGrid}>{children}</div>;

export const DocTable =({ columns, rows }) => (
  <div style={s.tableWrap}>
    <table style={s.table}>
      <thead>
        <tr>{columns.map((c, i) => <th key={i} style={s.th}>{c}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) => <td key={ci} style={s.td}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* Small icon set, matching the stroke style already used inline in
   docs/branch-portal/logging-in-and-changing-password.md (24x24,
   currentColor stroke, strokeWidth 2). Add more paths here as needed
   rather than inlining raw <svg> per page. */
export const Icon = {
  home: <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></>,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" /><circle cx="17" cy="8.5" r="2.6" /><path d="M15 14.2c2.7.5 4.5 2.6 4.5 5.8" /></>,
  shield: <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6z" />,
  briefcase: <><rect x="3" y="7.5" width="18" height="12" rx="2" /><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" /></>,
  checkCircle: <><circle cx="12" cy="12" r="9" /><path d="M8.5 12.3l2.3 2.3 4.7-5.1" /></>,
  wallet: <><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18" /><circle cx="16.5" cy="14" r="1.2" /></>,
  fileText: <><path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 16.5h6" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></>,
  layers: <><polygon points="12 2 22 8 12 14 2 8" /><polyline points="2 14 12 20 22 14" /></>,
  gauge: <><path d="M12 3a9 9 0 1 0 6.4 15.4" /><path d="M12 12l4.2-4.2" /><path d="M12 3v3" /></>,
};

const ROLE_PALETTES = [
  { bg: '#e8f2fa', accent: '#1E6FA8' },
  { bg: '#fff8ec', accent: '#F5A623' },
  { bg: '#eefaf3', accent: '#1a9d63' },
  { bg: '#fdeeee', accent: '#c94b4b' },
];

export const RoleGrid = ({ children }) => <div style={s.rolesGrid}>{children}</div>;

export const RoleCard = ({ icon, title, children, palette = 0 }) => {
  const p = ROLE_PALETTES[palette % ROLE_PALETTES.length];
  return (
    <div style={s.roleCard}>
      <div style={{ ...s.roleIconWrap, background: p.bg, color: p.accent }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </div>
      <div style={s.roleTitle}>{title}</div>
      <div style={s.roleDesc}>{children}</div>
    </div>
  );
};

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
