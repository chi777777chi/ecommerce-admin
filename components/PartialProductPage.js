'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import AddToCart from '@/components/AddToCart';


const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Default: 4 columns */
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for medium screens */
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for smaller screens */
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr; /* 1 column for very small screens */
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  padding: 12px;
`;

const ProductName = styled.h1`
  font-size: 26px;
  margin: 0;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  height: 2.8em;
  text-decoration: none;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #e4584f;
  margin: 8px 0;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px 12px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    opacity: 0.7;
  }
`;

export default function PartialProductPage({ slug }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const slugToIdMap = {
    "gunpla": 1,
    "hot-items": 2,
    "rc-cars": 3,
    "remote-control": 4,
    "nextee": 5,
    "new-arrivals": 6,
    "premium": 7,
    "classic-robots": 8,
    "model-kits": 9,
    "orders": 10
  };

  const categoryId = slugToIdMap[slug]; // 將 slug 映射到 id

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (!categoryId) {
          throw new Error(`未找到對應的分類 ID: ${slug}`);
        }

        const response = await fetch(`http://localhost:80/category/${categoryId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        setProducts(data.products || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    console.log(categoryId, slug)
    if (categoryId) {
      fetchProducts();
    }
  }, [categoryId]);


  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <Link href={`/product/${product.id}`}>
            <ImageWrapper>
                <img
                    src={product.image}
                    alt={product.productName}
                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                />  
            </ImageWrapper>
            <ProductInfo>
              <ProductName>{product.productName}</ProductName>
              <Price>NT${product.price}</Price>
            </ProductInfo>
            <ActionBar>
              
              {/* <IconButton>🛒</IconButton> */}
            </ActionBar>
          </Link>
          <IconButton>❤️</IconButton>
          <AddToCart product={product} />
        </ProductCard>
        
      ))}

    </ProductGrid>
  );
}
