# Terminology Replacement Guide - For Alicia's Review

**Date:** December 25, 2025
**Purpose:** Review all instances of prohibited words and approve replacements before implementation

---

## Quick Reference: Prohibited Terms

| Term | Suggested Replacement |
|------|----------------------|
| coach / coaching | practitioner, provider, support |
| mentor / mentorship | program, journey, support |
| consult / consulting | support, services, guidance |

---

## SECTION 1: "COACH / COACHING" (User-Facing Content)

### Blog Posts (in js/blog.js)

| Location | Current Text | Suggested Replacement |
|----------|--------------|----------------------|
| Gut Health & PCOS post | "As a nurse practitioner and **health coach**, I've witnessed..." | "As a nurse practitioner and **wellness practitioner**, I've witnessed..." |
| Gut Health & PCOS post | "reach out for personalized one-on-one **coaching** at Intention Holistic Health" | "reach out for personalized one-on-one **support** at Intention Holistic Health" |

### Service Pages

| File | Current Text | Suggested Replacement |
|------|--------------|----------------------|
| `services/htma-consulting.html` (meta description) | "HTMA testing, 1:1 **coaching**, and low-tox living guidance" | "HTMA testing, 1:1 **support**, and low-tox living guidance" |
| `services/htma-consulting.html` (package feature) | "Ongoing 1:1 **coaching** sessions" | "Ongoing 1:1 **support** sessions" |
| `services/htma-consulting.html` (FAQ) | "non-clinical **coaching** and educational programs" | "non-clinical **wellness support** and educational programs" |

### Other Pages

| File | Current Text | Suggested Replacement |
|------|--------------|----------------------|
| `contact.html` (FAQ) | "non-clinical **coaching** and educational services" | "non-clinical **wellness support** and educational services" |
| `apply.html` (note) | "Non-clinical **coaching** is available everywhere" | "Non-clinical **wellness support** is available everywhere" |

---

## SECTION 2: "MENTOR / MENTORSHIP" (User-Facing Content)

### Homepage & About Page (Title: "Wellness Practitioner" CONFIRMED)

| File | Current Text | Replacement |
|------|--------------|-------------|
| `index.html` (intro) | "wellness **mentor**, and mom" | "wellness **practitioner**, and mom" ✓ |
| `about.html` (hero subtitle) | "Nurse Practitioner \| Wellness **Mentor** \| Mom" | "Nurse Practitioner \| Wellness **Practitioner** \| Mom" ✓ |
| `about.html` (meta description) | "holistic wellness **mentor** helping women" | "holistic wellness **practitioner** helping women" ✓ |
| `about.html` (meta keywords) | "wellness **mentor**" | "wellness **practitioner**" ✓ |
| `about.html` (OG description) | "holistic wellness **mentor**" | "holistic wellness **practitioner**" ✓ |
| `blog/post.html` (author bio) | "holistic wellness **mentor** helping women" | "holistic wellness **practitioner** helping women" ✓ |

### Blog Posts (in js/blog.js)

| Location | Current Text | Suggested Replacement |
|----------|--------------|----------------------|
| Body First Home post | "the Mama **Mentorship** and Lab Review Services" | "the **Wellness Programs** and Lab Review Services" |

### Application Form

| File | Current Text | Suggested Replacement |
|------|--------------|----------------------|
| `apply.html` (dropdown option) | "**Mentorship** with HTMA + Labs" | "**Full Program** with HTMA + Labs" |
| `apply.html` (HTMA info) | "the **Intention Signature Mentorship**" | "the **Intention Signature Program**" |

### HTMA Page

| File | Current Text | Suggested Replacement |
|------|--------------|----------------------|
| `htma.html` (CTA section) | "within the **Intention Signature Mentorship**" | "within the **Intention Signature Program**" |

### Lab Review Page

| File | Current Text | Suggested Replacement |
|------|--------------|----------------------|
| `services/lab-review.html` (FAQ) | "My **mentorship** programs focus on women's health" | "My **wellness programs** focus on women's health" |
| `services/lab-review.html` (FAQ) | "the Signature **Mentorship** program" | "the **Signature Program**" |

### Drafts (for reference)

| File | Current Text | Replacement |
|------|--------------|-------------|
| `drafts/about-v2.html` (meta) | "wellness **mentor** passionate about" | "wellness **practitioner** passionate about" ✓ |
| `drafts/about-v2.html` (hero alt) | "nurse practitioner, mom and wellness **mentor**" | "nurse practitioner, mom and wellness **practitioner**" ✓ |

---

## SECTION 3: "CONSULT / CONSULTING" (User-Facing Content)

### Navigation (Affects 15+ pages)

| Element | Current Text | Selected Replacement |
|---------|--------------|----------------------|
| Desktop nav dropdown | "HTMA + **Consulting**" | "**Services**" or "**Ongoing Services**" ← TBD |
| Mobile nav | "HTMA + **Consulting**" | (same as above) |
| Footer links | Services link text | (will update to match new filename) |

