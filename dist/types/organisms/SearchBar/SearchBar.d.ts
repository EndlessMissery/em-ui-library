import React from 'react';
import './SearchBar.css';
export interface SearchBarProps {
    onSearch: (query: string) => void;
}
declare function SearchBar({ onSearch }: SearchBarProps): React.JSX.Element;
export default SearchBar;
