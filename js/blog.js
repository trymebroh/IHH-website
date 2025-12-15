/* ============================================
   BLOG JAVASCRIPT
   Handles markdown parsing and blog functionality
   ============================================ */

// Blog post data - this would typically come from a build process
// For simplicity, we define posts here that can be easily updated
const BLOG_POSTS = [
  {
    slug: '2024-12-01-unmedicated-birth',
    title: 'How I Prepared for an Unmedicated Birth',
    date: '2024-12-01',
    author: 'Alicia',
    excerpt: 'Sharing my journey and the holistic practices that helped me prepare for an unmedicated birth experience.',
    image: '/images/blog/unmedicated-birth.jpg',
    categories: ['foundations', 'preconception'],
    content: `
# How I Prepared for an Unmedicated Birth

Preparing for an unmedicated birth was one of the most intentional decisions I made during my pregnancy journey. Today, I want to share the practices and mindset shifts that helped me along the way.

## Starting with Education

The first step in my preparation was education. I read books, took courses, and surrounded myself with positive birth stories. Understanding the physiological process of birth helped me trust my body's ability to do what it was designed to do.

## Building My Support Team

Having the right support team was crucial. I chose a care provider who supported my birth preferences and hired a doula who would be with me throughout labor. Their belief in my ability to birth naturally gave me confidence.

## Physical Preparation

I focused on several physical practices:

- **Prenatal yoga** to build strength and flexibility
- **Walking daily** to keep my body moving
- **Optimal fetal positioning exercises** to encourage baby into a good position
- **Perineal massage** in the final weeks

## Mental and Emotional Work

Birth is as much mental as it is physical. I practiced:

- Daily affirmations and visualization
- Breathing techniques for relaxation
- Addressing any fears that came up through journaling and therapy

## Nutrition and Supplements

I worked with my practitioner to ensure my body had everything it needed:

- Eating protein-rich, nutrient-dense foods
- Taking high-quality prenatal vitamins
- Staying well-hydrated
- Red raspberry leaf tea in the third trimester

## The Result

While every birth is unique and unpredictable, I felt prepared for whatever came my way. The work I did beforehand gave me tools to handle the intensity of labor and the confidence to advocate for myself.

If you're considering an unmedicated birth, know that preparation matters. It's not about being rigid in your plans—it's about building a foundation of knowledge, support, and trust in yourself.
    `
  },
  {
    slug: '2024-11-15-body-first-home',
    title: 'Your Body Is the First Home',
    date: '2024-11-15',
    author: 'Alicia',
    excerpt: 'Returning to the foundations that support fertility and pregnancy health.',
    image: '/images/blog/body-first-home.jpg',
    categories: ['foundations', 'preconception'],
    content: `
# Your Body Is the First Home

Before your baby has a nursery, before they have clothes or toys or a name picked out—they have your body. Your body is their first home.

This perspective shift changed everything for me when I was preparing for pregnancy.

## What Does This Mean Practically?

Thinking of your body as your baby's first home means:

- **Nourishing yourself** isn't selfish—it's preparation
- **Reducing toxins** in your environment protects your future child
- **Managing stress** creates a calmer internal environment
- **Healing your own health** breaks generational patterns

## The Foundations That Matter

### 1. Blood Sugar Balance

Stable blood sugar creates a more stable hormonal environment. This means:
- Eating protein with every meal
- Not skipping meals
- Reducing refined sugars and processed carbs
- Including healthy fats

### 2. Mineral Status

Minerals are the spark plugs of your body. They're involved in hundreds of processes, including:
- Hormone production
- Egg quality
- Thyroid function
- Stress response

This is why I'm passionate about HTMA testing—it gives us a window into your mineral status.

### 3. Gut Health

Your gut health affects everything from nutrient absorption to hormone metabolism. Supporting your gut means:
- Eating diverse, fiber-rich foods
- Including fermented foods
- Addressing any digestive issues before pregnancy

### 4. Toxin Reduction

We can't control every exposure, but we can reduce our overall burden:
- Switching to cleaner personal care products
- Filtering drinking water
- Choosing organic when possible
- Using non-toxic cleaning products

## Start Where You Are

You don't have to do everything at once. Pick one foundation and start there. Small, consistent changes add up to big transformations.

Your body is already incredible. These foundations just help it function at its best—for you and for your future little one.
    `
  },
  {
    slug: '2024-11-01-gut-health-pcos',
    title: 'Gut Health and PCOS',
    date: '2024-11-01',
    author: 'Alicia',
    excerpt: 'Understanding the connection between your gut microbiome and hormonal health.',
    image: '/images/blog/gut-health-pcos.jpg',
    categories: ['pcos', 'foundations'],
    content: `
# Gut Health and PCOS

If you have PCOS, you've probably focused on hormones, blood sugar, and maybe even stress. But have you considered your gut health?

The connection between gut health and PCOS is more significant than most people realize.

## The Gut-Hormone Connection

Your gut does more than digest food. It:

- **Metabolizes hormones** - including estrogen through the estrobolome
- **Affects inflammation** - gut dysbiosis increases systemic inflammation
- **Influences insulin sensitivity** - certain gut bacteria affect how you process sugar
- **Produces neurotransmitters** - affecting mood and stress response

## How Gut Dysbiosis Affects PCOS

Research shows that women with PCOS often have:

- Less microbial diversity
- Higher levels of certain bacteria linked to inflammation
- Increased intestinal permeability ("leaky gut")

This creates a cycle: poor gut health worsens PCOS symptoms, and the metabolic dysfunction of PCOS affects gut health.

## Supporting Your Gut with PCOS

### 1. Fiber First

Fiber feeds beneficial bacteria. Aim for:
- Vegetables at every meal
- Legumes (if tolerated)
- Nuts and seeds
- Some whole grains

### 2. Fermented Foods

Include foods that provide beneficial bacteria:
- Sauerkraut
- Kimchi
- Yogurt (if dairy is tolerated)
- Kefir
- Kombucha

### 3. Reduce Inflammatory Foods

For many women with PCOS, this means:
- Reducing refined sugars
- Limiting processed foods
- Identifying personal triggers (gluten, dairy, etc.)

### 4. Manage Stress

Chronic stress damages gut lining and disrupts the microbiome. Stress management isn't optional—it's foundational.

### 5. Consider Testing

Functional stool testing can identify specific imbalances that might be affecting your PCOS. This allows for targeted support rather than guessing.

## The Bottom Line

Healing PCOS isn't just about hormones. It's about supporting all the systems that influence hormone health—and your gut is a big piece of that puzzle.

If you've been struggling with PCOS and haven't addressed gut health, this might be the missing piece you've been looking for.
    `
  }
];

