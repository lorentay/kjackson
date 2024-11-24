// Select the button
const scrollToTopBtn = document.getElementById("ScrollToTopBtn");

// Show/hide button on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "flex"; // Show button
  } else {
    scrollToTopBtn.style.display = "none"; // Hide button
  }
});

// Scroll to top with smooth and moderate speed
scrollToTopBtn.addEventListener("click", () => {
  smoothScrollToTop();
});

function smoothScrollToTop() {
  const scrollDuration = 800; // Total duration in milliseconds (800ms for moderate speed)
  const scrollStep = -window.scrollY / (scrollDuration / 16); // Calculate step size (~60fps)
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep); // Move up by the step size
    } else {
      clearInterval(scrollInterval); // Stop once at the top
    }
  }, 16); // 16ms for ~60fps
}
