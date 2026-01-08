# Notion System Architecture for IHH Website

## Overview

This document defines the professional Notion database system for the Intention Holistic Health website project. It follows Notion's official best practices for database design, relations, and workspace organization.

**Last Updated:** January 8, 2026
**Notion Page ID:** `2df77f92-bf69-808a-80d5-e5929cf6160b`

---

## API Capabilities & Limitations

### Notion API Limitations (Permanent)

These limitations are in the Notion API itself and require **manual UI steps**:

| Operation | API Support | Action Required |
|-----------|-------------|-----------------|
| Create new databases | NO | Create in Notion UI |
| Add Status property options | NO | Edit property in Notion UI |
| Add Select/Multi-select options | Partial | New options need Notion UI |
| Create database views | NO | Create in Notion UI |
| Create Relation properties | Partial | Create in UI, API can then use |

### MCP Server Bug (Active Issue)

**IMPORTANT:** The official Notion MCP server has a known **serialization bug** that breaks `create-page`, `update-page`, and `move-page` operations. Object parameters are double-stringified, causing validation errors.

**Bug Tracking:**
- [Issue #82](https://github.com/makenotion/notion-mcp-server/issues/82) - Parameter serialization bug
- [Issue #100](https://github.com/makenotion/notion-mcp-server/issues/100) - Creating pages fails
- [Issue #3023](https://github.com/anthropics/claude-code/issues/3023) - Claude Code specific

| MCP Tool | Status | Notes |
|----------|--------|-------|
| `query-data-source` | ✅ Works | Use for reading data |
| `retrieve-a-data-source` | ✅ Works | Use for schema |
| `post-search` | ✅ Works | Use for searching |
| `retrieve-a-page` | ✅ Works | Use for reading |
| `API-post-page` | ❌ **BROKEN** | Use `notion-cli` workaround |
| `API-patch-page` | ❌ **BROKEN** | Use `notion-cli` workaround |
| `API-move-page` | ❌ **BROKEN** | Use `notion-cli` workaround |

### Workaround: notion-cli Tool

A global CLI tool is installed at `~/.local/bin/notion-cli` that makes direct API calls, bypassing the broken MCP server.

**Commands:**
```bash
# Create a page in a database
notion-cli create-page <database-id> '<properties-json>'

# Update a page
notion-cli update-page <page-id> '<properties-json>'

# Query a database
notion-cli query <database-id> [filter-json]

# Search Notion
notion-cli search '<query>'

# Get help
notion-cli help
```

**Example - Create a session note:**
```bash
notion-cli create-page 2e277f92-bf69-80ed-a966-c331880b4dc2 '{
  "Session": {"title": [{"text": {"content": "2026-01-08 Example"}}]},
  "Date": {"date": {"start": "2026-01-08"}},
  "Environment": {"select": {"name": "Local VS Code"}},
  "Status": {"status": {"name": "Done"}},
  "Completed": {"rich_text": [{"text": {"content": "What was done"}}]}
}'
```

**Environment:** Reads `NOTION_TOKEN` from environment or `.env` file.

### Database IDs Quick Reference

| Database | ID | Purpose |
|----------|----|---------|
| Session Notes | `2e277f92-bf69-80ed-a966-c331880b4dc2` | Work session tracking |
| Tasks & Projects | `2e277f92-bf69-80de-aab2-fdc2e1e8613c` | Task management |
| Accounts Inventory | `2e277f92-bf69-802e-88c7-f0b2b097c011` | Service accounts |

### Alternative Integration Options

If MCP bug is fixed or more capabilities are needed:

1. **Better Notion MCP** ([lobehub.com/mcp/n24q02m-better-notion-mcp](https://lobehub.com/mcp))
   - Transforms 28+ endpoints into 7 mega-tools
   - 75% API coverage with optimized operations

2. **Direct API calls via Netlify Functions**
   - Full API access including database creation
   - Requires custom implementation

3. **Zapier/Make.com integrations**
   - No-code automation between services
   - Can create databases via their Notion connectors

---

## Database Architecture

Based on [Notion's official guidance](https://www.notion.com/help/guides/getting-started-with-projects-and-tasks), we use a **linked database model** where separate databases are connected via Relations.

### System Diagram

```
+------------------------+
|   AI Content System    |  (Dashboard Page)
|   (2df77f92-bf69...)   |
+------------------------+
         |
         +---> Linked View: Session Notes
         +---> Linked View: Tasks & Projects
         +---> Linked View: Accounts Inventory

+--------------------+      +--------------------+
|   Session Notes    |<---->|  Tasks & Projects  |
|     Database       |      |     Database       |
+--------------------+      +--------------------+
                                    |
                                    v
                           +--------------------+
                           | Accounts Inventory |
                           |     Database       |
                           +--------------------+
```

---

## Database Schemas

### 1. Session Notes Database

**Purpose:** Track work sessions, progress, and handoffs between devices/environments.

| Property | Type | Configuration | Description |
|----------|------|---------------|-------------|
| **Session** | Title | Required | Session name (e.g., "2026-01-07 CLAUDE.md Updates") |
| **Date** | Date | Required | Session date |
| **Environment** | Select | Options below | Where the session occurred |
| **Status** | Status | Groups below | Session progress state |
| **Completed** | Rich Text | - | What was accomplished |
| **Pending** | Rich Text | - | What remains to be done |
| **Notes** | Rich Text | - | Context for future sessions |
| **Related Tasks** | Relation | -> Tasks & Projects | Linked tasks worked on |
| **Created** | Created Time | Auto | When entry was created |
| **Last Edited** | Last Edited Time | Auto | When entry was last modified |

**Environment Options:**
- Local VS Code (Blue)
- Browser Codex (Purple)
- Mobile (Green)
- Other (Gray)

**Status Groups:**
- **To-do:** Not Started
- **In Progress:** Active Session, Review Needed
- **Complete:** Done, Synced

**Icon:** Calendar or notebook emoji
**Description:** "Track work sessions across devices with handoff notes."

---

### 2. Tasks & Projects Database

**Purpose:** Track actionable items with priority, status, and categorization.

| Property | Type | Configuration | Description |
|----------|------|---------------|-------------|
| **Task** | Title | Required | Task name |
| **Status** | Status | Groups below | Task progress |
| **Priority** | Select | High/Medium/Low | Task urgency |
| **Category** | Multi-Select | Options below | Task domain |
| **Due Date** | Date | Optional | Deadline |
| **Description** | Rich Text | - | Full task details |
| **Related Sessions** | Relation | -> Session Notes | Sessions where worked on |
| **Related Account** | Relation | -> Accounts Inventory | Related service account |
| **Assignee** | People | Optional | Who's responsible |
| **Created** | Created Time | Auto | When task was created |
| **Last Edited** | Last Edited Time | Auto | When task was modified |
| **ID** | Unique ID | Prefix: "TASK" | Auto-incrementing ID |

**Status Groups:**
- **To-do:** Not Started, Backlog
- **In Progress:** Active, Blocked, Waiting
- **Complete:** Done, Cancelled, Deferred

**Priority Options:**
- High (Red)
- Medium (Yellow)
- Low (Green)

**Category Options:**
- Legal (Orange)
- Technical (Blue)
- Content (Green)
- SEO (Purple)
- Marketing (Pink)
- Infrastructure (Gray)
- Client Request (Yellow)

**Icon:** Checkbox emoji
**Description:** "Track project tasks with priorities, categories, and relations."

---

### 3. Accounts Inventory Database

**Purpose:** Track all external services, accounts, and integrations.

| Property | Type | Configuration | Description |
|----------|------|---------------|-------------|
| **Service** | Title | Required | Service name (e.g., "Google Analytics 4") |
| **Category** | Select | Options below | Service type |
| **Account ID** | Rich Text | - | Primary identifier |
| **Secondary IDs** | Rich Text | - | Additional identifiers |
| **Purpose** | Rich Text | - | What it's used for |
| **Access** | Multi-Select | Options below | Who has access |
| **URL** | URL | - | Service login/dashboard URL |
| **Env Variable** | Rich Text | - | Related environment variable name |
| **Status** | Status | Active/Inactive/Pending | Account status |
| **Last Verified** | Date | - | When credentials were last confirmed |
| **Notes** | Rich Text | - | Additional context |
| **Created** | Created Time | Auto | When added |
| **Last Edited** | Last Edited Time | Auto | When modified |

**Category Options:**
- Hosting (Blue)
- Analytics (Purple)
- Email (Green)
- Payment (Red)
- Social (Pink)
- Client Management (Orange)
- Development (Gray)
- Domain/DNS (Brown)

**Access Options:**
- Alicia (Owner)
- Developer
- Shared
- API Only

**Icon:** Key or lock emoji
**Description:** "Centralized inventory of all service accounts and integrations."

---

## Setup Instructions

### Step 1: Create Databases in Notion UI

Since the API cannot create databases, create them manually:

1. **Open Notion** and navigate to your workspace
2. **Create a new page** called "IHH Databases" (or add to existing AI Content System page)
3. **For each database:**
   - Type `/database` and select "Database - Full page"
   - Name it according to the schemas above
   - Add all properties as specified
   - Set the icon and description

### Step 2: Configure Status Properties

Status properties cannot be created via API. In each database:

1. Click the Status property header
2. Click "Edit property"
3. Add options and organize into groups as specified

### Step 3: Set Up Relations

1. In **Session Notes**, add a Relation property to **Tasks & Projects**
   - Enable "Show on Tasks & Projects" for two-way relation

2. In **Tasks & Projects**, add a Relation property to **Accounts Inventory**
   - Enable "Show on Accounts Inventory" for two-way relation

### Step 4: Create Linked Views

On the **AI Content System** dashboard page:

1. Type `/linked` and select "Linked view of database"
2. Select each database to create embedded views
3. Configure filters for each view:
   - Session Notes: Filter by Date = Last 7 days
   - Tasks: Filter by Status != Done
   - Accounts: No filter (show all)

### Step 5: Share with Integration

1. Go to each database
2. Click "..." menu > "Connections"
3. Add your Notion integration (uses `NOTION_TOKEN`)

---

## API Usage Examples

Once databases are created and shared, the API can:

### Add a Session Note Entry

```json
POST /v1/pages
{
  "parent": { "database_id": "[SESSION_NOTES_DB_ID]" },
  "properties": {
    "Session": {
      "title": [{ "text": { "content": "2026-01-07 Schema Updates" } }]
    },
    "Date": {
      "date": { "start": "2026-01-07" }
    },
    "Environment": {
      "select": { "name": "Local VS Code" }
    },
    "Completed": {
      "rich_text": [{ "text": { "content": "Updated CLAUDE.md with Notion workflow" } }]
    }
  }
}
```

### Query Active Tasks

```json
POST /v1/data_sources/[TASKS_DB_ID]/query
{
  "filter": {
    "property": "Status",
    "status": { "does_not_equal": "Done" }
  },
  "sorts": [
    { "property": "Priority", "direction": "ascending" }
  ]
}
```

### Update Account Status

```json
PATCH /v1/pages/[PAGE_ID]
{
  "properties": {
    "Last Verified": {
      "date": { "start": "2026-01-07" }
    },
    "Status": {
      "status": { "name": "Active" }
    }
  }
}
```

---

## Dashboard Layout Best Practices

Based on [Notion's workspace organization guide](https://www.notion.com/help/notion-academy/lesson/organized-workspace-best-practices):

### Recommended AI Content System Layout

```
# AI Content System

## Quick Stats
[Rollup: Active Tasks Count] | [Rollup: This Week's Sessions] | [Rollup: Accounts Count]

---

## Current Session
[Linked View: Session Notes - Filter: Today or Last Entry]

---

## Active Tasks
[Linked View: Tasks - Board View - Filter: Status != Done]

---

## Recent Sessions
[Linked View: Session Notes - Table View - Filter: Last 7 Days]

---

## Accounts Quick Reference
[Linked View: Accounts - Gallery View - Sort: Category]
```

### View Configurations

**Session Notes Views:**
- **Table View:** All sessions with full properties
- **Calendar View:** Grouped by date for timeline
- **List View:** Compact for quick scanning

**Tasks Views:**
- **Board View:** Kanban by Status (primary)
- **Table View:** All details visible
- **Calendar View:** By Due Date
- **By Priority:** Grouped table view

**Accounts Views:**
- **Table View:** Full inventory
- **Gallery View:** Visual cards by category
- **Board View:** By category for organization

---

## Maintenance Checklist

### Weekly
- [ ] Review and close completed tasks
- [ ] Verify session notes are up to date
- [ ] Check for orphaned entries (no relations)

### Monthly
- [ ] Audit accounts inventory for accuracy
- [ ] Archive old session notes (> 30 days)
- [ ] Review and update task priorities

### Quarterly
- [ ] Verify all account credentials
- [ ] Clean up unused database properties
- [ ] Review and optimize views

---

## Migration from Current Setup

### Current State (Flat Content)
The current "AI Content System" page uses text blocks and bulleted lists:
- `=== CLAUDE.md SYNC ===`
- `=== SESSION NOTES ===`
- `=== TASKS/TODO ===`
- `=== ACCOUNTS INVENTORY ===`

### Migration Steps

1. **Create the three databases** as specified above
2. **Migrate existing entries:**
   - Session Notes: Convert bulleted items to database entries
   - Tasks: Convert to proper task entries with status
   - Accounts: Convert to full account records
3. **Set up the dashboard** with linked views
4. **Archive old content** (keep as backup, collapse in toggle)

### Data to Migrate

**Session Notes (18 entries):**
- Historical entries from 2024-12-29 to 2026-01-07
- Convert format: `[DATE] Summary` -> Full database entry

**Tasks (15+ items):**
- HIGH: Legal attorney review, MailerLite automation
- MEDIUM: GBP optimization, Pinterest strategy
- LOW: Pillar content, AIO optimizations

**Accounts (13 entries):**
- Google Workspace, GA4, GCP, Search Console
- Netlify, GitHub, MailerLite, Practice Better, Fullscript

---

## Sources

- [Notion Relations & Rollups](https://www.notion.com/help/relations-and-rollups)
- [Getting Started with Projects and Tasks](https://www.notion.com/help/guides/getting-started-with-projects-and-tasks)
- [Database Properties Reference](https://www.notion.com/help/database-properties)
- [Notion API Working with Databases](https://developers.notion.com/docs/working-with-databases)
- [API Version 2025-09-03 Upgrade Guide](https://developers.notion.com/docs/upgrade-guide-2025-09-03)
- [Property Object Reference](https://developers.notion.com/reference/property-object)
