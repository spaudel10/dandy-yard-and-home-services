import { useEffect } from 'react'

export const SITE_ORIGIN = 'https://dandyservices.ca'

/** Hero image for social previews and structured data on the small-engine page */
export const SMALL_ENGINE_SHARE_IMAGE = `${SITE_ORIGIN}/small-engine/small-engine-hero.png`

export const homeDocumentMeta = {
  title: 'Small Engine Repair & Lawn Care | Dandy Yard & Home Services | Taber & Lethbridge',
  description:
    'Small engine repair and maintenance in Taber, Lethbridge, Bow Island, and Coaldale—mowers, snowblowers, generators, and more. Plus professional lawn care, yard maintenance, snow removal, small home repairs, and golf cart service for Alberta homes.',
  canonical: `${SITE_ORIGIN}/`,
  ogTitle: 'Small Engine Repair & Yard Services | Taber, Lethbridge, Bow Island, Coaldale',
  ogDescription:
    'Small engine repair and maintenance plus lawn care, snow removal, and home services across Taber, Lethbridge, Bow Island, and Coaldale, Alberta.',
  ogImage: `${SITE_ORIGIN}/logo.png`,
  ogImageAlt: 'Dandy Yard & Home Services logo',
  twitterTitle: 'Small Engine Repair & Yard Services | Taber & Lethbridge',
  twitterDescription:
    'Small engine repair and maintenance, lawn care, snow removal, and more for Taber, Lethbridge, Bow Island, and Coaldale, Alberta.',
}

export const smallEnginePageMeta = {
  title:
    'Small Engine Repair | Golf Carts, Mowers, Snowblowers & More | Dandy Yard & Home Services',
  description:
    'Small engine repair in Taber, Lethbridge, Bow Island, and Coaldale. We service golf carts, lawnmowers, snow blowers, line trimmers, chainsaws, and pretty much anything with a small engine. General maintenance, tune-ups, diagnostic repairs, and overhauls.',
  canonical: `${SITE_ORIGIN}/small-engine-repair`,
  ogTitle: 'Small Engine Repair | Taber, Lethbridge & Area | Dandy Yard & Home Services',
  ogDescription:
    'Golf carts, mowers, snow blowers, trimmers, chainsaws & more. Maintenance, tune-ups, diagnostics, and overhauls in southern Alberta.',
  ogImage: SMALL_ENGINE_SHARE_IMAGE,
  ogImageAlt: 'Small engine repair and outdoor power equipment in southern Alberta',
  twitterTitle: 'Small Engine Repair | Dandy Yard & Home Services',
  twitterDescription:
    'Mowers, snowblowers, golf carts, line trimmers, chainsaws & more—maintenance, diagnostics, tune-ups, and overhauls.',
}

function applyDocumentMeta(meta) {
  document.title = meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', meta.canonical)
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', meta.canonical)
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.ogTitle)
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute('content', meta.ogDescription)
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', meta.twitterTitle)
  document
    .querySelector('meta[name="twitter:description"]')
    ?.setAttribute('content', meta.twitterDescription)

  if (meta.ogImage) {
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', meta.ogImage)
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', meta.ogImage)
  }
  if (meta.ogImageAlt != null) {
    document.querySelector('meta[property="og:image:alt"]')?.setAttribute('content', meta.ogImageAlt)
  }
}

function snapshotSeoFromDocument() {
  return {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.getAttribute('content'),
    canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content'),
    ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content'),
    ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content'),
    ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content'),
    ogImageAlt: document.querySelector('meta[property="og:image:alt"]')?.getAttribute('content'),
    twitterImage: document.querySelector('meta[name="twitter:image"]')?.getAttribute('content'),
    twitterTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute('content'),
    twitterDescription: document
      .querySelector('meta[name="twitter:description"]')
      ?.getAttribute('content'),
  }
}

export function usePageMeta(meta) {
  useEffect(() => {
    const snapshot = snapshotSeoFromDocument()
    applyDocumentMeta(meta)
    return () => {
      document.title = snapshot.title
      const restore = (selector, attr, val) => {
        if (val == null) return
        document.querySelector(selector)?.setAttribute(attr, val)
      }
      restore('meta[name="description"]', 'content', snapshot.description)
      restore('link[rel="canonical"]', 'href', snapshot.canonical)
      restore('meta[property="og:url"]', 'content', snapshot.ogUrl)
      restore('meta[property="og:title"]', 'content', snapshot.ogTitle)
      restore('meta[property="og:description"]', 'content', snapshot.ogDescription)
      restore('meta[property="og:image"]', 'content', snapshot.ogImage)
      restore('meta[property="og:image:alt"]', 'content', snapshot.ogImageAlt)
      restore('meta[name="twitter:image"]', 'content', snapshot.twitterImage)
      restore('meta[name="twitter:title"]', 'content', snapshot.twitterTitle)
      restore('meta[name="twitter:description"]', 'content', snapshot.twitterDescription)
    }
  }, [meta])
}
