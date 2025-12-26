# Website Testing Checklist

*Complete these tests before and after deploying to production on Netlify*

---

## Pre-Launch Testing (Local/Staging)

### 1. Accessibility Testing (WCAG 2.1)

| Test | Tool/Method | Status |
|------|-------------|--------|
| Automated accessibility scan | WAVE browser extension | [ ] |
| Automated violations check | axe DevTools | [ ] |
| Screen reader test | NVDA (Windows) / VoiceOver (Mac/iOS) | [ ] |
| Keyboard-only navigation | Tab through entire site | [ ] |
| Focus states visible | Check all interactive elements | [ ] |
| Skip link works | Test skip-to-content link | [ ] |
| Color contrast | Minimum 4.5:1 for text | [ ] |
| Color blindness check | Colorblind simulator | [ ] |
| Alt text quality | All images have descriptive alt text | [ ] |
| Form labels | All inputs have associated labels | [ ] |
| ARIA attributes | Proper usage, no redundancy | [ ] |

### 2. Cross-Browser Testing

| Browser | Desktop | Mobile | Status |
|---------|---------|--------|--------|
| Chrome | [ ] | [ ] | |
| Safari | [ ] | [ ] (iOS) | |
| Firefox | [ ] | [ ] | |
| Edge | [ ] | [ ] | |
| Samsung Internet | N/A | [ ] | |

### 3. Mobile/Device Testing

| Test | Status |
|------|--------|
| iPhone SE (375px) | [ ] |
| iPhone 14/15 (390px) | [ ] |
| iPhone 14/15 Pro Max (430px) | [ ] |
| Android mid-size (360px) | [ ] |
| iPad portrait (768px) | [ ] |
| iPad landscape (1024px) | [ ] |
| Touch targets minimum 44x44px | [ ] |
| Pinch-to-zoom works | [ ] |
| No horizontal scroll | [ ] |
| Text readable without zooming | [ ] |

### 4. Content Quality

| Test | Tool/Method | Status |
|------|-------------|--------|
| Spelling check | Grammarly or manual | [ ] |
| Grammar check | Grammarly or manual | [ ] |
| Readability score | Hemingway App (target Grade 8) | [ ] |
| Broken internal links | Automated scan | [ ] |
| Image alt text present | Automated scan | [ ] |
| Alt text is descriptive | Manual review | [ ] |
| CTA text is clear | Manual review | [ ] |
| Legal disclaimers present | Kentucky residents notice | [ ] |

### 5. Form Testing

| Form | Location | Status |
|------|----------|--------|
| Contact form | /contact.html | [ ] |
| Newsletter signup | Homepage footer | [ ] |
| Blog newsletter | /blog/ sidebar | [ ] |
| Application redirect | Service pages → Practice Better | [ ] |

**For each form, verify:**
- [ ] Required fields enforced
- [ ] Validation messages display correctly
- [ ] Success state shows after submission
- [ ] Error state shows on failure
- [ ] Form data received (check Netlify Forms dashboard)
- [ ] Email notifications arrive

### 6. Social Sharing Preview

