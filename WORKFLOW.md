# Website Editing Workflow

This guide explains how to make changes to the Intention Holistic Health website.

## Understanding the Branches

| Branch | Purpose | Netlify Status |
|--------|---------|----------------|
| `main` | Live website (what visitors see) | Auto-deploys |
| `drafts-website-edits` | Draft changes for preview | Branch deploy (preview) |
| `browser-coded-branch` | Browser-first work branch | Not deployed |

Think of it like this:
- **drafts-website-edits** = Your private notebook where you work on changes
- **main** = The published version everyone sees
- **browser-coded-branch** = Browser-only working space before drafts

---

## Branching Policy (Browser vs Local)

If not 100% certain which instance you're in, ask before pushing.

- Browser work: first push to `browser-coded-branch` only, then optionally to `drafts-website-edits` on request.
- Local VS Code work: push to both `browser-coded-branch` and `drafts-website-edits` so browser stays current.

---

## How to Make Edits (Browser)

### Step 1: Open Your Browser Work Branch

1. Go to [github.com/trymebroh/IHH-website](https://github.com/trymebroh/IHH-website)
2. Click the branch dropdown (says "main")
3. Select **browser-coded-branch**

### Step 2: Edit a File

1. Navigate to the file you want to change
2. Click the **pencil icon** ✏️ (top right of the file)
3. Make your changes
4. Scroll down and click **"Commit changes"**
5. Add a brief description of what you changed
6. Make sure "Commit directly to the browser-coded-branch" is selected
7. Click **"Commit changes"**

### Step 3: Get AI Help (Optional)

If you need help writing code or content:

1. Open [claude.ai](https://claude.ai) in another tab
2. Describe what you want to change in plain English
3. Claude will write the code for you
4. Copy the code and paste it into the GitHub editor

---

## How to Make Edits (Local VS Code)

1. Make changes locally in your editor.
2. Commit to `browser-coded-branch` and `drafts-website-edits`.
3. Push both branches so the browser view stays current.

If you are not 100% sure which instance you are in, ask before pushing.

---

## Previewing Your Changes (Netlify)

When you want a preview deploy, open a pull request from `browser-coded-branch` into `drafts-website-edits` and merge it. That branch is the only one deployed to the preview URL.

---

## Making Your Changes Live

When you're happy with your draft changes and ready to publish them:

### Step 1: Create a Pull Request

1. Go to the repository on GitHub
2. You may see a banner saying "drafts-website-edits had recent pushes" — click **"Compare & pull request"**
   - Or: Click "Pull requests" tab → "New pull request"
3. Make sure it shows: `base: main` ← `compare: drafts-website-edits`
4. Click **"Create pull request"**
5. Add a title describing your changes (e.g., "Update about page content")

### Step 2: Merge to Go Live

1. Review the changes shown
2. If everything looks good, click **"Merge pull request"**
3. Click **"Confirm merge"**
4. **Important:** Do NOT delete the branch — keep it for future edits

### Step 3: Verify

1. Wait 1-2 minutes for Netlify to deploy
2. Visit your website to confirm the changes are live

---

## Tips & Reminders

- ✅ Always work on `browser-coded-branch` first
- ✅ If you want a preview deploy, merge to `drafts-website-edits`
- ✅ Commit often — this saves your work to GitHub
- ✅ Don't worry about mistakes on the browser/draft branches — they won't affect the live site
- ✅ If something goes wrong after merging, let me know and we can roll back

---

## Quick Reference

| Task | Where to Do It |
|------|----------------|
| Edit browser content | GitHub.com → `browser-coded-branch` branch |
| Preview in Netlify | Merge `browser-coded-branch` → `drafts-website-edits` |
| Get AI help writing code | [claude.ai](https://claude.ai) |
| Make changes live | GitHub.com → Pull requests → Merge |
| View your live site | [intentionholistichealth.com](https://intentionholistichealth.com) |

---

## Preview URLs

- Draft preview: https://drafts-website-edits--intentionholistichealth.netlify.app

---

## Need Help?

If you get stuck or something doesn't look right, reach out before merging to `main`. It's always easier to fix things while they're still in draft!
