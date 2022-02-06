import React, { useEffect, useState } from 'react'
import { Layout } from '../components/layout/layout'
import { Page } from '../components/page/page'
import { SEO } from '../components/seo/seo'

const StoryblokPage = ({ pageContext }) => {
  const story = JSON.parse(pageContext.story.content)
  const { seo_title, seo_description } = story
  const [state, setState] = useState(story)

  return (
    <Layout>
      <SEO title={seo_title} description={seo_description} />
      <Page blok={state} />
    </Layout>
  )
}

export default StoryblokPage