| Platform | Tool | Status |
|----------|------|--------|
| Facebook | [Sharing Debugger](https://developers.facebook.com/tools/debug/) | [ ] |
| Twitter/X | [Card Validator](https://cards-dev.twitter.com/validator) | [ ] |
| LinkedIn | [Post Inspector](https://www.linkedin.com/post-inspector/) | [ ] |
| iMessage/SMS preview | Send link to yourself | [ ] |

**Verify for each page:**
- [ ] og:title displays correctly
- [ ] og:description displays correctly
- [ ] og:image loads and looks good
- [ ] URL is clean and correct

### 7. Security Audit

| Test | Tool | Status |
|------|------|--------|
| SSL certificate valid | [SSL Labs](https://www.ssllabs.com/ssltest/) | [ ] |
| Security headers | [SecurityHeaders.com](https://securityheaders.com/) | [ ] |
| No mixed content | Browser DevTools Console | [ ] |
| External links use rel="noopener" | Code review | [ ] |
| No exposed secrets | Check for API keys, passwords | [ ] |

### 8. Performance Testing

| Test | Tool | Target | Status |
|------|------|--------|--------|
| Lighthouse Performance | Chrome DevTools | 90+ | [ ] |
| Lighthouse Accessibility | Chrome DevTools | 95+ | [ ] |
| Lighthouse Best Practices | Chrome DevTools | 95+ | [ ] |
| Lighthouse SEO | Chrome DevTools | 95+ | [ ] |
| Core Web Vitals - LCP | PageSpeed Insights | <2.5s | [ ] |
| Core Web Vitals - FID | PageSpeed Insights | <100ms | [ ] |
| Core Web Vitals - CLS | PageSpeed Insights | <0.1 | [ ] |
| Mobile speed test | Google PageSpeed Insights | 90+ | [ ] |
| 3G throttled test | DevTools Network | Usable | [ ] |

### 9. SEO Verification

| Test | Status |
|------|--------|
| robots.txt exists and correct | [ ] |
| sitemap.xml exists and valid | [ ] |
| All pages have unique title tags | [ ] |
| All pages have meta descriptions | [ ] |
| Heading hierarchy correct (h1 → h2 → h3) | [ ] |
| Canonical URLs set | [ ] |
| Structured data validates (Schema.org) | [ ] |
| No duplicate content issues | [ ] |
| Images have descriptive filenames | [ ] |

### 10. Functionality Testing

| Feature | Status |
|---------|--------|
| All navigation links work | [ ] |
| Mobile menu opens/closes | [ ] |
| Dropdown menus work | [ ] |
| External links open in new tab | [ ] |
| Blog posts render correctly | [ ] |
| Blog category filtering works | [ ] |
| Blog search works | [ ] |
| Exit-intent popup triggers | [ ] |
| Cookie consent banner appears | [ ] |
| Cookie consent saves preference | [ ] |
| GA4 tracking fires (after consent) | [ ] |
| FAQ accordions work | [ ] |
| Image carousels work (if any) | [ ] |

### 11. Print Testing

| Test | Status |
|------|--------|
| Pages print without navigation | [ ] |
| Recipes/guides print cleanly | [ ] |
| Links show URLs when printed | [ ] |
| No cut-off content | [ ] |

---

## Post-Launch Testing (Production on Netlify)

*Run these tests after deploying to the live Netlify URL*

### Immediate (Within 1 hour of launch)

| Test | Status |
|------|--------|
| Site loads on production URL | [ ] |
| SSL certificate active (HTTPS) | [ ] |
| All pages accessible (no 404s) | [ ] |
| Forms submit successfully | [ ] |
| Form notifications received | [ ] |
| Cookie consent works | [ ] |
| GA4 receiving data | [ ] |
| No console errors | [ ] |

### Within 24 Hours

| Test | Tool | Status |
|------|------|--------|
| Full broken link scan | [broken-link-checker](https://www.npmjs.com/package/broken-link-checker) or [Screaming Frog](https://www.screamingfrog.co.uk/) | [ ] |
| Social sharing previews | Platform debuggers | [ ] |
| SSL Labs test | ssllabs.com | [ ] |
| Security headers test | securityheaders.com | [ ] |
| Google Search Console | Submit sitemap | [ ] |
| Bing Webmaster Tools | Submit sitemap | [ ] |
| PageSpeed Insights (live) | pagespeed.web.dev | [ ] |

### Within 1 Week

| Test | Status |
|------|--------|
| Google indexing pages | [ ] |
| GA4 data flowing correctly | [ ] |
| Form submissions working reliably | [ ] |
| No user-reported issues | [ ] |
| Mobile users having good experience | [ ] |
| Core Web Vitals in Search Console | [ ] |

### Ongoing Monitoring

| Task | Frequency |
|------|-----------|
| Check GA4 for errors/issues | Weekly |
| Monitor Core Web Vitals | Monthly |
| Run Lighthouse audit | Monthly |
| Check for broken links | Monthly |
| Review form submissions | Weekly |
| Security header check | Quarterly |
| SSL certificate expiry | Before expiry |

---

## Conversion/UX Testing (Optional but Recommended)

| Method | Tool | What You Learn |
|--------|------|----------------|
| Heatmaps | Hotjar, Microsoft Clarity (free) | Where users click/scroll |
| Session recordings | Hotjar, Microsoft Clarity | How users navigate |
| A/B testing | Google Optimize, Netlify Split Testing | Which version converts better |
| User interviews | Zoom, in-person | Direct qualitative feedback |
| 5-second test | UsabilityHub | First impressions |
| Exit surveys | Hotjar | Why users leave |

---

## Quick Reference: Testing Tools

| Category | Free Tools |
|----------|------------|
| Accessibility | WAVE, axe DevTools, Lighthouse |
| Performance | Lighthouse, PageSpeed Insights, WebPageTest |
| SEO | Google Search Console, Lighthouse |
| Security | SecurityHeaders.com, SSL Labs |
| Links | broken-link-checker (npm) |
| Social | Platform debuggers (FB, Twitter, LinkedIn) |
| Heatmaps | Microsoft Clarity (free) |
| Analytics | Google Analytics 4 (already installed) |

---

## Notes

- Run automated tests before every major deployment
- Document any issues found and their resolutions
- Keep this checklist updated as site features change
- Prioritize mobile testing (likely majority of traffic)
