const testimonialNavDots = Array.prototype.slice.call(document.querySelectorAll(".testimonial-nav-dot"));
const testimonialPanels = Array.prototype.slice.call(document.querySelectorAll(".testimonial-panel"));

testimonialNavDots.forEach((dot, i) => {
    
    dot.addEventListener("click", () => {
       
        testimonialNavDots.forEach((dot) => {
            dot.classList.add("bg-opacity-50");
        });
        dot.classList.remove("bg-opacity-50");

        testimonialPanels.forEach((panel) => {
            panel.classList.add("hidden");
        });
        testimonialPanels[i].classList.remove("hidden");

    });
});
