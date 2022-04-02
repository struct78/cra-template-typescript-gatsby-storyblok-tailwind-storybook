import React from 'react'
import { Layout } from '../components/layout/layout'
import { Page } from '../components/page/page'
import { SEO } from '../components/seo/seo'
import { useStoryblok } from '../hooks/useStoryblok'

const PageTemplate = ({ pageContext, location }: { pageContext: any; location: Location }) => {
  const { story } = pageContext
  const {
    content: { seoTitle, seoDescription, openGraphImage, openGraphDescription, openGraphTitle },
  }: Blok<PageStoryblok> = story
  const storyLive = useStoryblok(story, location)

  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoDescription}
        openGraphTitle={openGraphTitle}
        openGraphDescription={openGraphDescription}
        openGraphImage={openGraphImage?.filename}
      />
      <Page story={storyLive} location={location} />
    </Layout>
  )
}

export default PageTemplate
