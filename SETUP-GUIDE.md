# MacBook Setup Guide for Alicia

This guide walks through setting up VS Code with AI assistance on Alicia's MacBook Air.

---

## Prerequisites

- MacBook Air with internet connection
- GitHub account for Alicia (create at [github.com](https://github.com))
- Her added as a collaborator to the repo (see below)

---

## Step 1: Add Alicia as a Collaborator (Do This First)

On **your** computer:

1. Go to [github.com/trymebroh/IHH-website](https://github.com/trymebroh/IHH-website)
2. Click **Settings** (top menu)
3. Click **Collaborators** (left sidebar)
4. Click **Add people**
5. Enter Alicia's GitHub username or email
6. Select her and click **Add to this repository**

She'll receive an email invitation to accept.

---

## Step 2: Install Homebrew (Package Manager)

Open **Terminal** (Cmd + Space, type "Terminal") and paste:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the prompts. This may take a few minutes.

**After installation**, run the commands shown at the end (they add Homebrew to the path). Usually something like:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

---

## Step 3: Install Git and GitHub CLI

In Terminal:

```bash
brew install git gh
```

---

## Step 4: Install VS Code

In Terminal:

```bash
brew install --cask visual-studio-code
```

Or download from [code.visualstudio.com](https://code.visualstudio.com)

---

## Step 5: Authenticate with GitHub

In Terminal:

```bash
gh auth login
```

Select these options:
- **GitHub.com**
- **HTTPS**
- **Yes** (authenticate with GitHub credentials)
- **Login with a web browser**

It will open a browser — log in with **Alicia's** GitHub account.

---

## Step 6: Clone the Repository

In Terminal:

```bash
cd ~/Documents
gh repo clone trymebroh/IHH-website
```

This creates the project folder at `~/Documents/IHH-website`

---

## Step 7: Open in VS Code

In Terminal:

```bash
code ~/Documents/IHH-website
```

Or open VS Code and: **File → Open Folder → Documents → IHH-website**

---

## Step 8: Install AI Extension

Open VS Code and press **Cmd + Shift + X** to open Extensions.

### Option A: GitHub Copilot ($10/month) — Recommended
1. Search for **"GitHub Copilot"**
2. Click **Install**
3. Sign in with GitHub when prompted
4. Start a Copilot subscription at [github.com/features/copilot](https://github.com/features/copilot)

### Option B: Continue.dev + OpenAI API (Uses her ChatGPT-related API)
1. Search for **"Continue"**
2. Click **Install**
3. Click the Continue icon in the sidebar
4. Configure with her OpenAI API key (get from [platform.openai.com/api-keys](https://platform.openai.com/api-keys))

*Note: OpenAI API is separate from ChatGPT Plus — it's pay-per-use.*

### Option C: Codeium (Free)
1. Search for **"Codeium"**
2. Click **Install**
3. Create free account when prompted

---

## Step 9: Configure Git Identity

In Terminal:

```bash
git config --global user.name "Alicia's Name"
git config --global user.email "alicia@email.com"
```

Use the same email as her GitHub account.

---

## Step 10: Test the Setup

In VS Code:

1. Open any file (e.g., `index.html`)
2. Make a small change (add a comment or space)
3. Click the **Source Control** icon (left sidebar, looks like a branch)
4. Type a message like "Test commit"
5. Click **Commit**
6. Click **Sync Changes**

If it pushes successfully, she's all set!

---

## Daily Workflow

### Making Changes

1. **Open VS Code** and open the project folder
2. **Make edits** to files
3. **Use AI help**:
   - Copilot: Just start typing, suggestions appear
   - Continue: Click the sidebar icon and chat
4. **Save files** (Cmd + S)

### Saving to GitHub (Committing)

1. Click **Source Control** icon (left sidebar)
2. Review changed files
3. Type a brief description of what changed
4. Click **Commit**
5. Click **Sync Changes** to push to GitHub
6. Netlify will auto-deploy in 1-2 minutes

### Switching Branches

To work on drafts (not live):

1. Click the branch name in the bottom-left corner (says "main")
2. Select **drafts-website-edits**
3. Make changes and commit
4. When ready to go live, create a Pull Request on GitHub

---

## Useful VS Code Shortcuts

| Action | Shortcut |
|--------|----------|
| Save file | Cmd + S |
| Open file | Cmd + P |
| Find in file | Cmd + F |
| Find in project | Cmd + Shift + F |
| Open terminal | Ctrl + ` |
| Toggle sidebar | Cmd + B |
| Open extensions | Cmd + Shift + X |

---

## Troubleshooting

### "Permission denied" when pushing
- Make sure she accepted the collaborator invitation email
- Re-run `gh auth login`

### VS Code doesn't recognize git
- Close and reopen VS Code
- Or run in Terminal: `export PATH="/opt/homebrew/bin:$PATH"`

### AI extension not working
- Check the extension is enabled (Extensions → Installed)
- Sign out and back in to the AI service

### Changes not showing on website
- Confirm the commit was pushed (Source Control should show no pending changes)
- Check Netlify dashboard for deploy status
- Wait 1-2 minutes for deploy to complete

---

## Quick Reference

| Resource | URL |
|----------|-----|
| GitHub Repo | github.com/trymebroh/IHH-website |
| Live Website | (your Netlify URL) |
| Netlify Dashboard | app.netlify.com |
| GitHub Copilot | github.com/features/copilot |
| VS Code Docs | code.visualstudio.com/docs |

---

## Need Help?

Refer to `WORKFLOW.md` for the branch workflow, or reach out before merging to main!
