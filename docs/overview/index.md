---
title: Overview
hide_title: true
hide_table_of_contents: true
---

import React, { useEffect, useRef, useState } from 'react';
import { DocImage } from '@site/src/components/DocKit';
import Link from '@docusaurus/Link';
import s from '@site/src/components/overview/overview.module.css';

export const OpenRemitOverview = () => {

  /* ── image paths ── */
  const IMG = {
    hero:       '/img/overview/overview-hero.png',
    features:   '/img/overview/features.png',
    file:       '/img/overview/file.png',
    globe:      '/img/overview/globe.png',
    highLevel:  '/img/overview/highLevel.png',
    partners:   '/img/overview/multiplePartners.png',
    pushPull:   '/img/overview/pushPull.png',
    singlePlat: '/img/overview/singlePlatform.png',
    subagent:   '/img/overview/subagent.png',
  };

  /* ── reduced motion ── */
  const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── scroll reveal ── */
  const useReveal = (threshold = 0.12) => {
    const ref = useRef(null);
    const [v, setV] = useState(false);
    useEffect(() => {
      const el = ref.current; if (!el) return;
      if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') { setV(true); return; }
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold });
      obs.observe(el);
      return () => obs.disconnect();
    }, []);
    return [ref, v];
  };

  const Reveal = ({ children, delay = 0, className = '' }) => {
    const [ref, v] = useReveal();
    return (
      <div ref={ref} className={`${s.reveal} ${v ? s.revealOn : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
        {children}
      </div>
    );
  };

  /* ── hero mount ── */
  const [hv, setHv] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHv(true), 80); return () => clearTimeout(t); }, []);

  /* ── reusable pieces ── */
  const Tag = ({ children, gold = false, onDark = false }) => (
    <div className={`${s.tag} ${gold ? s.tagGold : ''} ${onDark ? s.tagOnDark : ''}`}>
      <span className={s.tagDot} />
      <span className={s.tagText}>{children}</span>
    </div>
  );

  const SectionH2 = ({ children }) => <h2 className={s.h2}>{children}</h2>;

  const Icon = ({ children, size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );

  /* ── journey stepper ── */
  const JOURNEY = [
    { title: 'Received.', text: 'The remittance arrives from a partner by API, scheduled pull, or file.',
      icon: <><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></> },
    { title: 'Screened.', text: "It's checked against AML/CFT rules and your bank's restriction lists.",
      icon: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></> },
    { title: 'Verified.', text: "The beneficiary's account is confirmed and the partner's balance is checked.",
      icon: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></> },
    { title: 'Paid.', text: 'The account is credited, the funds go out over a domestic rail, or a teller hands over cash.',
      icon: <><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2.5" /><path d="M6 12h.01M18 12h.01" /></> },
    { title: 'Confirmed.', text: 'The partner gets the final status, the beneficiary gets an alert, and the regulatory certificate is generated.',
      icon: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></> },
  ];

  const Journey = () => {
    const [ref, on] = useReveal(0.25);
    return (
      <div ref={ref} role="list" className={`${s.journey} ${on ? s.journeyOn : ''}`}>
        <div className={s.journeyTrack} aria-hidden="true" />
        <div className={s.journeyFill} aria-hidden="true" />
        {JOURNEY.map((st, i) => (
          <div role="listitem" key={st.title} className={s.step} style={{ transitionDelay: `${250 + i * 220}ms` }}>
            <div className={s.stepCircle}>
              <Icon>{st.icon}</Icon>
              <span className={s.stepNum}>{i + 1}</span>
            </div>
            <div>
              <div className={s.stepTitle}>{st.title}</div>
              <div className={s.stepText}>{st.text}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  /* ── rail fallback visual ── */
  const RailFallback = () => {
    const [pk, setPk] = useState(false);
    const names = pk ? ['1LINK', 'RAAST', 'RTGS'] : ['Primary Rail', 'Secondary Rail', 'RTGS'];
    const notes = pk ? ['primary', 'secondary', 'third'] : ['1LINK or RAAST', 'optional fallback', 'always third'];
    const Arrow = () => (
      <span className={s.railArrow}>
        <Icon size={20}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon>
      </span>
    );
    return (
      <div className={s.rail} role="group" aria-label="Rail fallback chain">
        <div className={s.railHead}>
          <span className={s.railCaption}>Fallback chain</span>
          <button type="button" className={s.railToggle} aria-pressed={pk} onClick={() => setPk(v => !v)}>
            Show Pakistan example
          </button>
        </div>
        <div className={s.railTrack}>
          <span className={s.railDot} aria-hidden="true" />
          {names.map((n, i) => (
            <React.Fragment key={i}>
              {i > 0 && <Arrow />}
              <div className={`${s.railNode} ${i === 2 ? s.railNodeManual : ''}`}>
                <div className={s.railNodeName}>{n}</div>
                <div className={s.railNodeNote}>{notes[i]}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className={s.railLegend} aria-hidden="true">
          <span><i style={{ background: 'var(--or-blue)' }} />in flight</span>
          <span><i style={{ background: 'var(--or-gold)' }} />rail failed</span>
          <span><i style={{ background: 'var(--or-success)' }} />paid</span>
        </div>
      </div>
    );
  };

  /* ── operational control status card ── */
  const StatusCard = () => (
    <div className={s.status} role="img" aria-label="Illustration of a failed transaction on the Failed Transactions screen, showing the stage, a plain-language reason and the available actions">
      <div className={s.statusHead}>
        <span className={s.statusTitle}>Failed Transactions</span>
        <span className={s.statusPill}>FAILED</span>
      </div>
      <div className={s.statusBody}>
        <div className={s.statusRow}><span className={s.statusKey}>Transaction</span><span className={s.statusVal}>Sample interbank transfer</span></div>
        <div className={s.statusRow}><span className={s.statusKey}>Stopped at</span><span className={s.statusVal}>Title Fetch</span></div>
        <div className={s.statusRow}><span className={s.statusKey}>Reason</span><span className={s.statusVal}>Beneficiary account not found</span></div>
        <div className={s.statusActions}>
          <span className={s.statusActionPrimary}>Retry step</span>
          <span className={s.statusAction}>Move to RTGS</span>
          <span className={s.statusAction}>Fix account</span>
          <span className={s.statusAction}>Cancel</span>
        </div>
        <div className={s.statusNote}>Sensitive actions go to a checker for approval.</div>
      </div>
    </div>
  );

  /* ── portal cards ── */
  const PORTALS = [
    { title: 'Back Office', who: 'for operations, compliance and admin teams.',
      text: 'Monitor every transaction, handle failures and screening holds, and manage partners, branches and users.',
      icon: <><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></> },
    { title: 'Branch Portal', who: 'for tellers and branch managers.',
      text: "Look up a cash remittance, verify the beneficiary's identity, and pay out after a branch checker approves.",
      icon: <><path d="M3 21h18" /><path d="M5 21V10l7-5 7 5v11" /><path d="M9 21v-6h6v6" /></> },
    { title: 'Partner Portal', who: 'for your remittance partners.',
      text: 'Follow transactions in real time, fix and resubmit failed ones, upload files, and keep an eye on the settlement balance.',
      icon: <><circle cx="9" cy="8" r="3.2" /><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" /><circle cx="17" cy="8.5" r="2.6" /><path d="M15 14.2c2.7.5 4.5 2.6 4.5 5.8" /></> },
  ];

  return (
    <div className={s.root}>

      {/* ━━━━━━━━━━━━━━━━━━━ 1. HERO ━━━━━━━━━━━━━━━━━━━ */}
      <div className={s.hero}>
        <div className={s.heroOrbA} />
        <div className={s.heroOrbB} />
        <div className={s.heroGrid}>
          <div className={`${s.reveal} ${hv ? s.revealOn : ''}`}>
            <Tag onDark>Inward Remittance Platform</Tag>
            <h1 className={s.heroTitle}>Open<span>Remit</span></h1>
            <p className={s.heroSub}>Inward remittance processing for banks</p>
            <p className={s.heroBody}>
              When someone abroad sends money home, their family is waiting for it, sometimes at a branch counter, sometimes refreshing a banking app. OpenRemit connects your bank to its remittance partners, checks every transaction, and delivers it over the right local rail, while your operations team stays in control at every step.
            </p>
            <div className={s.chips}>
              {['Multi-Partner', 'Account & Cash Payout', 'Multi-Rail Fallback', 'Maker-Checker', 'Regulator-Ready', 'Configurable per Market'].map(t => (
                <span key={t} className={s.chip}>{t}</span>
              ))}
            </div>
          </div>
          <div className={`${s.media} ${s.reveal} ${hv ? s.revealOn : ''}`} style={{ transitionDelay: '200ms' }}>
            <DocImage kind="illustration" eager zoom={false} src={IMG.hero} style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.35)' }} alt="Illustration of the OpenRemit dashboard in front of a world map, with families receiving money sent from abroad" />
          </div>
        </div>
      </div>


      {/* ━━━━━━━━━━━━━━━━━━━ 2. ABOUT ━━━━━━━━━━━━━━━━━━━ */}
      <div className={s.sectionAlt}>
        <Reveal className={s.inner}>
          <Tag>About</Tag>
          <SectionH2>One platform between your partners and your core banking</SectionH2>
          <div className={s.cards3} style={{ marginBottom: 24 }}>
            {[
              { title: 'Takes in every partner.', text: 'Exchange companies and MTOs connect however suits them: through our APIs, by letting OpenRemit fetch from their systems, or by uploading a file. Every transaction lands in one place, in one format.' },
              { title: 'Checks before it pays.', text: "Each transaction is screened for AML/CFT, the beneficiary account is verified, and the partner's settlement balance is confirmed before any money moves." },
              { title: 'Delivers and closes the loop.', text: "Funds are credited within the bank, sent to another bank over your country's domestic payment rails, or paid as cash over the counter. Then the partner is told the outcome and the regulatory certificate is ready." },
            ].map((c, i) => (
              <div key={c.title} className={s.card}>
                <div className={s.cardDot} style={{ background: i === 2 ? 'var(--or-gold)' : 'var(--or-blue)' }} />
                <div className={s.cardTitle}>{c.title}</div>
                <div className={s.cardText}>{c.text}</div>
              </div>
            ))}
          </div>
          <p className={s.lead}>
            Behind the scenes, OpenConnect, Paysys' middleware, handles every conversation with your core banking system, screening system and local payment switches. That leaves OpenRemit free to focus on one thing: getting each remittance home correctly.
          </p>
          <DocImage kind="illustration" src={IMG.features} title="OpenRemit at a glance" alt="Diagram of OpenRemit at the centre of its capabilities: inward remittances, FT, IBFT and cash transactions, AML/CFT screening and payment gateway connectivity" />
        </Reveal>
      </div>


      {/* ━━━━━━━━━━━━━━━━━━━ 3. JOURNEY ━━━━━━━━━━━━━━━━━━━ */}
      <div className={s.section}>
        <div className={s.inner}>
          <Reveal>
            <Tag>The Journey</Tag>
            <SectionH2>From partner to family, in five steps</SectionH2>
          </Reveal>
          <Journey />
        </div>
      </div>


      {/* ━━━━━━━━━━━━━━━━━━━ 4. WHY OPENREMIT ━━━━━━━━━━━━━━━━━━━ */}
      <div className={s.sectionAlt}>
        <Reveal className={s.inner} >
          <Tag>Why OpenRemit?</Tag>
          <SectionH2>Built for the people who run remittances every day</SectionH2>
        </Reveal>

        {/* a. multi-partner */}
        <Reveal className={s.row}>
          <div className={s.media}>
            <DocImage kind="illustration" src={IMG.partners} title="Multi-Partner" alt="Illustration of four people each holding up a puzzle piece that joins into one row, representing many partners connected to one platform" />
          </div>
          <div>
            <Tag>Multi-Partner</Tag>
            <h3 className={s.h3}>Add partners without adding projects</h3>
            <p className={s.body}>Every new exchange company shouldn't mean another integration project. In OpenRemit, onboarding a partner is mostly configuration: how they connect, which transaction types they can send, how strictly they're screened, and how often they're polled. Each partner runs on its own schedule, so a slow partner never holds up a fast one.</p>
          </div>
        </Reveal>

        {/* b. sub-agent network */}
        <Reveal className={s.row}>
          <div>
            <Tag gold>Sub-agent Network</Tag>
            <h3 className={s.h3}>Reach families beyond your branch network</h3>
            <p className={s.body}>Not every beneficiary lives near one of your branches. Sub-agents, whether other banks or exchange companies, can pay out cash on your behalf through the same Branch Portal. They get their own users, their own settlement account and the same maker-checker controls. Reconciliation comes straight from OpenRemit's reports.</p>
          </div>
          <div className={s.media}>
            <DocImage kind="illustration" src={IMG.subagent} title="Sub-agent Network" alt="Illustration of a family collecting a cash remittance from a sub-agent teller at a counter" />
          </div>
        </Reveal>

        {/* c. compliance */}
        <Reveal className={s.row}>
          <div className={s.media}>
            <DocImage kind="illustration" src={IMG.singlePlat} title="Compliance" alt="Illustration of a magnifying glass over a transaction list, highlighting AML and sanctions checks" />
          </div>
          <div>
            <Tag>Compliance</Tag>
            <h3 className={s.h3}>Compliance built in, not bolted on</h3>
            <p className={s.body}>Every transaction passes through your bank's screening system, before funds move or after, depending on the partner's risk profile. Anything flagged waits in a compliance queue where an officer can review it, release it, or reject it, and every decision is logged. Nationality and purpose-of-payment blocks, per-beneficiary limits, and local regulatory reporting are configured to match your regulator's rules.</p>
          </div>
        </Reveal>

        {/* d. multi-rail */}
        <Reveal className={s.row}>
          <div>
            <Tag gold>Multi-Rail Fallback</Tag>
            <h3 className={s.h3}>If one rail fails, the money still moves</h3>
            <p className={s.body}>Interbank payments follow a fallback chain you define. They try your primary rail first. If it can't complete the payment, OpenRemit retries on the secondary rail automatically. If both fail, your operations team can push the payment to a high-value rail in one click. In Pakistan, for example, that chain is 1LINK, then RAAST, then RTGS. Every hop is recorded.</p>
          </div>
          <div className={s.media}>
            <RailFallback />
          </div>
        </Reveal>

        {/* e. operational control */}
        <Reveal className={s.row}>
          <div className={s.media}>
            <StatusCard />
          </div>
          <div>
            <Tag>Operational Control</Tag>
            <h3 className={s.h3}>Nothing gets stuck where no one can see it</h3>
            <p className={s.body}>When a transaction fails, it doesn't disappear into a log file. It lands on the Failed Transactions screen with the reason in plain language. From there your team can retry it from exactly where it stopped, move it to a high-value rail, fix the account details, or cancel it. Sensitive actions always need a second pair of eyes.</p>
          </div>
        </Reveal>
      </div>


      {/* ━━━━━━━━━━━━━━━━━━━ 5. ARCHITECTURE ━━━━━━━━━━━━━━━━━━━ */}
      <div className={s.section}>
        <Reveal className={s.inner}>
          <Tag>Architecture</Tag>
          <SectionH2>Built in layers, so each part does one job</SectionH2>
          <p className={s.lead}>
            Partners talk to a single API Gateway. OpenRemit owns the remittance logic: partners, rules, screening decisions and transaction state. OpenConnect handles integration with your bank's middleware, core banking, screening system and domestic payment switches. On top sit three portals: Back Office for operations and compliance, Branch Portal for cash payout, and Partner Portal for partners to track and manage their own transactions.
          </p>
          <DocImage kind="diagram" src={IMG.highLevel} title="High-level architecture" alt="Architecture diagram: partner systems and Partner Portals connect through a centralized API gateway and unified layer to OpenConnect, which integrates with core banking, payment switches, screening and SMS, with monitoring, logging and reporting alongside" />
        </Reveal>
      </div>


      {/* ━━━━━━━━━━━━━━━━━━━ 6. PORTALS ━━━━━━━━━━━━━━━━━━━ */}
      <div className={s.sectionAlt}>
        <div className={s.inner}>
          <Reveal>
            <Tag>Portals</Tag>
            <SectionH2>One system, a screen for everyone who touches it</SectionH2>
          </Reveal>
          <div className={s.portals}>
            {PORTALS.map((p, i) => (
              <Reveal key={p.title} delay={i * 120}>
                <div className={s.portal}>
                  <div className={s.portalIcon}><Icon>{p.icon}</Icon></div>
                  <div className={s.portalTitle}>{p.title}</div>
                  <div className={s.portalFor}>{p.who}</div>
                  <div className={s.cardText}>{p.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>


      {/* ━━━━━━━━━━━━━━━━━━━ 7. INTEGRATION ━━━━━━━━━━━━━━━━━━━ */}
      <div className={s.section}>
        <Reveal className={s.inner}>
          <Tag>Integration</Tag>
          <SectionH2>Three ways to integrate</SectionH2>
          <p className={s.lead}>Partners differ in what they can build. OpenRemit meets each one where they are.</p>

          <div className={s.split}>
            <div className={s.media}>
              <DocImage kind="illustration" src={IMG.pushPull} title="Push and Pull" alt="Illustration contrasting pull and push: one person pulls a box with a rope while another pushes a block" />
            </div>
            <div className={s.mechList}>
              {[
                { num: '01', title: 'Push', how: "The partner sends each remittance to OpenRemit's APIs the moment it's booked, then checks its status through the inquiry API.", why: 'The fastest path from sender to beneficiary, with real-time status for the partner.' },
                { num: '02', title: 'Pull', how: "OpenRemit fetches outstanding transactions from the partner's own APIs on a schedule. For cash payouts it locks each transaction so it can't be paid twice.", why: "Partners that already expose APIs don't need to build anything new." },
              ].map(m => (
                <div key={m.num} className={s.mech}>
                  <div className={s.mechNum}>{m.num}</div>
                  <div>
                    <div className={s.mechTitle}>{m.title}</div>
                    <p className={s.mechLine}><strong>How: </strong>{m.how}</p>
                    <p className={`${s.mechLine} ${s.mechLineWhy}`}><strong>Why it matters: </strong>{m.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={s.divider} aria-hidden="true" />

          <div className={s.split}>
            <div className={s.mech}>
              <div className={s.mechNumGold}>03</div>
              <div>
                <div className={s.mechTitle}>File</div>
                <p className={s.mechLine}><strong>How: </strong>The partner uploads a transaction file through the Partner Portal. Each row is validated, problem rows are returned for correction, and the rest go to a checker for approval.</p>
                <p className={`${s.mechLine} ${s.mechLineWhy}`}><strong>Why it matters: </strong>Smaller partners without API capability can still be part of your network.</p>
              </div>
            </div>
            <div className={s.media}>
              <DocImage kind="illustration" src={IMG.file} title="File upload" alt="Illustration of one uploaded file being split into many individual transactions" />
            </div>
          </div>
        </Reveal>
      </div>


      {/* ━━━━━━━━━━━━━━━━━━━ 8. GLOBAL REACH ━━━━━━━━━━━━━━━━━━━ */}
      <div className={s.sectionAlt}>
        <Reveal className={`${s.inner} ${s.split}`}>
          <div>
            <Tag gold>Global Reach</Tag>
            <SectionH2>Money from every corridor, paid out at every branch</SectionH2>
            <p className={s.body}>Remittances reach your bank from partners in many sending countries, in many currencies. OpenRemit brings them into one queue, applies the same checks to each, and pays them out locally, whether to an account at your bank, another bank, or cash at the counter. Adding a new corridor means adding a partner, not rebuilding the system.</p>
          </div>
          <div className={s.media}>
            <DocImage kind="illustration" src={IMG.globe} title="Global Reach" alt="Illustration of a globe circled by arrows and money location pins, representing remittances arriving from many countries" />
          </div>
        </Reveal>
      </div>


      {/* ━━━━━━━━━━━━━━━━━━━ 9. FOOTER ━━━━━━━━━━━━━━━━━━━ */}
      <div className={s.footer}>
        <p className={s.footerEyebrow}>Explore the documentation</p>
        <h2 className={s.footerTitle}>Where to next</h2>
        <nav className={s.pills} aria-label="Documentation sections">
          <Link className={s.pill} to="/docs/get-started">Get Started</Link>
          <Link className={s.pill} to="/docs/back-office/logging-in-and-changing-password">Back Office Guide</Link>
          <Link className={s.pill} to="/docs/branch-portal/logging-in-and-changing-password">Branch Portal Guide</Link>
          <Link className={s.pill} to="/docs/partner-portal/logging-in-and-changing-password">Partner Portal Guide</Link>
          <Link className={s.pill} to="/api-specifications">API Specifications</Link>
          {/* TODO link: Features */}
        </nav>
      </div>

    </div>
  );
};

<OpenRemitOverview />
