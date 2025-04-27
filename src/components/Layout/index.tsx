'use client';

import Header from '@/components/Header';
import * as S from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <S.Wrapper>
      <Header />
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
}
