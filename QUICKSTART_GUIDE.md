# Welcome to Your Website! A Quickstart Guide for Alicia

## What You Have Now 🎉

Think of your new website like this: **You've just moved from a rental apartment (Kajabi) to a house you own**. 

- **Kajabi was like renting**: You paid monthly, they handled maintenance, but you had to follow their rules and couldn't fully customize
- **Your new site is like owning**: No monthly fees, complete control, but you're responsible for updates (don't worry—it's easier than you think!)

## The Big Picture: How Everything Works Together

### 1. **VS Code = Your Workshop**
Think of VS Code as your **crafting studio** where you make changes to your website. It's like having Microsoft Word, but for website code instead of documents.

- You open files
- You make edits
- You save your work
- That's it!

### 2. **GitHub = Your Safety Deposit Box**
GitHub is like a **safety deposit box with a time machine**. Every time you make changes:
- Your files get saved there
- You can see what changed and when
- You can always go back to a previous version if you make a mistake
- It's like "track changes" in Word, but for your entire website

### 3. **Netlify = Your Website's Home on the Internet**
Netlify is where your website **actually lives online** where people can visit it. Think of it like this:
- GitHub is where you store your stuff
- Netlify takes that stuff and puts it on display for the world to see
- Every time you update GitHub, Netlify automatically updates your live website (usually in 30-60 seconds!)

### 4. **Claude Code = Your AI Assistant**
Claude Code is like having a **website expert on call 24/7** who lives inside VS Code. Instead of needing to learn all the technical stuff, you just tell Claude what you want in plain English.

## How to Make Updates: The Simple Version

### The Magic Workflow (5 Simple Steps)

```
1. Open VS Code
   ↓
2. Tell Claude Code what you want to change
   ↓
3. Review the changes Claude made
   ↓
4. Save & push to GitHub
   ↓
5. Your live website updates automatically!
```

**That's it!** No technical knowledge required.

## Common Tasks You'll Do

### 📝 Adding a New Blog Post

**What you say to Claude Code:**
> "Add a new blog post titled 'How to Balance Hormones Naturally' with this content: [paste your content here]"

**What Claude does for you:**
- Creates a new file with the right name and format
- Adds all the technical stuff (date, formatting, etc.)
- Updates your blog page to show the new post
- Tells you it's ready

**What you do:**
- Review it to make sure it looks right
- Save and push to GitHub (Claude will help you with this)
- Wait 30-60 seconds, then check your live website!

---

### ✏️ Updating Text on a Page

**Example:**
> "Change the text in the 'About' section on the homepage to say [new text here]"

Claude finds the right spot and makes the change. You review, save, and push!

---

### 🖼️ Adding or Changing Images

**Example:**
> "Replace the hero image on the homepage with the new image I just added to the images folder"

**Think of the images folder like a photo album:**
- You drop your photos in
- You tell Claude which photo to use where
- Claude handles all the technical linking

---

### 🎨 Changing Colors or Fonts

**Example:**
> "Make all the buttons a darker shade of green"

Your website uses **CSS variables** (think of them as a "master color palette"). Change the color once in the variables, and it updates everywhere automatically. Claude will guide you through this.

---

### 📄 Adding a New Page

**Example:**
> "Create a new page for my upcoming workshop with sections for description, date, and a registration button"

Claude creates the page with the right structure and styling to match the rest of your site.

---

## Understanding Your File Structure

Think of your website files like **folders in a filing cabinet**:

```
Your Website (the filing cabinet)
│
├── 📁 index.html (The front door - your homepage)
│
├── 📁 about.html (The About page)
│
├── 📁 services/ (A drawer for all service pages)
│   ├── htma-consulting.html
│   └── lab-review.html
│
├── 📁 blog/ (A drawer for all blog stuff)
│   ├── index.html (The main blog page - like a table of contents)
│   └── posts/ (Individual blog posts stored here)
│       ├── 2024-12-15-my-first-post.md
│       └── 2024-12-20-another-post.md
│
├── 📁 images/ (A drawer for all photos)
│   ├── logo.png
│   ├── hero-image.jpg
│   └── blog/ (Blog-specific images)
│
├── 📁 css/ (The styling files - like your brand guide)
│   └── main.css (This is where colors, fonts, spacing live)
│
└── 📁 js/ (The interactive stuff - like turning pages)
    └── main.js
```

**You don't need to memorize this!** Claude knows where everything is. Just tell Claude what you want to change.

---

## The "Save and Push" Process (Saving to the Internet)

When you're done making changes, here's what "saving to the internet" means:

### Step 1: Save Locally (on your computer)
Press `Ctrl+S` (Windows) or `Cmd+S` (Mac) - just like saving any document

### Step 2: Commit (Create a save point)
Think of this like **naming a checkpoint in a video game**. You're saying "I want to remember this version."

Claude Code can help you do this, or in VS Code:
1. Click the "Source Control" icon (looks like a branch)
2. Type a short message like "Added new blog post about HTMA"
3. Click the checkmark ✓

### Step 3: Push (Upload to GitHub)
This is like **clicking 'sync' on Dropbox**. You're uploading your save point to GitHub.

- Click the "..." menu in Source Control
- Click "Push"
- Done!

### Step 4: Wait a Minute
Netlify sees the change, rebuilds your site (takes 30-60 seconds), and your website is live!

---

## Technical Terms Explained (In Plain English)

### HTML (HyperText Markup Language)
**The skeleton of your website.** Like the frame of a house.
- Tells the browser "this is a heading, this is a paragraph, this is a button"
- You rarely need to touch this directly—Claude handles it

