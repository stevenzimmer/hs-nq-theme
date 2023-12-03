const customerLogos = Array.prototype.slice.call(document.querySelectorAll(".customer-logo"));
const customerPanels = Array.prototype.slice.call(document.querySelectorAll(".customer-panel"));


customerLogos.forEach((logo, i, all) => {
  // const question = faq.querySelector(".faq-question");
  
  logo.addEventListener("click", () => {
      all.forEach((log) => {
        log.classList.remove("active");
      });
      customerPanels.forEach((panel) => {
        panel.classList.add("hidden");
      });
      customerPanels[i].classList.remove("hidden");
      logo.classList.add("active");
  });
});