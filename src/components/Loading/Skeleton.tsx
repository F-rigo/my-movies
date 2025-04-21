'use client'

import styled from 'styled-components'

type SkeletonProps = {
  type?: 'banner' | 'carousel'
}

export default function LoadingSkeleton({ type }: SkeletonProps) {
  return (
    <SkeletonWrapper $type={type}>
      <div className="shimmer" />
    </SkeletonWrapper>
  )
}

const SkeletonWrapper = styled.div<{ $type?: string }>`
  width: ${({ $type }) => ($type === 'banner' ? '100%' : '300px')};
  height: ${({ $type }) => ($type === 'banner' ? '400px' : '200px')};
  background: #eee;
  position: relative;
  overflow: hidden;

  .shimmer {
    position: absolute;
    background: linear-gradient(90deg, transparent, #f5f5f5, transparent);
    width: 100%;
    height: 100%;
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`
