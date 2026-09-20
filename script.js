document.addEventListener("DOMContentLoaded", () => {
  // 1. Motion Hero Slider
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 5000);

  // 2. Short Time Storage Fee Calculator
  const bagSizeSelect = document.getElementById("bagSize");
  const storageHoursInput = document.getElementById("storageHours");
  const storageCostDisplay = document.getElementById("storageCost");

  function updateStorageCost() {
    const ratePerHour = parseInt(bagSizeSelect.value) || 0;
    const hours = parseInt(storageHoursInput.value) || 1;
    const total = ratePerHour * hours;
    storageCostDisplay.textContent = `KSh ${total.toLocaleString()}`;
  }

  if (bagSizeSelect && storageHoursInput) {
    bagSizeSelect.addEventListener("change", updateStorageCost);
    storageHoursInput.addEventListener("input", updateStorageCost);
  }

  // 3. Parcel Tracker Simulation
  const trackBtn = document.getElementById("trackBtn");
  const trackInput = document.getElementById("trackInput");
  const trackingResult = document.getElementById("trackingResult");

  if (trackBtn) {
    trackBtn.addEventListener("click", () => {
      const code = trackInput.value.trim();
      if (!code) {
        trackingResult.innerHTML = `<span style="color: #ef4444;">Please enter a valid Waybill ID.</span>`;
        return;
      }

      trackingResult.innerHTML = `<span style="color: var(--primary);">Searching parcel status...</span>`;

      setTimeout(() => {
        trackingResult.innerHTML = `
          <div style="background: #0f172a; padding: 0.8rem; border-radius: 6px; border-left: 4px solid var(--accent-cyan);">
            <strong>Status:</strong> In Transit <br>
            <strong>Waybill ID:</strong> ${code.toUpperCase()}<br>
            <strong>Route:</strong> Nairobi Terminal &rarr; Nakuru Stage<br>
            <strong>Est. Delivery:</strong> Today at 4:30 PM
          </div>
        `;
      }, 1000);
    });
  }

  // 4. Form Submission Simulation
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Booking Request Submitted! Our dispatch desk will contact you to confirm your seat.");
      bookingForm.reset();
    });
  }
});