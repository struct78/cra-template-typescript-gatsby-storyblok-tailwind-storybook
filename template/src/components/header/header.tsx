import React, { FC, useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import ScrollLock from 'react-scrolllock'
import tw, { styled } from 'twin.macro'
import { ComponentProps } from '../../@types/components'
import { Container } from '../container/container'

export type HeaderProps = {}

const HeaderContainer = tw.header``
const HeaderHamburgerContainer = tw.div``
const HeaderNav = tw.nav``
const HeaderNavContainer = styled.div<{ isOpen: boolean }>``


export const Header: FC<ComponentProps<HeaderProps>> = () => {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState((prevState) => (!prevState))
  }

  return (
    <Container padding-top-none>
      <HeaderContainer>
        <HeaderNav>
          <HeaderHamburgerContainer>
            <HamburgerMenu
              isOpen={state}
              menuClicked={handleClick}
              width={32}
              height={24}
            />
          </HeaderHamburgerContainer>
          <ScrollLock isActive={state} />
          <HeaderNavContainer isOpen={state}>
          </HeaderNavContainer>
        </HeaderNav>
      </HeaderContainer>
    </Container>
  )
}
