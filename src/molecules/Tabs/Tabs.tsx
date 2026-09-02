import React, { useId, useRef, useState } from 'react';
import './Tabs.css';

export interface TabItem {
  label: React.ReactNode;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
}

function Tabs({ tabs }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activate = (idx: number) => {
    setActiveIndex(idx);
    tabRefs.current[idx]?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        activate((idx + 1) % tabs.length);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        activate((idx - 1 + tabs.length) % tabs.length);
        break;
      case 'Home':
        e.preventDefault();
        activate(0);
        break;
      case 'End':
        e.preventDefault();
        activate(tabs.length - 1);
        break;
    }
  };

  return (
    <div className="tabs">
      <nav className="tabs-nav" role="tablist">
        {tabs.map((tab, idx) => {
          const tabId = `${baseId}-tab-${idx}`;
          const panelId = `${baseId}-panel-${idx}`;
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              ref={el => {
                tabRefs.current[idx] = el;
              }}
              id={tabId}
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className={`tabs-nav-button ${isActive ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={e => handleKeyDown(e, idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </nav>
      <div
        className="tabs-content"
        role="tabpanel"
        id={`${baseId}-panel-${activeIndex}`}
        aria-labelledby={`${baseId}-tab-${activeIndex}`}
        tabIndex={0}
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
