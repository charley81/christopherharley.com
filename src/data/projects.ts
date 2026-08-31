import heroMk from '../images/mk-case-study/hero-image.png'
import mkImg1 from '../images/mk-case-study/image-1.png'
import mkImg2 from '../images/mk-case-study/image-2.png'
import mkImg3 from '../images/mk-case-study/image-3.png'
import mkImg4 from '../images/mk-case-study/image-4.png'

import heroWL from '../images/wl-case-study/hero-img.png'
import wlImg1 from '../images/wl-case-study/img1.png'
import wlImg2 from '../images/wl-case-study/img2.png'
import wlImg3 from '../images/wl-case-study/img3.png'
import wlImg4 from '../images/wl-case-study/img4.png'

import heroBS from '../images/bs-case-study/hero-img.png'
import bsImg1 from '../images/bs-case-study/img1.png'
import bsImg2 from '../images/bs-case-study/img2.png'
import bsImg3 from '../images/bs-case-study/img3.png'
import bsImg4 from '../images/bs-case-study/img4.png'

import heroME from '../images/me-case-study/hero-img.png'
import meImg1 from '../images/me-case-study/img1.png'
import meImg2 from '../images/me-case-study/img2.png'
import meImg3 from '../images/me-case-study/img3.png'
import meImg4 from '../images/me-case-study/img4.png'

import type { ImageMetadata } from 'astro'

export interface Project {
  title: string
  description: string
  tags: string[]
  imageUrl: ImageMetadata
  imageAlt: string
  slug: string
  caseStudy?: CaseStudyContent
}

export interface CaseStudyContent {
  subtitle: string
  projectUrl: string
  heroImage: ImageMetadata
  heroImageAlt: string
  industry: string
  category: string[]
  techStack: string[]
  liveLink: string
  introduction: {
    label: string
    heading: string
    body: string
  }
  design: {
    description: string
    images: Array<{ src: ImageMetadata; alt: string }>
  }
  development: {
    body: string[]
  }
  conclusion: {
    quote: string
    body: string
  }
}

