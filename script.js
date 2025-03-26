document.addEventListener("DOMContentLoaded", () => {
  const chevron = document.getElementById("chevron");
  const chevronIcon = document.getElementById("chevron-icon");
  const scrollContainer = document.querySelector(".scroll");

  function scrollToNextSection() {
    const sections = document.querySelectorAll(
      "section, .mission, .coaches, .packages, .location, .gallery"
    );
    const currentScroll = scrollContainer.scrollTop;
    for (let sec of sections) {
      if (sec.offsetTop > currentScroll + 10) {
        scrollContainer.scrollTo({ top: sec.offsetTop, behavior: "smooth" });
        return;
      }
    }
    // Scroll to top if at bottom
    scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
  }

  chevron.addEventListener("click", scrollToNextSection);

  scrollContainer.addEventListener("scroll", () => {
    const nearBottom =
      scrollContainer.scrollHeight -
        scrollContainer.scrollTop -
        scrollContainer.clientHeight <
      10;
    if (nearBottom) {
      chevronIcon.innerHTML = "&#x25B2;";
    } else {
      chevronIcon.innerHTML = "&#x25BC;";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img.fade-in");

  images.forEach((img) => {
    img.addEventListener("load", () => {
      img.classList.add("fade-in-loaded");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const checkboxToggle = document.getElementById("checkbox_toggle");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      checkboxToggle.checked = false; // Uncheck the checkbox to close the menu
    });
  });
});
