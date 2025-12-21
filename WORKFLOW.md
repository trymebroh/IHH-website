# Website Editing Workflow

This guide explains how to make changes to the Intention Holistic Health website.

## Understanding the Two Branches

| Branch | Purpose | Netlify Status |
|--------|---------|----------------|
| `main` | Live website (what visitors see) | Auto-deploys |
| `drafts-website-edits` | Your draft changes (not visible to visitors) | Not deployed |

Think of it like this:
- **drafts-website-edits** = Your private notebook where you work on changes
- **main** = The published version everyone sees

---

## How to Make Edits (iPad/Browser)

### Step 1: Open Your Draft Branch

1. Go to [github.com/trymebroh/IHH-website](https://github.com/trymebroh/IHH-website)
2. Click the branch dropdown (says "main")
3. Select **drafts-website-edits**

### Step 2: Edit a File

1. Navigate to the file you want to change
2. Click the **pencil icon** ✏️ (top right of the file)
3. Make your changes
4. Scroll down and click **"Commit changes"**
5. Add a brief description of what you changed
6. Make sure "Commit directly to the drafts-website-edits branch" is selected
7. Click **"Commit changes"**

### Step 3: Get AI Help (Optional)

If you need help writing code or content:

1. Open [claude.ai](https://claude.ai) in another tab
2. Describe what you want to change in plain English
3. Claude will write the code for you
4. Copy the code and paste it into the GitHub editor

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

- ✅ Always work on `drafts-website-edits`, not `main`
- ✅ Commit often — this saves your work to GitHub
- ✅ Don't worry about mistakes on the draft branch — they won't affect the live site
- ✅ If something goes wrong after merging, let me know and we can roll back

---

## Quick Reference

| Task | Where to Do It |
|------|----------------|
| Edit draft content | GitHub.com → `drafts-website-edits` branch |
| Get AI help writing code | [claude.ai](https://claude.ai) |
| Make changes live | GitHub.com → Pull requests → Merge |
| View your live site | [intentionholistichealth.com](https://intentionholistichealth.com) |

---

## Need Help?

If you get stuck or something doesn't look right, reach out before merging to `main`. It's always easier to fix things while they're still in draft!