// -----------------------------------------
// UTILITY FUNCTIONS
// -----------------------------------------

// Simple markdown parser
function parseMarkdown(markdown) {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');

  // Wrap consecutive li elements in ul
  html = html.replace(/(<li>.*<\/li>\n?)+/gim, function(match) {
    return '<ul>' + match + '</ul>';
  });

  // Paragraphs (lines that don't start with < and aren't empty)
  html = html.split('\n').map(function(line) {
    line = line.trim();
    if (line && !line.startsWith('<') && !line.startsWith('#')) {
      return '<p>' + line + '</p>';
    }
    return line;
  }).join('\n');

  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>\s*<\/p>/g, '');

  return html;
}

// Format date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// -----------------------------------------
// BLOG LISTING PAGE
// -----------------------------------------

function renderBlogListing() {
  const blogPostsContainer = document.getElementById('blog-posts');
  if (!blogPostsContainer) return;

  // Sort posts by date (newest first)
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Render posts
  let html = '';
  sortedPosts.forEach(function(post) {
    html += `
      <article class="blog-card">
        <img src="${post.image}" alt="${post.title}" class="blog-card-image" loading="lazy" onerror="this.src='/images/blog/placeholder.jpg'">
        <div class="blog-card-body">
          <p class="blog-card-date">${formatDate(post.date)}</p>
          <h2 class="blog-card-title">
            <a href="/blog/post.html?post=${post.slug}">${post.title}</a>
          </h2>
          <p class="blog-card-excerpt">${post.excerpt}</p>
          <a href="/blog/post.html?post=${post.slug}" class="blog-card-link">Continue Reading &rarr;</a>
        </div>
      </article>
    `;
  });

  blogPostsContainer.innerHTML = html;

  // Set up category filtering
  setupCategoryFiltering(sortedPosts);
}

