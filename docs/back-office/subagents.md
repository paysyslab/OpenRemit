---
hide_title: true
---

import React, { useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ImgCard } from '@site/src/components/DocKit';


export const Subagents = () => {
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
          <h1 style={s.h1}><em style={s.em}>Subagents</em></h1>
          <p style={s.sub}>Manage subagent records, users, bulk uploads, and approval workflows.</p>
        </div>

        {/* Sub-Agent Management */}
        <div style={s.sectionHeading}>Sub-Agent Management <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Add New Sub Agent</div>
          <ul style={s.list}>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                Sub Agent details:
                <Sub items={[
                  'Sub Agent Name',
                  'Description',
                  'Head Office Address',
                  'Contact Person',
                  'Contact Phone',
                  'Contact Email',
                  'Settlement Account',
                  'Fetch Title',
                  'Account Title',
                ]} />
              </div>
            </li>
          </ul>
        </div>
        <ImgCard src="/img/BO/SubAgents/table.png" alt="Sub-Agent Management" label="Fig. 1" />

        {/* User Management */}
        <div style={s.sectionHeading}>User Management <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Add New Sub Agent User</div>
          <ul style={s.list}>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                User details:
                <Sub items={[
                  'Name',
                  'Father Name',
                  'ID Number (optional)',
                  'Email',
                  'Phone',
                  'Username',
                  'Branch Code',
                  'Settlement Account',
                  'Sub Agent',
                  'User Type',
                ]} />
              </div>
            </li>
          </ul>
        </div>
        <ImgCard src="/img/BO/SubAgents/user.png" alt="Sub-Agent User Management" label="Fig. 2" />

        {/* Bulk Upload */}
        <div style={s.sectionHeading}>Bulk Upload <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Bulk Upload</div>
          <ul style={s.list}>
            <Li>Download sample, upload file, and create users in bulk.</Li>
            <Li>View the bulk upload history for up to a month.</Li>
          </ul>
        </div>
        <ImgCard src="/img/BO/SubAgents/Bulk.png" alt="Bulk Upload" label="Fig. 3" />

        {/* Sub-Agent Maker Inbox */}
        <div style={s.sectionHeading}>Sub-Agent Maker Inbox <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Sub-Agent Maker Inbox</div>
          <ul style={s.list}>
            <Li>View subagent creation and bulk request creation, edit requests, update, and remove requests.</Li>
          </ul>
        </div>

        {/* Sub-Agent Checker Inbox */}
        <div style={s.sectionHeading}>Sub-Agent Checker Inbox <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Sub-Agent Checker Inbox</div>
          <ul style={s.list}>
            <Li>Approve or reject subagent creation with reason required.</Li>
          </ul>
        </div>

        {/* User Maker Inbox */}
        <div style={s.sectionHeading}>User Maker Inbox <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>User Maker Inbox</div>
          <ul style={s.list}>
            <Li>View subagent user creation and bulk request creation, edit requests, update, and remove requests.</Li>
          </ul>
        </div>

        {/* User Checker Inbox */}
        <div style={s.sectionHeading}>User Checker Inbox <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>User Checker Inbox</div>
          <ul style={s.list}>
            <Li>Approve or reject subagent user creation with reason required.</Li>
          </ul>
        </div>

      </div>
    </>
  );
};

<Subagents />