### CSS (Cascading Style Sheets)
**The paint and decoration.** Like interior design for your website.
- Controls colors, fonts, spacing, layouts
- Makes your site beautiful
- This is where your brand's look lives

### JavaScript
**The interactive elements.** Like the electrical system that makes lights turn on.
- Makes your mobile menu open/close
- Handles form submissions
- Makes things respond when you click them

### Markdown (.md files)
**A simple way to write blog posts.** Like writing in Google Docs but simpler.
- Use `# Heading` for big headings
- Use `**bold**` for bold text
- Use regular typing for paragraphs
- Claude will help you format this

### Repository (Repo)
**Your project's home on GitHub.** Like the master folder that contains everything for your website.

### Commit
**A saved version.** Like clicking "Save As" with a description of what changed.

### Push
**Upload to GitHub.** Send your local changes to the safety deposit box.

### Pull
**Download from GitHub.** Get the latest version (useful if you work from multiple computers).

### Deploy
**Publishing your site.** Netlify does this automatically whenever you push to GitHub.

---

## Your Weekly Workflow

Here's what a typical week might look like:

### Monday: Write a New Blog Post
1. Open VS Code
2. Tell Claude Code: "Add new blog post with this content..."
3. Review the post
4. Save and push
5. Blog is live in 60 seconds!

### Wednesday: Update Service Pricing
1. Tell Claude: "Update the HTMA service price to $XXX"
2. Claude changes it
3. Save and push
4. Live!

### Friday: Add a New Testimonial
1. Tell Claude: "Add this testimonial to the homepage"
2. Claude adds it with proper formatting
3. Save and push
4. Done!

**Total time per update: 2-5 minutes**

---

## Best Practices (How to Stay Organized)

### 1. **Always Test Before Pushing**
- After Claude makes changes, look at the page locally in your browser
- Make sure everything looks right
- THEN save and push

### 2. **Write Good Commit Messages**
Instead of: "updated stuff"
Write: "Added new blog post about hormone balance"

**Why?** If you need to go back in time, you'll know which version to choose.

### 3. **Keep Images Organized**
- Put blog images in `/images/blog/`
- Put service images in `/images/services/`
- Name images descriptively: `hormone-balance-infographic.jpg` not `IMG_1234.jpg`

### 4. **Make Small, Frequent Updates**
Rather than changing 10 things at once:
- Change one thing
- Save and push
- Verify it worked
- Move to the next thing

**Why?** If something breaks, you know exactly what caused it.

### 5. **Backup Before Major Changes**
If you're doing something big (like redesigning a whole page), commit your current version first. That way you can always go back.

---

## Common Questions

### "What if I break something?"
**You can't permanently break anything!** GitHub keeps every version. Just tell Claude "undo my last change" and you're back to working.

### "How do I preview changes before they go live?"
Open the HTML file in your browser locally (like opening a Word doc). See how it looks BEFORE pushing to GitHub.

### "What if I want to work on something without it going live?"
Create a "branch" (Claude can help). Think of it like a **rough draft folder**. Work on it there, and only merge it to the live site when ready.

### "Do I need to know code?"
**Nope!** That's why you have Claude Code. Speak in plain English, Claude translates to code.

### "What if Claude doesn't understand what I want?"
Be specific! Instead of "make it prettier," say "make the buttons more rounded and add a shadow effect."

### "Can I work from my phone?"
Not easily. You'll need your computer with VS Code. But once changes are pushed, you can check the live site from anywhere!

---

## Emergency Contacts

### If Something Goes Really Wrong:
1. **Don't panic!** Take a screenshot of any error messages
2. **Don't make more changes**
3. **Ask Claude Code**: "Something went wrong with [description]. Can you help me fix it?"
4. **Contact your developer friend** (that's where I come in!)

### If You Get Stuck:
- Ask Claude Code to explain what's happening
- Check if your change was pushed to GitHub (look at the GitHub website)
- Check if Netlify successfully deployed (look at the Netlify dashboard)

---

## Pro Tips from Your Developer Friend

### 1. **Befriend Claude Code**
Claude is REALLY good at understanding context. You can have a conversation:
- "Add a blog post about PCOS"
- "Actually, make it focus more on natural remedies"
- "Can you add a section about supplements?"

### 2. **Use the Preview Feature**
Before pushing anything live, open the file in your browser. Right-click → Open With → Chrome (or your browser).

### 3. **Keep a Change Log**
In a notebook or Notion, jot down what you changed each week. Super helpful if you need to remember when you updated something.

### 4. **Schedule a Backup Routine**
Once a month, tell Claude: "Create a backup of the entire site." Good insurance!

### 5. **Learn One Thing at a Time**
Week 1: Just add blog posts
Week 2: Try changing text
Week 3: Try adding images
**Don't rush it!** You'll be a pro in a month.

---

## Your First Week Challenge

To get comfortable, try these tasks (Claude Code will help with each):

**Day 1:** Add a test blog post
**Day 2:** Update a service description
**Day 3:** Change a button color
**Day 4:** Add a new image to a page
**Day 5:** Update your about page

By the end of the week, you'll feel confident!

---

## Remember

**You've got this!** Thousands of people manage their own websites with even less technical knowledge than you have. You have:
- A beautiful, professional site
- An AI assistant (Claude Code) that speaks your language
- A safety net (GitHub) that prevents disasters
- Automatic deployment (Netlify) that makes updates instant
- A developer friend on speed dial (me!)

The hardest part is starting. Once you update your first blog post and see it go live, you'll realize it's actually pretty fun.

Welcome to the world of website ownership! 🎉

---

**Questions?** Ask Claude Code or reach out anytime. You're not in this alone!
