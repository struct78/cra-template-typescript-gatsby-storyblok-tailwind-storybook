/// <reference types="react/index.d.ts"/>
/// <reference types="styled-components/cssprop" />


import { Blok } from 'storyblok-react'
import 'styled-components'

declare module 'gatsby-storyblok-image' {

}

// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: any
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: any | DefaultTheme
  }
}

declare module 'storyblok-react' {
  export type Blok<T extends {}> = T & {
    _uid: string
    id: string
    name: string
    lang: string
    slug: string
    uuid: string
    component: string
    full_slug: string
  }
}

// Add support for svg imports
declare module '*.svg' {
  const content: any
  export default content
}

// Add support for Jest configuration
declare global {
  namespace NodeJS {
    export interface Global {
      ___loader: any
      StoryblokBridge: any
    }
  }

  export type Component<T> = {
    blok: Blok<t>
  }
  export interface BlokImage {
    filename: string
    src?: string
    alt?: string
    title?: string
    copyright?: string
  }
}
