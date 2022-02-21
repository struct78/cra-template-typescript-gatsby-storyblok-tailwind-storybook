import React from 'react'
import { Layout } from '../components/layout/layout'
import { SEO } from '../components/seo/seo'
import { useStoryblok } from '../hooks/useStoryblok'
import { Page } from '../components/page/page'

const NotFoundPage: React.FC = () => {
  const story = useStoryblok(null, location)

  let content = (<h1>Not found</h1>)
  if(story && story.content) content = (<Page blok={story.content} />)

  console.log(story, content)
  return (
    <Layout>
      <SEO title="404: Not found" />
      {content}
    </Layout>
  )
}

export default NotFoundPage
