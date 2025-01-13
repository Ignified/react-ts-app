import React from 'react';
import ProductPage from './pages/ProductPage';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header style={{ padding: '10px', textAlign: 'center', backgroundColor: '#282c34', color: 'white' }}>
        <h1>Product List</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <ProductPage />
      </main>
    </div>
  );
};

export default App;
