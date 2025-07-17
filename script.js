// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      }),
    )
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Contact form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const name = formData.get("name")
      const email = formData.get("email")
      const subject = formData.get("subject")
      const message = formData.get("message")

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all required fields.")
        return
      }

      // Simulate form submission
      alert(`Thank you, ${name}! Your message has been sent. I will get back to you soon.`)

      // Reset form
      this.reset()
    })
  }

  // Animate skill bars on scroll
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll(".skill-progress")
        skillBars.forEach((bar) => {
          const width = bar.style.width
          bar.style.width = "0%"
          setTimeout(() => {
            bar.style.width = width
          }, 200)
        })
      }
    })
  }, observerOptions)

  // Observe skill categories
  document.querySelectorAll(".skill-category").forEach((category) => {
    observer.observe(category)
  })

  // Add active class to current page navigation
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
})

// Download functionality
function downloadFile(fileName) {
  // In a real application, this would trigger the actual download
  alert(`Downloading ${fileName}...`)

  // You can implement actual download logic here
  // For example, creating a download link or making an API call
  console.log(`Download requested for: ${fileName}`)
}

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Add scroll to top button
document.addEventListener("DOMContentLoaded", () => {
  // Create scroll to top button
  const scrollButton = document.createElement("button")
  scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>'
  scrollButton.className = "scroll-to-top"
  scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #2563eb;
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `

  scrollButton.addEventListener("click", scrollToTop)
  document.body.appendChild(scrollButton)

  // Show/hide scroll button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      scrollButton.style.display = "flex"
    } else {
      scrollButton.style.display = "none"
    }
  })
})

// Add loading animation for download buttons
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".download-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const originalText = this.innerHTML
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...'
      this.disabled = true

      setTimeout(() => {
        this.innerHTML = originalText
        this.disabled = false
      }, 2000)
    })
  })
})
