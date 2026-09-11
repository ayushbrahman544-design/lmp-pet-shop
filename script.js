/* ===============================
   LMP PET SHOP WEBSITE
================================ */


/* LOADER */

window.addEventListener("load", function () {

  setTimeout(function () {
    document.getElementById("loader").classList.add("hide");
  }, 2700);

});


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

  navMenu.classList.toggle("show");

  if (navMenu.classList.contains("show")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }

});


/* CLOSE MOBILE MENU AFTER CLICK */

document.querySelectorAll(".nav-link").forEach(function (link) {

  link.addEventListener("click", function () {

    navMenu.classList.remove("show");
    menuBtn.textContent = "☰";

  });

});


/* ACTIVE NAVIGATION */

const sections = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

  let currentSection = "";

  sections.forEach(function (section) {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }

  });

  navLinks.forEach(function (link) {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }

  });

});


/* REVEAL ANIMATION */

const revealElements = document.querySelectorAll(
  ".feature-card, .category-card, .contact-card, .enquiry-box, .product-banner, .location-content, .map-box"
);

const revealObserver = new IntersectionObserver(function (entries) {

  entries.forEach(function (entry) {

    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-show");
    }

  });

}, {
  threshold: 0.15
});

revealElements.forEach(function (element) {

  element.classList.add("reveal-hidden");
  revealObserver.observe(element);

});


/* PRODUCT ENQUIRY BUTTONS */

const enquiryButtons = document.querySelectorAll(".enquire-btn");

enquiryButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const productName = button.getAttribute("data-product");

    const message =
      "Hello LMP Pet Shop,%0A%0A" +
      "I want to enquire about: " +
      productName +
      "%0A%0APlease share product availability and details.";

    window.open(
      "https://wa.me/918303566131?text=" + message,
      "_blank"
    );

  });

});


/* CONTACT FORM */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const enquiryType = document.getElementById("enquiryType").value;
  const message = document.getElementById("message").value.trim();

  if (name === "" || phone === "" || message === "") {

    showToast("Please fill all required fields.");

    return;

  }

  const whatsappMessage =
    "Hello LMP Pet Shop,%0A%0A" +
    "Name: " + encodeURIComponent(name) + "%0A" +
    "Phone: " + encodeURIComponent(phone) + "%0A" +
    "Enquiry Type: " + encodeURIComponent(enquiryType) + "%0A%0A" +
    "Message: " + encodeURIComponent(message);

  window.open(
    "https://wa.me/918303566131?text=" + whatsappMessage,
    "_blank"
  );

  showToast("Opening WhatsApp...");

  contactForm.reset();

});


/* TOAST MESSAGE */

function showToast(text) {

  const toast = document.getElementById("toast");

  toast.textContent = text;
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
  }, 2500);

}


/* MOUSE PARALLAX EFFECT */

document.addEventListener("mousemove", function (event) {

  const heroVisual = document.querySelector(".hero-visual");

  if (!heroVisual || window.innerWidth < 800) return;

  const x = (window.innerWidth / 2 - event.clientX) / 80;
  const y = (window.innerHeight / 2 - event.clientY) / 80;

  heroVisual.style.transform =
    "translate(" + x + "px," + y + "px)";

});


/* SCROLL REVEAL CSS INJECTION */

const animationStyle = document.createElement("style");

animationStyle.innerHTML = `
  .reveal-hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity .8s ease, transform .8s ease;
  }

  .reveal-show {
    opacity: 1;
    transform: translateY(0);
  }
`;

document.head.appendChild(animationStyle);
