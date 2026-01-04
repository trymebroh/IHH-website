# IHH Accounts & Services Inventory

**Last Updated:** January 3, 2026 (added Pinterest, GBP)

This file tracks all external accounts, services, and integrations used for Intention Holistic Health.

---

## Google Services

| Service | Account/ID | Purpose | Access |
|---------|------------|---------|--------|
| **Google Workspace** | `@intentionholistichealth.com` | Email, org management | Alicia (admin) |
| **Google Analytics 4** | Property: `517511231` / Measurement: `G-3GFCR5ZRMZ` | Website analytics | Linked to Workspace |
| **Google Cloud Platform** | Project: `IHH-Website-Analytics` | API access, service accounts | Workspace org |
| **GA4 Service Account** | `ga4-reader@ihh-website-analytics.iam.gserviceaccount.com` | GA4 API authentication | JSON key in Netlify env |
| **Google Search Console** | `www.intentionholistichealth.com` | SEO, search performance | Linked to GA4 |
| **Google Business Profile** | Intention Holistic Health | Local SEO, Google Maps visibility | Alicia (admin) |

---

## Hosting & Deployment

| Service | Account/ID | Purpose | Access |
|---------|------------|---------|--------|
| **Netlify** | Site: `intentionholistichealth` | Hosting, forms, functions, **DNS** | Alicia |
| **GitHub** | Repo: `trymebroh/IHH-website` (Private) | Source code, version control | trymebroh |

---

## Email Marketing

| Service | Account/ID | Purpose | Access |
|---------|------------|---------|--------|
| **MailerLite** | Connected via API | Newsletter, lead magnets | API key in Netlify env |

**Sender Email:** `alicia.harrison@intentionholistichealth.com`

**MailerLite Groups:**
- Newsletter Subscribers: `175195722960864384`
- Holistic Habits Checklist: `175195632248554684`

**Domain Authentication:** Configured via Netlify DNS (CNAME + 2 TXT records)

---

## Social Media & Marketing

| Platform | URL/Handle | Purpose | Status |
|----------|------------|---------|--------|
| **Pinterest** | [pinterest.com/intentionholistichealth](https://www.pinterest.com/intentionholistichealth/) | Visual content, blog traffic, SEO | Active (10 pins, 2 boards) |
| **Instagram** | (linked in website footer) | Brand presence, engagement | Active |
| **Facebook** | (linked in website footer) | Community, traffic source | Active |
| **LinkedIn** | (linked in website footer) | Professional networking | Active |

**Pinterest Optimization:** See `/docs/pinterest-gbp-optimization.md` for detailed recommendations.

---

## Client Management

| Service | Account/ID | Purpose | Access |
|---------|------------|---------|--------|
| **Practice Better** | `my.practicebetter.io` | Patient portal, scheduling, payments | Alicia |
| **Fullscript** | `us.fullscript.com/welcome/intentionholistichealth` | Supplement dispensary | Alicia |

---

## Environment Variables (Netlify)

| Variable | Purpose | Added |
|----------|---------|-------|
| `MAILERLITE_API_KEY` | MailerLite API authentication | Dec 31, 2025 |
| `GOOGLE_APPLICATION_CREDENTIALS_JSON` | GA4 service account key | Jan 3, 2026 |

---

## API Endpoints (Netlify Functions)

| Endpoint | Purpose |
|----------|---------|
| `/.netlify/functions/subscribe` | MailerLite newsletter/lead magnet signup |
| `/.netlify/functions/ga4-analytics` | GA4 data retrieval |
| `/.netlify/functions/easter-egg-track` | Easter egg counter |

---

## Notes

- All sensitive credentials stored as Netlify environment variables (never in code)
- GitHub repo is private
- GA4 service account has Viewer-only access
- Google Cloud org policies restrict service account key creation (exception made for IHH-Website-Analytics project)
