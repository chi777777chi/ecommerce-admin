'use client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link'
import AllProductPage from '@/components/AllProductPage';

export default function ShowProductPage() {

  return (
    <Container>
        <LogoWrapper>
            <Link href="/">
                  <Image src="/avatars/Logo.png" alt="東海模型" width="180" height="70"/>
            </Link>
        </LogoWrapper>
      <TopBar>
        <ItemCount>共 {toys.length} 項商品</ItemCount>
        <Controls>
          <ViewButton>
            <span>☰</span>
          </ViewButton>
          <ViewButton>
            <span>▤</span>
          </ViewButton>
          <SortSelect defaultValue="最新上架">
            <option>最新上架</option>
            <option>價格由高到低</option>
            <option>價格由低到高</option>
            
          </SortSelect>
        </Controls>
          <AllProductPage/>;  
      </TopBar> </Container>
      
  );

  // <AllProductPage/>;
}


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ItemCount = styled.span`
  color: #333;
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ViewButton = styled.button`
  padding: 5px;
  background: white;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const SortSelect = styled.select`
  padding: 5px;
  border: 1px solid #ddd;
`;

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
  height: 200px;
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
const LogoWrapper = styled.div`
  flex: 0 0 auto;
`;


