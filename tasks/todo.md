# Intention Holistic Health Website - Build Plan

## Project Summary
Rebuild the Intention Holistic Health website (currently on Kajabi) to a custom HTML5/CSS3/JavaScript solution with Netlify hosting and a markdown-based blog system.

---

## Extracted Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Warm Cream | #f8f2ed | Primary background, sections |
| Light Cream | #fbfaf9 | Alternate backgrounds |
| Sage Green | #969b8f | Primary CTA buttons |
| Dusty Rose | #d2bfb3 | Secondary buttons, accents |
| Neutral Taupe | #cdcfc0 | Borders, subtle accents |
| Light Gray | #ece9e7 | Card backgrounds |
| Charcoal | #2d3031 | Primary text, headings |
| Medium Gray | #595959 | Secondary text |
| White | #ffffff | Base background |

### Typography
- Sans-serif font family (clean, modern)
- Large hero headings with drop caps
- Uppercase for section labels
- Body text: 16px base

### Layout
- Max-width container: 1260px
- Mobile padding: 10px
- Desktop padding: 35-40px
- Responsive breakpoints: 320px, 768px, 1024px

---

## Extracted Content Summary

### Navigation
- Home, About, Blog
- HTMA + Consulting Services
- Lab Review Service
- Contact
- Supplements (external: fullscript.com)
- Patient Portal (external: practicebetter.io)

### Homepage Sections
1. Hero: "HI! I'm ALICIA... nurse practitioner | wellness mentor | mom"
2. Introduction with founder photo
3. "Who I Help" section
4. Three service cards
5. "Is This You?" section
6. The Intention Process (3 phases)
7. Blog preview cards
8. Newsletter signup
9. Footer with legal links

### Services
1. **Intention Mineral Insight Package** - $398 (HTMA + consultation)
2. **Intention Signature Mentorship** - 6 or 12-month comprehensive program
3. **Functional Lab Review** - $298 (40-min review session)
4. **Intention Foundations** - Coming soon (self-paced course)

### Blog Categories
- All, Breakfast ideas, Foundations, Grain-free, HTMA, PCOS-friendly, Recipe, Preconception support

### External Links
- Practice Better: https://my.practicebetter.io/#/signin
- Fullscript: https://us.fullscript.com/welcome/intentionholistichealth
- Instagram: @intentionholistichealth
- Contact email: alicia@intentionholistichealth.com

