import React, { useEffect, useState } from 'react';
import { getResult } from '../../config/firebase';

export default function History() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const res = await getResult();
    setProducts(res);
  }

  const uniqueProducts = Array.from(new Set(products.map(item => item.location)))
    .map(location => products.find(item => item.location === location));

  return (
    <div>
      <div className="top fixed-bottom" style={{ width: '100vw', backgroundColor: 'rgb(0 0 0 / 70%)', color: 'white' }}>
        <h1 style={{ fontWeight: '900' }}>History</h1>
      </div>
      {uniqueProducts.length > 0 ? (
        uniqueProducts.map(item => (
          <div style={{ borderBottom: '1px white solid' }} key={item.id}>
            <h4 style={{ fontWeight: '600', cursor:'pointer' }}>{item.location}</h4>
          </div>
        ))
      ) : (
        <p>No unique products available.</p>
      )}
    </div>
  );
}
