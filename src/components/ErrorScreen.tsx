import styled from 'styled-components';

interface ErrorScreenProps {
  title?: string;
  message?: string;
}

export function ErrorScreen({
  title = 'Oops! Something went wrong',
  message = 'We encountered an error while processing your request. Please try again later.',
}: ErrorScreenProps) {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #E5E5E5;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #7B7B7B;
  line-height: 1.5;
`;
