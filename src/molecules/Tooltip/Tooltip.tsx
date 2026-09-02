import React, { useId, useState } from 'react';
import './Tooltip.css';

export interface TooltipProps {
  children: React.ReactNode;
  text: React.ReactNode;
}

function Tooltip({ children, text }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  return (
    <span
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      tabIndex={0}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      onKeyDown={e => {
        if (e.key === 'Escape') setVisible(false);
      }}
      aria-describedby={visible ? tooltipId : undefined}
    >
      {children}
      {visible && (
        <div className="tooltip-box" role="tooltip" id={tooltipId}>
          {text}
        </div>
      )}
    </span>
  );
}

export default Tooltip;
