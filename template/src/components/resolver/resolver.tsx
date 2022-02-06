import React, { FC }  from 'react'
import { Container, ContainerProps } from '../container/container'
import { Divider } from '../divider/divider'
import { FullWidthImage } from '../full-width-image/full-width-image'
import { Heading } from '../heading/heading'
import { Placeholder } from '../placeholder/placeholder'
import { Text } from '../text/text'
import { ContactForm } from '../contact-form/contact-form'
import SbEditable from 'storyblok-react'
import { ComponentProps } from '../../@types/components'

interface RouterProps {
  blok: any
}

interface ComponentMap {
  [key: string]: FC<RouterProps>
}

const ContainerWrapper = ({ blok }: ComponentProps<any>) => {
  const { children, _uid } = blok

  return (
    <SbEditable content={blok} key={_uid}>
      <Container>
        {children && children.map((child: ComponentProps<any>) => <Resolver blok={child} key={child._uid} />)}
      </Container>
    </SbEditable>
  )
}

export const Components: ComponentMap = {
  'full-width-image': FullWidthImage,
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
