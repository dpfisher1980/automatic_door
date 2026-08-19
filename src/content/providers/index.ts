import type { SiteContent } from '../types'
import { cmsProvider } from './cmsProvider'
import { localProvider } from './localProvider'
import type { ContentProvider } from './types'

function resolveProvider(): ContentProvider {
  const selectedProvider = (
    import.meta.env.VITE_CONTENT_PROVIDER ?? 'local'
  ).toLowerCase()

  if (selectedProvider === 'cms') {
    return cmsProvider
  }

  return localProvider
}

export async function fetchSiteContent(): Promise<SiteContent> {
  const provider = resolveProvider()
  return provider.getSiteContent()
}
