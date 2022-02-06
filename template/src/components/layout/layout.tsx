import React from 'react'
import { Helmet } from 'react-helmet'
import tw from "twin.macro"
import { useStaticQuery, graphql } from 'gatsby'
import { Global } from "@emotion/core"
import { GlobalStyles } from '../../styles/global-styles'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'
import { StoryProvider } from '@storyofams/storyblok-toolkit'

const Container = tw.div`
  max-w-100 m-auto
`

const Main = tw.main``

export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <StoryProvider>
      <Container>
        <Global styles={GlobalStyles} />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Container>
    </StoryProvider>
  )
}
