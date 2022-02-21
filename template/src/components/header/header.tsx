import loadable from '@loadable/component'
import { Story } from '@storybook/react'
import { graphql, useStaticQuery } from 'gatsby'
import { FC, useState } from 'react'
import tw, { styled } from 'twin.macro'
import { NavigationStoryblok } from '../../@types/storyblok'
import { Container } from '../container/container'
import { Link } from '../link/link'

const HamburgerMenu = loadable(() => import(/* webpackChunkName: "react-hamburger-menu" */ 'react-hamburger-menu'))
const ScrollLock = loadable(() => import(/* webpackChunkName: "react-scrolllock" */ 'react-scrolllock'))

export type HeaderProps = {}

const HeaderContainer = tw.header``
const HeaderHamburgerContainer = tw.div`
  p-2 md:hidden absolute z-100
`
const HeaderNav = tw.nav`w-1/3`
const HeaderNavContainer = styled.div<{ isOpen: boolean }>`
  ${tw`fixed top-0 left-0 flex flex-col w-full h-full transition-all bg-white ease-cubic duration-slow z-80`}
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transform: translate(0, ${({ isOpen }) => (isOpen ? '0' : '100vh')});
`
const HeaderNavList = tw.ul`
  h-full items-center justify-center flex flex-col
`
const HeaderNavListItem = tw.li`
  vr-normal-44
`

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen((prevState) => !prevState)
  }

  const { navigation } = useStaticQuery(graphql`
    query Settings {
      navigation: allStoryblokEntry(filter: { field_component: { eq: "navigation" }, slug: { eq: "header" } }) {
        edges {
          node {
            name
            full_slug
            content
          }
        }
      }
    }
  `)

  if (!navigation.edges && !Array.isArray(navigation.edges)) {
    return null
  }

  const [{ node: { content } }] = navigation.edges
  const { pages } = JSON.parse(content)

  return (
    <Container padding-top-none>
      <HeaderContainer>
        <HeaderNav>
          <HeaderHamburgerContainer>
            <HamburgerMenu color="black" isOpen={isOpen} menuClicked={handleClick} width={32} height={24} />
          </HeaderHamburgerContainer>
          <ScrollLock isActive={isOpen} />
          <HeaderNavContainer isOpen={isOpen}>
            <HeaderNavList>
              {pages?.map(({ full_slug, name }) => (
                <HeaderNavListItem>
                  <Link to={full_slug}>{name}</Link>
                </HeaderNavListItem>
              ))}
            </HeaderNavList>
          </HeaderNavContainer>
        </HeaderNav>
      </HeaderContainer>
    </Container>
  )
}
