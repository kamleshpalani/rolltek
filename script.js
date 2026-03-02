/* ========================================
   ROLLTEK TECHNOLOGIES – INTERACTIONS
   Scroll effects, nav, animations
   ======================================== */

(function () {
  "use strict";

  /* ---- Sticky Nav ---- */
  const header = document.getElementById("header");

  function handleScroll() {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    updateActiveNav();
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  /* ---- Active Nav Link ---- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__link");

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    let currentId = "";

    sections.forEach((sec) => {
      if (scrollY >= sec.offsetTop) {
        currentId = sec.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentId) {
        link.classList.add("active");
      }
    });
  }

  /* ---- Mobile Menu ---- */
  const navToggle = document.getElementById("navToggle");
  const navLinksEl = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("open");
    navLinksEl.classList.toggle("open");
    document.body.style.overflow = navLinksEl.classList.contains("open")
      ? "hidden"
      : "";
  });

  // Close on link click
  navLinksEl.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("open");
      navLinksEl.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target) && navLinksEl.classList.contains("open")) {
      navToggle.classList.remove("open");
      navLinksEl.classList.remove("open");
      document.body.style.overflow = "";
    }
  });

  /* ---- Scroll Reveal ---- */
  const revealElements = document.querySelectorAll(
    ".service-card, .stack-category, .process-step, .why-card, " +
      ".about-metric, .contact-item, .stat-card, .step-content, .highlight-item",
  );

  // Add reveal class to elements
  revealElements.forEach((el, i) => {
    el.classList.add("reveal");
    // Stagger siblings in the same parent
    const siblings = el.parentElement ? el.parentElement.children : [];
    const idx = Array.from(siblings).indexOf(el);
    if (idx > 0 && idx <= 4) {
      el.classList.add("reveal-delay-" + idx);
    }
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // Also reveal section headers
  document
    .querySelectorAll(".section-header, .about__content, .why__content")
    .forEach((el) => {
      el.classList.add("reveal");
      revealObserver.observe(el);
    });

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });

  /* ---- Service card subtle tilt ---- */
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `translateY(-6px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  /* ---- Why cards tilt ---- */
  document.querySelectorAll(".why-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `translateY(-4px) rotateX(${-dy * 3}deg) rotateY(${dx * 3}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  /* ---- Counter animation for stats ---- */
  function animateCounter(el, target, duration) {
    const start = performance.now();
    const isFloat = target % 1 !== 0;

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const value = target * ease;
      el.textContent = isFloat
        ? value.toFixed(0) + "%"
        : (value >= 100 ? Math.floor(value) : Math.floor(value)) +
          el.dataset.suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  const statNumbers = document.querySelectorAll(".stat-number");
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statNumbers.forEach((el) => {
          const text = el.textContent.trim();
          const numStr = text.replace(/[^0-9.]/g, "");
          const suffix = text.replace(/[0-9.]/g, "");
          const num = parseFloat(numStr);
          if (!isNaN(num)) {
            el.dataset.suffix = suffix;
            animateCounter(el, num, 1800);
          }
        });
      }
    },
    { threshold: 0.5 },
  );

  const heroStats = document.querySelector(".hero__stats");
  if (heroStats) statsObserver.observe(heroStats);

  /* ---- Metric counter in About ---- */
  const metricValues = document.querySelectorAll(".metric-value");
  let metricsAnimated = false;

  const metricsObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !metricsAnimated) {
        metricsAnimated = true;
        metricValues.forEach((el) => {
          const text = el.textContent.trim();
          const numStr = text.replace(/[^0-9.]/g, "");
          const suffix = text.replace(/[0-9.]/g, "");
          const num = parseFloat(numStr);
          if (!isNaN(num)) {
            el.dataset.suffix = suffix;
            animateCounter(el, num, 1500);
          }
        });
      }
    },
    { threshold: 0.5 },
  );

  const aboutMetrics = document.querySelector(".about__card-grid");
  if (aboutMetrics) metricsObserver.observe(aboutMetrics);

  /* ---- Form: simple UX feedback ---- */
  const submitBtn = document.querySelector(".form__submit");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        submitBtn.textContent = "Please fill required fields";
        submitBtn.style.background =
          "linear-gradient(135deg, #ef4444, #dc2626)";
        setTimeout(() => {
          submitBtn.innerHTML =
            'Send Message <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l12 0M10 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
          submitBtn.style.background = "";
        }, 2200);
        return;
      }

      const originalHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = "✓ Message Sent!";
      submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)";
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalHTML;
        submitBtn.style.background = "";
        submitBtn.disabled = false;
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("service").value = "";
      }, 3000);
    });
  }

  /* ---- Cursor glow (optional subtle effect) ---- */
  const cursorGlow = document.createElement("div");
  cursorGlow.style.cssText = `
    position: fixed; pointer-events: none; z-index: 9999;
    width: 300px; height: 300px; border-radius: 50%;
    background: radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: left 0.12s ease, top 0.12s ease;
    will-change: left, top;
  `;
  document.body.appendChild(cursorGlow);

  document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
  });

  // Hide on leave, show on enter
  document.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    cursorGlow.style.opacity = "1";
  });
})();