export const projects: Project[] = [
  {
    title: 'Marsh & Ember',
    description:
      'An editorial restaurant website shaped by live-fire cooking, Lowcountry hospitality, and accessible guest journeys.',
    tags: ['Next.js', 'Sanity CMS', 'Accessibility'],
    imageUrl: heroME,
    imageAlt: 'Marsh & Ember restaurant website homepage',
    slug: '/case-study/marsh-and-ember',
    caseStudy: {
      subtitle:
        'is a fictional Charleston restaurant concept brought to life through an editorial website for menus, events, reservations, and private dining.',
      projectUrl: 'https://marshandember.netlify.app',
      heroImage: heroME,
      heroImageAlt:
        'Marsh & Ember desktop homepage featuring a live-fire hearth',
      industry: 'Food & Beverage / Hospitality',
      category: [
        'Web Design',
        'UX/UI',
        'Frontend Development',
        'CMS Architecture',
      ],
      techStack: [
        'Figma',
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Sanity CMS',
        'CSS',
        'Netlify',
        'Vitest',
        'Playwright',
      ],
      liveLink: 'https://marshandember.netlify.app',
      introduction: {
        label: 'Introduction',
        heading: 'The making of the new Marsh & Ember website',
        body: 'Marsh & Ember was created as a complete restaurant concept rather than for an existing client. The brief called for a credible Charleston dining brand with a distinct point of view: seasonal ingredients, wood-fired cooking, a strong sense of place, and hospitality that feels polished without becoming formal. The central challenge was to translate that atmosphere into a useful digital experience. Visitors needed clear paths to explore menus, plan a visit, learn the restaurant’s story, discover events, reserve standard dining, or begin a private dining inquiry. At the same time, restaurant information, menus, dietary markers, events, hours, and editorial imagery needed to remain manageable through a structured CMS instead of being scattered throughout the codebase. The project also had unusually high standards for a portfolio build. It needed to work from 320px through large desktop widths, support keyboard and assistive-technology use, account for loading and failure states, avoid layout shifts, and remain honest about its fictional transactions and customer data.',
      },
      design: {
        description:
          'The visual direction is warm, editorial, and contemporary. Large-format hospitality photography creates an immediate sense of fire, food, and place, while generous spacing gives the content a calm, premium rhythm. Deep navy anchors the interface; warm cream and parchment surfaces soften it; restrained ember accents provide emphasis without overwhelming the imagery. Typography balances character and clarity. Libre Baskerville gives headlines an expressive, restaurant-editorial voice, while Outfit keeps navigation, supporting copy, forms, and interface controls direct and readable. Desktop compositions use intentional asymmetry and wide image crops, then resolve into a clear linear reading order on mobile. The interface was organized around a focused set of reusable patterns: global navigation, action buttons, editorial split sections, menu previews, event states, accessible form fields, status messages, and a shared footer. This allowed eight public page types and their mobile counterparts to feel related without reducing every page to the same layout.',
        images: [
          {
            src: meImg1,
            alt: 'Marsh & Ember reservation preview disclosure dialog',
          },
          {
            src: meImg2,
            alt: 'Marsh & Ember fictional table reservation details dialog',
          },
          {
            src: meImg3,
            alt: 'Marsh & Ember desktop dinner menu preview',
          },
          {
            src: meImg4,
            alt: 'Marsh & Ember desktop event RSVP form',
          },
        ],
      },
      development: {
        body: [
          'The site was built with the Next.js App Router, React, and TypeScript. Server Components handle content-led pages, while Client Components are limited to interactions such as mobile navigation, reservation dialogs, accordions, and form previews. Responsive image art direction, declared media dimensions, deferred interactive code, and reusable page sections help control performance and layout stability.',
          'Sanity powers restaurant settings, operating hours, menus, menu sections, dishes, dietary markers, events, event facts, courses, announcements, and editorial imagery. Typed GROQ queries, generated types, content mappers, fixture fallbacks, Draft Mode, and Presentation overlays create a preview-friendly workflow while keeping published content separate from drafts.',
          'The public experience includes Home, Menus, Dinner, Visit, Our Story, Private Dining, Events, a reusable event-detail template, Privacy, and Accessibility pages. Reservation, private dining, and event RSVP experiences include meaningful validation, pending, error, completion, empty, closed, sold-out, cancelled, and past-event states. In the portfolio deployment, transactional interactions remain intentionally local and no-I/O, so no real booking, inquiry, or attendance confirmation is implied.',
          'The approved Figma source contained 16 desktop and mobile high-fidelity page frames plus eight production-state boards. Shared code components captured repeated behavior and visual rules without reproducing unnecessary Figma wrapper layers, while route-specific compositions preserved the intended editorial hierarchy.',
          'The desktop designs rely on asymmetry, generous negative space, and art-directed crops. Fluid breakpoints, mobile-specific image sources, controlled page gutters, and content-driven stacking preserved that character at tablet and mobile widths without horizontal overflow.',
          'Mobile navigation and reservation dialogs required focus trapping, Escape behavior, scroll locking, and focus restoration. Forms use visible labels, linked validation summaries, value preservation, live status messaging, duplicate-submission protection, and language that never mistakes a request for a confirmed booking.',
          'The connected Sanity workflow needed secure draft previews, exact CORS origins, a server-only read token, deterministic migration tooling, document validation, and typed content queries. The final setup supports visual editing while keeping unpublished content and credentials out of the public experience.',
        ],
      },
      conclusion: {
        quote: '“A website shaped by the same care as the dining experience”',
        body: 'Marsh & Ember became a cohesive digital restaurant experience: atmospheric enough to communicate the brand, structured enough to help visitors act, and maintainable enough to support changing menus, events, hours, and shared restaurant information. Because the project is fictional, its success is not represented with invented traffic or booking figures. Instead, the outcome was measured through implementation quality. Final handoff verification covered 10 public routes across five representative viewport widths with no page-level horizontal overflow or broken images. Six key routes earned Lighthouse scores of 100 for Accessibility, Best Practices, and SEO, with zero cumulative layout shift in the recorded local audits. Automated coverage also exercised route navigation, responsive behavior, keyboard focus, forms, reservation recovery, event availability, internal links, security headers, and WCAG A/AA checks. The result demonstrates how strategy, visual storytelling, structured content, and frontend engineering can work together to create a restaurant website that feels distinctive to guests and practical for the people who manage it.',
      },
    },
  },
  {
    title: 'BASSMENT',
    description:
      'A design-driven website and ticketing platform for an underground Drum & Bass venue in Manhattan.',
    tags: ['Next.js', 'Sanity CMS', 'Stripe'],
    imageUrl: heroBS,
    imageAlt: 'BASSMENT Website Project',
    slug: '/case-study/bassment',
    caseStudy: {
      subtitle:
        'is a high-fidelity, design-driven website for a fictional world-class Drum & Bass venue located four stories beneath 70 Pine Street, Manhattan — a full digital storefront with a fully integrated Stripe ticket checkout.',
      projectUrl: 'https://clubbassment.com',
      heroImage: heroBS,
      heroImageAlt: 'BASSMENT website hero mockup',
      industry: 'Music / Nightlife / Live Events',
      category: ['Web Design', 'UX/UI', 'Full-Stack Development'],
      techStack: [
        'Next.js 16',
        'TypeScript',
        'Tailwind CSS v4',
        'shadcn/ui',
        'Sanity CMS',
        'Framer Motion',
        'Stripe',
        'Netlify',
        'Vitest',
        'Google Maps API',
      ],
      liveLink: 'https://clubbassment.com',
      introduction: {
        label: 'Introduction',
        heading: 'The making of the new BASSMENT website',
        body: "The brief was ambitious: build the digital home for a venue that doesn't exist, but needs to feel like it does. BASSMENT isn't just a club — it's a 96,000-watt analog sound system buried under Wall Street, a haven for junglists and bass purists. The website had to capture that industrial, underground identity while staying fast, content-editable, and laser-focused on its primary goal: selling tickets. The constraints were real. Content needed to be fully manageable by non-technical venue staff through Sanity CMS. Any content change — a new event, an updated FAQ — had to appear on the live site instantly, not after a developer deploy. The design had to feel brutalist and authentic to the Drum & Bass scene while remaining accessible and responsive. And the entire codebase needed to stay lean enough for a single developer to own end-to-end.",
      },
      design: {
        description:
          "The visual language is unapologetically industrial: JetBrains Mono across every heading and body, a near-black background (#090102), and a single primary red (#D31F28) as the accent. There are no gradients, no soft shadows, no rounded corners (save for a deliberate 8px radius on cards and images — the one concession to modern UI softness). The design draws from brutalist architecture, club flyer typography, and the physicality of the Valve Sound System itself: graticule hairlines, red waveform motifs, and a monospace editorial rhythm that runs from the hero down to the footer. The brand's red accent is used sparingly — a thin border here, a hover state there, a sliding red bar on the resident DJ slider. Every element earns its place. The result is a site that feels as much like a physical space as the venue it represents: dark, loud, and intentional.",
        images: [
          {
            src: bsImg1,
            alt: 'BASSMENT event detail page with flyer artwork and ticket CTA',
          },
          {
            src: bsImg2,
            alt: 'BASSMENT ticket checkout with embedded Stripe payment element',
          },
          {
            src: bsImg3,
            alt: 'BASSMENT homepage with resident DJ slider and event flyer grid',
          },
          {
            src: bsImg4,
            alt: 'BASSMENT venue page with branded greyscale map and red marker',
          },
        ],
      },
      development: {
        body: [
          'The site is built on Next.js 16 with the App Router — data-fetching pages in server components, interactivity (DJ slider, tabs, contact form) in client components, all under TypeScript strict mode. Every piece of content lives in Sanity CMS: 17 events, 6 resident artists, FAQs, venue details, and a gallery, each modeled with validation rules. Publishing a change triggers a Netlify webhook → revalidation pipeline that purges the CDN and serves fresh pages within seconds — hardened with a content-signature guard and an automated purge token. Each event carries AI-generated poster artwork hosted directly in Sanity, uploaded through the embedded Studio and served on event cards, detail pages, and the home page featured panel. The signature details were built from scratch: a framer-motion DJ slider with preloaded image stacks and directional crossfades (plus full keyboard/ARIA/reduced-motion support), and a greyscale Google Maps API upgrade where a custom red SVG pin is the only color on the map. At the center of it all is the ticket flow. Stripe Payment Element handles the full purchase journey — payment intent, email attachment, webhook, and ticket persistence in Sanity with capacity tracking and auto-sold-out — with branded emails via Resend and a self-serve resend action for ticket recovery. Reliability is verified rather than assumed: a 90-test Vitest suite covers every pure-logic path, an integration script exercises the full purchase loop, and CI runs everything on every PR. Two production bugs made the site better: stale CDN pages fixed with a site-scoped purge token, and a black-band flash in the DJ slider rebuilt as a preloaded crossfade stack.',
        ],
      },
      conclusion: {
        quote: '"A Website as Good as the Sound System Itself"',
        body: 'BASSMENT is a portfolio piece that functions as a production website. The live-updates pipeline keeps content fresh without developer intervention. The brutalist design language is unique and brand-appropriate. The animation system is tasteful and performant — scroll-safe, reduced-motion-aware, and entirely GPU-accelerated. The test suite, CI, and integration script ensure every deploy is verified. The site now serves as both a showcase of the fictional venue and a demonstration of what a single developer can build with the modern Jamstack: headless CMS content, serverless functions, edge-cached pages, and a polished, design-driven frontend — all without sacrificing speed or maintainability.',
      },
    },
  },
  {
    title: 'Merge Konflict',
    description:
      'A full-featured booking and scheduling platform for a modern barbershop.',
    tags: ['Next.js', 'Sanity CMS'],
    imageUrl: heroMk,
    imageAlt: 'DJ Merge Konflict Website Project',
    slug: '/case-study/mergekonflict',
    caseStudy: {
      subtitle:
        'is a personal brand website for a electronic music DJ, featuring an upcoming shows calendar, a custom SoundCloud audio player, and a spam-free contact form.',
      projectUrl: 'https://mergekonflict.com',
      heroImage: heroMk,
      heroImageAlt: 'DJ Website hero mockup',
      industry: 'Music & Entertainment',
      category: ['UX/UI Design', 'Web Development', 'CMS Integration'],
      techStack: [
        'Next.js',
        'Sanity CMS',
        'Tailwind CSS',
        'Shadcn',
        'Soundcloud API',
      ],
      liveLink: 'https://mergekonflict.com',
      introduction: {
        label: 'Introduction',
        heading: 'The making of the new Merge Konflict website',
        body: 'For a working DJ, a website is the difference between being discoverable and being invisible. Merge Konflict had the music, the shows, and the fanbase — but no digital stage. This project was built using Spec-Driven Agentic Engineering, a methodology where the developer orchestrates a team of specialized AI agents through structured specification documents. Every line of production code was generated by AI, guided by specs, and reviewed before merge. The result: a live, polished site with perfect Lighthouse scores, deployed in under two weeks of part-time work.',
      },
      design: {
        description:
          "The design language draws from the raw energy of underground rave culture — dark, gritty, and uncompromising. A custom shadcn theme preset anchors the visual identity with deep mahogany backgrounds, a striking red accent for CTAs and links, and soft off-white surfaces for light mode. The artist name sits vertically on the hero's left edge, rotated -90 degrees — an unconventional layout that mirrors the genre's break from tradition. Every section below the hero gets generous whitespace, letting the content breathe on both mobile and desktop. A light/dark toggle gives fans control over their viewing experience.",
        images: [
          {
            src: mkImg1,
            alt: 'Barbershop booking interface',
          },
          {
            src: mkImg2,
            alt: 'Barbershop admin dashboard',
          },
          {
            src: mkImg3,
            alt: 'Barbershop mobile booking view',
          },
          {
            src: mkImg4,
            alt: 'Barbershop service details',
          },
        ],
      },
      development: {
        body: [
          "The site was built on Next.js 16 with React Server Components handling all data-fetching sections, reserving Client Components only where browser interactivity is required — the SoundCloud player, contact form, and theme toggle. Sanity CMS powers every piece of content through an embedded Studio at /studio, with three document types covering shows, site settings, and contact submissions; a webhook triggers on-demand ISR so published changes appear on the live site within seconds. The most stubborn challenge came from SoundCloud's 2025 API migration: the embedded player no longer accepted the new URN-based playlist identifiers, requiring a workaround that extracts the legacy numeric ID, stores it as a CMS field, and constructs the embed URL dynamically. A similar debugging effort resolved a production crash caused by a null image reference after adding a new schema field, and a field-name mismatch between the contact form's Server Action and client component was aligned to restore end-to-end submission flow.",
        ],
      },
      conclusion: {
        quote: '"A Website as Good as the Music"',
        body: 'The site launched with nearly perfect Lighthouse scores across all four categories — Performance, Accessibility, Best Practices, and SEO. The contact form is spam-free thanks to a multi-layered invisible defense (honeypots, timing analysis, and Upstash rate limiting). Merge Konflict now updates his own schedule, bio, and playlist through a simple Studio interface. The Spec-Driven Agentic Engineering methodology proved itself: a solo developer, zero lines of implementation code, and a team of specialized AI agents that handled everything from design extraction to production deployment.',
      },
    },
  },
  {
    title: 'Walnut Lawn',
    description:
      'A fast, CMS-driven lawn care website that converts neighbors into customers.',
    tags: ['Astro', 'Sanity CMS'],
    imageUrl: heroWL,
    imageAlt: 'Walnut Lawn Website Project',
    slug: '/case-study/walnut-lawn',
    caseStudy: {
      subtitle:
        'is a custom-built, high-performance website for a faith-based, family-owned lawn care business.',
      projectUrl: 'https://walnutlawn.net',
      heroImage: heroWL,
      heroImageAlt: 'Walnut Lawn hero mockup',
      industry: 'Home Services / Landscaping',
      category: ['Web Design', 'Web Development', 'CMS Integration'],
      techStack: ['Astro', 'Sanity CMS', 'Tailwind CSS', 'Netlify'],
      liveLink: 'https://walnutlawn.net',
      introduction: {
        label: 'Introduction',
        heading: 'The making of the new Walnut Lawn website',
        body: 'For a family-owned lawn care business, word-of-mouth and social media can only take you so far. Walnut Lawn had built a stellar reputation in their Walnut Creek neighborhood through reliable service and personal care, but they lacked a professional digital storefront to capture leads and showcase their work. Grant Jackson and his team needed more than just a pretty page — they needed a lead-generation machine that reflected their "Faith, Family, & Beautiful Lawns" motto. The project was built to give customers a seamless way to request quotes, land more jobs, and establish online credibility. Most importantly, Grant needed full autonomy to update services and testimonials himself without calling a developer every time. The result is a modern, fast, and easily-managed website that works as hard as the team does.',
      },
      design: {
        description:
          'The design language draws from the lush, natural beauty of a well-maintained outdoor space — earthy greens, warm neutrals, and clean, organic layouts. I built the entire visual identity from scratch around Grant\'s faith and family values, ensuring every element felt approachable yet highly professional. A minimalist approach contrasts with the inherently "messy" work of lawn care, giving the high-quality project photography room to breathe. Generous whitespace and clear typography guide potential customers effortlessly from the hero section down to the "Get Free Estimate" call-to-action. The mobile experience was prioritized from day one, since most homeowners search for lawn services on their phones while out and about.',
        images: [
          {
            src: wlImg1,
            alt: 'Walnut Lawn hero section with call-to-action',
          },
          {
            src: wlImg2,
            alt: 'Walnut Lawn services grid and feature cards',
          },
          {
            src: wlImg3,
            alt: 'Walnut Lawn mobile contact form view',
          },
          {
            src: wlImg4,
            alt: 'Walnut Lawn testimonial and project gallery section',
          },
        ],
      },
      development: {
        body: [
          "The site was built on Astro paired with Tailwind CSS to ensure near-instant page loads, with critical CSS inlined and zero client-side JavaScript shipped by default. Sanity CMS powers every piece of content through an embedded Studio, with three document types covering services, testimonials, and site settings; a webhook triggers on-demand rebuilds on Netlify so published changes appear on the live site within seconds. Netlify Forms handles all \"Get Free Estimate\" submissions, forwarding them directly to the team's work email without requiring a separate backend. The most stubborn challenge came from integrating Sanity CMS and configuring the build hooks to ensure seamless live updates in production — achieving zero-disruption deployments while avoiding stale data required meticulous configuration of Sanity's webhooks with Netlify's build triggers. A similar debugging effort resolved a production crash caused by a missing image reference in a new schema field, which was patched by adding proper fallback handling in the Astro components.",
        ],
      },
      conclusion: {
        quote: '"A Website as Good as the Lawn Care"',
        body: 'The site launched with near-perfect Lighthouse scores across Performance, Accessibility, Best Practices, and SEO — a major improvement from the initial poor metrics. Grant now has a professional digital asset that actively works for his business 24/7, generating leads and instilling confidence in potential customers before they ever pick up the phone. He loves that he can make updates to the site himself anytime he wants and has been getting significantly more business inquiries since the site went live. The project successfully transformed a social-media-only operation into a polished, lead-generating machine that truly represents the quality of their work.',
      },
    },
  },
]
