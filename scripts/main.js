document.addEventListener("DOMContentLoaded", () => {
    const bodyClass = document.body.className;
  
    // Scroll-to-Top Button (applies to all pages where it exists)
    const scrollToTopBtn = document.getElementById("ScrollToTopBtn");
    if (scrollToTopBtn) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          scrollToTopBtn.style.display = "flex"; // Show button
        } else {
          scrollToTopBtn.style.display = "none"; // Hide button
        }
      });
  
      scrollToTopBtn.addEventListener("click", () => {
        smoothScrollToTop();
      });
  
      function smoothScrollToTop() {
        const scrollDuration = 800;
        const scrollStep = -window.scrollY / (scrollDuration / 16);
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 16);
      }
    }
  
    // Phone Input Formatting (only for contact page)
    if (bodyClass === "contact-page") {
      const phoneInput = document.getElementById("phone");
      if (phoneInput) {
        phoneInput.addEventListener("input", function (e) {
          let input = e.target.value.replace(/\D/g, ""); // Remove all non-numeric characters
          if (input.length > 3 && input.length <= 6) {
            input = input.replace(/^(\d{3})(\d+)/, "$1.$2"); // Format as 123.456
          } else if (input.length > 6) {
            input = input.replace(/^(\d{3})(\d{3})(\d+)/, "$1.$2.$3"); // Format as 123.456.7890
          }
          e.target.value = input;
        });
      } else {
        console.error("Phone input field not found!");
      }
    }
  });
  