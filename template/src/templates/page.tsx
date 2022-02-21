import { Layout } from '../components/layout/layout'
import { Page } from '../components/page/page'
import { SEO } from '../components/seo/seo'
import { useStoryblok } from '../hooks/useStoryblok'

const PageTemplate = ({ pageContext, location }: { pageContext: any, location: Location }) => {
  const story = JSON.parse(pageContext.story.content)
  const liveStory = useStoryblok(story, location)
  const { seo_title, seo_description } = liveStory

  return (
    <Layout>
      <SEO title={seo_title} description={seo_description} />
      <Page blok={liveStory} />
    </Layout>
  )
}

export default PageTemplate
