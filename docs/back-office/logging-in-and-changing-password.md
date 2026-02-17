---
hide_title: true
---

import React, { useMemo } from 'react';

export const LoginPage = () => {
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
      stepsGrid: { display: 'flex', flexDirection: 'column', gap: 14 },
      stepCard: { background: '#fff', border, borderRadius: 14, padding: '24px 28px', display: 'flex', gap: 20, alignItems: 'flex-start' },
      stepNum: {
        flexShrink: 0,
        width: 36, height: 36,
        borderRadius: '50%',
        background: '#1E6FA8',
        color: '#fff',
        fontWeight: 800,
        fontSize: 15,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginTop: 2,
      },
      stepNumGold: {
        flexShrink: 0,
        width: 36, height: 36,
        borderRadius: '50%',
        background: '#F5A623',
        color: '#fff',
        fontWeight: 800,
        fontSize: 15,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginTop: 2,
      },
      stepBody: { flex: 1 },
      stepTitle: { fontSize: 16, fontWeight: 700, color: '#1a2540', marginBottom: 12 },
      stepList: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
      stepItem: { display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5, lineHeight: 1.75, color: '#3a4a62' },
      bullet: {
        flexShrink: 0,
        marginTop: 7,
        width: 7, height: 7,
        borderRadius: '50%',
        background: '#1E6FA8',
        display: 'block',
      },
      bulletGold: {
        flexShrink: 0,
        marginTop: 7,
        width: 7, height: 7,
        borderRadius: '50%',
        background: '#F5A623',
        display: 'block',
      },
    };
  }, []);

  const sections = [
    {
      num: '1',
      gold: false,
      title: 'Login',
      items: [
        'Maker logs in with username and password.',
        'Redirected to the dashboard where they can view graphs and charts, filter to see statuses.',
      ],
    },
    {
      num: '2',
      gold: true,
      title: 'Changing Password',
      items: [
        'User chooses to change password and is redirected to a screen where they enter their old and new password.',
        'They\'re redirected to the login screen and they log in with new credentials.',
      ],
    },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={s.root}>
        <div style={s.header}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}>
            Logging In &amp; <em style={s.em}>Changing Password</em>
          </h1>
          <p style={s.sub}>Steps for logging into the Back Office and updating your password.</p>
        </div>

        <div style={s.sectionHeading}>
          Steps <div style={s.line} />
        </div>

        <div style={s.stepsGrid}>
          {sections.map((sec) => (
            <div key={sec.num} style={s.stepCard}>
              <div style={sec.gold ? s.stepNumGold : s.stepNum}>{sec.num}</div>
              <div style={s.stepBody}>
                <div style={s.stepTitle}>{sec.title}</div>
                <ul style={s.stepList}>
                  {sec.items.map((item, i) => (
                    <li key={i} style={s.stepItem}>
                      <span style={sec.gold ? s.bulletGold : s.bullet} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

<LoginPage />

<!-- # Logging In and Changing Password

## 1. Login

- Maker logs in with username and password.
- Redirected to the dashboard where they can view graphs and charts, filter to see statuses.

## 2. Changing Password

- User chooses to change password and is redirected to a screen where they enter their old and new password.
- They're redirected to the login screen and they log in with new credentials. -->
