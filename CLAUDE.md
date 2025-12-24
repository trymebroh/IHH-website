# Claude.md - Project Instructions and Guardrails

## Workflow

First, think through the problem. Read the codebase and write a plan in tasks/todo.md
The plan should be a checklist of todo items.
Check in with me before starting work—I'll verify the plan.
Then, complete the todos one by one, marking them off as you go.
At every step, give me a high-level explanation of what you changed.
Keep every change simple and minimal. Avoid big rewrites.
At the end, add a review section in todo.md summarizing the changes.

## Session Notes

Update `session-notes/YYYY-MM-DD.md` at the end of each working session:
- **Completed**: What was accomplished this session
- **Pending**: What remains to be done
- **Notes**: Any relevant context for future sessions

**IMPORTANT**: Session notes MUST be updated before committing and pushing to GitHub. This is a prerequisite for any commit/push operation.

## Model Selection

**Default Model:** claude-sonnet-4-5-20250929 (Sonnet 4.5)

Use `/model` to switch models based on the task phase:

| Phase | Recommended Model | Rationale |
|-------|-------------------|-----------|
| **Planning & Architecture** | Opus 4.5 | Complex reasoning, system design, trade-off analysis |
| **Code Implementation** | Sonnet 4.5 | Best balance of speed, cost, and code quality |
| **Bug Fixes & Small Changes** | Sonnet 4.5 or Haiku 3.5 | Quick iterations, straightforward tasks |
| **Code Review & Refactoring** | Opus 4.5 | Deep understanding of patterns, edge cases |
| **Documentation** | Sonnet 4.5 | Clear writing with good context understanding |
| **Quick Questions & Lookups** | Haiku 3.5 | Fast responses, lower cost |

**When to upgrade to Opus 4.5:**
- Designing new features or systems from scratch
- Debugging complex, multi-file issues
- Security-sensitive code review
- Performance optimization requiring deep analysis

**When Haiku 3.5 is sufficient:**
- Simple file edits
- Running commands and scripts
- Straightforward Q&A about the codebase

## Adding New Content (Blog Posts, Copy, etc.)

When adding new content to the site, **always ask about style preferences** before implementing:

### Available Blog Templates

1. **Default Template** (`/blog/post.html`)
   - Two-column layout with sidebar
   - Category filtering in sidebar
   - Newsletter signup in sidebar
   - Standard blog card format

2. **Superior Style Template** (`/blog/post-superior.html`)
   - Full-width single column layout
   - Author block with credentials ("Written by [Name], MSN, APRN, FNP-C")
   - Reading progress bar at top
   - In-content CTA boxes (use `[CTA:title|description|link|text]` in content)
   - Previous/Next post navigation
   - Optional disclaimer and references sections
   - More generous spacing and larger typography

### Workflow for New Content

1. **Ask which template/style to use:**
   - "Would you like to use the default blog style or the Superior-style full-width template?"
   - "I have two blog templates available: [describe both]. Which would you prefer?"

2. **If a new style is requested:**
   - Ask for a reference link or detailed description
   - Create a new template following the existing pattern
   - Document the new template in this file

3. **For new posts**, gather:
   - Title and content
   - Featured image
   - Categories
   - Template preference
   - Any special elements (disclaimer, references, in-content CTAs)

4. **Before publishing any new blog post:**
   - Verify the post includes appropriate disclosures (Educational & Imagery Disclaimer)
   - If disclaimer is missing, prompt Alicia to add one or use the standard disclaimer
   - Always ask before pushing to GitHub

### Standard Blog Disclaimer

All blog posts should include this disclaimer (or similar) at the end:

> This content is for educational and informational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. It does not replace individualized medical advice, diagnosis, or treatment. Readers should consult their licensed healthcare provider regarding personal health concerns.
>
> Any individuals depicted in images on this website or associated content are models or stock photography subjects and are not patients, clients, or recipients of services from Intention Holistic Health. Images are used for illustrative purposes only and do not represent clinical relationships, medical outcomes, or specific health conditions.
>
> Intention Holistic Health provides educational wellness guidance and, where applicable, Kentucky-based nurse practitioner services within scope and licensure.

## Brand & Style Preferences

### Typography

**Stylized Section Titles (Alicia's Preference)**
- Font: Playfair Display
- Style: Italic
- Transform: Uppercase (all caps)
- Letter-spacing: 0.08em
- CSS class: `.ir-styled-title`

Use this style for section headings throughout service pages and landing pages where an elegant, editorial feel is desired.

### Brand Colors

Only use colors from the official brand palette (see `/brand/Branding Board.pdf`):

| Color | Hex | Usage |
|-------|-----|-------|
| Light Sage | `#CDCFC0` | Backgrounds, badges |
| Warm Tan | `#D6C7B4` | Accents, buttons |
| Taupe | `#AD9985` | Secondary accents |
| Sage Green | `#8D9488` | Primary brand color |
| Charcoal | `#4A4B49` | Text, dark elements |
| Cream | `#F9F5F0` | Backgrounds, header |

## Branch Merges

- Before merging any branch (including draft → live), explicitly confirm readiness with the requester/owner.
- Ensure a rollback path exists (e.g., source branch retained or a pre-merge tag/commit reference recorded) so the merge can be reversed if issues arise.

## Communication for Codex Users

- Assume many users are non-technical. When explaining technical terms or steps, use clear, plain language and supportive analogies to make concepts approachable.
- Remind Codex users to push their updates to GitHub if they haven't yet, so work doesn't get lost in the temporary workspace.
- **Save/Backup Requests:** If the user asks to "save," "backup," or similar, clarify the intent:
  - **Commit** = Create a save point (like a checkpoint in a video game)
  - **Push** = Send it to the backup database/library (GitHub) so it's stored remotely
  - Ask: "Would you like me to commit (create a save point) and push (send to the backup)?"

## Git Configuration

- **Use SSH for GitHub pushes** (not HTTPS). The remote should be `git@github.com:trymebroh/IHH-website.git`
- If push fails with credential errors, check the remote with `git remote -v` and switch to SSH if needed:
  ```bash
  git remote set-url origin git@github.com:trymebroh/IHH-website.git
  ```
