// Edge Function to inject dynamic Open Graph tags for blog posts
// This ensures social media crawlers (Facebook, LinkedIn, Twitter) see correct metadata

const SITE_URL = 'https://www.intentionholistichealth.com';

// Blog post metadata - keep in sync with js/blog.js
// Only includes fields needed for OG tags
const BLOG_POSTS = {
  '2025-01-09-labs-normal-feel-off': {
    title: 'Why Your Labs Came Back "Normal" (But You Still Feel Off)',
    excerpt: 'You got your blood work done, waited for results, and everything looks "normal." But you don\'t feel normal. Your symptoms are real—here\'s why standard labs might not tell the whole story.',
    image: '/images/blog/labs-normal-feel-off.webp'
  },
  '2024-12-15-holiday-wellness': {
    title: 'Holiday Wellness for Women: Staying Grounded Without Extremes',
    excerpt: 'The holidays tend to bring a lot to the surface. Not because anyone is doing something wrong — but because life gets fuller all at once.',
    image: '/images/blog/holiday-wellness.webp'
  },
  '2024-12-01-unmedicated-birth': {
    title: 'How I Prepared for an Unmedicated Birth',
    excerpt: 'My personal story, not medical advice. Preparing for an unmedicated birth wasn\'t about perfection—it was about intention.',
    image: '/images/blog/unmedicated-birth-new.webp'
  },
  '2024-11-15-body-first-home': {
    title: 'Your Body Is the First Home: Returning to the Foundations That Support Fertility and Pregnancy Health',
    excerpt: 'You don\'t need perfection to prepare for pregnancy — you need foundations.',
    image: '/images/blog/body-first-home-new.webp'
  },
  '2024-05-15-mental-health-pcos': {
    title: 'May is Mental Health Awareness Month',
    excerpt: 'Women with PCOS experience anxiety and depression 3x more often than women without the condition. Let\'s talk about practical ways to support your mental health.',
    image: '/images/blog/mental-health-pcos.webp'
  },
  '2024-10-15-probiotic-smoothie-bowl': {
    title: 'Recipe: Probiotic-Rich Smoothie Bowl',
    excerpt: 'Looking for a delicious and nutritious way to start your day? This smoothie bowl is packed with fiber, protein, and gut-friendly ingredients.',
    image: '/images/blog/smoothie-bowl-square.webp'
  },
  '2024-10-01-gut-health-pcos': {
    title: 'Gut Health and PCOS: The Missing Piece of the Puzzle',
    excerpt: 'The trillions of microorganisms in your gut play crucial roles in hormone regulation and inflammation control. Understanding this connection is key to managing PCOS.',
    image: '/images/blog/gut-health-pcos-new.webp'
  },
  '2024-09-15-hormone-friendly-granola': {
    title: 'Recipe: Hormone-Friendly Granola',
    excerpt: 'An all-time-favorite snack: granola that is both delicious and packed with hormone-friendly ingredients to support health and wellbeing from the inside out.',
    image: '/images/blog/granola.webp'
  }
};

export default async function handler(request, context) {
  // Get the URL and check for post parameter
  const url = new URL(request.url);
  const postSlug = url.searchParams.get('post');

  // If no post parameter, let the request pass through
  if (!postSlug) {
    return context.next();
  }

  // Look up the post metadata
  const post = BLOG_POSTS[postSlug];

  // If post not found, let the request pass through with default OG tags
  if (!post) {
    return context.next();
  }

  // Fetch the original HTML
  const response = await context.next();
  const html = await response.text();

  // Build the canonical URL
  const canonicalUrl = `${SITE_URL}/blog/post.html?post=${postSlug}`;
  const imageUrl = `${SITE_URL}${post.image}`;

  // Create the OG meta tags to inject
  const ogTags = `
    <!-- Dynamic OG Tags (injected by Edge Function) -->
    <meta property="og:title" content="${escapeHtml(post.title)}">
    <meta property="og:description" content="${escapeHtml(post.excerpt)}">
    <meta property="og:image" content="${imageUrl}">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Intention Holistic Health">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(post.title)}">
    <meta name="twitter:description" content="${escapeHtml(post.excerpt)}">
    <meta name="twitter:image" content="${imageUrl}">
    <meta name="description" content="${escapeHtml(post.excerpt)}">
    <link rel="canonical" href="${canonicalUrl}">
    <!-- End Dynamic OG Tags -->
`;

  // Remove any existing OG tags and meta description to avoid duplicates
  let modifiedHtml = html
    .replace(/<meta property="og:[^>]*>/gi, '')
    .replace(/<meta name="twitter:[^>]*>/gi, '')
    .replace(/<meta name="description"[^>]*>/gi, '')
    .replace(/<link rel="canonical"[^>]*>/gi, '');

  // Inject the new OG tags right after <head>
  modifiedHtml = modifiedHtml.replace(/<head>/i, `<head>${ogTags}`);

  // Also update the <title> tag
  modifiedHtml = modifiedHtml.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${escapeHtml(post.title)} | Intention Holistic Health</title>`
  );

  // Return the modified HTML
  return new Response(modifiedHtml, {
    status: response.status,
    headers: response.headers
  });
}

// Helper function to escape HTML entities
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Configure which paths this edge function runs on
export const config = {
  path: ["/blog/post.html", "/blog/post-superior.html"]
};
