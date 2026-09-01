import React from 'react';
import './ListView.css';

export interface ListViewProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function ListView<T>({ items, renderItem }: ListViewProps<T>) {
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
