/* ============================================
   SUPERIOR STYLE BLOG JAVASCRIPT
   Handles Superior-style blog post rendering
   with enhanced features like reading progress,
   post navigation, and in-content CTAs
   ============================================ */

// -----------------------------------------
// READING PROGRESS BAR
// -----------------------------------------

function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', function() {
    const article = document.querySelector('.post-article');
    if (!article) return;

    const articleRect = article.getBoundingClientRect();
    const articleTop = articleRect.top + window.pageYOffset;
    const articleHeight = article.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset;

    // Calculate progress
    const start = articleTop - windowHeight;
    const end = articleTop + articleHeight - windowHeight;
    const progress = ((scrollPosition - start) / (end - start)) * 100;

    // Clamp between 0 and 100
    const clampedProgress = Math.min(Math.max(progress, 0), 100);
    progressBar.style.width = clampedProgress + '%';
  });
}

// -----------------------------------------
// SUPERIOR-STYLE POST RENDERING
// -----------------------------------------

function renderSuperiorPost() {
  const postContent = document.getElementById('post-content');
  if (!postContent) return;

  // Check if we're on the superior template
  if (!document.body.classList.contains('superior-post')) return;

  // Get post slug from URL
  const urlParams = new URLSearchParams(window.location.search);
  const postSlug = urlParams.get('post');

  if (!postSlug) {
    postContent.innerHTML = '<p>Post not found. <a href="/blog/">Return to blog</a></p>';
    return;
  }

  // Find the post (BLOG_POSTS is defined in blog.js)
  const post = BLOG_POSTS.find(function(p) { return p.slug === postSlug; });

  if (!post) {
    postContent.innerHTML = '<p>Post not found. <a href="/blog/">Return to blog</a></p>';
    return;
  }

  // Update page title
  document.title = post.title + ' | Intention Holistic Health';

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', post.excerpt);
  }

  // Render category tag
  const postCategory = document.getElementById('post-category');
  if (postCategory && post.categories && post.categories.length > 0) {
    postCategory.textContent = post.categories[0].replace('-', ' ');
  }

  // Render post title
  const postTitle = document.getElementById('post-title');
  if (postTitle) {
    postTitle.textContent = post.title;
  }

  // Render author info
  const authorName = document.getElementById('author-name');
  if (authorName) {
    authorName.textContent = post.author || 'Alicia Harrison';
  }

  const authorCredentials = document.getElementById('author-credentials');
  if (authorCredentials) {
    authorCredentials.textContent = post.authorCredentials || 'MSN, APRN, FNP-C';
  }

  // Render date
  const postDate = document.getElementById('post-date');
  if (postDate) {
    postDate.textContent = formatDate(post.date);
  }

  // Render featured image
  const postImage = document.getElementById('post-image');
  if (postImage) {
    postImage.innerHTML = `<img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.parentElement.style.display='none'">`;
  }

  // Render disclaimer if present
  if (post.disclaimer) {
    const disclaimerSection = document.getElementById('post-disclaimer');
    const disclaimerText = document.getElementById('disclaimer-text');
    if (disclaimerSection && disclaimerText) {
      disclaimerText.textContent = post.disclaimer;
      disclaimerSection.style.display = 'block';
    }
  }

  // Render content with potential in-content CTAs
  let content = parseMarkdown(post.content);

  // Process in-content CTA placeholders
  // Format: [CTA:title|description|link|linkText]
  content = content.replace(/\[CTA:(.*?)\|(.*?)\|(.*?)\|(.*?)\]/g, function(match, title, description, link, linkText) {
    return `
      <div class="content-cta">
        <h4>${title}</h4>
        <p>${description}</p>
        <a href="${link}" class="btn btn-primary">${linkText}</a>
      </div>
    `;
  });

  // Process soft CTA placeholders
  // Format: [CTA-SOFT:title|description|link|linkText]
  content = content.replace(/\[CTA-SOFT:(.*?)\|(.*?)\|(.*?)\|(.*?)\]/g, function(match, title, description, link, linkText) {
    return `
      <div class="content-cta-soft">
        <h4>${title}</h4>
        <p>${description}</p>
        <a href="${link}" class="btn btn-primary">${linkText}</a>
      </div>
    `;
  });

  postContent.innerHTML = content;

  // Render references if present
  if (post.references && post.references.length > 0) {
    const referencesSection = document.getElementById('post-references');
    const referencesList = document.getElementById('references-list');
    if (referencesSection && referencesList) {
      let refsHtml = '';
      post.references.forEach(function(ref) {
        if (ref.url) {
          refsHtml += `<li><a href="${ref.url}" target="_blank" rel="noopener">${ref.text}</a></li>`;
        } else {
          refsHtml += `<li>${ref.text}</li>`;
        }
      });
      referencesList.innerHTML = refsHtml;
      referencesSection.style.display = 'block';
    }
  }

  // Set up share buttons
  setupSuperiorShareButtons(post);

  // Render post navigation
  renderPostNavigation(post);
}

