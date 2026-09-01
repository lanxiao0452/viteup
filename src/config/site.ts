// Default title and description.
// Set `meta.title` and `meta.description` in the router configuration to customize each page.
// When changing the title or description, also update the <title> and <meta name="description"> in index.html.
export const SITE_TITLE = 'Viteup'
export const SITE_DESCRIPTION = 'Welcome to Viteup'

// Template for route-specific titles. ':title' is replaced with the value of `meta.title`.
// Example: ':title | Viteup' becomes 'About | Viteup' when `meta.title` is 'About'.
export const SITE_TITLE_TEMPLATE = ':title | Viteup'
