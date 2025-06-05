import React from 'react';
import './ListView.css';

function ListView({ items, renderItem }) {
  if (!items || items.length === 0) {
    return <div className="listview-empty">Žádné položky</div>;
  }

  return (
    <ul className="listview">
      {items.map((item, idx) => (
        <li key={idx} className="listview-item">
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

export default ListView;