**Pages with navigation to update:**
- index.html, about.html, contact.html, apply.html, htma.html
- blog/index.html, blog/post.html, blog/post-superior.html
- services/htma-consulting.html, services/lab-review.html, services/intentional-reset.html
- legal/terms.html, legal/privacy.html, legal/disclaimer.html

### Homepage

| File | Current Text | Suggested Replacement |
|------|--------------|----------------------|
| `index.html` (service card alt) | "1:1 Wellness **Consulting**" | "1:1 Wellness **Support**" |
| `index.html` (service card title) | "1:1 Wellness **Consulting**" | "1:1 Wellness **Support**" |

### Contact Page

| File | Current Text | Suggested Replacement |
|------|--------------|----------------------|
| `contact.html` (meta description) | "wellness **consulting**, HTMA testing" | "wellness **support**, HTMA testing" |
| `contact.html` (meta keywords) | "wellness **consulting**" | "wellness **support**" |
| `contact.html` (OG description) | "wellness **consulting** and holistic health" | "wellness **support** and holistic health" |

### Apply Page

| File | Current Text | Suggested Replacement |
|------|--------------|----------------------|
| `apply.html` (meta keywords) | "wellness **consulting**" | "wellness **support**" |

### HTMA Consulting Page

| File | Current Text | Suggested Replacement |
|------|--------------|----------------------|
| `services/htma-consulting.html` (meta keywords) | "wellness **consulting**" | "wellness **support**" |
| `services/htma-consulting.html` (OG title) | "HTMA + **Consulting** Services" | "HTMA + **Wellness** Services" |
| `services/htma-consulting.html` (page title) | "HTMA + **Consulting** Services" | "HTMA + **Wellness** Services" |
| `services/htma-consulting.html` (solution section) | "holistic wellness **consultant**" | "holistic wellness **practitioner**" ✓ |

---

## SECTION 4: LEGAL PAGES (Requires Legal Review)

**Note:** These may need attorney review before changing as they define service categories.

### legal/terms.html

| Current Text | Notes |
|--------------|-------|
| "Non-Clinical **Coaching** & Educational Services" | Section heading (2.2) |
| "Health **coaching**" | List item under services |
| "Results from **coaching** or wellness recommendations" | Liability section |
| "Wellness **consultations**" | List item under services |

### legal/privacy.html

| Current Text | Notes |
|--------------|-------|
| "Personal Information (Website or **Coaching** Services)" | Section heading (2.1) |
| "non-clinical **coaching** services" | Body text (2 occurrences) |
| "To Provide **Coaching** or Website Services" | Section heading (3.1) |
| "Provide non-clinical **coaching** services" | List item |

### legal/disclaimer.html

| Current Text | Notes |
|--------------|-------|
| "Health **Coaching** Distinction" | Section heading (Section 3) |
| "**coaching** offerings provided through" | Body text |

---

## SECTION 5: FILE RENAME (CONFIRMED)

**Decision:** File WILL be renamed. Navigation text will use "Services" or "Ongoing Services".

**Current:** `/services/htma-consulting.html`
**New name options:**
- `/services/ongoing-services.html`
- `/services/services.html`
- Other: _______________

**Implementation steps when ready:**
1. Rename the file
2. Update links in 15+ HTML files
3. Set up 301 redirect in `netlify.toml` from old URL
4. Update Google Search Console after deploy

---

## SECTION 6: INTERNAL DOCUMENTATION (Lower Priority)

These are in internal files (tasks, session notes, drafts) and don't affect users:

- `tasks/todo.md` - References to package names
- `drafts/services-design-notes.md` - Design documentation
- `session-notes/*.md` - Historical documentation
- `CLAUDE.md` - Developer instructions

**Recommendation:** Update these after user-facing changes are complete.

---

## IMPLEMENTATION STATUS: COMPLETED

**Date Implemented:** December 25, 2025

### 1. Replacement for "coach/coaching"
- [x] **support** - IMPLEMENTED

### 2. Replacement for "mentor/mentorship"
- [x] **program** (e.g., "Intention Signature Program") - IMPLEMENTED
- [x] **Intentional Mama Programs** for blog reference - IMPLEMENTED

### 3. Replacement for "consulting" in navigation
- [x] **Services** - IMPLEMENTED
- File renamed to `/services/services.html`
- 301 redirect configured in netlify.toml

### 4. Your title (replacing "Wellness Mentor")
- [x] **Wellness Practitioner** - IMPLEMENTED

### 5. Legal pages
- [ ] **Pending attorney review** - see `/tasks/legal-attorney-review.md`

### 6. File rename
- [x] **COMPLETED**: `/services/htma-consulting.html` → `/services/services.html`

---

## SUMMARY

| Term | Status |
|------|--------|
| coach/coaching | ✅ Replaced with "support" |
| mentor/mentorship | ✅ Replaced with "program/practitioner" |
| consult/consulting | ✅ Replaced with "support/services" |
| Legal pages | ⏳ Pending attorney review |
