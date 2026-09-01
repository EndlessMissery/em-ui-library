import React from 'react';
import './Tabs.css';
export interface TabItem {
    label: React.ReactNode;
    content: React.ReactNode;
}
export interface TabsProps {
    tabs: TabItem[];
}
declare function Tabs({ tabs }: TabsProps): React.JSX.Element;
export default Tabs;
