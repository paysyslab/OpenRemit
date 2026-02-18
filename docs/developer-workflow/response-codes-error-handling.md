---
hide_title: true
---

import React, { useEffect, useRef, useState, useMemo } from 'react';

export const ResponseCodesErrorHandling = () => {
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
      sub: { fontSize: 14, color: 'rgba(255,255,255,0.60)', lineHeight: 1.65, maxWidth: 720, margin: 0 },
      sectionHeading: { display: 'flex', alignItems: 'center', gap: 12, fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8896b0', margin: '44px 0 20px' },
      line: { flex: 1, height: 1, background: '#e2e8f0' },
      card: { background: '#fff', border, borderRadius: 14, padding: '24px 28px', marginBottom: 20 },
      tableWrap: { margin: '8px 0', overflowX: 'auto' },
      table: { width: '100%', borderCollapse: 'collapse', background: '#fff', border, borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' },
      th: { background: '#f8fafc', color: '#1a2540', fontSize: 13, fontWeight: 700, textAlign: 'left', padding: '14px 20px', borderBottom: '1.5px solid #e2e8f0' },
      td: { fontSize: 13.5, color: '#5a6a88', padding: '13px 20px', borderBottom: '1px solid #f0f4f8', lineHeight: 1.7 },
      code: { background: '#e8f2fa', color: '#1E6FA8', padding: '2px 7px', borderRadius: 5, fontSize: 12.5, fontWeight: 600, fontFamily: 'monospace' },
      codeBlock: { background: '#0c1e35', color: '#e8f2fa', padding: '18px 20px', borderRadius: 10, fontSize: 12.5, fontFamily: 'monospace', lineHeight: 1.7, overflowX: 'auto', margin: '0 0 20px', border: '1.5px solid #1a3550' },
      ul: { margin: '0 0 0 20px', padding: 0, listStylePosition: 'outside' },
      li: { fontSize: 14.5, lineHeight: 1.8, color: '#5a6a88', marginBottom: 8 },
    };
  }, []);

  const Tag = ({ children, gold = false }) => (
    <div style={{ display:'inline-flex', alignItems:'center', gap:7, background: gold?'rgba(245,166,35,0.12)':'#e8f2fa', border: gold?'1px solid rgba(245,166,35,0.25)':'none', borderRadius:30, padding:'5px 14px', marginBottom:16 }}>
      <span style={{ width:6, height:6, borderRadius:'50%', background: gold?'#F5A623':'#1E6FA8', display:'inline-block' }} />
      <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.13em', textTransform:'uppercase', color: gold?'#F5A623':'#1E6FA8' }}>{children}</span>
    </div>
  );

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

  const coreFields = [
    { field: 'responseCode', desc: 'OpenRemit business-level response code' },
    { field: 'responseDescription', desc: 'Human-readable description of the response' },
    { field: 'timestamp', desc: 'Time at which response was generated' },
    { field: 'data', desc: 'Present for successful responses (if applicable)' },
    { field: 'errorDetails', desc: 'Present for validation or processing errors' },
  ];

  const httpCodes = [
    { code: '200', status: 'OK', meaning: 'Request processed successfully', action: 'Proceed as normal' },
    { code: '201', status: 'Created', meaning: 'Resource created', action: 'Store reference if applicable' },
    { code: '202', status: 'Accepted', meaning: 'Request accepted for processing', action: 'Poll inquiry API' },
    { code: '400', status: 'Bad Request', meaning: 'Validation or malformed request', action: 'Fix request payload' },
    { code: '401', status: 'Unauthorized', meaning: 'Invalid credentials or token', action: 'Regenerate JWT' },
    { code: '429', status: 'Too Many Requests', meaning: 'Rate limit exceeded', action: 'Apply backoff' },
    { code: '500', status: 'Internal Server Error', meaning: 'OpenRemit internal error', action: 'Retry after delay' },
    { code: '503', status: 'Service Unavailable', meaning: 'Downstream bank or service unavailable', action: 'Retry later' },
  ];

  const openRemitCodes = [
    { code: '00', meaning: 'Request processed successfully', appliesTo: 'All APIs' },
    { code: '05', meaning: 'Validation error / Missing mandatory field', appliesTo: 'All APIs' },
    { code: '10', meaning: 'Duplicate request', appliesTo: 'Bulk Push' },
    { code: '14', meaning: 'Transaction not found', appliesTo: 'Transaction Inquiry' },
    { code: '20', meaning: 'Timeout occurred', appliesTo: 'Any synchronous API' },
    { code: '30', meaning: 'Invalid transaction state', appliesTo: 'Transaction Inquiry' },
    { code: '41', meaning: 'External service failure', appliesTo: 'Bank / IMD dependent APIs' },
    { code: '96', meaning: 'System malfunction / Invalid request', appliesTo: 'Bulk Push' },
  ];

  const retryLogic = [
    { errorType: 'Timeout / 408 / 20', action: 'Retry request', interval: '2–5 seconds' },
    { errorType: '429 Too Many Requests', action: 'Exponential backoff', interval: '5–10 seconds' },
    { errorType: '500 / 503', action: 'Retry after delay', interval: '10–15 seconds' },
    { errorType: 'Validation / 400 / 05', action: 'Do not retry', interval: 'Not applicable' },
  ];

  const commonFailures = [
    { scenario: 'Expired token', symptom: '401 Unauthorized', resolution: 'Re-authenticate and retry' },
    { scenario: 'Duplicate requestId', symptom: 'Duplicate request error', resolution: 'Generate new requestId' },
    { scenario: 'Invalid transaction state', symptom: 'State validation error', resolution: 'Follow correct lifecycle' },
    { scenario: 'Missing mandatory field', symptom: 'Validation error (05)', resolution: 'Fix request payload' },
    { scenario: 'Bank / IMD unavailable', symptom: 'External service failure (41)', resolution: 'Retry after delay' },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <div style={s.root}>

        {/* ── HERO ── */}
        <div style={{ ...s.header, opacity:hv?1:0, transform:hv?'translateY(0)':'translateY(28px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}>Response Codes &amp; <em style={s.em}>Error Handling</em></h1>
          <p style={s.sub}>Explicitly aligned with the OpenRemit Push API TSD (v1.0.1) — documents HTTP status codes, OpenRemit response codes, and error-handling behavior for all APIs.</p>
        </div>

        {/* ── OVERVIEW ── */}
        <Reveal>
          <div style={s.sectionHeading}>Overview <div style={s.line} /></div>
          <div style={s.card}>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, color: '#5a6a88', margin: '0 0 16px' }}>
              Each OpenRemit API response includes the following core fields:
            </p>
            {renderTable(
              ['Field', 'Description'],
              coreFields,
              (r) => [<code style={s.code}>{r.field}</code>, r.desc]
            )}
          </div>
        </Reveal>

        {/* ── HTTP STATUS CODES ── */}
        <Reveal delay={60}>
          <div style={s.sectionHeading}>Standard HTTP Status Codes <div style={s.line} /></div>
          {renderTable(
            ['HTTP Code', 'Status', 'Meaning', 'Action Required'],
            httpCodes,
            (r) => [<code style={s.code}>{r.code}</code>, r.status, r.meaning, r.action]
          )}
        </Reveal>

        {/* ── OPENREMIT RESPONSE CODES ── */}
        <Reveal delay={0}>
          <div style={s.sectionHeading}>OpenRemit Response Codes <div style={s.line} /></div>
          {renderTable(
            ['Response Code', 'Meaning', 'Applies To'],
            openRemitCodes,
            (r) => [<code style={s.code}>{r.code}</code>, r.meaning, r.appliesTo]
          )}
        </Reveal>

        {/* ── ERROR RESPONSE STRUCTURE ── */}
        <Reveal delay={60}>
          <div style={s.sectionHeading}>Error Response Structure <div style={s.line} /></div>
          <div style={s.card}>
            <p style={{ fontSize: 14.5, lineHeight: 1.8, color: '#5a6a88', margin: '0 0 16px' }}>
              All error responses follow the same structure as defined in the TSD:
            </p>
            <pre style={s.codeBlock}>{`{
  "responseCode": "05",
  "responseDescription": "Missing mandatory field",
  "timestamp": "2025-10-30T12:46:00Z",
  "errorDetails": {
    "field": "requestId",
    "message": "requestId cannot be null or empty",
    "suggestion": "Include requestId in request body"
  }
}`}</pre>
          </div>
        </Reveal>

        {/* ── RETRY LOGIC ── */}
        <Reveal delay={0}>
          <div style={s.sectionHeading}>Retry Logic <div style={s.line} /></div>
          {renderTable(
            ['Error Type', 'Recommended Action', 'Retry Interval'],
            retryLogic,
            (r) => [r.errorType, r.action, r.interval]
          )}
        </Reveal>

        {/* ── ERROR HANDLING GUIDELINES ── */}
        <Reveal delay={60}>
          <div style={s.sectionHeading}>Error Handling Guidelines <div style={s.line} /></div>
          <div style={s.card}>
            <ul style={s.ul}>
              <li style={s.li}>Validate mandatory fields before invoking any OpenRemit API.</li>
              <li style={s.li}>Maintain a centralized error handler mapping <strong>HTTP codes</strong> and <strong>OpenRemit response codes</strong>.</li>
              <li style={s.li}>
                Log the following for each API call:
                <ul style={{ ...s.ul, marginTop: 8 }}>
                  <li style={s.li}><code style={s.code}>requestId</code></li>
                  <li style={s.li}>Endpoint</li>
                  <li style={s.li}>HTTP status code</li>
                  <li style={s.li}><code style={s.code}>responseCode</code></li>
                </ul>
              </li>
              <li style={s.li}>
                For asynchronous or batch operations, maintain:
                <ul style={{ ...s.ul, marginTop: 8 }}>
                  <li style={s.li}>Retry counters</li>
                  <li style={s.li}>Failure logs</li>
                </ul>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* ── COMMON FAILURE SCENARIOS ── */}
        <Reveal delay={0}>
          <div style={s.sectionHeading}>Common Failure Scenarios <div style={s.line} /></div>
          {renderTable(
            ['Scenario', 'Symptom', 'Resolution'],
            commonFailures,
            (r) => [r.scenario, r.symptom, r.resolution]
          )}
        </Reveal>

      </div>
    </>
  );
};

<ResponseCodesErrorHandling />