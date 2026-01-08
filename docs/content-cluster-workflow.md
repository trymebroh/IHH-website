# AI Content Planning System - Workflow Guide

**Created:** January 4, 2026
**Purpose:** AI-powered content management system for multi-platform marketing

---

## Overview

An AI content system using the official Notion MCP server (replacing Notion AI) that generates, organizes, and manages multi-platform marketing content for Intention Holistic Health. The system is portable across computers via GitHub.

---

## Key Configuration

| Setting | Value |
|---------|-------|
| **Platforms** | Full Suite: IG (post + stories + reel), Pinterest, Facebook, LinkedIn, Email |
| **Roadmap Location** | Notion (source of truth) + synced to `Marketing/Notion-Sync/roadmap.md` |
| **Frequency** | Weekly (Thursdays before lunch CST) + on-demand |
| **Research Scope** | Full: Website, socials, MailerLite, existing Notion databases |
| **Notion Structure** | Parent-child pages for content clusters |
| **Workflow Status** | Draft → Approved → Posted |
| **Backlog** | Separate "Idea Backlog" database |
| **Database Name** | "AI Content Planning" |
| **Images** | 2-3 description suggestions per piece |
| **Backup Path** | `Marketing/Notion-Sync/` with numbered/dated cluster folders |

---

## What the System Does

1. **Generates full content clusters** (blog + IG + Pinterest + FB + LinkedIn + Email)
2. **Uses existing templates** from SEO/AIO guide and email templates
3. **Researches all platforms** before generating to avoid duplicates
4. **Creates parent-child pages** in Notion for intuitive organization
5. **Saves local backups** to `Marketing/Notion-Sync/` (numbered/dated)
6. **Syncs roadmap** between Notion and local markdown
7. **Is fully portable** via GitHub (clone to any computer)

---

## Content Cluster Structure

Each content cluster = 1 parent page in Notion containing child pages for each platform:

| Platform | Content Type |
|----------|--------------|
| Blog Post | 1,500+ words, SEO-optimized |
| Instagram | Post + Stories + Reel script |
| Pinterest | 3-5 pin descriptions |
| Facebook | Community post |
| LinkedIn | Professional post |
| Email | Newsletter content |

---

## Local Backup Structure

```
Marketing/Notion-Sync/
├── roadmap.md                  # Synced from Notion
├── 001_2026-01-09_topic-slug/  # Cluster backups
│   ├── blog.md
│   ├── instagram.md
│   ├── pinterest.md
│   ├── facebook.md
│   ├── linkedin.md
│   ├── email.md
│   └── metadata.json
└── 002_2026-01-16_topic-slug/
```

---

## Setup Steps

1. Install Notion MCP: `claude mcp add notion -- npx -y @notionhq/notion-mcp-server`
2. Create Notion integration at [notion.so/my-integrations](https://notion.so/my-integrations)
3. Add token to `.env` file as `NOTION_TOKEN`
4. Share target Notion page with integration
5. Create "AI Content Planning" + "Idea Backlog" databases in Notion

---

## Cross-Computer Portability

To use on another computer:

1. Clone the repo
2. Copy `.env` from Bitwarden (or create new with same tokens)
3. Claude Code reads `.claude/mcp.json` automatically

---

## MailerLite Integration

When generating email newsletter content:

- **Create as draft** in MailerLite (not sent automatically)
- **Ask which template** to use before creating the draft
- **Only use free tier features** (no paid API features)
- **Add note to Notion** indicating "Draft created in MailerLite" with link

---

## Notion Workspace Structure

Connected pages for the integration:

1. **AI Content System** - For generated content
2. **Alicia's Task Tracker** - Task management database
3. **Projects** - Project pages
4. **Document Hub** - Document storage
5. **Brainstorm Session** - Ideation space
6. **Social Media Planner** - Social media content planning
7. **Campaign Management** - Marketing campaigns
8. **Blogs** - Blog content

---

## Connecting New Notion Pages

If a Notion page isn't connected to the integration:

1. Open the page in Notion
2. Click the **"..."** in the top-right corner
3. Scroll to **"Connections"** or **"Connect to"**
4. Search for and select **"IHH Content System"**
5. Child pages inherit access automatically

---

## Cost

$0 (uses existing Claude Max plan through Claude Code)

---

## Usage

To create a new content cluster, tell Claude:

> "Create a content cluster about [TOPIC]"

Claude will:
1. Research existing content to avoid duplicates
2. Generate all platform content
3. Create parent page with child pages in Notion
4. Save local backup to `Marketing/Notion-Sync/`
5. Update the roadmap
