import React from 'react';

export default function LoadingSpinner({ message = "Loading records, please wait..." }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      {/* Animated CSS Spinner Circle */}
      <div style={{
        width: '36px',
        height: '36px',
        border: '4px solid #e2e8f0',
        borderTop: '4px solid #2563eb',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
        marginBottom: '10px'
      }} />

      {/* COMP-07: Message while fetching data */}
      <p style={{ color: '#475569', fontSize: '14px', margin: 0, fontWeight: '500' }}>
        {message}
      </p>

      {/* Inline Keyframes for Animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
