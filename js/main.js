/* ============================================
   INTENTION HOLISTIC HEALTH - MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // -----------------------------------------
  // FORM SUCCESS MESSAGES
  // -----------------------------------------
  (function() {
    var params = new URLSearchParams(window.location.search);
    var message = null;

    if (params.get('success') === 'true') {
      message = 'Thank you! Your message has been sent successfully.';
    } else if (params.get('success') === 'application') {
      message = 'Thank you! Your application has been submitted. We\'ll be in touch soon!';
    } else if (params.get('subscribed') === 'true') {
      message = 'Thank you for subscribing! Check your inbox for updates.';
    }

    if (message) {
      // Create success banner
      var banner = document.createElement('div');
      banner.className = 'form-success-banner';
      banner.innerHTML = '<span>' + message + '</span><button class="form-success-close" aria-label="Close">&times;</button>';
      document.body.insertBefore(banner, document.body.firstChild);

      // Show with animation
      setTimeout(function() {
        banner.classList.add('visible');
      }, 100);

      // Close button
      banner.querySelector('.form-success-close').addEventListener('click', function() {
        banner.classList.remove('visible');
        setTimeout(function() {
          banner.remove();
        }, 300);
      });

      // Auto-hide after 8 seconds
      setTimeout(function() {
        if (banner.classList.contains('visible')) {
          banner.classList.remove('visible');
          setTimeout(function() {
            banner.remove();
          }, 300);
        }
      }, 8000);

      // Clean URL without reload
      if (window.history.replaceState) {
        var cleanUrl = window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
      }
    }
  })();

  // -----------------------------------------
  // PORTAL REDIRECT OVERLAY
  // -----------------------------------------
  (function() {
    // Portal URLs - update these when links change
    var PORTAL_URLS = {
      default: 'https://my.practicebetter.io/#/65f9b5add14abe8b539487a6/forms?f=69627b92b758cb04b246009e',
      labReview: 'https://my.practicebetter.io/#/65f9b5add14abe8b539487a6/forms?f=69627b92b758cb04b246009e', // Same intake form as services
      signin: 'https://my.practicebetter.io/#/signin', // Patient Portal signin page
      fullscript: 'https://us.fullscript.com/welcome/intentionholistichealth' // Supplements store
    };
    var REDIRECT_DELAY = 1500; // 1.5 seconds

    // Helper function to show Practice Better overlay and redirect
    function showPortalOverlay(destinationUrl) {
      // Create overlay
      var overlay = document.createElement('div');
      overlay.className = 'portal-redirect-overlay';
      overlay.innerHTML =
        '<div class="portal-redirect-content">' +
          '<img src="/images/logo.webp" alt="Intention Holistic Health" class="portal-redirect-logo">' +
          '<h2 class="portal-redirect-title">Continuing to Secure Portal</h2>' +
          '<div class="portal-redirect-dots"><span></span><span></span><span></span></div>' +
          '<div class="portal-redirect-badge">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
              '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' +
            '</svg>' +
            '<span>HIPAA Compliant & Secure</span>' +
          '</div>' +
        '</div>';

      document.body.appendChild(overlay);

      // Trigger animation
      setTimeout(function() {
        overlay.classList.add('active');
      }, 10);

      // Redirect after delay
      setTimeout(function() {
        window.location.href = destinationUrl;
      }, REDIRECT_DELAY);
    }

    // Helper function to show Fullscript overlay and redirect
    function showFullscriptOverlay(destinationUrl) {
      var overlay = document.createElement('div');
      overlay.className = 'portal-redirect-overlay';
      overlay.innerHTML =
        '<div class="portal-redirect-content">' +
          '<img src="/images/logo.webp" alt="Intention Holistic Health" class="portal-redirect-logo">' +
          '<h2 class="portal-redirect-title">Continuing to Your Supplements</h2>' +
          '<div class="portal-redirect-dots"><span></span><span></span><span></span></div>' +
          '<div class="portal-redirect-badge">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
              '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>' +
            '</svg>' +
            '<span>Curated by Your Practitioner</span>' +
          '</div>' +
        '</div>';

      document.body.appendChild(overlay);

      setTimeout(function() {
        overlay.classList.add('active');
      }, 10);

      setTimeout(function() {
        window.location.href = destinationUrl;
      }, REDIRECT_DELAY);
    }

    // Default portal links (1:1 Wellness, HTMA, etc.)
    var portalLinks = document.querySelectorAll('[data-portal]');
    portalLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        showPortalOverlay(PORTAL_URLS.default);
      });
    });

    // Lab Review portal links
    var labReviewLinks = document.querySelectorAll('[data-portal-lab-review]');
    labReviewLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        showPortalOverlay(PORTAL_URLS.labReview);
      });
    });

    // Patient Portal signin links (nav and footer)
    var signinLinks = document.querySelectorAll('[data-portal-signin]');
    signinLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        showPortalOverlay(PORTAL_URLS.signin);
      });
    });

    // Fullscript supplement store links
    var fullscriptLinks = document.querySelectorAll('[data-fullscript]');
    fullscriptLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        showFullscriptOverlay(PORTAL_URLS.fullscript);
      });
    });
  })();

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
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          if (window.scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
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
      // Cache scroll amount (recalculated on resize)
      let cachedScrollAmount = 300;

      // Calculate scroll amount (one card width + gap)
      function updateScrollAmount() {
        const card = track.querySelector('.card');
        if (card) {
          const cardWidth = card.offsetWidth;
          const gap = parseInt(window.getComputedStyle(track).gap) || 24;
          cachedScrollAmount = cardWidth + gap;
        }
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
          left: -cachedScrollAmount,
          behavior: 'smooth'
        });
      });

      rightArrow.addEventListener('click', function() {
        track.scrollBy({
          left: cachedScrollAmount,
          behavior: 'smooth'
        });
      });

      // Update arrows on scroll with passive listener
      track.addEventListener('scroll', updateArrows, { passive: true });

      // Initial state
      updateScrollAmount();
      updateArrows();

      // Debounced resize handler
      let resizeTimeout;
      window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
          updateScrollAmount();
          updateArrows();
        }, 150);
      }, { passive: true });
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

  // -----------------------------------------
  // SCROLL MILESTONE TRACKING (25%, 50%, 75%, 100%)
  // -----------------------------------------
  (function() {
    var scrollMilestones = [25, 50, 75, 100];
    var milestonesReached = new Set();

    function getScrollPercentage() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight === 0) return 100;
      return Math.round((scrollTop / docHeight) * 100);
    }

    function checkScrollMilestones() {
      var currentScroll = getScrollPercentage();

      scrollMilestones.forEach(function(milestone) {
        if (currentScroll >= milestone && !milestonesReached.has(milestone)) {
          milestonesReached.add(milestone);
          trackEvent('scroll_milestone', {
            milestone_percent: milestone,
            page_path: window.location.pathname,
            page_title: document.title
          });
        }
      });
    }

    // Throttled scroll handler
    var scrollTimeout;
    window.addEventListener('scroll', function() {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(function() {
        scrollTimeout = null;
        checkScrollMilestones();
      }, 200);
    }, { passive: true });
  })();

  // -----------------------------------------
  // TIME ON PAGE THRESHOLDS (30s, 60s, 2min, 5min)
  // -----------------------------------------
  (function() {
    var timeThresholds = [
      { seconds: 30, label: '30_seconds' },
      { seconds: 60, label: '1_minute' },
      { seconds: 120, label: '2_minutes' },
      { seconds: 300, label: '5_minutes' }
    ];

    timeThresholds.forEach(function(threshold) {
      setTimeout(function() {
        trackEvent('time_on_page', {
          time_threshold: threshold.label,
          seconds: threshold.seconds,
          page_path: window.location.pathname,
          page_title: document.title
        });
      }, threshold.seconds * 1000);
    });
  })();

  // -----------------------------------------
  // FORM FIELD TRACKING (Abandonment Analysis)
  // -----------------------------------------
  (function() {
    var trackedForms = document.querySelectorAll('form');

    trackedForms.forEach(function(form) {
      var formName = form.getAttribute('name') || form.getAttribute('data-form') || 'unknown_form';
      var formStarted = false;
      var fieldsInteracted = new Set();

      // Get all input fields
      var fields = form.querySelectorAll('input, textarea, select');

      fields.forEach(function(field) {
        var fieldName = field.getAttribute('name') || field.getAttribute('id') || field.type;

        // Track first interaction with form
        field.addEventListener('focus', function() {
          fieldsInteracted.add(fieldName);

          // Track form start (first field focus)
          if (!formStarted) {
            formStarted = true;
            trackEvent('form_start', {
              form_name: formName,
              first_field: fieldName,
              page_path: window.location.pathname
            });
          }

          // Track each field focus
          trackEvent('form_field_focus', {
            form_name: formName,
            field_name: fieldName,
            fields_completed: fieldsInteracted.size,
            page_path: window.location.pathname
          });
        });
      });

      // Track form abandonment when user leaves page
      window.addEventListener('beforeunload', function() {
        if (formStarted && fieldsInteracted.size > 0) {
          // Check if form was submitted (form will have a submit flag)
          if (!form.dataset.submitted) {
            // Use sendBeacon for reliable tracking on page exit
            var data = {
              form_name: formName,
              fields_completed: fieldsInteracted.size,
              last_field: Array.from(fieldsInteracted).pop(),
              page_path: window.location.pathname
            };

            // Send via beacon if available
            if (navigator.sendBeacon && typeof gtag === 'function') {
              // gtag doesn't support sendBeacon directly, so we track on focus events instead
            }
          }
        }
      });

      // Mark form as submitted
      form.addEventListener('submit', function() {
        form.dataset.submitted = 'true';
      });
    });
  })();

  // -----------------------------------------
  // MAILERLITE NEWSLETTER FORMS
  // -----------------------------------------
  (function() {
    var mailerliteForms = document.querySelectorAll('[data-mailerlite]');

    mailerliteForms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        var emailInput = form.querySelector('input[type="email"]');
        var firstNameInput = form.querySelector('input[name="first-name"]');
        var submitBtn = form.querySelector('button[type="submit"]');
        var messageEl = form.querySelector('.form-message');
        var formType = form.getAttribute('data-form-type') || 'newsletter';

        // Validate email
        var email = emailInput ? emailInput.value.trim() : '';
        if (!email || !email.includes('@')) {
          showFormMessage(messageEl, 'Please enter a valid email address.', 'error');
          return;
        }

        // Disable button and show loading state
        var originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        // Build request data
        var data = {
          email: email,
          formType: formType
        };

        if (firstNameInput && firstNameInput.value.trim()) {
          data.firstName = firstNameInput.value.trim();
        }

        // Send to Netlify function
        fetch('/.netlify/functions/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        .then(function(response) {
          return response.json().then(function(result) {
            return { ok: response.ok, data: result };
          });
        })
        .then(function(response) {
          if (response.ok && response.data.success) {
            // Success!
            showFormMessage(messageEl, response.data.message, 'success');
            form.reset();

            // Track successful subscription
            if (typeof trackEvent === 'function') {
              trackEvent('newsletter_subscribe', {
                form_type: formType,
                page_path: window.location.pathname
              });
            }

            // For lead magnet popup, close after success
            if (formType === 'lead-magnet') {
              setTimeout(function() {
                var popupOverlay = document.querySelector('.popup-overlay');
                if (popupOverlay) {
                  popupOverlay.classList.remove('active');
                  document.body.style.overflow = '';
                }
              }, 2000);
            }
          } else {
            // Error from API
            showFormMessage(messageEl, response.data.error || 'Something went wrong. Please try again.', 'error');
          }
        })
        .catch(function(error) {
          console.error('Newsletter subscription error:', error);
          showFormMessage(messageEl, 'Something went wrong. Please try again.', 'error');
        })
        .finally(function() {
          // Re-enable button
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        });
      });
    });

    function showFormMessage(el, message, type) {
      if (!el) return;

      // Set icon based on type
      var icon = type === 'error' ? '✕' : '✓';
      el.innerHTML = '<span class="form-message-icon">' + icon + '</span> ' + message;

      // Apply styles
      el.style.cssText = 'display: flex; align-items: center; gap: 8px; padding: 12px 16px; border-radius: 8px; font-size: 0.9rem; opacity: 0; transform: translateY(-10px); transition: opacity 0.3s ease, transform 0.3s ease;';

      if (type === 'error') {
        el.style.background = '#fef2f2';
        el.style.color = '#991b1b';
        el.style.border = '1px solid #fecaca';
      } else {
        el.style.background = '#f0fdf4';
        el.style.color = '#166534';
        el.style.border = '1px solid #bbf7d0';
      }

      // Trigger animation
      requestAnimationFrame(function() {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });

      // Auto-hide after 5 seconds with fade out
      setTimeout(function() {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-10px)';
        setTimeout(function() {
          el.style.display = 'none';
        }, 300);
      }, 5000);
    }
  })();

});
