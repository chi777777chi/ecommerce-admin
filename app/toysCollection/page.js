'use client';

import styled from 'styled-components';
import AllProductPage from '@/components/AllProductPage';
import Link from 'next/link';
import Image from 'next/image';

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

const LogoWrapper = styled.div`
  flex: 0 0 auto;
  margin-bottom: 20px;
`;

export default function ToysCollectionPage() {
  return (
    <Container>
      <LogoWrapper>
        <Link href="/">
          <Image src="/avatars/Logo.png" alt="東海模型" width="180" height="70" />
        </Link>
      </LogoWrapper>

      <TopBar>
        <span>所有商品</span>
      </TopBar>

      <AllProductPage />
    </Container>
  );
}
