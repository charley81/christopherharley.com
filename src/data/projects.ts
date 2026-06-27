export interface Project {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  imageAlt: string
  slug: string
  caseStudy?: CaseStudyContent
}

export interface CaseStudyContent {
  subtitle: string
  projectUrl: string
  heroImage: string
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
    images: Array<{ src: string; alt: string }>
  }
  development: {
    body: string
  }
  conclusion: {
    quote: string
    body: string
  }
}

function cs(
  overrides: Partial<CaseStudyContent> & {
    title: string
    subtitle: string
    projectUrl: string
    heroImage: string
    heroImageAlt: string
    industry: string
    category: string[]
    techStack: string[]
    liveLink: string
    introHeading: string
    introBody: string
    designDescription: string
    designImages: Array<{ src: string; alt: string }>
    devBody: string
    conclusionQuote: string
    conclusionBody: string
  },
): CaseStudyContent {
  return {
    subtitle: overrides.subtitle,
    projectUrl: overrides.projectUrl,
    heroImage: overrides.heroImage,
    heroImageAlt: overrides.heroImageAlt,
    industry: overrides.industry,
    category: overrides.category,
    techStack: overrides.techStack,
    liveLink: overrides.liveLink,
    introduction: {
      label: overrides.introduction?.label ?? 'Introduction',
      heading: overrides.introHeading,
      body: overrides.introBody,
    },
    design: {
      description: overrides.designDescription,
      images: overrides.designImages,
    },
    development: {
      body: overrides.devBody,
    },
    conclusion: {
      quote: overrides.conclusionQuote,
      body: overrides.conclusionBody,
    },
  }
}

const placeholderImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAQag4A1S5hxAnguBlYsHwZQjvT4strv1FTz-tmlQP_-z-K8eLA-pr-GO1_1qSd1QDDUb7lIZxqG1aTRqG7BWum8Yeap3rV-y51z_Q10oY1AzY1YE9Vl0IWLHdomE1RlnrEIIWMU0SOE95Rr_YZvPfrnEwf3GUnNISBEGPBMwh_npQLfYm7zO0p9WWyc_vUYdAG82Cq6K15TFJCwVctPlKIYrgskxwEL-V_U3q21tQqOdQZlmjO5OcU-qm0Q2XI2s3_nZdy8NWaflQ'

const heroRestaurant =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD0uXTYMse2ZrRFrvNgZAMe1Kj1IhsBVWS2cHKuxa2z77_-xJ-Ty4YRSBVHKx7EeYCZ-k7RkOzvmOToXcFNR_G15JuifOBMdi3-xcMCBuvAjDcqRHmmXLB4C9e57dhRIqGqe-We57UP7XPAnT1BS-JsSwV7IZeCStZm2qZB2dzlyYJ0b9vhVzzi9uLb98gHDhqtF0LvIfzIsfMHvpCpySQFvKzchFY72loAZUsOxtj68OMCVw8Ea6wzhFu8KFdseymPFGGDX4x0K92sSQ'

const designImage1 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuALVU_4Lz1gF_jQsUPDVoH3jgQBSBr9uJyydJ_OvQ8Po1-JlDuELfBbet1o5H5l3oLC9ts3kr1lDdcd1JbTkyr5licqC4qi8X5xaqUyE23H0xMbF9oyNycbdc2leB715KND6Ahh38nJTg1FU0AJXLGNUu74j_cw1dG7aAVw-tJLbFErlg5j91saz7VDvjDX_L8p3Hq_WdGjQEjmp1Jz9hZfApM7e9m9hF4bO4_NSaBHnHV_wQA-82D0Yrynrd9rzMH7Cf5B2IXRzMNQaA'
const designImage2 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBbPw--q0a6sVK2wZNk01QkE9SKpuatlgfzwe2COj-xJc94uV1pAo9ZvxJJPYnLyOUmq1Os5qBryzyNkZYG2_aXuWK5WKnQ8o42Uc82gaijWjPZ9TZDeY0ypK8hQHcma31AOTmVp961uu1zsquy7aQyoNhZNC7rRrLfKpDpbVfSIc7JvXCPMNMeZ-Qky5ZgarCeJlV1GqjHxK_5kzmOULXIxGbqZx3msFHLJA0laBMUN_X00c9M5vNjgatiDlS3bDr6WMSBMhxXrcJZkw'
const designImage3 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDkz-hTYCcuH6HxslGnhyldlEJsfkuGPO5ekzEiJtVydfWfs1x26QYh424xhRqjgGvdNQbBpbcPoN1YHj4EUOGw9wZA1djBhyGMCeEi3pac89Ma3VaZ4bvFASfsXuX41Cm0SdL3fV_E8OGImAc7_-NYDMx3D6ONHcMNYI1Os-CF0k91LuGxPoR3jTeCnDtVMQXbJLJuaTkM-50BWZI5UyT0UkiTfoIVWH1Cg8NDAjh3TaHVVxNEMICQr6Vil7U35r1v3umDgnTJYbURSQ'
const designImage4 =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAEMU7p4oBcQd0WZnVmPBXinvndMnvQE5Wuviee4DC4c2KBluBHlXyBlSOV8Mlx9T9JWCNqcidgqCbSJu6carFmMPjmt4xHZyBFGrfyJ7uAwY8wO-Gz--trwo19uxDYkf0ffdOr0J_6CtlW0Jn9AE4RHghS-0jhM0AaPIhMLZsb_1ZpkOyK9Ry1zgQWdEZk7ogKghpDk-1jyjlsSbCy-AVgYKfgrTBoZZRIV0ZesQDQ5RGvYpBu3HLJvU5s_b693bS4Gx3zAb1YFAaRUQ'

