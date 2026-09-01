import React, { useState } from 'react';
import './Tooltip.css';

export interface TooltipProps {
  children: React.ReactNode;
  text: React.ReactNode;
}

function Tooltip({ children, text }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      tabIndex={0}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && <div className="tooltip-box">{text}</div>}
    </span>
  );
}

export default Tooltip;
