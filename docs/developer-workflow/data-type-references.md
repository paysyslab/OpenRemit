---
hide_title: true
---

import React, { useEffect, useRef, useState, useMemo } from 'react';

export const DataTypeReferences = () => {
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
      <div ref={ref} style={{ opacity: v?1:0, transform: v?'translateY(0)':'translateY(26px)', transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`, ...style }}>
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
      p: { fontSize: 14.5, lineHeight: 1.8, color: '#5a6a88', margin: '0 0 12px' },
      ul: { margin: '0 0 0 20px', padding: 0, listStylePosition: 'outside' },
      li: { fontSize: 14.5, lineHeight: 1.8, color: '#5a6a88', marginBottom: 8 },
      tableWrap: { margin: '8px 0', overflowX: 'auto' },
      table: { width: '100%', borderCollapse: 'collapse', background: '#fff', border, borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
      th: { background: '#f8fafc', color: '#1a2540', fontSize: 13, fontWeight: 700, textAlign: 'left', padding: '14px 20px', borderBottom: '1.5px solid #e2e8f0' },
      td: { fontSize: 13.5, color: '#5a6a88', padding: '13px 20px', borderBottom: '1px solid #f0f4f8', lineHeight: 1.7 },
      code: { background: '#e8f2fa', color: '#1E6FA8', padding: '2px 8px', borderRadius: 5, fontSize: 12.5, fontWeight: 600, fontFamily: 'monospace' },
      codeBlock: { background: '#0c1e35', color: '#e8f2fa', padding: '20px 24px', borderRadius: 12, fontSize: 13, fontFamily: 'monospace', lineHeight: 1.8, overflowX: 'auto', margin: '0 0 20px', border: '1.5px solid #1a3550' },
    };
  }, []);

  const Tag = ({ children, gold = false }) => (
    <div style={{ display:'inline-flex', alignItems:'center', gap:7, background: gold?'rgba(245,166,35,0.12)':'#e8f2fa', border: gold?'1px solid rgba(245,166,35,0.25)':'none', borderRadius:30, padding:'5px 14px', marginBottom:16 }}>
      <span style={{ width:6, height:6, borderRadius:'50%', background: gold?'#F5A623':'#1E6FA8', display:'inline-block' }} />
      <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.13em', textTransform:'uppercase', color: gold?'#F5A623':'#1E6FA8' }}>{children}</span>
    </div>
  );

  const standardTypes = [
    { type: 'string', desc: 'Text or alphanumeric data', example: 'PSL000000001', format: 'Up to 64 characters', fields: 'requestId; partnerReference; bankCode' },
    { type: 'integer', desc: 'Whole number (no decimals)', example: '1', format: '0–999999999', fields: 'totalTransactions; acceptedCount; rejectedCount' },
    { type: 'long', desc: 'Large numeric identifier', example: '23132313131313', format: '13–20 digits', fields: 'rrn (if used)' },
    { type: 'boolean', desc: 'True/false flag', example: 'true', format: 'Boolean literal', fields: 'isActive (if used)' },
    { type: 'date', desc: 'ISO date (no time)', example: '2025-04-15', format: 'YYYY-MM-DD', fields: 'sentAt' },
    { type: 'dateTime', desc: 'ISO date-time', example: '2025-04-15T10:45:30Z', format: 'ISO 8601', fields: 'createdAt (if used)' },
    { type: 'decimal', desc: 'Numeric with decimals', example: '2500.75', format: '0–99999999.99', fields: 'amount; settlementAmount; commissionAmount' },
    { type: 'enum', desc: 'Predefined value set', example: 'ACCOUNT', format: 'See enumerations below', fields: 'payoutMethod; status' },
    { type: 'object', desc: 'Nested JSON object', example: 'bank', format: 'Valid JSON object', fields: 'bank; beneficiary; transactionDetails' },
    { type: 'array', desc: 'List of objects', example: 'transactions', format: 'JSON array', fields: 'transactions' },
  ];

  const payoutMethods = [
    { value: 'ACCOUNT', desc: 'Bank account payout' },
    { value: 'CASH', desc: 'Cash payout' },
  ];

  const txStatuses = [
    { value: 'PENDING', desc: 'Transaction received but not processed' },
    { value: 'PROCESSING', desc: 'Transaction under processing' },
    { value: 'COMPLETE', desc: 'Transaction completed successfully' },
    { value: 'FAILED', desc: 'Transaction failed' },
    { value: 'RETURNED', desc: 'Transaction reversed or returned' },
  ];

  const idTypes = [
    { value: 'CNIC', desc: 'Pakistan National ID' },
    { value: 'Passport', desc: 'Passport number' },
    { value: 'NTN', desc: 'Business tax number' },
  ];

  const namingConventions = [
    { convention: 'camelCase', usage: 'API request/response parameters', example: 'requestId; partnerReference; payoutMethod' },
    { convention: 'PascalCase', usage: 'Internal models / UI labels', example: 'ResponseCode; BankDetails' },
    { convention: 'snake_case', usage: 'Logs and internal configs', example: 'transaction_status; partner_reference' },
  ];

  const validationRules = [
    { type: 'Mandatory Fields', desc: 'Must be provided in every request', appliesTo: 'requestId; partnerReference (as applicable)' },
    { type: 'Length Validation', desc: 'Must not exceed the defined limit', appliesTo: 'IDs; references; codes' },
    { type: 'Pattern Validation', desc: 'Format-based validation', appliesTo: 'CNIC typically 13 digits (where used)' },
    { type: 'Enum Validation', desc: 'Only predefined values allowed', appliesTo: 'payoutMethod; status' },
    { type: 'Data Type Check', desc: 'Reject if type mismatch', appliesTo: 'All fields' },
  ];

  const validationOutput = [
    { field: 'requestId', validationType: 'Length Check', result: 'Pass', message: 'Valid' },
    { field: 'payoutMethod', validationType: 'Enum Validation', result: 'Pass', message: 'Valid value' },
    { field: 'amount', validationType: 'Decimal Precision', result: 'Pass', message: 'Valid numeric format' },
    { field: 'status', validationType: 'Enum Validation', result: 'Fail', message: 'Value not supported' },
  ];

  const renderTable = (headers, rows, keyFn) => (
    <div style={s.tableWrap}>
      <table style={s.table}>
        <thead>
          <tr>{headers.map((h, i) => <th key={i} style={s.th}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{keyFn(r).map((cell, j) => <td key={j} style={s.td}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <div style={s.root}>

        {/* ── HERO ── */}
        <div style={{ ...s.header, opacity:hv?1:0, transform:hv?'translateY(0)':'translateY(28px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}>Data Type <em style={s.em}>References</em></h1>
          <p style={s.sub}>Reference for data types, enumerations, and validation rules used across OpenRemit APIs — ensuring data consistency, schema validation, and predictable integration behavior.</p>
        </div>

        {/* ── OVERVIEW ── */}
        <Reveal>
          <div style={s.sectionHeading}>Overview <div style={s.line} /></div>
          <div style={s.card}>
            <ul style={s.ul}>
              <li style={s.li}>OpenRemit APIs use <strong>JSON</strong> over HTTPS for all requests and responses.</li>
              <li style={s.li}>Secured endpoints require the <code style={s.code}>X-Auth-Token</code> header.</li>
              <li style={s.li}>Where validation applies, partner and bank rules may further constrain allowed values.</li>
            </ul>
          </div>
        </Reveal>

        {/* ── STANDARD DATA TYPES ── */}
        <Reveal delay={60}>
          <div style={s.sectionHeading}>Standard Data Types <div style={s.line} /></div>
          {renderTable(
            ['Type', 'Description', 'Example', 'Allowed Format / Range', 'Common Fields'],
            standardTypes,
            (r) => [
              <code style={s.code}>{r.type}</code>,
              r.desc,
              <code style={s.code}>{r.example}</code>,
              r.format,
              r.fields,
            ]
          )}
        </Reveal>

        {/* ── ENUMERATIONS ── */}
        <Reveal delay={0}>
          <div style={s.sectionHeading}>Enumerations <div style={s.line} /></div>

          <Tag>Payout Method</Tag>
          {renderTable(['Value', 'Description'], payoutMethods, (r) => [<code style={s.code}>{r.value}</code>, r.desc])}

          <div style={{ marginTop: 28 }}><Tag>Transaction Status</Tag></div>
          {renderTable(['Value', 'Description'], txStatuses, (r) => [<code style={s.code}>{r.value}</code>, r.desc])}

          <div style={{ marginTop: 28 }}><Tag>Identification Type</Tag></div>
          {renderTable(['Value', 'Description'], idTypes, (r) => [<code style={s.code}>{r.value}</code>, r.desc])}
        </Reveal>

        {/* ── NAMING CONVENTIONS ── */}
        <Reveal delay={60}>
          <div style={s.sectionHeading}>Naming Conventions <div style={s.line} /></div>
          {renderTable(['Convention', 'Usage', 'Example'], namingConventions, (r) => [<code style={s.code}>{r.convention}</code>, r.usage, r.example])}
        </Reveal>

        {/* ── VALIDATION RULES ── */}
        <Reveal delay={0}>
          <div style={s.sectionHeading}>Validation Rules <div style={s.line} /></div>
          {renderTable(['Validation Type', 'Description', 'Applies To'], validationRules, (r) => [r.type, r.desc, r.appliesTo])}
        </Reveal>

        {/* ── EXAMPLE SCHEMA ── */}
        <Reveal delay={60}>
          <div style={s.sectionHeading}>Example Schema <div style={s.line} /></div>
          <pre style={s.codeBlock}>{`{
  "requestId": "TFX20251209000001120",
  "partnerReference": "PSL000000001",
  "payoutMethod": "ACCOUNT",
  "amount": "10000.00",
  "currency": "PKR",
  "status": "PROCESSING",
  "sentAt": "2025-04-15"
}`}</pre>
        </Reveal>

        {/* ── VALIDATION OUTPUT EXAMPLE ── */}
        <Reveal delay={0}>
          <div style={s.sectionHeading}>Validation Output Example <div style={s.line} /></div>
          {renderTable(['Field', 'Validation Type', 'Result', 'Message'], validationOutput, (r) => [
            <code style={s.code}>{r.field}</code>,
            r.validationType,
            <span style={{ fontWeight: 600, color: r.result === 'Pass' ? '#10b981' : '#ef4444' }}>{r.result}</span>,
            r.message,
          ])}
        </Reveal>

      </div>
    </>
  );
};

<DataTypeReferences />