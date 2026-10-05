---
hide_title: true
---

import React, { useMemo, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ImgCard } from '@site/src/components/DocKit';


export const EPRCGeneration = () => {
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
      card: { background: 'var(--or-surface)', border, borderRadius: 14, padding: '24px 28px', display: 'flex', gap: 20, alignItems: 'flex-start' },
      stepNum: { flexShrink: 0, width: 36, height: 36, borderRadius: '50%', background: '#1E6FA8', color: '#fff', fontWeight: 800, fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 },
      stepBody: { flex: 1 },
      stepTitle: { fontSize: 16, fontWeight: 700, color: 'var(--or-text)', marginBottom: 12 },
      stepList: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
      stepItem: { display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14.5, lineHeight: 1.75, color: 'var(--or-text)' },
      bullet: { flexShrink: 0, marginTop: 7, width: 7, height: 7, borderRadius: '50%', background: '#1E6FA8', display: 'block' },
    };
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <div style={s.root}>

        <div style={s.header}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}>Certificate <em style={s.em}>Generation</em></h1>
          </div>

        <div style={s.sectionHeading}>Overview <div style={s.line} /></div>

        <div style={s.card}>
          <div style={s.stepBody}>
            <ul style={s.stepList}>
              <li style={s.stepItem}>
                <span style={s.bullet} />
                View and download regulatory remittance certificates (e.g. the SBP e-PRC in Pakistan) for completed transactions (single and bulk files).
              </li>
            </ul>
          </div>
        </div>

        <div style={s.sectionHeading}> <div style={s.line} /></div>

        <ImgCard src="/img/BO/eprc.png" alt="e-PRC" label="Fig. 1" />

      </div>
    </>
  );
};

<EPRCGeneration />