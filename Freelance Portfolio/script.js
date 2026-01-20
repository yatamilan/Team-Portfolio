const loader = document.querySelector(".loader");
const nameScreen = document.querySelector(".name-screen");
const welcomeScreen = document.querySelector(".welcome-screen");
const continueBtn = document.getElementById("continueBtn");
const skipBtn = document.getElementById("skipBtn");
const welcomeText = document.getElementById("welcomeText");

const storedName = localStorage.getItem("visitorName");
const WELCOME_DURATION = 3000;

/* INITIAL LOAD */
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hidden");

    if (!storedName) {
      nameScreen.classList.remove("hidden");
      gsap.from(".card", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power2.out"
      });
    } else {
      animateHero();
    }
  }, 700);
});

// NAvigation Smooth Scroll
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");

let menuOpen = false;

menuToggle.addEventListener("click", () => {
  if (!menuOpen) {
    gsap.to(sideMenu, { right: 0, duration: 0.6, ease: "power3.out" });
    menuOpen = true;
  } else {
    gsap.to(sideMenu, { right: "-100%", duration: 0.6, ease: "power3.in" });
    menuOpen = false;
  }
});

// Close menu on link click
document.querySelectorAll(".side-menu a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = link.getAttribute("href");

    // Close menu
    gsap.to(sideMenu, { right: "-100%", duration: 0.6 });
    menuOpen = false;

    // Smooth scroll
    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: target,
        offsetY: 80 // navbar height
      },
      ease: "power3.inOut"
    });
  });
});



/* PROCEED */
function proceed(name) {
  nameScreen.classList.add("hidden");

  welcomeText.innerHTML = name
    ? `Welcome, <span>${name}</span>. We’re glad you’re here.`
    : `Welcome. We’re glad you’re here.`;

  welcomeScreen.classList.remove("hidden");

  gsap.fromTo(
    welcomeText,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6 }
  );

  setTimeout(() => {
    gsap.to(welcomeScreen, {
      opacity: 0,
      duration: 0.6,
      onComplete: () => {
        welcomeScreen.classList.add("hidden");
        welcomeScreen.style.opacity = "";
        animateHero();
      }
    });
  }, WELCOME_DURATION);
}

/* EVENTS */
continueBtn.addEventListener("click", () => {
  const name = document.getElementById("username").value.trim();
  if (name) localStorage.setItem("visitorName", name);
  proceed(name);
});

skipBtn.addEventListener("click", () => {
  localStorage.setItem("visitorName", "Guest");
  proceed(null);
});

/* HERO ANIMATION */
function animateHero() {
  gsap.from(".hero-tag", { opacity: 0, y: 20, duration: 0.6 });
  gsap.from(".hero-title", { opacity: 0, y: 30, duration: 0.8, delay: 0.1 });
  gsap.from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.8, delay: 0.25 });
  gsap.from(".hero-actions a", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.4,
    stagger: 0.15
  });
}
// SERVICES ANIMATION
gsap.registerPlugin(ScrollTrigger);

gsap.from(".services-header", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
});

gsap.from(".service-card", {
  scrollTrigger: {
    trigger: ".services-grid",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
});

// PROJECTS ANIMATION
gsap.from(".projects-header", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
});

gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
});

gsap.from(".projects-extra", {
  scrollTrigger: {
    trigger: ".projects-extra",
    start: "top 90%",
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: "power2.out",
});

// PROCESS ANIMATION
gsap.from(".process-header", {
  scrollTrigger: {
    trigger: ".process",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
});

gsap.from(".process-step", {
  scrollTrigger: {
    trigger: ".process-steps",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
});
// TEAM ANIMATION
gsap.from(".team-header", {
  scrollTrigger: {
    trigger: ".team",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
});

gsap.from(".team-card", {
  scrollTrigger: {
    trigger: ".team-grid",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
});

// CONTACT ANIMATION
gsap.from(".contact-header", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: "power2.out",
});

gsap.from(".contact-card", {
  scrollTrigger: {
    trigger: ".contact-methods",
    start: "top 85%",
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
});
// FOOTER ANIMATION
gsap.from(".footer", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 95%",
  },
  opacity: 0,
  y: 20,
  duration: 0.8,
  ease: "power2.out",
});

