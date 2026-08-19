import { localSiteContent } from '../siteContent'
import { SiteContentSchema, type SiteContent } from '../types'
import type { ContentProvider } from './types'

export const localProvider: ContentProvider = {
  getSiteContent: (): SiteContent => SiteContentSchema.parse(localSiteContent),
}
