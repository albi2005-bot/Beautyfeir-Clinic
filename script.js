const form = document.getElementById("consultationForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("https://your-backend-url.com/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Appointment booked successfully!");
      form.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Try again later.");
  }
});





const dots = document.querySelectorAll('.dots span');
let current = 0;

setInterval(() => {
  dots[current].style.opacity = "0.4";
  current = (current + 1) % dots.length;
  dots[current].style.opacity = "1";
}, 2000);



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-content");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close the menu when a link is clicked (optional but recommended)
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));