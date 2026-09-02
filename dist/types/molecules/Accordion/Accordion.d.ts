import React from 'react';
export interface AccordionItem {
    title: React.ReactNode;
    content: React.ReactNode;
}
export interface AccordionProps {
    items: AccordionItem[];
}
declare function Accordion({ items }: AccordionProps): React.JSX.Element;
export default Accordion;
