import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="MyAccess Operations Hub"
      description="Interactive IAM Operational Runbooks"
    >
      <main
        style={{
          minHeight: '100vh',
          background: '#020617',
          color: 'white',
          padding: '4rem',
        }}
      >
        {/* HERO SECTION */}

        <div
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <h1
            style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            }}
          >
            MyAccess Operations Hub
          </h1>

          <p
            style={{
              fontSize: '1.5rem',
              color: '#94a3b8',
            }}
          >
            Interactive IAM Operational Runbooks
          </p>

          {/* STATS SECTION */}

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginTop: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={statStyle}>
              <h2>22</h2>
              <p>Daily Tasks</p>
            </div>

            <div style={statStyle}>
              <h2>10</h2>
              <p>Weekly Tasks</p>
            </div>

            <div style={statStyle}>
              <h2>6</h2>
              <p>Monthly Tasks</p>
            </div>
          </div>
        </div>

        {/* DASHBOARD CARDS */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '4rem',
          }}
        >
          {/* DAILY TASKS */}

          <a
            href="daily-tasks/task-6-provisioning-failures"
            style={cardStyle}
            className="card-hover"
          >
            <h2>🚨 Daily Tasks</h2>

            <div
              style={{
                display: 'inline-block',
                background: '#dc2626',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '999px',
                fontSize: '12px',
                marginBottom: '1rem',
                fontWeight: 'bold',
              }}
            >
              HIGH PRIORITY
            </div>

            <p>
              Provisioning failures, monitoring, aggregations and operational checks.
            </p>
          </a>

          {/* EMERGENCY */}

          <a
            href="emergency/workday-aggregation-failure"
            style={cardStyle}
            className="card-hover"
          >
            <h2>🔥 Emergency SOPs</h2>

            <p>
              Critical operational incidents and escalation procedures.
            </p>
          </a>

          {/* WEEKLY */}

          <div
            style={cardStyle}
            className="card-hover"
          >
            <h2>📊 Weekly Tasks</h2>

            <p>
              Role ownership reviews, certifications and governance checks.
            </p>
          </div>

          {/* TROUBLESHOOTING */}

          <div
            style={cardStyle}
            className="card-hover"
          >
            <h2>🛠 Troubleshooting</h2>

            <p>
              Guided troubleshooting workflows for IAM operational issues.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

/* CARD STYLE */

const cardStyle = {
  background: '#1e293b',
  padding: '2rem',
  borderRadius: '16px',
  textDecoration: 'none',
  color: 'white',
  transition: 'all 0.3s ease',
  border: '1px solid #334155',
};

/* STATS STYLE */

const statStyle = {
  background: '#111827',
  padding: '1rem 2rem',
  borderRadius: '12px',
  minWidth: '150px',
  border: '1px solid #334155',
};