export const projects: Project[] = [
  {
    title: 'Barbershop Platform',
    description:
      'A full-featured booking and scheduling platform for a modern barbershop.',
    tags: ['React', 'Tailwind', 'Next.js'],
    imageUrl: placeholderImage,
    imageAlt: 'Barbershop Website Project',
    slug: '/case-study/barbershop-platform',
    caseStudy: {
      subtitle:
        'is a modern booking and scheduling platform built for a busy barbershop, featuring real-time availability and client management.',
      projectUrl: 'https://barbershop.example.com',
      heroImage: placeholderImage,
      heroImageAlt: 'Barbershop Platform hero mockup',
      industry: 'Personal Services',
      category: ['UX/UI Design', 'Web Development', 'Booking System'],
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'Supabase'],
      liveLink: 'https://barbershop.example.com',
      introduction: {
        label: 'Introduction',
        heading: 'Streamlining the Shop, One Booking at a Time',
        body: 'The barbershop was running on phone calls and sticky notes. Appointments were double-booked, walk-ins piled up, and the owner was spending hours managing the schedule. We built a full-featured booking platform that lets clients check real-time availability, book their favorite barber, and receive automated reminders — cutting no-shows by 60% and freeing the staff to focus on cuts, not calendars.',
      },
      design: {
        description:
          "The design blends a warm, masculine palette of charcoal, brass, and cream with bold typography to reflect the shop's craft-focused identity. The interface prioritizes speed — every booking flow takes three taps or fewer. Large hero imagery of fresh fades and hot towel treatments sets the tone, while the admin dashboard provides a clean at-a-glance view of the day's appointments.",
        images: [
          { src: designImage1, alt: 'Barbershop booking interface' },
          { src: designImage2, alt: 'Barbershop admin dashboard' },
          { src: designImage3, alt: 'Barbershop mobile booking view' },
          { src: designImage4, alt: 'Barbershop service details' },
        ],
      },
      development: {
        body: "Built with Next.js for fast server-rendered pages and Supabase for real-time database updates — when a client books, the barbershop dashboard updates instantly. The booking engine uses a custom time-slot algorithm that respects each barber's working hours, break times, and service durations. Automated SMS reminders via Twilio reduced no-shows by 60% in the first month.",
      },
      conclusion: {
        quote: '"From Sticky Notes to Seamless Scheduling"',
        body: 'The platform handles over 200 bookings per week with zero double-bookings. Client satisfaction scores improved by 35%, and the shop owner now reclaims 10+ hours per week previously spent on schedule management. The mobile-first design also drove a 45% increase in online bookings from repeat clients.',
      },
    },
  },
  {
    title: 'Church Community',
    description:
      'A community-driven website for a local church with event management.',
    tags: ['React', 'Tailwind', 'Astro'],
    imageUrl: placeholderImage,
    imageAlt: 'Church Website Project',
    slug: '/case-study/church-community',
    caseStudy: {
      subtitle:
        'is a welcoming digital home for a growing congregation, with event management, sermon archives, and community connection.',
      projectUrl: 'https://church.example.com',
      heroImage: placeholderImage,
      heroImageAlt: 'Church Community website hero mockup',
      industry: 'Religious & Community',
      category: ['UX/UI Design', 'Web Development', 'CMS Implementation'],
      techStack: ['Astro', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
      liveLink: 'https://church.example.com',
      introduction: {
        label: 'Introduction',
        heading: 'Building Community Beyond the Sunday Service',
        body: "The church needed more than a bulletin board — they needed a digital gathering space. With a growing young congregation, the old static site couldn't keep up with event registrations, sermon uploads, or small group coordination. We designed a warm, accessible platform where members can find upcoming events, listen to past sermons, request prayer, and connect with community groups — all managed through an intuitive CMS that the church staff can update themselves.",
      },
      design: {
        description:
          'A calming, light-filled design using warm neutrals, soft blues, and generous whitespace evokes a sense of peace and welcome. The typography pairs a serif headline for warmth with a clean sans-serif body for readability. Large cards organize events and sermons visually, while a prominent prayer request button ensures the spiritual mission stays front and center.',
        images: [
          { src: designImage1, alt: 'Church website homepage' },
          { src: designImage2, alt: 'Church event listing page' },
          { src: designImage3, alt: 'Sermon archive view' },
          { src: designImage4, alt: 'Small group directory' },
        ],
      },
      development: {
        body: "Astro delivered near-instant page loads across all devices, critical for a congregation accessing the site on mobile after services. Sanity CMS empowers non-technical staff to publish sermons, update events, and manage small group listings without developer involvement. The sermon audio player uses edge-streaming for instant playback, and event registrations feed directly into the church's existing planning tools via webhooks.",
      },
      conclusion: {
        quote: '"A Digital Welcome Mat for Every Visitor"',
        body: 'Event attendance grew 50% in the first quarter as members discovered activities through the site. Sermon downloads increased 3x, and 40% of new visitors reported finding the church through search. The CMS autonomy allowed the church to publish 50+ events in the first month without a single developer ticket.',
      },
    },
  },
  {
    title: 'Lawn Care Pro',
    description: 'A professional services website for a lawn care business.',
    tags: ['React', 'Tailwind', 'Next.js'],
    imageUrl: placeholderImage,
    imageAlt: 'Lawn Care Website Project',
    slug: '/case-study/lawn-care-pro',
    caseStudy: {
      subtitle:
        'is a lead-generation powerhouse for a lawn care company, featuring instant quoting and seasonal service scheduling.',
      projectUrl: 'https://lawncare.example.com',
      heroImage: placeholderImage,
      heroImageAlt: 'Lawn Care Pro website hero mockup',
      industry: 'Home Services',
      category: ['UX/UI Design', 'Web Development', 'Lead Generation'],
      techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Google Maps API'],
      liveLink: 'https://lawncare.example.com',
      introduction: {
        label: 'Introduction',
        heading: 'Turning Curb Appeal into Click-to-Book',
        body: 'A family-run lawn care business was relying on word-of-mouth and a decade-old Facebook page. Competing against national chains with polished websites meant losing potential customers before they even picked up the phone. We built a lead-generation engine that lets homeowners enter their address, get an instant quote based on lot size, and book a recurring service plan — all in under 60 seconds.',
      },
      design: {
        description:
          'A fresh, outdoor-inspired palette of deep green, warm earth tones, and sky blue conveys reliability and growth. Before-and-after photo sliders dominate the hero to immediately communicate quality. The instant quote calculator is the centerpiece — a simple, highly visual tool that builds trust through transparency. Service tiers are laid out in clear comparison cards.',
        images: [
          { src: designImage1, alt: 'Lawn Care Pro homepage' },
          { src: designImage2, alt: 'Instant quote calculator' },
          { src: designImage3, alt: 'Service plan comparison' },
          { src: designImage4, alt: 'Before and after gallery' },
        ],
      },
      development: {
        body: "The instant quote feature uses the Google Maps API to calculate lot size from the customer's address, then computes a price based on property acreage, service frequency, and optional add-ons. Next.js serverless functions handle Stripe payment processing for recurring subscriptions. The booking system integrates with the owner's existing calendar via Calendly API, eliminating double-entry.",
      },
      conclusion: {
        quote: '"From Facebook to First Page on Google"',
        body: 'Within three months, the site generated 150+ qualified leads, with the instant quote tool achieving a 12% conversion rate. The business moved from the second page of local search results to the top 3 positions for "lawn care [city]." Online bookings now account for 70% of new customers, and the owner has hired two additional crews to keep up with demand.',
      },
    },
  },
]
