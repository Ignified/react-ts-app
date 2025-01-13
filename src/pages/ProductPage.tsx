import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import Table from '../components/Table';
import SearchFilter from '../components/SearchFilter';

const ProductPage: React.FC = () => {
  const { data, isLoading, error } = useProducts();
  const [search, setSearch] = useState('');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchFilter search={search} onSearchChange={setSearch} />
      <Table data={filteredData} />
    </div>
  );
};

export default ProductPage;
