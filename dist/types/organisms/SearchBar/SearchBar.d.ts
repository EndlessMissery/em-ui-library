import React from 'react';
export interface SearchBarProps {
    onSearch: (query: string) => void;
}
declare function SearchBar({ onSearch }: SearchBarProps): React.JSX.Element;
export default SearchBar;
