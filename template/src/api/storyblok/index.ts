import StoryblokClient from 'storyblok-js-client'
import config from '../../../gatsby-config'
const sbConfig = config.plugins.filter((item) => item.resolve === 'gatsby-source-storyblok')[0]

class StoryblokService {
  devMode: boolean
  token: string
  client: StoryblokClient
  query: any

  constructor() {
    this.devMode = true
    this.token = sbConfig.options.accessToken
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })

    this.query = {}
  }

  getCacheVersion() {
    return this.client.cacheVersion
  }

  get(slug: string, params?: any) {
    params = params || {}

    if (this.getQuery('_storyblok') || this.devMode || (typeof window !== 'undefined' && window.storyblok)) {
      params.version = 'draft'
    }

    if (typeof window !== 'undefined' && typeof window.StoryblokCacheVersion !== 'undefined') {
      params.cv = window.StoryblokCacheVersion
    }

    return this.client.get(slug, params)
  }

  initEditor() {
    if (window.storyblok) {
      window.storyblok.init()
      window.storyblok.on(['change', 'published'], () => window.location.reload())
    }
  }

  setQuery(query: any) {
    this.query = query
  }

  getQuery(param: any) {
    return this.query[param]
  }
}

const _storyblok = new StoryblokService()

export default _storyblok
