# MailerLite Integration Checklist

**Target Completion:** December 31, 2025
**Status:** In Progress

---

## Quick Start (Tomorrow's Deadline)

To have email collection and freebie delivery working by tomorrow night, complete these steps:

### Phase 1: Account Setup (30 min)
- [ ] Create MailerLite account at [mailerlite.com](https://www.mailerlite.com)
- [ ] Verify email domain (info@intentionholistichealth.com)
- [ ] Complete account setup wizard

### Phase 2: Subscriber Groups (15 min)
- [ ] Create group: "Newsletter Subscribers"
- [ ] Create group: "Holistic Habits Checklist" (lead magnet recipients)
- [ ] (Optional) Create group: "Intentional Reset Interest"
- [ ] (Optional) Create group: "Intention Foundations Waitlist"

### Phase 3: Lead Magnet Delivery (30 min)
- [ ] Upload Holistic Habits Checklist PDF to MailerLite
- [ ] Create automation: "Holistic Habits Delivery"
  - Trigger: When subscriber joins "Holistic Habits Checklist" group
  - Action: Send email with PDF download link
- [ ] Test the automation with a test email

### Phase 4: Website Integration (45 min)

**Option A (Recommended for speed): Embedded Forms**
1. [ ] Create embedded form in MailerLite (style to match brand)
   - Background: Cream (#F9F5F0)
   - Button: Sage green (#8D9488)
   - Text: Charcoal (#4A4B49)
2. [ ] Copy embed code
3. [ ] Replace newsletter form on homepage
4. [ ] Replace newsletter form on blog pages
5. [ ] Test form submission

**Option C (More control, more technical): Netlify Function + API**
1. [ ] Get MailerLite API key from Settings → Integrations → API
2. [ ] Create `.env` file with: `MAILERLITE_API_KEY=your_key_here`
3. [ ] Create Netlify function at `netlify/functions/subscribe.js`
4. [ ] Update forms to submit to the Netlify function
5. [ ] Test form submission

### Phase 5: CSP Header Update (If using embed)
- [ ] Update `netlify.toml` Content-Security-Policy to allow MailerLite:
  ```
  script-src ... https://assets.mailerlite.com https://static.mailerlite.com;
  connect-src ... https://assets.mailerlite.com;
  ```

---

## Comparison: Option A vs Option C

| Factor | Option A (Embed) | Option C (API) |
|--------|------------------|----------------|
| Setup time | 30-45 min | 1-2 hours |
| Technical skill | Low | Medium |
| Customization | Limited (MailerLite styling) | Full control |
| Maintenance | MailerLite handles it | You maintain code |
| Form styling | Match via MailerLite editor | Full CSS control |
| Recommended for | Quick launch | Long-term flexibility |

**Recommendation:** Start with Option A for tomorrow's deadline. You can migrate to Option C later if you want more control.

---

## Website Email Collection Points

| Location | Current Form | Action Needed |
|----------|--------------|---------------|
| Homepage newsletter | Netlify Forms | Replace with MailerLite or connect via automation |
| Blog sidebar newsletter | Netlify Forms | Replace with MailerLite |
| Exit-intent popup | Netlify Forms | Replace with MailerLite |
| Contact form (opt-in) | Netlify Forms + checkbox | Connect checkbox optin to MailerLite via Zapier or function |

---

## Future Enhancements (After Launch)

- [ ] Create welcome email sequence (3-5 emails)
- [ ] Set up abandoned form recovery
- [ ] Create segmentation based on interests
- [ ] Add double opt-in (GDPR compliance)
- [ ] Create automated nurture sequences
- [ ] Connect Kajabi courses to MailerLite groups

---

## MailerLite API Reference

**API Endpoint:** `https://connect.mailerlite.com/api/`

**Add Subscriber:**
```javascript
fetch('https://connect.mailerlite.com/api/subscribers', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'subscriber@example.com',
    groups: ['GROUP_ID'],
    fields: {
      name: 'Subscriber Name',
      source: 'website-newsletter'
    }
  })
});
```

---

## Testing Checklist

- [ ] Test homepage newsletter form
- [ ] Test blog newsletter form
- [ ] Test exit-intent popup form
- [ ] Test contact form marketing opt-in
- [ ] Verify lead magnet email is delivered
- [ ] Verify subscriber appears in correct MailerLite group
- [ ] Test on mobile device
- [ ] Test unsubscribe link works

---

*Last updated: December 30, 2025*
