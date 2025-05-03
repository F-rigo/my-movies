'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Github, Mail } from 'lucide-react';
import * as S from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
  };

  const handleSocialLogin = () => {
    // TODO: Implement social login
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

          <S.ForgotPassword href="#">Forgot password?</S.ForgotPassword>

          <S.LoginButton type="submit">Sign In</S.LoginButton>

          <S.Divider>
            <S.DividerLine />
            <S.DividerText>or continue with</S.DividerText>
            <S.DividerLine />
          </S.Divider>

          <S.SocialButtons>
            <S.SocialButton
              type="button"
              onClick={() => handleSocialLogin()}
            >
              <Mail size={20} />
              Email
            </S.SocialButton>

            <S.SocialButton
              type="button"
              onClick={() => handleSocialLogin()}
            >
              <Github size={20} />
              GitHub
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
