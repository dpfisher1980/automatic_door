import type { SiteContent } from '../types'

export interface ContentProvider {
  getSiteContent: () => Promise<SiteContent> | SiteContent
}
