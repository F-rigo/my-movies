'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Github, Mail } from 'lucide-react';
import * as S from './styles';

/**
 * SignUp component
 * Handles new user registration through email/password and social providers
 */
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email/password registration
  };

  const handleSocialSignUp = () => {
    // TODO: Implement social provider registration
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo>
          <Image
            src="/logo.png"
            alt="My Movies Logo"
            width={150}
            height={50}
            priority
          />
        </S.Logo>

        <S.Title>Create Account</S.Title>
        <S.Subtitle>Sign up to start using My Movies</S.Subtitle>

        <S.Form onSubmit={handleSubmit}>
          <S.InputGroup>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input
              id="email"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label htmlFor="password">Password</S.Label>
            <S.Input
              id="password"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label htmlFor="confirmPassword">Confirm Password</S.Label>
            <S.Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </S.InputGroup>

          <S.SignUpButton type="submit">Sign Up</S.SignUpButton>

          <S.Divider>
            <S.DividerLine />
            <S.DividerText>or continue with</S.DividerText>
            <S.DividerLine />
          </S.Divider>

          <S.SocialButtons>
            <S.SocialButton
              type="button"
              onClick={() => handleSocialSignUp()}
            >
              <Mail size={20} />
              Email
            </S.SocialButton>

            <S.SocialButton
              type="button"
              onClick={() => handleSocialSignUp()}
            >
              <Github size={20} />
              GitHub
            </S.SocialButton>
          </S.SocialButtons>
        </S.Form>

        <S.LoginText>
          Already have an account? <S.LoginLink href="/login">Sign in</S.LoginLink>
        </S.LoginText>
      </S.Container>
    </S.Wrapper>
  );
};

export default SignUp;
