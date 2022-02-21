import loadable from '@loadable/component'
import { FC }  from 'react'
import { Container } from '../container/container'
import { Divider } from '../divider/divider'
import { Image } from '../image/image'
import { Heading } from '../heading/heading'
import { Placeholder } from '../placeholder/placeholder'
import { Text } from '../text/text'
import { ContactForm } from '../contact-form/contact-form'
import { Blok } from 'storyblok-react'

const SbEditable = loadable(() => import(/* webpackChunkName: "storyblok-react" */"storyblok-react"))

interface RouterProps {
  blok: any
}

interface ComponentMap {
  [key: string]: FC<RouterProps>
}

const ContainerWrapper = ({ blok }: Blok<any>) => {
  const { children, _uid, ...rest } = blok
  return (
    <SbEditable content={blok} key={_uid}>
      <Container {...rest}>
        {children && children.map((child: Blok<any>) => <Resolver blok={child} key={child._uid} />)}
      </Container>
    </SbEditable>
  )
}

export const Components: ComponentMap = {
  'image': Image,
  'container': ContainerWrapper,
  'heading': Heading,
  'text': Text,
  'contact-form': ContactForm,
  'divider': Divider,
}

export const Resolver: FC<RouterProps> = ({ blok }) => {
  if (Components[blok.component]) {
    const Component = Components[blok.component]
    return <Component blok={blok} />
  }

  return <Placeholder name={blok.component} />
}
