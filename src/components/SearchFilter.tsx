import React from 'react';

interface SearchFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ search, onSearchChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={search}
        placeholder="Search products..."
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: '8px',
          width: '100%',
          maxWidth: '400px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
    </div>
  );
};

export default SearchFilter;
