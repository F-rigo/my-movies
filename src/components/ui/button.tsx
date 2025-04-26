import { ButtonHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

const StyledButton = styled.button<{ variant?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  transition: all 0.2s;
  cursor: pointer;
  min-height: 36px;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'outline':
        return `
          border: 1px solid #e2e8f0;
          background: white;
          &:hover {
            background: #f1f5f9;
          }
        `;
      case 'ghost':
        return `
          &:hover {
            background: #f1f5f9;
          }
        `;
      default:
        return `
          background: #3b82f6;
          color: white;
          border: none;
          &:hover {
            background: #2563eb;
          }
        `;
    }
  }}
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', ...props }, ref) => {
    return <StyledButton variant={variant} ref={ref} {...props} />;
  }
);

Button.displayName = 'Button';
