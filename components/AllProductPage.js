'use client';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
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
  height: 200px; /* 固定高度 */
  overflow: hidden; /* 超出部分隱藏 */
  border-radius: 8px; /* 圓角設置 */
  img {
    position: absolute; /* 絕對定位圖片 */
    top: 50%; /* 垂直居中 */
    left: 50%; /* 水平居中 */
    transform: translate(-50%, -50%); /* 偏移至居中 */
    width: 100%; /* 寬度填滿 */
    height: auto; /* 高度自動 */
    object-fit: cover; /* 保持比例並填滿容器 */
  }
`;


const ProductInfo = styled.div`
  padding: 12px;
`;

const ProductName = styled.h3`
  font-size: 14px;
  margin: 0;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  height: 2.8em;
`;

const Price = styled.p`
  font-size: 16px;
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

export default function AllProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:80/products'); // Fetch all products
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data); // Check the structure of data returned
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
              <p>{product.description}</p>
            </ProductInfo>
            <ActionBar>
              <IconButton>❤️</IconButton>
              <IconButton>🛒</IconButton>
            </ActionBar>
          </Link>
        </ProductCard>
      ))}
    </ProductGrid>
  );
}
