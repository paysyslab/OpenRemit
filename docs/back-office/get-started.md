---
hide_title: true
---

import React, { useEffect, useRef, useState, useMemo } from 'react';
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

export const GettingStarted = () => {
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
    const border = '1.5px solid #e2e8f0';
    return {
      root: { fontFamily: "'Plus Jakarta Sans','Segoe UI',sans-serif", color: '#1a2540', paddingBottom: 64 },
      header: { background: 'linear-gradient(130deg, #0c3f66 0%, #1E6FA8 60%, #1a5e90 100%)', borderRadius: 16, padding: '32px 32px 28px', marginBottom: 28, position: 'relative', overflow: 'hidden' },
      glow1: { position: 'absolute', top: -50, right: -50, width: 200, height: 200, background: 'rgba(245,166,35,0.10)', borderRadius: '50%', pointerEvents: 'none' },
      glow2: { position: 'absolute', bottom: -70, right: 100, width: 150, height: 150, background: 'rgba(255,255,255,0.05)', borderRadius: '50%', pointerEvents: 'none' },
      h1: { fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.15, letterSpacing: '-0.02em', margin: '0 0 10px' },
      em: { fontStyle: 'normal', color: '#F5A623' },
      sub: { fontSize: 14, color: 'rgba(255,255,255,0.60)', lineHeight: 1.65, maxWidth: 620, margin: 0 },
      sectionHeading: { display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8896b0', margin: '44px 0 20px' },
      line: { flex: 1, height: 1, background: '#e2e8f0' },
      card: { background: '#fff', border, borderRadius: 14, padding: '24px 28px', marginBottom: 20 },
      cardTitle: { fontSize: 16, fontWeight: 700, color: '#1a2540', marginBottom: 14 },
      p: { fontSize: 14.5, lineHeight: 1.8, color: '#5a6a88', margin: '0 0 12px' },
      ul: { margin: '0 0 0 20px', padding: 0, listStylePosition: 'outside' },
      li: { fontSize: 14.5, lineHeight: 1.8, color: '#5a6a88', marginBottom: 8 },
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

  const Sub = ({ items }) => (
    <ul style={s.subList}>
      {items.map((d, i) => (
        <li key={i} style={s.subItem}><span style={s.subBullet} />{d}</li>
      ))}
    </ul>
  );

  const roleComponents = [
    'Role Code — Unique identifier for the role',
    'Description — Purpose or responsibility of the role',
    'Status — Active, Inactive, or Locked',
    'Permissions Mapping — Access to specific modules, screens, or functions',
  ];

  const permissionAreas = [
    'User Management (Roles & Users)',
    'Inbox / Approval workflows',
    'Dashboard and Home screens',
    'Product modules (Digital Banking, Wallet, Middleware, Card Management, Access Control, Acquiring, Remittances, etc.)',
  ];

  const userFields = [
    'User ID and CNIC-based identity details',
    'Contact information (mobile, email)',
    'Department and designation',
    'Assigned role(s)',
    'Account status (Active / Inactive / Locked)',
  ];

  const accessExamples = [
    { role: 'Checker Role', access: 'Access limited to Inbox and approval workflows only' },
    { role: 'Partner Users', access: 'Access restricted to Partner Portal screens' },
    { role: 'Branch Users', access: 'Access limited to Branch Portal functionality' },
    { role: 'Admin Users', access: 'Full system access including configuration and user management' },
  ];

  const inboxSteps = [
    'Processes generate entries in the Inbox',
    'Checkers review, approve, or reject actions',
    'Complete audit trail maintained with timestamps and remarks',
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <div style={s.root}>

        {/* ── HERO ── */}
        <div style={{ ...s.header, opacity:hv?1:0, transform:hv?'translateY(0)':'translateY(28px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}>Get Started — <em style={s.em}>User & Role Setup</em></h1>
          <p style={s.sub}>Define roles and users, assign permissions, and configure controlled access to system modules — ensuring security, accountability, and proper operational workflows.</p>
        </div>

        {/* ── ROLE CONFIGURATION ── */}
        <Reveal>
          <div style={s.sectionHeading}>Role Configuration <div style={s.line} /></div>
          <div style={s.card}>
            <div style={s.cardTitle}>Role Configuration</div>
            <p style={s.p}>
              Roles determine what actions a user can perform and which system screens they can access. Each role typically includes:
            </p>
            <ul style={s.ul}>
              {roleComponents.map((item, i) => <li key={i} style={s.li}>{item}</li>)}
            </ul>
            <p style={{ ...s.p, marginTop: 16 }}>
              You can configure permissions across key areas such as:
            </p>
            <ul style={s.ul}>
              {permissionAreas.map((item, i) => <li key={i} style={s.li}>{item}</li>)}
            </ul>
          </div>
          <ImgCard src="/img/BO/UserManagement/roles.png" alt="Role Configuration" label="Fig. 1" />
        </Reveal>

        {/* ── USER SETUP ── */}
        <Reveal delay={60}>
          <div style={s.sectionHeading}>User Setup <div style={s.line} /></div>
          <div style={s.card}>
            <div style={s.cardTitle}>User Setup</div>
            <p style={s.p}>
              Once roles are defined, users can be created and mapped to roles. Typical user information includes:
            </p>
            <ul style={s.ul}>
              {userFields.map((item, i) => <li key={i} style={s.li}>{item}</li>)}
            </ul>
            <p style={{ ...s.p, marginTop: 16, marginBottom: 0 }}>
              This structured setup ensures traceability, accountability, and proper access governance.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <ImgCard src="/img/BO/UserManagement/users.png" alt="User Management" label="Fig. 2" />
            <ImgCard src="/img/BO/UserManagement/UM1.png" alt="User Details" label="Fig. 3" />
          </div>
        </Reveal>

        {/* ── PERMISSION-BASED ACCESS EXAMPLES ── */}
        <Reveal delay={0}>
          <div style={s.sectionHeading}>Permission-Based Access Examples <div style={s.line} /></div>
          <div style={s.card}>
            <div style={s.cardTitle}>Common Operational Scenarios</div>
            <ul style={s.list}>
              {accessExamples.map((ex, i) => (
                <Li key={i}>
                  <strong style={{ fontWeight: 600, color: '#1a2540' }}>{ex.role}</strong> — {ex.access}
                </Li>
              ))}
            </ul>
            <p style={{ ...s.p, marginTop: 16, marginBottom: 0 }}>
              This role-based segregation ensures each stakeholder only accesses what is relevant to their function.
            </p>
          </div>
        </Reveal>

        {/* ── INBOX & APPROVAL WORKFLOW ── */}
        <Reveal delay={60}>
          <div style={s.sectionHeading}>Inbox & Approval Workflow <div style={s.line} /></div>
          <div style={s.card}>
            <div style={s.cardTitle}>Structured Approval Mechanism</div>
            <p style={s.p}>
              OpenRemit uses a structured approval mechanism:
            </p>
            <ul style={s.ul}>
              {inboxSteps.map((item, i) => <li key={i} style={s.li}>{item}</li>)}
            </ul>
            <p style={{ ...s.p, marginTop: 16, marginBottom: 0 }}>
              This supports compliance, operational control, and accountability.
            </p>
          </div>
          <ImgCard src="/img/BO/UserManagement/inbox.png" alt="Inbox & Approval Workflow" label="Fig. 4" />
        </Reveal>

      </div>
    </>
  );
};

<GettingStarted />