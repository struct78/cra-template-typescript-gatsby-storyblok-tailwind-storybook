import React from 'react'
import { Helmet } from 'react-helmet'
import tw from "twin.macro"
import { useStaticQuery, graphql } from 'gatsby'
import { Global } from "@emotion/core"
import { GlobalStyles } from '../../styles/global-styles'
import StoryblokService from '../../api/storyblok'

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
      <Helmet
        title={data.title}
        script={[
          {"src": `//app.storyblok.com/f/storyblok-latest.js?t=${StoryblokService.token}`,
          "type": "text/javascript"}
        ]}
      />
      <Helmet
        script={[
          {
          "innerHTML": `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';`,
          "type": "text/javascript"
          }
        ]}
      />
      <Container>
        <Global styles={GlobalStyles} />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Container>
    </StoryProvider>
  )
}
