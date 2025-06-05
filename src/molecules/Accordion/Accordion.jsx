import React, { useState } from 'react';
import './Accordion.css';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="accordion">
      {items.map((item, idx) => (
        <div key={idx} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggleIndex(idx)}
            aria-expanded={openIndex === idx}
          >
            {item.title}
          </button>
          {openIndex === idx && (
            <div className="accordion-content">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
