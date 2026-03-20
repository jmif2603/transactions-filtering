import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homescreen from './Homescreen.tsx'
import FilterViewA from './FilterViewA.tsx'
import FilterViewB from './FilterViewB.tsx'
import HomescreenWeb from './HomescreenWeb.tsx'
import HomescreenWebUnified from './HomescreenWebUnified.tsx'

type View = 'mobile-a' | 'mobile-b' | 'web-separated' | 'web-unified';

const labelStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  cursor: 'pointer',
  fontFamily: 'Roboto, sans-serif',
  fontSize: 14,
  color: '#0f2b4d',
  userSelect: 'none',
};

const childLabelStyle: React.CSSProperties = {
  ...labelStyle,
  fontSize: 13,
  color: '#60758f',
};

const App = () => {
  const [view, setView] = useState<View>('mobile-a');

  const isMobile = view === 'mobile-a' || view === 'mobile-b';
  const isWeb = view === 'web-separated' || view === 'web-unified';

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>

      {/* Left sidebar */}
      <div
        style={{
          flexShrink: 0,
          width: 180,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          padding: '24px 16px',
          borderRight: '1px solid #cfd6de',
          backgroundColor: 'white',
        }}
      >
        {/* Mobile view group */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <label style={labelStyle}>
            <input
              type="radio"
              name="view-group"
              checked={isMobile}
              onChange={() => setView('mobile-a')}
              style={{ accentColor: '#1d7883', cursor: 'pointer' }}
            />
            Mobile view
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 20 }}>
              <label style={childLabelStyle}>
                <input
                  type="radio"
                  name="view"
                  value="mobile-a"
                  checked={view === 'mobile-a'}
                  onChange={() => setView('mobile-a')}
                  style={{ accentColor: '#1d7883', cursor: 'pointer' }}
                />
                Filter groups as separate bottom sheets
              </label>
              <label style={childLabelStyle}>
                <input
                  type="radio"
                  name="view"
                  value="mobile-b"
                  checked={view === 'mobile-b'}
                  onChange={() => setView('mobile-b')}
                  style={{ accentColor: '#1d7883', cursor: 'pointer' }}
                />
                Filter groups as checkbox groups
              </label>
            </div>
        </div>

        {/* Web group */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <label style={labelStyle}>
            <input
              type="radio"
              name="view-group"
              checked={isWeb}
              onChange={() => setView('web-separated')}
              style={{ accentColor: '#1d7883', cursor: 'pointer' }}
            />
            Web view
          </label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 20 }}>
              <label style={childLabelStyle}>
                <input
                  type="radio"
                  name="view"
                  value="web-separated"
                  checked={view === 'web-separated'}
                  onChange={() => setView('web-separated')}
                  style={{ accentColor: '#1d7883', cursor: 'pointer' }}
                />
                All filter fields separated
              </label>
              <label style={childLabelStyle}>
                <input
                  type="radio"
                  name="view"
                  value="web-unified"
                  checked={view === 'web-unified'}
                  onChange={() => setView('web-unified')}
                  style={{ accentColor: '#1d7883', cursor: 'pointer' }}
                />
                Unified filter panel
              </label>
            </div>
        </div>
      </div>

      {/* Content area */}
      <div style={{ flex: 1, overflow: isWeb ? 'hidden' : 'auto' }}>

        {view === 'mobile-a' && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, fontWeight: 500, color: '#60758f' }}>
                Homescreen A
              </span>
              <div style={{ width: 393, flexShrink: 0 }}>
                <Homescreen FilterView={FilterViewA} />
              </div>
            </div>
          </div>
        )}

        {view === 'mobile-b' && (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <span style={{ fontFamily: 'Roboto, sans-serif', fontSize: 14, fontWeight: 500, color: '#60758f' }}>
                Homescreen B
              </span>
              <div style={{ width: 393, flexShrink: 0 }}>
                <Homescreen FilterView={FilterViewB} filterChipVariant="B" />
              </div>
            </div>
          </div>
        )}

        {view === 'web-separated' && (
          <div style={{ height: '100%' }}>
            <HomescreenWeb />
          </div>
        )}

        {view === 'web-unified' && (
          <div style={{ height: '100%' }}>
            <HomescreenWebUnified />
          </div>
        )}

      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
