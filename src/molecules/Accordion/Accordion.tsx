import React, { useId, useState } from 'react';
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
  const baseId = useId();

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="accordion">
      {items.map((item, idx) => {
        const headerId = `${baseId}-header-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;
        const isOpen = openIndex === idx;

        return (
          <div key={idx} className="accordion-item">
            <button
              id={headerId}
              className="accordion-header"
              onClick={() => toggleIndex(idx)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              {item.title}
            </button>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={headerId} className="accordion-content">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
