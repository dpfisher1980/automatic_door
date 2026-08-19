## CMS Schema Mapping

This project already uses provider-based content loading. To integrate a CMS later, map CMS records to the internal `SiteContent` shape in `src/content/types.ts`.

### SiteContent Root

- `nav[]`
- `hero`
- `about`
- `services`
- `projects[]`
- `contact`

### Suggested Collections / Content Types

1. Navigation Item

- `label` (string)
- `href` (string, usually section anchor)

2. Hero

- `eyebrow` (string)
- `title` (string)
- `subtitle` (string)
- `primaryCta.label` (string)
- `primaryCta.href` (string)
- `secondaryCta.label` (string)
- `secondaryCta.href` (string)
- `stats[]` with `label`, `value`

3. About

- `heading` (string)
- `body[]` (array of rich-text blocks or plain text)
- `highlights[]` (string array)

4. Services

- `heading` (string)
- `intro` (string)
- `items[]` with:
  - `title` (string)
  - `description` (string)

5. Projects

- `id` (slug/string)
- `title` (string)
- `sector` (string)
- `imageUrl` (asset URL)
- `imageAlt` (string)
- `challenge` (string)
- `solution` (string)
- `outcome` (string)

6. Contact

- `heading` (string)
- `intro` (string)
- `emailLabel` (string)
- `email` (email string)
- `phoneLabel` (string)
- `phoneDisplay` (string)
- `phoneHref` (string, tel format)
- `responseSla` (string)
- `businessHours` (string)

### Integration Notes

- Implement CMS fetch + mapping in `src/content/providers/cmsProvider.ts`.
- Parse mapped payload with `SiteContentSchema.parse(...)` before returning.
- Keep the same output shape so section components remain unchanged.
- Keep client-safe data only; do not expose secrets in front-end code.
