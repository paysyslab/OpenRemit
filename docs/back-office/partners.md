---
hide_title: true
---

import React, { useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ImgCard } from '@site/src/components/DocKit';


export const Partners = () => {
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
      subList: { margin: '8px 0 0 17px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 },
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

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={s.root}>

        {/* Header */}
        <div style={s.header}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}>
            <em style={s.em}>Partners</em>
          </h1>
          <p style={s.sub}>Manage partner integrations, users, and approval workflows for partner onboarding.</p>
        </div>

        {/* Partners Overview */}
        <div style={s.sectionHeading}>Overview <div style={s.line} /></div>
        <ImgCard src="/img/BO/Partner/table.png" alt="Partners Overview" label="Fig. 1" />

        {/* Partner Management */}
        <div style={s.sectionHeading}>Partner Management <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Add New Partner</div>
          <ul style={s.list}>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                Partner details:
                <Sub items={['Partner Name', 'Integration Mode (OTC, FT, IBFT)', 'Sender Screening', 'Receiver Screening', 'Title Match']} />
              </div>
            </li>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                Additional fields:
                <Sub items={['Country', 'Address', 'Point of Contact', 'Email', 'Contact Number', 'Partner Settlement Account (GL)', 'Fetch Title', 'Account Title']} />
              </div>
            </li>
          </ul>
        </div>
        <ImgCard src="/img/BO/Partner/AddPartner.png" alt="Add Partner" label="Fig. 2" />

        {/* View Partner Details */}
        <div style={s.sectionHeading}>View Partner Details <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Partner Details Columns</div>
          <ul style={s.list}>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                <Sub items={['Partner Name', 'Integration Mode', 'Country', 'Point of Contact', 'Contact Number', 'Settlement Account', 'Status', 'Created At', 'Updated At', 'Actions']} />
              </div>
            </li>
          </ul>
        </div>

        {/* User Management */}
        <div style={s.sectionHeading}>User Management <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Add New Partner User</div>
          <ul style={s.list}>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                User details:
                <Sub items={['Name', 'Father Name', 'ID Number (optional)', 'Email', 'Phone', 'Username', 'Partner', 'User Type']} />
              </div>
            </li>
          </ul>
        </div>
        <ImgCard src="/img/BO/Partner/AddUser.png" alt="Add Partner User" label="Fig. 3" />

        {/* Partner Maker Inbox */}
        <div style={s.sectionHeading}>Partner Maker Inbox <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Partner Maker Inbox</div>
          <ul style={s.list}>
            <Li>View and edit partner creation request.</Li>
          </ul>
        </div>
        <ImgCard src="/img/BO/Partner/maker.png" alt="Partner Maker Inbox" label="Fig. 4" />

        {/* Partner Checker */}
        <div style={s.sectionHeading}>Partner Checker <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Partner Checker</div>
          <ul style={s.list}>
            <Li>Approve or reject partner creation request.</Li>
          </ul>
        </div>

        {/* User Maker Inbox */}
        <div style={s.sectionHeading}>User Maker Inbox <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>User Maker Inbox</div>
          <ul style={s.list}>
            <Li>View and edit partner user creation requests.</Li>
          </ul>
        </div>
        <ImgCard src="/img/BO/Partner/userMaker.png" alt="User Maker Inbox" label="Fig. 5" />

        {/* User Checker Inbox */}
        <div style={s.sectionHeading}>User Checker Inbox <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>User Checker Inbox</div>
          <ul style={s.list}>
            <Li>Approve or reject partner user creation with reason required.</Li>
          </ul>
        </div>

      </div>
    </>
  );
};

<Partners />