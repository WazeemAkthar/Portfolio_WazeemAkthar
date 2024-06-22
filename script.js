document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const texts = [
    {
      element: document.getElementById("typing-text-1"),
      text: "Welcome to My Portfolio",
    },
    {
      element: document.getElementById("typing-text-2"),
      text: "Hi, I'm Wazeem Akthar, a Web Developer and Copywriter.",
    },
  ];

  texts.forEach((obj) => {
    obj.element.textContent = ""; // Clear the text content initially
  });

  let index = 0;
  let charIndex = 0;

  function type() {
    if (index < texts.length) {
      if (charIndex < texts[index].text.length) {
        texts[index].element.textContent += texts[index].text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed here
      } else {
        index++;
        charIndex = 0;
        setTimeout(type, 500); // Delay between typing elements
      }
    }
  }

  type();

  // Hamburger menu functionality
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");

  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});
