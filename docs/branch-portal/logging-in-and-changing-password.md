---
hide_title: true
---

import React, { useMemo } from 'react';

export const LoginPage = () => {
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
      rolesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 8 },
      roleCard: { background: '#fff', border, borderRadius: 14, padding: '22px 24px 26px' },
      roleIconWrap: (bg, accent) => ({ width: 44, height: 44, borderRadius: 11, background: bg, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }),
      roleTitle: { fontSize: 15, fontWeight: 700, color: '#1a2540', marginBottom: 8 },
      roleDesc: { fontSize: 13.5, lineHeight: 1.75, color: '#6b7a99' },
      card: { background: '#fff', border, borderRadius: 14, padding: '24px 28px', marginBottom: 0 },
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

  const Sub = ({ items }) => (
    <ul style={s.subList}>
      {items.map((d, i) => (
        <li key={i} style={s.subItem}><span style={s.subBullet} />{d}</li>
      ))}
    </ul>
  );

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={s.root}>

        {/* Header */}
        <div style={s.header}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}>Logging In &amp; <em style={s.em}>Changing Password</em></h1>
          <p style={s.sub}>Authentication, device trust, data access control, and password management for Branch Users.</p>
        </div>

        {/* User Roles */}
        <div style={s.sectionHeading}>User Roles <div style={s.line} /></div>
        <div style={s.rolesGrid}>
          <div style={s.roleCard}>
            <div style={s.roleIconWrap('#e8f2fa', '#1E6FA8')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div style={s.roleTitle}>Branch User</div>
            <div style={s.roleDesc}>Official bank staff operating from physical bank branches. Perform operational tasks, transaction monitoring, and customer servicing. Data access is restricted based on assigned Branch Code.</div>
          </div>
          <div style={s.roleCard}>
            <div style={s.roleIconWrap('#fff8ec', '#F5A623')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
            <div style={s.roleTitle}>Agent / Sub-Agent</div>
            <div style={s.roleDesc}>Act on behalf of the bank in areas without physical branches, especially in remote or underserved regions. Facilitate banking services under bank authorization with data visibility restricted to their assigned hierarchy.</div>
          </div>
        </div>

        {/* Login */}
        <div style={s.sectionHeading}> Login <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Login</div>
          <ul style={s.list}>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                User logs in using:
                <Sub items={['User ID', 'Password', 'Branch Code (4 digits)']} />
              </div>
            </li>
            <Li>OTP is received on registered email for authentication.</Li>
            <Li>User can select "Trust This Device" option.</Li>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                On first login from any new device:
                <Sub items={['User is redirected to mandatory password change screen.']} />
              </div>
            </li>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                After password update:
                <Sub items={['User logs in again using new credentials.']} />
              </div>
            </li>
            <Li>Successful login redirects user to the dashboard.</Li>
          </ul>
        </div>

        {/* Data Access Control */}
        <div style={s.sectionHeading}>Data Access Control <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Data Access Control</div>
          <ul style={s.list}>
            <Li>Data visibility is restricted based on Branch Code mapping.</Li>
            <Li>Users can only view transactions, reports, and operational data belonging to their assigned branch.</Li>
            <Li>Cross-branch data access is restricted unless explicitly configured by system administrators.</Li>
          </ul>
        </div>

        {/* Changing Password */}
        <div style={s.sectionHeading}>Changing Password <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Changing Password</div>
          <ul style={s.list}>
            <Li>User selects change password option.</Li>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                User enters:
                <Sub items={['Old password', 'New password']} />
              </div>
            </li>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                After successful password update:
                <Sub items={['User is redirected to login screen.']} />
              </div>
            </li>
            <Li>User logs in again using updated credentials.</Li>
          </ul>
        </div>

      </div>
    </>
  );
};

<LoginPage />