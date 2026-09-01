import React, { useState } from 'react';
import './Accordion.css';

export interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
}

function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
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
