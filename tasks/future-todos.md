# Future Todos & Deferred Items

**Created:** December 30, 2025
**Last Updated:** December 30, 2025

---

## HIGH Priority

### Legal Pages Attorney Review
**Status:** Pending attorney consultation
**File:** `/tasks/legal-attorney-review.md`
**Action:** Schedule attorney review for terminology in legal pages (coaching → wellness support)

### MailerLite Integration
**Status:** ✅ COMPLETE (December 31, 2025)
**File:** `/tasks/mailerlite-integration.md`
**Implementation:** Option C (Netlify Function + API)
**Remaining:** User to set up automation in MailerLite dashboard for lead magnet delivery

---

## MEDIUM Priority

### GA4 Conversion Events Setup
**Status:** Not started
**Action:** Configure conversion events in GA4 Admin:
- Form submissions (contact, apply, newsletter)
- CTA clicks (apply buttons, portal links)
- Section scroll depth

### Google Search Console
**Status:** Not submitted
**Action:**
1. Verify website ownership
2. Submit sitemap.xml
3. Check for crawl errors

### Google Business Profile
**Status:** Not created
**Action:** Set up profile for Kentucky telehealth services

### Services Hub Page (Option B)
**Status:** Future enhancement
**Context:** On January 3, 2026, we renamed `/services/services.html` to `/services/index.html` so `/services/` now works as a direct URL. This was "Option A" (quick fix).
**Action (Option B):** Create a true Services Hub Page at `/services/index.html` that:
- Acts as a "choose your path" entry point
- Links to: Sessions, Packages/Programs, What is HTMA?
- Provides overview of the 3-tier service structure (Sessions, Packages, Programs)
- Move current packages/programs content to a new URL (e.g., `/services/packages.html`)
**Benefit:** Better UX for visitors who land on `/services/` - gives them a navigation overview instead of jumping directly into package details

### Pinterest Business Account Setup (User Task)
**Status:** Not started
**Action:** Alicia to complete:
1. Create Pinterest Business account
2. Claim website on Pinterest
3. Enable Rich Pins
4. Create pin graphics for blog posts
5. Start pinning content

### Email List Growth & Content Marketing Plan
**Status:** Not started
**Action:** Develop comprehensive strategy to grow email subscribers while maintaining deliverability and domain health.

**Channels to develop:**
- Website: Additional lead magnets (preconception guide, postpartum checklist, HTMA quiz)
- Website: Content upgrades within blog posts
- Social media: Instagram/Facebook lead magnet promotion
- Pinterest: Pin graphics linking to opt-in pages
- Video: YouTube/Reels content with CTA to lead magnets
- Podcast features: Guest appearances with listener offer
- Offline: QR codes on business cards, brochures, clinic materials

**Email health considerations:**
- Use double opt-in to maintain list quality
- Segment inactive subscribers for re-engagement campaigns
- Monitor bounce rates and clean list regularly
- Warm up sending gradually (don't blast full list immediately)
- Authenticate domain properly (SPF, DKIM, DMARC)
- Keep complaint rate below 0.1%

**Lead magnet ideas by journey stage:**
- Preconception: "Fertility Foundations Checklist" or "30-Day Preconception Prep Guide"
- Pregnancy: "Low-Tox Pregnancy Swaps" or "Nutrition Guide by Trimester"
- Postpartum: "Postpartum Recovery Roadmap" or "Hormone Rebalancing Guide"
- General: "Is HTMA Right For Me?" quiz

**Lead magnet access control options (when hosting on website):**

| Option | Security | Complexity | Notes |
|--------|----------|------------|-------|
| Email-only delivery | Medium | Low | MailerLite sends PDF link; not publicly discoverable but link can be shared |
| Time-limited signed URLs | High | Medium | Netlify Function generates expiring links (e.g., 24hr); shared links stop working |
| Email verification gate | High | Medium | Landing page checks if email exists in MailerLite before showing download |
| Single-use token system | Highest | Higher | Unique tokens in email URLs; Netlify Function validates before serving; tokens expire after use |

**Recommendation:** Start with email-only delivery (Option 1). Upgrade to signed URLs or verification gate if link sharing becomes an issue.

---

## LOW Priority / Optional Enhancements

### Form reCAPTCHA
**Status:** Deferred
**Notes:** Honeypot fields added instead. Add reCAPTCHA only if spam becomes an issue.

### Pillar Content Pages
**Status:** Deferred to Q1 2026
**Action:** Create comprehensive guide pages:
- Complete HTMA Guide (expand htma.html)
- PCOS Management Guide
- Preconception Planning Guide

### Additional FAQPage Schema
**Status:** Partially complete
**Notes:** Added to contact.html. Could add to:
- /services/ (has FAQ section)
- services/lab-review.html (has FAQ section)
- services/intentional-reset.html (has FAQ section)
- htma.html (has FAQ section)

### AIO Optimizations
**Status:** Deferred to Q1 2026
**Action:**
- Add "Key Takeaways" sections to blog posts
- Create more Q&A format content for AI citation
- Expand author credentials in Person schema

### Intention Foundations Course Integration
**Status:** Future
**Action:** When course launches:
1. Add waitlist form to MailerLite
2. Create landing page
3. Set up payment integration

---

## Completed Items (December 30, 2025)

- [x] Lab Review URL updated to main intake form
- [x] Honeypot spam protection added to all forms
- [x] Canonical tags added to all pages
- [x] FAQPage schema added to contact.html
- [x] Sitemap updated with current dates
- [x] Marketing opt-in added to contact form
- [x] BDScript font switched to subset version (302KB → 30KB)
- [x] Legal page footers updated with telehealth messaging
- [x] MailerLite integration checklist created

---

## Notes for Future Sessions

1. **Before any major content changes:** Check `/tasks/legal-attorney-review.md` for terminology guidelines
2. **When adding new pages:** Update sitemap.xml, add canonical tag, add GA4 tracking
3. **For new blog posts:** Check image aspect ratios, add internal links to services
4. **When integrating new services:** Update CSP headers in netlify.toml if needed

---

*This file tracks items that were identified during the December 30, 2025 comprehensive audit but deferred for future action.*
