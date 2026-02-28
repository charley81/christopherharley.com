## Gemini Added Memories
- The user wants me to explain, guide, and provide information, but NOT to write or change any code unless explicitly asked. The user wants to implement changes themselves for learning purposes.
- The user wants the hero title text to fade out one letter at a time as the user scrolls down and return one at a time when the user scrolls back up.
- The user is using `pnpm` for package management.
- **Progress (Feb 25, 2026):**
    - Transitioned from pure Astro Actions to **Netlify Forms** compatibility.
    - Fixed Hero section layout issues (invalid height unit and viewport fold visibility).
    - Resolved Git tracking issues by ignoring and untracking the `.netlify/` folder.
    - Prepared the strategy for **Client-side Zod validation** to replace browser default tooltips.
    - **Next Step:** Implement the `contactSchema.safeParse()` logic in the `contact-form.astro` script to inject custom error messages into field-level spans.