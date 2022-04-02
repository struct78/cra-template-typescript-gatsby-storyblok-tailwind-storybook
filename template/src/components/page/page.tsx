import loadable from "@loadable/component"
import { FC } from 'react'
import { Blok } from 'storyblok-react'
import { useStoryblok } from '../../hooks/useStoryblok'
import { Resolver } from '../resolver/resolver'
const SbEditable = loadable(() => import(/* webpackChunkName: "storyblok-react" */"storyblok-react"))

export const Page: FC<Blok<any>> = ({ story: originalStory, location }: Blok<any>) => {
  const story = useStoryblok(originalStory, location)
  const content = typeof story.content === "string" ? JSON.parse(story.content) : story.content
  const resolvedComponents = content.body && content.body.map((child: Blok<any>) => <Resolver blok={child} key={child._uid}/>)
  return (
    <SbEditable content={story} key={story._uid}>
      {resolvedComponents}
    </SbEditable>
  )
}
