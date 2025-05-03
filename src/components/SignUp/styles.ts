import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const Input = styled.input`
  padding: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
  transition: border-color 0.2s;

  &::placeholder {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const SignUpButton = styled.button`
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const DividerText = styled.span`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SocialButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundHover};
  }
`;

export const LoginText = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-top: 2rem;
`;

export const LoginLink = styled.a`
  color: ${({ theme }) => theme.colors.primary[500]};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.125rem;

  &:hover {
    text-decoration: underline;
  }
`;