// -----------------------------------------
// SHARE BUTTONS
// -----------------------------------------

function setupSuperiorShareButtons(post) {
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(post.title);

  const facebookBtn = document.getElementById('share-facebook');
  if (facebookBtn) {
    facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  }

  const twitterBtn = document.getElementById('share-twitter');
  if (twitterBtn) {
    twitterBtn.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
  }

  const pinterestBtn = document.getElementById('share-pinterest');
  if (pinterestBtn) {
    const imageUrl = encodeURIComponent(window.location.origin + post.image);
    pinterestBtn.href = `https://pinterest.com/pin/create/button/?url=${pageUrl}&media=${imageUrl}&description=${pageTitle}`;
  }

  const emailBtn = document.getElementById('share-email');
  if (emailBtn) {
    emailBtn.href = `mailto:?subject=${pageTitle}&body=Check out this article: ${pageUrl}`;
  }
}

// -----------------------------------------
// POST NAVIGATION (Previous/Next)
// -----------------------------------------

function renderPostNavigation(currentPost) {
  const navContainer = document.getElementById('post-navigation');
  if (!navContainer) return;

  // Sort posts by date (newest first)
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Find current post index
  const currentIndex = sortedPosts.findIndex(function(p) { return p.slug === currentPost.slug; });

  if (currentIndex === -1) return;

  let navHtml = '';

  // Previous post (newer)
  if (currentIndex > 0) {
    const prevPost = sortedPosts[currentIndex - 1];
    navHtml += `
      <a href="/blog/post-superior.html?post=${prevPost.slug}" class="post-nav-item prev">
        <span class="post-nav-label">&larr; Previous</span>
        <span class="post-nav-title">${prevPost.title}</span>
      </a>
    `;
  } else {
    navHtml += '<div class="post-nav-item prev" style="visibility: hidden;"></div>';
  }

  // Next post (older)
  if (currentIndex < sortedPosts.length - 1) {
    const nextPost = sortedPosts[currentIndex + 1];
    navHtml += `
      <a href="/blog/post-superior.html?post=${nextPost.slug}" class="post-nav-item next">
        <span class="post-nav-label">Next &rarr;</span>
        <span class="post-nav-title">${nextPost.title}</span>
      </a>
    `;
  }

  navContainer.innerHTML = navHtml;
}

// -----------------------------------------
// INITIALIZE
// -----------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  // Only run on superior template
  if (document.body.classList.contains('superior-post')) {
    renderSuperiorPost();
    initReadingProgress();
  }
});

// -----------------------------------------
// EXAMPLE POST WITH SUPERIOR FEATURES
// -----------------------------------------

/*
To use the Superior template, add posts to BLOG_POSTS in blog.js with these optional fields:

{
  slug: 'example-post',
  title: 'Example Post Title',
  date: '2024-12-01',
  author: 'Alicia Harrison',
  authorCredentials: 'MSN, APRN, FNP-C',  // Optional - defaults to 'MSN, APRN, FNP-C'
  excerpt: 'Brief summary...',
  image: '/images/blog/example.jpg',
  categories: ['category1', 'category2'],
  template: 'superior',  // Use 'superior' for full-width template
  disclaimer: 'This content is for educational purposes only...',  // Optional
  references: [  // Optional
    { text: 'Reference 1 citation', url: 'https://example.com' },
    { text: 'Reference 2 citation' }  // URL is optional
  ],
  content: `
    # Your Post Title

    Your markdown content here...

    ## Section with CTA

    Some content before the CTA.

    [CTA:Ready to Learn More?|Schedule a consultation to discuss your health goals.|/contact.html|Book a Call]

    More content after the CTA.

    ## Another Section

    [CTA-SOFT:Download the Guide|Get your free Holistic Habits Checklist.|#|Download Now]
  `
}

The template will automatically:
- Display author with credentials
- Show category tag
- Show reading progress bar
- Render in-content CTAs using [CTA:...] or [CTA-SOFT:...] placeholders
- Show disclaimer if provided
- Show references if provided
- Show previous/next post navigation
*/
