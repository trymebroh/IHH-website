# IHH Analytics Report Template

**Last Updated:** January 3, 2026

This template defines the standard analytics report format. When the user requests analytics, Claude should generate a report following this structure.

---

## Report Triggers

User may ask:
- "Pull my analytics summary"
- "How's the lead funnel performing?"
- "Show me this week's traffic and conversions"
- "Analytics report"
- Any variation requesting analytics data

---

## Standard Report Format

```
# IHH Analytics Report
**Period:** [Date Range]
**Generated:** [Current Date]

---

## 1. Traffic Overview

| Metric | This Period | Last Period | Change |
|--------|-------------|-------------|--------|
| Active Users | X | X | +X% / -X% |
| Sessions | X | X | +X% / -X% |
| Page Views | X | X | +X% / -X% |
| Bounce Rate | X% | X% | +X% / -X% |
| Avg. Session Duration | Xm Xs | Xm Xs | +X% / -X% |

---

## 2. Lead Funnel Performance

| Stage | This Period | Last Period | Change | Drop-off |
|-------|-------------|-------------|--------|----------|
| Homepage | X | X | +X% | — |
| Services Page | X | X | +X% | X% left |
| Practice Better Click | X | X | +X% | X% left |

**Conversion Rate:** X% (PB clicks / Homepage visitors) | Last period: X% | Change: +X%

---

## 3. Content Performance

### Top Pages
| Page | Views | Users |
|------|-------|-------|
| / | X | X |
| /services/ | X | X |
| /htma.html | X | X |
| /blog/ | X | X |
| [others...] | X | X |

### Blog Engagement
| Post | Views | Categories |
|------|-------|------------|
| [title] | X | [cats] |

---

## 4. User Engagement Depth

### Scroll Milestones (all pages)
| Milestone | Events |
|-----------|--------|
| 25% | X |
| 50% | X |
| 75% | X |
| 100% | X |

### Time on Page
| Threshold | Users Reached |
|-----------|---------------|
| 30 seconds | X |
| 1 minute | X |
| 2 minutes | X |
| 5 minutes | X |

---

## 5. Traffic Sources

| Source | Sessions | Users |
|--------|----------|-------|
| (direct) | X | X |
| google | X | X |
| facebook | X | X |
| [others...] | X | X |

---

## 6. Key Events

| Event | This Period | Last Period | Change |
|-------|-------------|-------------|--------|
| cta_click | X | X | +X% |
| form_start | X | X | +X% |
| form_submit | X | X | +X% |
| newsletter_subscribe | X | X | +X% |
| blog_post_view | X | X | +X% |
| popup_shown | X | X | +X% |

---

## 7. Friction Watch (Lead Booking)

**Signals to monitor:**
- Services page scroll depth: Are users reaching pricing? (75%+ scroll)
- Time on Services: High time may = hesitation or research
- PB click rate: % of services visitors who click intake form
- Form abandonment: form_start vs form_submit ratio

| Metric | This Period | Last Period | Change | Notes |
|--------|-------------|-------------|--------|-------|
| Services → PB Click Rate | X% | X% | +X% | [interpretation] |
| Avg Time on Services | Xm | Xm | +Xs | [interpretation] |
| Services 75% Scroll | X% | X% | +X% | [interpretation] |

---

## 8. Insights & Recommendations

[Claude adds observations based on data patterns]

- [Insight 1]
- [Insight 2]
- [Recommendation if applicable]

---

## Notes

- Data pulled via GA4 API
- Funnel/Path visualizations: View in GA4 Explore UI
- Audiences: View in GA4 Admin → Audiences
```

---

## API Endpoints Used

```
/.netlify/functions/ga4-analytics?report=overview&days=X
/.netlify/functions/ga4-analytics?report=pages&days=X
/.netlify/functions/ga4-analytics?report=sources&days=X
/.netlify/functions/ga4-analytics?report=events&days=X
/.netlify/functions/ga4-analytics?report=daily&days=X
```

---

## Future Additions

Track additional items here as needs evolve:

- [ ] Intentional Reset promo performance
- [ ] Newsletter growth rate
- [ ] Search Console queries (when data available)
- [ ] Seasonal comparisons
- [ ] Campaign-specific tracking

---

## Changelog

| Date | Change |
|------|--------|
| Jan 3, 2026 | Initial template created |
