'use client'

import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.medium};
`

export default Section
