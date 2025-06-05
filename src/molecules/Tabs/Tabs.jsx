import React, { useState } from 'react';
import './Tabs.css';

function Tabs({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tabs">
      <nav className="tabs-nav">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`tabs-nav-button ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div className="tabs-content">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
