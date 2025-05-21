'use client';

import { useState } from 'react';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import * as S from './styles';

/**
 * Login component
 * Handles user authentication through email/password and social providers
 */
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Email login will be available soon
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (error) {
      console.error('Failed to sign in with Google:', error);
    }
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

        <S.Title>Welcome Back</S.Title>
        <S.Subtitle>Sign in to continue to My Movies</S.Subtitle>

        <S.Form onSubmit={handleSubmit}>
          <S.InputGroup>
            <S.Label htmlFor="email">Email</S.Label>
            <S.Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email login coming soon"
              disabled
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label htmlFor="password">Password</S.Label>
            <S.Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Email login coming soon"
              disabled
            />
          </S.InputGroup>

          <S.ForgotPassword href="#">Forgot password?</S.ForgotPassword>

          <S.LoginButton type="submit" disabled>
            Email Login Coming Soon
          </S.LoginButton>

          <S.Divider>
            <S.DividerLine />
            <S.DividerText>or continue with</S.DividerText>
            <S.DividerLine />
          </S.Divider>

          <S.SocialButtons>
            <S.SocialButton
              type="button"
              onClick={handleGoogleLogin}
            >
              Google
            </S.SocialButton>
          </S.SocialButtons>
        </S.Form>

        <S.SignUpText>
          Don&apos;t have an account? <S.SignUpLink href="/signup">Sign up</S.SignUpLink>
        </S.SignUpText>
      </S.Container>
    </S.Wrapper>
  );
};

export default Login;
