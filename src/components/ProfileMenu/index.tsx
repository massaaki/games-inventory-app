import { signOut } from 'next-auth/client'
import {
  AccountCircle,
  CreditCard,
  FormatListBulleted,
  ExitToApp
} from '@styled-icons/material-outlined'

import Link from 'next/link'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="My profile">
        <AccountCircle size={24} />
        <span>my profile</span>
      </S.Link>
    </Link>

    <Link href="/profile/cards" passHref>
      <S.Link isActive={activeLink === '/profile/cards'} title="My cards">
        <CreditCard size={24} />
        <span>my cards</span>
      </S.Link>
    </Link>

    <Link href="/profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
        <FormatListBulleted size={24} />
        <span>my orders</span>
      </S.Link>
    </Link>

    <S.Link role="button" onClick={() => signOut()}>
      <ExitToApp size={24} />
      <span>sign out</span>
    </S.Link>
  </S.Nav>
)

export default ProfileMenu
