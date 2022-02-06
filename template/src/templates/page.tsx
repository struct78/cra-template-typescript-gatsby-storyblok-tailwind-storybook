import React, { useEffect, useState } from 'react'
import { Layout } from '../components/layout/layout'
import { Page } from '../components/page/page'
import { SEO } from '../components/seo/seo'
import StoryblokService from '../api/storyblok'

const StoryblokPage = ({ pageContext }) => {
  const story = JSON.parse(pageContext.story.content)
  const { seo_title, seo_description } = story
  const [state, setState] = useState(story)

  const getInitialStory = async () => {
    const result = await StoryblokService.get(
      `cdn/stories/${pageContext.story.full_slug}`
    )

    const {
      data: {
        story: { content },
      },
    } = result

    if (content) {
      setState(content)
      setTimeout(() => StoryblokService.initEditor(), 200)
    }
  }

  useEffect(() => {
    getInitialStory()
  }, [])

  return (
    <Layout>
      <SEO title={seo_title} description={seo_description} />
      <Page blok={state} />
    </Layout>
  )
}

export default StoryblokPage
