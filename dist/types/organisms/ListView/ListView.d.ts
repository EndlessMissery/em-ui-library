import React from 'react';
import './ListView.css';
export interface ListViewProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}
declare function ListView<T>({ items, renderItem }: ListViewProps<T>): React.JSX.Element;
export default ListView;
