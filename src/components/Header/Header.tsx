import Link from 'next/link';
import * as S from './Header.styles';

/**
 * @component Header / Cabeçalho
 */
export default function Header() {
  return (
    <S.HeaderContainer>
      <Link href='/'>
        <S.Logo>
          <span>Kapa</span>Kamael
        </S.Logo>
      </Link>

      <S.Slogan>Cuidando dos nossos animais, sempre.</S.Slogan>
    </S.HeaderContainer>
  );
}
