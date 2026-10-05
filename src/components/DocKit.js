import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

/* Shared styling primitives for the docs pages. Colours come from the theme
   tokens in src/css/custom.css (--or-*), so every component follows the
   Docusaurus light / dark theme. The navy header banner stays navy in both
   themes. Plus Jakarta Sans is loaded once via headTags in docusaurus.config.js. */

/* Kept for backwards compatibility: the font is now loaded globally. */
export const DocFonts = () => null;

const NAVY_GRADIENT = 'linear-gradient(130deg, #0c3f66 0%, #1E6FA8 60%, #1a5e90 100%)';

const s = {
  root: { fontFamily: "'Plus Jakarta Sans', 'Segoe UI', sans-serif", color: 'var(--or-text)', paddingBottom: 24 },
  header: { background: NAVY_GRADIENT, borderRadius: 16, padding: '32px 32px 28px', marginBottom: 28, position: 'relative', overflow: 'hidden' },
  glow1: { position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'rgba(245,166,35,0.10)', borderRadius: '50%', pointerEvents: 'none' },
  glow2: { position: 'absolute', bottom: -70, right: 100, width: 150, height: 150, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', pointerEvents: 'none' },
  h1: { fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 10px' },
  em: { fontStyle: 'normal', color: '#F5A623' },
  /* 0.88 white keeps >= 4.5:1 across the whole navy gradient */
  sub: { fontSize: 14, color: 'rgba(255,255,255,0.88)', lineHeight: 1.65, maxWidth: 640, margin: 0 },
  sectionHeading: { display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--or-text-faint)', margin: '44px 0 20px' },
  line: { flex: 1, height: 1, background: 'var(--or-border)' },
  card: { background: 'var(--or-surface)', border: '1.5px solid var(--or-border)', borderRadius: 14, padding: '24px 28px', marginBottom: 18 },
  cardAmber: { background: 'var(--or-gold-soft)', border: '1.5px solid var(--or-gold)', borderRadius: 14, padding: '20px 24px', marginBottom: 18 },
  cardTitle: { fontSize: 16, fontWeight: 700, color: 'var(--or-text)', marginBottom: 14 },
  list: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
  item: { display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5, lineHeight: 1.75, color: 'var(--or-text)' },
  bullet: { flexShrink: 0, marginTop: 8, width: 7, height: 7, borderRadius: '50%', background: 'var(--or-blue)', display: 'block' },
  subList: { margin: '8px 0 0 17px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 },
  subItem: { display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, lineHeight: 1.7, color: 'var(--or-text-muted)' },
  subBullet: { flexShrink: 0, marginTop: 7, width: 5, height: 5, borderRadius: '50%', background: 'var(--or-gold)', display: 'block' },
  stepNum: { flexShrink: 0, marginTop: 3, width: 22, height: 22, borderRadius: '50%', background: 'var(--or-blue-soft)', color: 'var(--or-blue)', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  imgGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 },
  tableWrap: { border: '1.5px solid var(--or-border)', borderRadius: 14, overflowX: 'auto', marginBottom: 18, background: 'var(--or-surface)' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: 13.5, display: 'table', margin: 0 },
  th: { background: '#0c3f66', color: '#fff', textAlign: 'left', padding: '10px 16px', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.04em', border: 'none' },
  td: { padding: '10px 16px', borderTop: '1px solid var(--or-border)', borderLeft: 'none', borderRight: 'none', borderBottom: 'none', color: 'var(--or-text)', background: 'var(--or-surface)', verticalAlign: 'top' },
  rolesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 18 },
  roleCard: { background: 'var(--or-surface)', border: '1.5px solid var(--or-border)', borderRadius: 14, padding: '22px 24px 26px' },
  roleIconWrap: { width: 44, height: 44, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  roleTitle: { fontSize: 15, fontWeight: 700, color: 'var(--or-text)', marginBottom: 8 },
  roleDesc: { fontSize: 13.5, lineHeight: 1.75, color: 'var(--or-text-muted)' },
};

export const DocPage = ({ children }) => <div style={s.root}>{children}</div>;

export const Hero = ({ title, accent, subtitle }) => (
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

/* Capability tags shown at the top of every feature page. */
const CAPABILITIES = {
  Standard: { bg: 'var(--or-blue-soft)', fg: 'var(--or-blue)', title: 'Always on' },
  Configurable: { bg: 'var(--or-gold-soft)', fg: 'var(--or-gold-text)', title: 'Can be enabled, disabled or tuned per deployment' },
  'Requires Bank Integration': { bg: 'var(--or-success-soft)', fg: 'var(--or-success)', title: 'Depends on a bank-side API' },
};

export const Capabilities = ({ tags }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '-8px 0 24px' }}>
    {tags.map((t) => {
      const c = CAPABILITIES[t] || CAPABILITIES.Standard;
      return (
        <span key={t} title={c.title} style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', color: c.fg, background: c.bg, border: '1px solid currentColor', padding: '4px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>
          {t}
        </span>
      );
    })}
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

export const DocTable = ({ columns, rows }) => (
  <div style={s.tableWrap}>
    <table style={s.table}>
      <thead>
        <tr>{columns.map((c, i) => <th key={i} style={s.th}>{c}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri} style={{ background: 'transparent', border: 'none' }}>
            {row.map((cell, ci) => <td key={ci} style={s.td}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* Small icon set (24x24, currentColor stroke, strokeWidth 2). */
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
  { bg: 'var(--or-blue-soft)', accent: 'var(--or-blue)' },
  { bg: 'var(--or-gold-soft)', accent: 'var(--or-gold-text)' },
  { bg: 'var(--or-success-soft)', accent: 'var(--or-success)' },
  { bg: 'var(--or-danger-soft)', accent: 'var(--or-danger)' },
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

/* ── Shared image wrapper ───────────────────────────────────────────────
   kind="screenshot"   portal screenshots: tokenized frame with macOS topbar,
                       optional "Fig." label footer, no filter.
   kind="illustration" white-background art: sits on a soft plate
                       (--or-img-plate) with --or-img-filter, so in dark mode
                       it reads as a framed print rather than a hole.
   kind="diagram"      like illustration; pass darkSrc to swap the image per
                       theme via @theme/ThemedImage.
   title               shows a macOS-style topbar on any kind.
   zoom                click to open a full-screen preview (default true).
   eager               skip lazy loading (use for above-the-fold images). */

const DOT_COLOURS = ['#fc5f57', '#fdbc2c', '#33c748'];

const im = {
  frame: { background: 'var(--or-surface-2)', border: '1px solid var(--or-border)', borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: 'var(--or-shadow)' },
  topbar: { background: 'var(--or-surface)', borderBottom: '1px solid var(--or-border)', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10 },
  dots: { display: 'flex', gap: 5 },
  dot: (bg) => ({ width: 9, height: 9, borderRadius: '50%', background: bg, display: 'block' }),
  topbarTitle: { fontSize: 11, fontWeight: 600, color: 'var(--or-text-faint)', flex: 1, textAlign: 'center', marginRight: 44, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  shotWell: { padding: 12, flex: 1 },
  shotImg: { width: '100%', height: 'auto', borderRadius: 8, border: '1px solid var(--or-border)', display: 'block' },
  plate: { background: 'var(--or-img-plate)', padding: 14, borderRadius: 14 },
  plateImg: { width: '100%', height: 'auto', display: 'block', borderRadius: 8, filter: 'var(--or-img-filter)' },
  footer: { padding: '9px 14px 11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--or-border)', gap: 10, background: 'var(--or-surface)' },
  pill: { fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--or-blue)', background: 'var(--or-blue-soft)', padding: '2px 10px', borderRadius: 20, whiteSpace: 'nowrap' },
  footerTitle: { fontSize: 11, color: 'var(--or-text-faint)', flex: 1, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' },
  zoomHint: { fontSize: 11, color: 'var(--or-text-faint)', display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' },
  overlay: { position: 'fixed', inset: 0, background: 'rgba(8,18,36,0.88)', backdropFilter: 'blur(14px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, cursor: 'zoom-out' },
  modal: { position: 'relative', maxWidth: '94vw', maxHeight: '90vh' },
  closeBtn: { position: 'absolute', top: -13, right: -13, width: 34, height: 34, background: '#1E6FA8', border: '2px solid #fff', borderRadius: '50%', color: '#fff', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,0,0,0.3)' },
  modalImg: { maxWidth: '100%', maxHeight: '88vh', borderRadius: 12, display: 'block', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' },
  caption: { textAlign: 'center', marginTop: 12, fontSize: 13, color: 'rgba(255,255,255,0.75)' },
};

const Topbar = ({ title }) => (
  <div style={im.topbar}>
    <div style={im.dots} aria-hidden="true">
      {DOT_COLOURS.map((c) => <span key={c} style={im.dot(c)} />)}
    </div>
    <div style={im.topbarTitle} title={title}>{title}</div>
  </div>
);

export const DocImage = ({ src, darkSrc, alt, kind = 'screenshot', title, label, zoom = true, eager = false, style }) => {
  const [zoomed, setZoomed] = useState(false);
  const light = useBaseUrl(src);
  const dark = useBaseUrl(darkSrc || src);
  const isShot = kind === 'screenshot';
  const themed = kind === 'diagram' && darkSrc;

  const renderImg = (imgStyle, lazy = true) =>
    themed ? (
      <ThemedImage sources={{ light, dark }} alt={alt} loading={lazy && !eager ? 'lazy' : undefined} style={imgStyle} />
    ) : (
      <img src={light} alt={alt} loading={lazy && !eager ? 'lazy' : undefined} style={imgStyle}
        onError={(e) => { e.currentTarget.style.opacity = 0.35; }} />
    );

  const open = zoom ? () => setZoomed(true) : undefined;
  const clickable = zoom ? { cursor: 'zoom-in' } : {};

  let body;
  if (isShot) {
    body = (
      <div onClick={open} title={zoom ? 'Click to zoom' : undefined} style={{ ...im.frame, margin: '20px 0', ...clickable, ...style }}>
        <Topbar title={title || alt} />
        <div style={im.shotWell}>{renderImg(im.shotImg)}</div>
        {label ? (
          <div style={im.footer}>
            <span style={im.pill}>{label}</span>
            <span style={im.footerTitle} title={alt}>{title || alt}</span>
            {zoom ? (
              <span style={im.zoomHint}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                  <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                Zoom
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  } else {
    const plate = <div style={im.plate}>{renderImg(im.plateImg)}</div>;
    body = title ? (
      <div onClick={open} style={{ ...im.frame, background: 'var(--or-surface)', borderRadius: 18, ...clickable, ...style }}>
        <Topbar title={title} />
        <div style={{ padding: 14 }}>{plate}</div>
      </div>
    ) : (
      <div onClick={open} style={{ ...im.plate, boxShadow: 'var(--or-shadow)', ...clickable, ...style }}>
        {renderImg(im.plateImg)}
      </div>
    );
  }

  return (
    <>
      {body}
      {zoomed && (
        <div style={im.overlay} onClick={() => setZoomed(false)}>
          <div style={im.modal} onClick={(e) => e.stopPropagation()}>
            <button style={im.closeBtn} onClick={() => setZoomed(false)} aria-label="Close">✕</button>
            {renderImg(im.modalImg, false)}
            <div style={im.caption}>{title || alt}</div>
          </div>
        </div>
      )}
    </>
  );
};

/* Portal screenshot card (kept for existing pages). */
export const ImgCard = ({ src, alt, label }) => <DocImage kind="screenshot" src={src} alt={alt} label={label} />;
