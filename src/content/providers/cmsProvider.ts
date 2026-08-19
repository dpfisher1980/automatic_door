import type { SiteContent } from '../types'
import type { ContentProvider } from './types'

export const cmsProvider: ContentProvider = {
  getSiteContent: async (): Promise<SiteContent> => {
    throw new Error(
      'CMS provider is not configured yet. Set VITE_CONTENT_PROVIDER=local for MVP.',
    )
  },
}
