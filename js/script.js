function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }
  typingEl.textContent = currentWord.substring(0, charIndex);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500; // pause bago mag-delete
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }
  setTimeout(typeEffect, speed);
}
// Start typing when page loads
typeEffect();

// 2. PROJECT FILTER - Midterm / Final / All
const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    projects.forEach(card => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// 3. CONTACT FORM VALIDATION
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const msg = document.getElementById("msgInput").value.trim();

  // Simple validation
  if (name === "" || email === "" || msg === "") {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "#ffc107";
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    formMsg.textContent = "Please enter a valid email.";
    formMsg.style.color = "#ffc107";
    return;
  }

  // Success
  formMsg.textContent = Thank you, ${name}! Your message has been sent. I will reply soon.;
  formMsg.style.color = "#ffc107";
  form.reset();
});

// 4. SMOOTH SCROLL 
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