### Exit-Intent Popup (Lead Magnet)
- **Headline**: "GET MY FREE GIFT TO YOU!"
- **Subheading**: "Here to start creating sustainable, intentional change? Grab the Holistic Habits Checklist as a First step!"
- **Freebie**: Holistic Habits Checklist (PDF download)
- **Form**: Email capture with Subscribe button
- **Trigger**: Exit-intent (mouse leaves viewport)
- **Design**: Two-column (image left, form right), dusty rose button (#d2bfb3)

### Legal Content Status
- [x] Terms & Conditions - READY (17 sections, comprehensive)
- [x] Privacy Policy - READY (11 sections, HIPAA-aware)
- [x] Medical Disclaimer - READY (extracted from site)

---

## Phase 1: Foundation Setup

- [ ] Create complete directory structure
- [ ] Create netlify.toml configuration
- [ ] Create CSS variables file with extracted design tokens
- [ ] Create base reset/normalize styles
- [ ] Create responsive grid utilities

---

## Phase 2: Core Components

- [ ] Build reusable button styles (primary sage, secondary dusty rose)
- [ ] Build card component styles
- [ ] Build form input styles
- [ ] Build navigation component (desktop + mobile hamburger)
- [ ] Build footer component
- [ ] Build exit-intent popup modal component
- [ ] Create main.js with mobile menu toggle + popup logic

---

## Phase 3: Homepage (index.html)

- [ ] HTML boilerplate with SEO meta tags
- [ ] Navigation header
- [ ] Hero section ("HI! I'm ALICIA...")
- [ ] Introduction section with photo placeholder
- [ ] "Who I Help" section
- [ ] Three service cards (Consulting, Lab Review, HTMA)
- [ ] "Is This You?" section
- [ ] "The Intention Process" three-phase section
- [ ] About preview section
- [ ] Blog preview section (3 latest posts)
- [ ] Newsletter signup form (Netlify Forms)
- [ ] Footer with legal links, social icons, disclaimer

---

## Phase 4: Service Pages

### 4.1 HTMA + Consulting (services/htma-consulting.html)
- [ ] Page structure with SEO
- [ ] Hero/intro section
- [ ] Intention Mineral Insight Package details ($398)
- [ ] Intention Signature Mentorship details (6/12 month)
- [ ] Intention Foundations (coming soon/waitlist)
- [ ] "What's Included" sections
- [ ] FAQ section
- [ ] CTA to apply/book

### 4.2 Lab Review (services/lab-review.html)
- [ ] Page structure with SEO
- [ ] Hero/intro section
- [ ] Service description ($298)
- [ ] "Who It's For" section
- [ ] "What's Included" (5 components)
- [ ] Process explanation
- [ ] Disclaimers
- [ ] CTA to apply/book

---

## Phase 5: Supporting Pages

### 5.1 About Page (about.html)
- [ ] Page structure with SEO
- [ ] Hero with Alicia's photo
- [ ] Professional background section
- [ ] Personal story (grandfather, nursing journey)
- [ ] Philosophy & approach
- [ ] Personal details (family, location, interests)
- [ ] Credentials section
- [ ] CTA to work together

### 5.2 Contact Page (contact.html)
- [ ] Page structure with SEO
- [ ] "Reach Out And Say Hey!" heading
- [ ] Two-column layout (text + form)
- [ ] Instagram contact mention
- [ ] Contact form (Netlify Forms): name, email, message
- [ ] Submit button styling

---

## Phase 6: Blog System

### 6.1 Infrastructure
- [ ] Create blog/index.html (listing page)
- [ ] Create blog.css for blog-specific styles
- [ ] Create blog.js for markdown parsing & rendering
- [ ] Set up blog/posts/ directory
- [ ] Implement front matter parsing (title, date, author, excerpt, image)

### 6.2 Blog Listing Page
- [ ] Two-column layout (posts + sidebar)
- [ ] Post cards: image, title, excerpt, "Continue Reading"
- [ ] Category sidebar (All, Breakfast ideas, Foundations, etc.)
- [ ] Reverse chronological ordering

### 6.3 Blog Post Template
- [ ] Clean reading layout
- [ ] Author and date display
- [ ] "Back to Blog" navigation
- [ ] Styled markdown content (headings, lists, images, links)

### 6.4 Sample Content
- [ ] Create 2-3 sample blog posts matching existing content

---

## Phase 7: Legal Pages

### 7.1 Medical Disclaimer (legal/disclaimer.html)
- [ ] Full disclaimer content (7 sections)
- [ ] Sections: Not Medical Advice, Geographic Limitation, Health Coaching, Functional Labs, Emergency Services, Telehealth Risks, No Guarantees
- [ ] Contact email: alicia@intentionholistichealth.com

### 7.2 Terms & Conditions (legal/terms.html)
- [ ] Full terms content (17 sections - CONTENT READY)
- [ ] Company info, Nature of Services, No Medical Advice, Telehealth Policy
- [ ] HIPAA & Privacy, Payment/Refunds, Intellectual Property
- [ ] Limitation of Liability, Governing Law, etc.

### 7.3 Privacy Policy (legal/privacy.html)
- [ ] Full privacy content (11 sections - CONTENT READY)
- [ ] Information collection (Personal, Usage, Cookies, PHI)
- [ ] How we use info, Disclosure, Data Security
- [ ] Rights (clinical patients vs general users), Governing Law

---

## Phase 8: Polish & Optimization

### 8.1 Responsive Testing
- [ ] Test all pages at 320px (mobile)
- [ ] Test all pages at 768px (tablet)
- [ ] Test all pages at 1024px+ (desktop)
- [ ] Fix any layout/overflow issues

### 8.2 SEO Implementation
- [ ] Unique title tags per page
- [ ] Meta descriptions (155 chars max)
- [ ] Open Graph tags for social sharing
- [ ] Alt text for all images
- [ ] Proper heading hierarchy

### 8.3 Accessibility
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation support
- [ ] Color contrast verification
- [ ] Skip-to-content link
- [ ] Form label associations

### 8.4 Performance
- [ ] Image lazy loading
- [ ] Minified CSS/JS (production ready)
- [ ] Semantic HTML5 structure

---

## Phase 9: Final Testing & Delivery

### 9.1 Functionality Testing
- [ ] All navigation links work
- [ ] All external links work (Practice Better, Fullscript, Instagram)
- [ ] Contact form submits via Netlify
- [ ] Newsletter form works
- [ ] Mobile menu opens/closes
- [ ] Blog posts render correctly

### 9.2 Quality Checklist
- [ ] Visual design matches original 95%+
- [ ] All pages mobile responsive
- [ ] No console errors
- [ ] Fast load time (<3 seconds)
- [ ] Ready for GitHub push
- [ ] Ready for Netlify deployment

### 9.3 Documentation
- [ ] Update README.md with setup/deployment instructions
- [ ] Verify QUICKSTART_GUIDE.md accuracy
- [ ] Code comments for maintainability

---

## Review Section
*To be completed after implementation*

---

## Notes

### Image Strategy
- Use placeholder images initially
- Structure folders for easy replacement:
  - /images/hero/
  - /images/services/
  - /images/about/
  - /images/blog/

### Blog Workflow for Owner
When adding a post, Claude Code should:
1. Create file: `blog/posts/YYYY-MM-DD-slug.md`
2. Add front matter (title, date, author, excerpt, image)
3. Format content as markdown
4. Confirm success and prompt to commit/push

### Kentucky Residents Disclaimer
Must display prominently: "Services for Kentucky Residents Only"

### External Integrations
- Practice Better (patient portal): https://my.practicebetter.io/#/signin
- Fullscript (supplements): https://us.fullscript.com/welcome/intentionholistichealth
