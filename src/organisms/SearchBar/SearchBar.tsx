import React, { useState } from 'react';
import { Input, Button } from '../../atoms';
import './SearchBar.css';

export interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Hledat..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button type="submit">Hledat</Button>
    </form>
  );
}

export default SearchBar;
