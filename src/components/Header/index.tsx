'use client';

import { useState, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import * as S from './styles'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      scrollTimeout.current = setTimeout(() => {
        const newIsScrolled = window.scrollY > 10
        if (newIsScrolled !== isScrolled) {
          setIsScrolled(newIsScrolled)
        }
      }, 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [isScrolled])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault()
    }
  }

  const handleProfileClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (session) {
      router.push('/profile')
    } else {
      router.push('/login')
    }
  }

  return (
    <S.Wrapper className={isScrolled ? 'scrolled' : ''}>
      <S.Logo>
        <Link href="/" aria-label="Home">
          CinePocket
        </Link>
      </S.Logo>

      <S.MenuButton
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <S.MenuIcon />
      </S.MenuButton>

      <S.Nav $isOpen={isMenuOpen}>
        <Link
          href="/"
          className={pathname === '/' ? 'active' : ''}
          aria-current={pathname === '/' ? 'page' : undefined}
          onClick={(e) => handleLinkClick(e, '/')}
        >
          Home
        </Link>
        <Link
          href="/profile"
          className={pathname === '/profile' ? 'active' : ''}
          aria-current={pathname === '/profile' ? 'page' : undefined}
          onClick={handleProfileClick}
        >
          Profile
        </Link>
        <Link
          href="/favorites"
          className={pathname === '/favorites' ? 'active' : ''}
          aria-current={pathname === '/favorites' ? 'page' : undefined}
          onClick={(e) => handleLinkClick(e, '/favorites')}
        >
          My Pocket
        </Link>
      </S.Nav>
    </S.Wrapper>
  )
}