function setupCategoryFiltering(posts) {
  const categoryLinks = document.querySelectorAll('.category-link');

  categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Update active state
      categoryLinks.forEach(function(l) { l.classList.remove('active'); });
      this.classList.add('active');

      const category = this.dataset.category;
      const blogPostsContainer = document.getElementById('blog-posts');

      // Filter posts
      let filteredPosts = posts;
      if (category !== 'all') {
        filteredPosts = posts.filter(function(post) {
          return post.categories.includes(category);
        });
      }

      // Re-render
      if (filteredPosts.length === 0) {
        blogPostsContainer.innerHTML = '<p class="loading-message">No posts found in this category.</p>';
      } else {
        let html = '';
        filteredPosts.forEach(function(post) {
          html += `
            <article class="blog-card">
              <img src="${post.image}" alt="${post.title}" class="blog-card-image" loading="lazy" onerror="this.src='/images/blog/placeholder.jpg'">
              <div class="blog-card-body">
                <p class="blog-card-date">${formatDate(post.date)}</p>
                <h2 class="blog-card-title">
                  <a href="/blog/post.html?post=${post.slug}">${post.title}</a>
                </h2>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <a href="/blog/post.html?post=${post.slug}" class="blog-card-link">Continue Reading &rarr;</a>
              </div>
            </article>
          `;
        });
        blogPostsContainer.innerHTML = html;
      }
    });
  });
}

// -----------------------------------------
// SINGLE POST PAGE
// -----------------------------------------

function renderSinglePost() {
  const postContent = document.getElementById('post-content');
  if (!postContent) return;

  // Get post slug from URL
  const urlParams = new URLSearchParams(window.location.search);
  const postSlug = urlParams.get('post');

  if (!postSlug) {
    postContent.innerHTML = '<p>Post not found. <a href="/blog/">Return to blog</a></p>';
    return;
  }

  // Find the post
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

  // Render post header
  const postTitle = document.getElementById('post-title');
  if (postTitle) {
    postTitle.textContent = post.title;
  }

  const postMeta = document.getElementById('post-meta');
  if (postMeta) {
    postMeta.innerHTML = `
      <span class="post-date">${formatDate(post.date)}</span>
      <span class="post-author">By ${post.author}</span>
    `;
  }

  // Render featured image
  const postImage = document.getElementById('post-image');
  if (postImage) {
    postImage.innerHTML = `<img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.parentElement.style.display='none'">`;
  }

  // Render content
  postContent.innerHTML = parseMarkdown(post.content);

  // Render tags
  const postTags = document.getElementById('post-tags');
  if (postTags && post.categories) {
    let tagsHtml = '';
    post.categories.forEach(function(category) {
      tagsHtml += `<span class="post-tag">${category}</span>`;
    });
    postTags.innerHTML = tagsHtml;
  }

  // Set up share buttons
  setupShareButtons(post);
}

function setupShareButtons(post) {
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
}

// -----------------------------------------
// INITIALIZE
// -----------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  // Check which page we're on and initialize accordingly
  if (document.getElementById('blog-posts')) {
    renderBlogListing();
  } else if (document.getElementById('post-content')) {
    renderSinglePost();
  }
});
