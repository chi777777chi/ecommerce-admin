'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AddToCart from '@/components/AddToCart';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export default function SearchProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const query = searchParams.get('query'); // `name` 對應的是查詢參數的 key
  console.log(query)
  useEffect(() => {
    if (!query) return; // 如果 query 為空，則不執行請求

    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:80/products/search?name=${(query)}`);
        console.log(response)
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        console.error("error");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <Link href={`/product/${product.id}`}>
            <div>
              <img
                src={product.image}
                alt={product.productName}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <h3>{product.productName}</h3>
              <p>NT${product.price}</p>
            </div>
          </Link>
          <AddToCart product={product} />
        </ProductCard>
      ))}
    </ProductGrid>
  );
}
