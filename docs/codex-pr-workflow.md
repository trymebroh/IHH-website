# Codex Saving to GitHub: Pull Request (PR) Workflow

A simple guide for creating and merging pull requests from browser-based Codex.

---

## Quick Overview

```
Codex creates code → Create PR on GitHub (from Codex) → View PR → Mark Ready for Review → Squash Merge → Done!
```

---

## Step-by-Step Guide

### Step 1: Create Your Changes in Codex

1. Open Codex and work on your code changes
2. When ready, click the 'Create PR' button in the top right corner.
3. Codex will push to GitHub and create a **Draft PR**

> **Note:** Codex always creates PRs as **drafts** by default. Draft PRs cannot be merged into the branch you selected until you mark them as ready. This is intentional as it signals "AI-generated code, review first."

---

### Step 2: Click 'View PR' to open the Pull Request on GitHub

1. Or go to the repository (project) on GitHub
2. Click the **"Pull requests"** tab
3. Find your PR (it will show a gray "Draft" label)
4. Click on the PR title to open it

---

### Step 3: Mark the PR as "Ready for Review"

1. Scroll down on the PR page
2. Look for the green button that says **"Ready for review"**
3. Click it

> This changes the PR from draft → active, enabling the merge options.

---

### Step 4: Squash Merge the Pull Request

1. After marking ready, you'll see merge options appear with a dropdown arrow:
   - **Merge commit** – keeps all commits + adds merge commit
   - **Squash and merge** – combines into 1 clean commit ✓ (recommended)
   - **Rebase and merge** – replays commits linearly

2. Click the dropdown arrow next to the green merge button to choose your method
3. Click **"Squash and merge"** as your preferred option
4. Confirm the merge

---

### Step 5: Done!

Your changes are now in the target branch. The PR will show as "Merged" with a purple icon.

---

## Key Clarifications

- You do **not** need to recreate the PR
- You do **not** need to push new commits
- You do **not** need special permissions beyond normal merge rights
- Clicking **"Ready for review"** is the only step to enable merging

---

## Common Questions

### Can I create a PR to multiple branches at once?

**No.** Each PR goes to one target branch only.

If you need changes in multiple branches:
1. Create PR #1: `your-branch` → `branch-A`
2. Merge it
3. Create PR #2: `branch-A` → `branch-B` (or merge from source again)

### Why can't I merge my PR?

Check these common issues:
- [ ] Is it still a **Draft**? → Click "Ready for review"
- [ ] Are there **merge conflicts**? → Resolve them first
- [ ] Are **checks failing**? → Fix the issues and push again

### Can Codex create non-draft PRs?

Some Codex setups may allow non-draft PRs, but **draft is the safe default**. Treat Codex PRs as "generated suggestions," not final code—this is why drafts are used.

### What's the difference between the merge options?

| Option | Result | Best For |
|--------|--------|----------|
| **Merge commit** | Keeps all commits + merge commit | Full history |
| **Squash and merge** | 1 clean commit | Clean history ✓ |
| **Rebase and merge** | Commits replayed linearly | Linear history |

**Recommendation:** Use **Squash and merge** for cleaner history.

---

## Visual Summary

```
┌─────────────────────────────────────────────────────────────┐
│  CODEX                                                      │
│  ┌─────────────────────────────────────────────────────┐    │
│  │   Create PR      View PR                            │    │
│  └─────────────────────────────────────────────────────┘    │
│                          ↓                                  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  GITHUB - Pull Request (Draft)                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  [Draft] Add new feature #123                     │    │
│  │                                                     │    │
│  │  ┌──────────────────────┐                           │    │
│  │  │  Ready for review    │  ← Click this!            │    │
│  │  └──────────────────────┘                           │    │
│  └─────────────────────────────────────────────────────┘    │
│                          ↓                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  [Ready] Add new feature #123                     │    │
│  │                                                     │    │
│  │  ┌──────────────────────┐                           │    │
│  │  │  Squash and merge ▼  │  ← Click to merge!        │    │
│  │  └──────────────────────┘                           │    │
│  └─────────────────────────────────────────────────────┘    │
│                          ↓                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  [Merged] Add new feature #123          🟣       │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## Tips

- **Always use "Squash and merge"** for cleaner git history
- **One PR = Goes to One branch** – you can't push to multiple target branches at once
- **Create → View → Mark Ready → Squash Merge** – four clicks and you're done!
