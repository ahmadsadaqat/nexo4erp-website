import React from 'react'

export const metadata = {
  title: 'Efficiency Audit',
  description: 'Embedded Efficiency Audit form',
}

const EXTERNAL_URL = 'https://management.nexo4erp.com/efficiency-audit'

export default function EfficiencyAuditPage() {
  return (
    <div
      style={{
        padding: '2rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ margin: 0, marginBottom: '1rem' }}>Efficiency Audit</h1>

      <div
        style={{
          flex: 1,
          minHeight: 600,
          border: '1px solid #e6e6e6',
          borderRadius: 8,
          overflow: 'hidden',
        }}
      >
        <iframe
          src={EXTERNAL_URL}
          title='Efficiency Audit'
          style={{ width: '100%', height: '100%', border: 0 }}
          // sandbox ommitted to maximize compatibility with external forms
        />
      </div>

      <p style={{ marginTop: '1rem', fontSize: 14 }}>
        If the form doesn't load,{' '}
        <a href={EXTERNAL_URL} target='_blank' rel='noreferrer'>
          open it in a new tab
        </a>
        .
      </p>
    </div>
  )
}
