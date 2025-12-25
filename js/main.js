/* ============================================
   INTENTION HOLISTIC HEALTH - MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // -----------------------------------------
  // MOBILE MENU TOGGLE
  // -----------------------------------------
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // -----------------------------------------
  // HEADER SCROLL EFFECT
  // -----------------------------------------
  const header = document.querySelector('.header');

  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // -----------------------------------------
  // EXIT-INTENT & ENGAGEMENT POPUP
  // -----------------------------------------
  const popupOverlay = document.querySelector('.popup-overlay');
  const popupClose = document.querySelector('.popup-close');
  const POPUP_STORAGE_KEY = 'intentionPopupShown';
  const POPUP_EXPIRY_DAYS = 7;
  const IDLE_TIMEOUT = 45000; // 45 seconds of inactivity
  const PAGE_TIME_TRIGGER = 60000; // 60 seconds on page

  var popupShown = false;
  var idleTimer = null;
  var pageTimer = null;
  var lastActivity = Date.now();

  // Check if popup was already shown recently
  function wasPopupShownRecently() {
    const stored = localStorage.getItem(POPUP_STORAGE_KEY);
    if (!stored) return false;

    const shownDate = new Date(stored);
    const now = new Date();
    const diffDays = (now - shownDate) / (1000 * 60 * 60 * 24);

    return diffDays < POPUP_EXPIRY_DAYS;
  }

  // Show popup
  function showPopup() {
    if (popupOverlay && !wasPopupShownRecently() && !popupShown) {
      popupShown = true;
      popupOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      localStorage.setItem(POPUP_STORAGE_KEY, new Date().toISOString());
      // Clear timers when popup shows
      if (idleTimer) clearTimeout(idleTimer);
      if (pageTimer) clearTimeout(pageTimer);
    }
  }

  // Hide popup
  function hidePopup() {
    if (popupOverlay) {
      popupOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Reset idle timer on user activity
  function resetIdleTimer() {
    lastActivity = Date.now();
    if (idleTimer) clearTimeout(idleTimer);
    if (!popupShown && !wasPopupShownRecently()) {
      idleTimer = setTimeout(function() {
        showPopup();
      }, IDLE_TIMEOUT);
    }
  }

  if (popupOverlay) {
    // Exit intent detection (mouse leaves viewport from top)
    document.addEventListener('mouseout', function(e) {
      if (e.clientY < 10 && e.relatedTarget === null) {
        showPopup();
      }
    });

    // Idle timer - show popup after inactivity
    ['mousemove', 'keydown', 'scroll', 'touchstart', 'click'].forEach(function(event) {
      document.addEventListener(event, resetIdleTimer, { passive: true });
    });
    resetIdleTimer(); // Start the idle timer

    // Page time trigger - show popup after spending time on page
    if (!wasPopupShownRecently()) {
      pageTimer = setTimeout(function() {
        showPopup();
      }, PAGE_TIME_TRIGGER);
    }

    // Close popup on button click
    if (popupClose) {
      popupClose.addEventListener('click', hidePopup);
    }

    // Close popup on overlay click
    popupOverlay.addEventListener('click', function(e) {
      if (e.target === popupOverlay) {
        hidePopup();
      }
    });

    // Close popup on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        hidePopup();
      }
    });
  }

  // -----------------------------------------
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // -----------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // -----------------------------------------
  // FORM VALIDATION
  // -----------------------------------------
  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');

      requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
        } else {
          field.classList.remove('error');
        }

        // Email validation
        if (field.type === 'email' && field.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value.trim())) {
            isValid = false;
            field.classList.add('error');
          }
        }
      });

      if (!isValid) {
        e.preventDefault();
      }
    });
  });

  // -----------------------------------------
  // LAZY LOADING IMAGES
  // -----------------------------------------
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px'
    });

    lazyImages.forEach(function(img) {
      imageObserver.observe(img);
    });
  }

  // -----------------------------------------
  // BLOG CAROUSEL
  // -----------------------------------------
  const blogCarousel = document.querySelector('.blog-carousel');

  if (blogCarousel) {
    const track = blogCarousel.querySelector('.blog-carousel-track');
    const leftArrow = blogCarousel.querySelector('.carousel-arrow-left');
    const rightArrow = blogCarousel.querySelector('.carousel-arrow-right');

    if (track && leftArrow && rightArrow) {
      // Calculate scroll amount (one card width + gap)
      function getScrollAmount() {
        const card = track.querySelector('.card');
        if (card) {
          const cardStyle = window.getComputedStyle(card);
          const cardWidth = card.offsetWidth;
          const gap = parseInt(window.getComputedStyle(track).gap) || 24;
          return cardWidth + gap;
        }
        return 300;
      }

      // Update arrow visibility based on scroll position
      function updateArrows() {
        const scrollLeft = track.scrollLeft;
        const maxScroll = track.scrollWidth - track.clientWidth;

        leftArrow.disabled = scrollLeft <= 0;
        rightArrow.disabled = scrollLeft >= maxScroll - 1;
      }

      // Scroll handlers
      leftArrow.addEventListener('click', function() {
        track.scrollBy({
          left: -getScrollAmount(),
          behavior: 'smooth'
        });
      });

      rightArrow.addEventListener('click', function() {
        track.scrollBy({
          left: getScrollAmount(),
          behavior: 'smooth'
        });
      });

      // Update arrows on scroll
      track.addEventListener('scroll', updateArrows);

      // Initial arrow state
      updateArrows();

      // Update on resize
      window.addEventListener('resize', updateArrows);
    }
  }

  // -----------------------------------------
  // CURRENT YEAR IN FOOTER
  // -----------------------------------------
  const yearSpan = document.querySelector('.current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // -----------------------------------------
  // GOOGLE ANALYTICS 4 EVENT TRACKING
  // -----------------------------------------

  // Helper function to send GA4 events
  function trackEvent(eventName, params) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    }
  }

  // Track CTA button clicks
  document.querySelectorAll('[data-track-cta]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const ctaName = this.getAttribute('data-track-cta') || this.textContent.trim();
      const section = this.closest('[data-track-section]');
      const sectionName = section ? section.getAttribute('data-track-section') : 'unknown';

      trackEvent('cta_click', {
        cta_name: ctaName,
        section: sectionName,
        page_path: window.location.pathname
      });
    });
  });

  // Track section visibility (scroll tracking)
  if ('IntersectionObserver' in window) {
    const trackedSections = document.querySelectorAll('[data-track-section]');
    const sectionsSeen = new Set();

    const sectionObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const sectionName = entry.target.getAttribute('data-track-section');

          // Only track first view of each section per page load
          if (!sectionsSeen.has(sectionName)) {
            sectionsSeen.add(sectionName);
            trackEvent('section_view', {
              section_name: sectionName,
              page_path: window.location.pathname
            });
          }
        }
      });
    }, {
      threshold: 0.5 // Section must be 50% visible
    });

    trackedSections.forEach(function(section) {
      sectionObserver.observe(section);
    });
  }

  // Track form submissions
  document.querySelectorAll('form').forEach(function(form) {
    form.addEventListener('submit', function() {
      const formName = this.getAttribute('name') || this.getAttribute('data-form') || 'unknown_form';
      const formAction = this.getAttribute('action') || 'unknown';

      trackEvent('form_submit', {
        form_name: formName,
        form_action: formAction,
        page_path: window.location.pathname
      });
    });
  });

  // Track popup interactions
  if (popupOverlay) {
    // Track when popup is shown (override showPopup to add tracking)
    const originalShowPopup = showPopup;
    showPopup = function() {
      originalShowPopup();
      if (popupShown) {
        trackEvent('popup_shown', {
          popup_type: 'exit_intent',
          page_path: window.location.pathname
        });
      }
    };

    // Track popup close
    if (popupClose) {
      popupClose.addEventListener('click', function() {
        trackEvent('popup_closed', {
          popup_type: 'exit_intent',
          page_path: window.location.pathname
        });
      });
    }
  }

  // Track outbound link clicks
  document.querySelectorAll('a[href^="http"]').forEach(function(link) {
    if (!link.href.includes(window.location.hostname)) {
      link.addEventListener('click', function() {
        trackEvent('outbound_click', {
          link_url: this.href,
          link_text: this.textContent.trim().substring(0, 50),
          page_path: window.location.pathname
        });
      });
    }
  });

});
