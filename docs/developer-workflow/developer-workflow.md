---
hide_title: true
---

import React, { useEffect, useRef, useState, useMemo } from 'react';

export const DeveloperWorkflow = () => {
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
      endpointCard: { background: '#fff', border, borderRadius: 14, padding: '22px 26px', marginBottom: 16 },
      endpointHeader: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 },
      methodBadge: { fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', color: '#1E6FA8', background: '#e8f2fa', padding: '4px 10px', borderRadius: 6 },
      endpointPath: { fontSize: 13, fontWeight: 600, color: '#5a6a88', fontFamily: 'monospace' },
      label: { fontSize: 12, fontWeight: 700, color: '#8896b0', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase' },
      codeBlock: { background: '#0c1e35', color: '#e8f2fa', padding: '18px 20px', borderRadius: 10, fontSize: 12.5, fontFamily: 'monospace', lineHeight: 1.7, overflowX: 'auto', margin: '0 0 16px', border: '1.5px solid #1a3550' },
      inlineCode: { background: '#e8f2fa', color: '#1E6FA8', padding: '2px 7px', borderRadius: 5, fontSize: 12.5, fontWeight: 600, fontFamily: 'monospace' },
      responseLabel: { fontSize: 13, fontWeight: 700, color: '#1a2540', marginBottom: 10, marginTop: 16 },
      successBadge: { display: 'inline-block', fontSize: 11, fontWeight: 700, color: '#10b981', background: '#d1fae5', padding: '3px 10px', borderRadius: 20, marginLeft: 8 },
      failBadge: { display: 'inline-block', fontSize: 11, fontWeight: 700, color: '#ef4444', background: '#fee2e2', padding: '3px 10px', borderRadius: 20, marginLeft: 8 },
    };
  }, []);

  const Tag = ({ children, gold = false }) => (
    <div style={{ display:'inline-flex', alignItems:'center', gap:7, background: gold?'rgba(245,166,35,0.12)':'#e8f2fa', border: gold?'1px solid rgba(245,166,35,0.25)':'none', borderRadius:30, padding:'5px 14px', marginBottom:16 }}>
      <span style={{ width:6, height:6, borderRadius:'50%', background: gold?'#F5A623':'#1E6FA8', display:'inline-block' }} />
      <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.13em', textTransform:'uppercase', color: gold?'#F5A623':'#1E6FA8' }}>{children}</span>
    </div>
  );

  const endpoints = [
    {
      num: '1',
      title: 'Authentication',
      endpoint: 'BASE_URL/api/v1/authenticate',
      method: 'POST',
      headers: 'Content-Type: application/json',
      reqBody: `{
  "username": "sit_user",
  "password": "sit_user",
  "channel": "web"
}`,
      resSuccess: `{
  "responseCode": "00",
  "responseDescription": "Processed OK",
  "expiry": "1742798473",
  "token": "eyJhbGciOiJIUzUxMiJ9..."
}`,
      resFailure: `{
  "responseCode": "401",
  "responseDescription": "Unauthorized – Wrong Credentials"
}`,
      note: 'Use the returned token in X-Auth-Token header for all secured requests.',
    },
    {
      num: '2',
      title: 'Account Inquiry / Title Fetch',
      endpoint: '/api/v1/paysyslabs/titlefetch',
      method: 'POST',
      headers: 'X-Auth-Token: TOKEN',
      reqBody: `{
  "requestId": "TFX20251209000001120",
  "partnerReference": "PSL000000001",
  "payoutMethod": "ACCOUNT",
  "senderCountry": "SA",
  "bank": {
    "bankCode": "110001",
    "bankBranchCode": null
  },
  "beneficiary": {
    "idType": "CNIC",
    "idNumber": "4210112345671",
    "accountNumber": "00001234567890"
  },
  "transactionDetails": {
    "amount": "10000.00",
    "currency": "PKR",
    "purposeOfPayment": "FAMILY_SUPPORT"
  }
}`,
      resSuccess: `{
  "responseCode": "00",
  "responseDescription": "Title fetch successful",
  "requestId": "TFX20251209000001120",
  "beneficiaryName": "MUHAMMAD AHMED",
  "bank": {
    "bankCode": "110001",
    "bankBranchCode": "0010"
  }
}`,
      resFailure: `{
  "responseCode": "99",
  "responseDescription": "Account not found",
  "requestId": "TFX20251209000001120"
}`,
    },
    {
      num: '3',
      title: 'Post Transactions (Bulk Push)',
      endpoint: 'BASE_URL/api/v1/paysyslabs/posttransactions',
      method: 'POST',
      headers: 'X-Auth-Token: TOKEN',
      reqBody: `{
  "requestId": "TFX20251209000001120",
  "totalTransactions": "2",
  "transactions": [
    {
      "payoutMethod": "ACCOUNT",
      "transactionDetails": {
        "partnerReference": "PSL000000001",
        "purposeOfPayment": "FAMILY_SUPPORT",
        "payingAmount": "10000.00",
        "payingCurrency": "PKR"
      },
      "remitter": {
        "fullName": "NOMAN",
        "nationality": "PAKISTAN"
      },
      "beneficiary": {
        "fullName": "JAMES FERNANDES",
        "bankDetails": {
          "bankCode": "221166",
          "accountNumber": "PK94ABPA0002000001100333"
        }
      }
    }
  ]
}`,
      resSuccess: `{
  "responseCode": "00",
  "responseDescription": "Batch received successfully",
  "requestId": "TFX20251209000001120",
  "totalTransactions": 2,
  "acceptedCount": 2,
  "rejectedCount": 0,
  "transactions": [
    {
      "partnerReference": "PSL000000001",
      "status": "ACCEPTED",
      "statusCode": "00",
      "statusMessage": "Queued for processing",
      "duplicate": false
    }
  ]
}`,
      resFailure: `{
  "responseCode": "96",
  "responseDescription": "Transaction rejected. Invalid or malformed request.",
  "requestId": "TFX20251209000001120",
  "totalTransactions": 3,
  "acceptedCount": 0,
  "rejectedCount": 2
}`,
    },
    {
      num: '4',
      title: 'Transaction Status Inquiry',
      endpoint: '/api/v1/paysyslabs/transactionInquiry',
      method: 'POST',
      headers: 'X-Auth-Token: TOKEN',
      reqBody: `{
  "requestId": "TFX20251209000001120",
  "partnerReference": "PSL000000001"
}`,
      resSuccess: `{}`,
      resFailure: `{
  "responseCode": "14",
  "responseDescription": "Transaction not found",
  "requestId": "TFX20251209000001120"
}`,
    },
    {
      num: '5',
      title: 'Balance Inquiry',
      endpoint: 'BASE_URL/api/v1/paysyslabs/balanceInquiry',
      method: 'POST',
      headers: 'X-Auth-Token: TOKEN',
      reqBody: `{
  "accountNumber": "100300001670201"
}`,
      resSuccess: `{
  "response": {
    "response_code": "00",
    "response_desc": "SUCCESS",
    "balanceInquiry": {
      "balanceDetails": {
        "branchCode": "1003",
        "amount": "3704.68",
        "fromAccount": "100300001670201",
        "currencyCode": "PKR"
      }
    }
  }
}`,
      resFailure: `{
  "responseCode": "99",
  "responseDescription": "Unable to process"
}`,
    },
    {
      num: '6',
      title: 'IMD List (Participants)',
      endpoint: 'BASE_URL/api/v1/paysyslabs/get/participant/imd',
      method: 'GET',
      headers: 'X-Auth-Token: TOKEN',
      reqBody: null,
      resSuccess: `{
  "responseCode": "00",
  "responseDescription": "Fetched Successfully",
  "data": [
    {
      "id": 1,
      "bicCode": "EGIBPKKA",
      "bankName": "Al Baraka Bank Limited",
      "localImd": "639530"
    },
    {
      "id": 2,
      "bicCode": "ABPAPKKA",
      "bankName": "Allied Bank Limited",
      "localImd": "589430"
    }
  ]
}`,
      resFailure: `{
  "responseCode": "99",
  "responseDescription": "Unable to process"
}`,
    },
  ];

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <div style={s.root}>

        {/* ── HERO ── */}
        <div style={{ ...s.header, opacity:hv?1:0, transform:hv?'translateY(0)':'translateY(28px)', transition:'opacity 0.7s ease, transform 0.7s ease' }}>
          <div style={s.glow1} />
          <div style={s.glow2} />
          <h1 style={s.h1}>Developer <em style={s.em}>Workflow</em></h1>
          <p style={s.sub}>Complete API reference for OpenRemit Push API — authentication, title fetch, bulk push, transaction inquiry, balance inquiry, and participant IMD endpoints.</p>
        </div>

        {/* ── ENDPOINTS ── */}
        {endpoints.map((ep, i) => (
          <Reveal key={i} delay={i % 2 === 0 ? 0 : 60}>
            <div style={s.sectionHeading}>{ep.num}. {ep.title} <div style={s.line} /></div>
            <div style={s.endpointCard}>
              
              <div style={s.endpointHeader}>
                <span style={s.methodBadge}>{ep.method}</span>
                <code style={s.endpointPath}>{ep.endpoint}</code>
              </div>

              {/* Headers */}
              <div style={s.label}>Headers</div>
              <pre style={s.codeBlock}>{ep.headers}</pre>

              {/* Request Body */}
              {ep.reqBody && (
                <>
                  <div style={s.label}>Request Body</div>
                  <pre style={s.codeBlock}>{ep.reqBody}</pre>
                </>
              )}

              {/* Response Success */}
              <div style={s.responseLabel}>
                Response <span style={s.successBadge}>SUCCESS</span>
              </div>
              <pre style={s.codeBlock}>{ep.resSuccess}</pre>

              {/* Response Failure */}
              <div style={s.responseLabel}>
                Response <span style={s.failBadge}>FAILURE</span>
              </div>
              <pre style={s.codeBlock}>{ep.resFailure}</pre>

              {/* Note */}
              {ep.note && (
                <div style={{ fontSize: 13.5, lineHeight: 1.7, color: '#6b7a99', marginTop: 12, padding: '12px 16px', background: '#f8fafc', borderRadius: 8, borderLeft: '3px solid #1E6FA8' }}>
                  <strong style={{ color: '#1a2540', fontWeight: 600 }}>Note: </strong>{ep.note}
                </div>
              )}

            </div>
          </Reveal>
        ))}

      </div>
    </>
  );
};

<DeveloperWorkflow />