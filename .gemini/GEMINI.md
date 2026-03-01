## Gemini Added Memories
- The user wants me to explain, guide, and provide information, but NOT to write or change any code unless explicitly asked. The user wants to implement changes themselves for learning purposes.
- The user wants the hero title text to fade out one letter at a time as the user scrolls down and return one at a time when the user scrolls back up.
- The user is using `pnpm` for package management.

## Project Progress & Context

### **Completed (Feb 28, 2026):**
- **Form Validation:** Successfully migrated from Astro Actions to client-side **Zod validation** for Netlify Forms compatibility.
- **Form UX:** Fixed layout shifts by using `invisible`, `block`, and `min-h-4` on error spans.
- **Refactoring:** Implemented a DRY `FormField.astro` wrapper for form inputs.
- **SEO & Layout:** Enhanced `BaseHead.astro` with Open Graph/Twitter meta tags, configured `site` in `astro.config.mjs`, and added a `<main>` tag for accessibility.
- **Form Reliability:** Fixed a `POSTS` typo in the fetch script and ensured proper Netlify form registration with hidden inputs.

### **Current Issues (To be addressed):**
- **Hero Overlap:** Investigate the interaction between `h-[50vh]` and `mt-80` in `hero-section.astro`, which is causing content to overflow and overlap.
- **Responsive Spacing:** Evaluate the large `my-80` margin in `section.astro` for better scaling across screen sizes (e.g., using fluid spacing or smaller margins on mobile).

### **Next Steps:**
- Resolve Hero layout and Section spacing issues.
- Implement the "letter-by-letter" scroll fade effect for the hero title.
