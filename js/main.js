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
  // EXIT-INTENT POPUP
  // -----------------------------------------
  const popupOverlay = document.querySelector('.popup-overlay');
  const popupClose = document.querySelector('.popup-close');
  const POPUP_STORAGE_KEY = 'intentionPopupShown';
  const POPUP_EXPIRY_DAYS = 7;

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
    if (popupOverlay && !wasPopupShownRecently()) {
      popupOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      localStorage.setItem(POPUP_STORAGE_KEY, new Date().toISOString());
    }
  }

  // Hide popup
  function hidePopup() {
    if (popupOverlay) {
      popupOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Exit intent detection (mouse leaves viewport from top)
  if (popupOverlay) {
    document.addEventListener('mouseout', function(e) {
      if (e.clientY < 10 && e.relatedTarget === null) {
        showPopup();
      }
    });

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
  // CURRENT YEAR IN FOOTER
  // -----------------------------------------
  const yearSpan = document.querySelector('.current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
