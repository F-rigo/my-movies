import Link from 'next/link'
import * as S from './styles'

export default function Header() {
  return (
    <S.Wrapper>
      <S.Logo>
        <Link href="/">
          My Movies
        </Link>
      </S.Logo>
      <S.Nav>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/favorites">My Favorite Movies</Link>
      </S.Nav>
    </S.Wrapper>
  )
}
