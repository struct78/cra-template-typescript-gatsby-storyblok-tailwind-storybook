import loadable from '@loadable/component'
import { FC } from 'react'
import tw from "twin.macro"
import { GlobalStyles } from '../../styles/global-styles'
import { Footer } from '../footer/footer'
import { Header } from '../header/header'

const Global = loadable(() => import(/* webpackChunkName: "emotion" */'@emotion/core'), {
  resolveComponent: ({ Global }) => Global,
})
const StoryProvider = loadable(() => import(/* webpackChunkName: "storyblok-toolkit" */'@storyofams/storyblok-toolkit'), {
  resolveComponent: ({ StoryProvider }) => StoryProvider,
})

const Container = tw.div``
const Main = tw.main``

export const Layout: FC = ({ children }) => {
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
