---
hide_title: true
---

import React, { useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ImgCard } from '@site/src/components/DocKit';


export const TransactionReversals = () => {
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
      subList: { margin: '8px 0 0 17px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
      subItem: { display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13.5, lineHeight: 1.7, color: 'var(--or-text-muted)' },
      subBullet: { flexShrink: 0, marginTop: 7, width: 5, height: 5, borderRadius: '50%', background: 'var(--or-gold)', display: 'block' },
      subNote: { fontSize: 12, color: 'var(--or-text-faint)', marginLeft: 6 },
    };
  }, []);

  const Li = ({ children }) => (
    <li style={s.item}><span style={s.bullet} /><div>{children}</div></li>
  );

  const Sub = ({ items }) => (
    <ul style={s.subList}>
      {items.map((d, i) => (
        <li key={i} style={s.subItem}>
          <span style={s.subBullet} />
          <div>
            {d.label}
            {d.note && <span style={s.subNote}>({d.note})</span>}
          </div>
        </li>
      ))}
    </ul>
  );

  const columns = [
    { label: 'Original Txn Date', note: 'required, YYYY-MM-DD' },
    { label: 'Txn Rail',          note: 'required: 1LINK, RAAST or RTGS' },
    { label: 'Txn Amount',        note: 'required, numeric' },
    { label: 'Txn Reference',     note: 'required: STAN for 1LINK, MessageId for RAAST, unique ID for RTGS' },
    { label: 'Partner Reference', note: 'required' },
    { label: 'Reason',            note: 'required, 3 to 200 characters' },
    { label: 'Partner Name',      note: 'optional' },
    { label: 'CBS Reference',     note: 'optional' },
    { label: 'Receiver IBAN',     note: 'optional' },
    { label: 'Receiver Name',     note: 'optional' },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={s.root}>

        {/* Header */}
        <div style={s.header}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}>Transaction <em style={s.em}>Reversals</em></h1>
          <p style={s.sub}>Upload and process reversal files to reverse already posted transactions against existing records.</p>
        </div>

        {/* Overview */}
        <div style={s.sectionHeading}>Overview <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>Transaction Reversal</div>
          <ul style={s.list}>
            <Li>Upload a file containing transaction details to reverse already posted transactions.</Li>
            <Li>The system validates the data, matches it against existing transactions, and processes reversals.</Li>
            <Li>The reversal type is configured per rail (status reversal or financial posting). On reversal the status reverts from Success to Returned, and the transaction can no longer be repushed or moved to RTGS.</Li>
            <Li>The upload summary shows each record's outcome: Reversed, Invalid, Not Found or Already Reversed, with a message for any record that was not reversed.</Li>
            <Li>Transaction Reversal List keeps every upload: Upload ID, File Name, Uploaded By (user or system), Upload Date & Time, Total, Valid and Invalid records.</Li>
          </ul>
        </div>

        {/* File Columns */}
        <div style={s.sectionHeading}>File Columns <div style={s.line} /></div>
        <div style={s.card}>
          <div style={s.cardTitle}>File Columns</div>
          <ul style={s.list}>
            <li style={s.item}>
              <span style={s.bullet} />
              <div>
                Each row in the upload file must include:
                <Sub items={columns} />
              </div>
            </li>
          </ul>
        </div>

        <ImgCard src="/img/BO/Transactions/reversal.png" alt="Transaction Reversal" label="Fig. 1" />

      </div>
    </>
  );
};

<TransactionReversals />