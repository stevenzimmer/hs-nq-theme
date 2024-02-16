const downloadCards = Array.prototype.slice.call( document.querySelectorAll('.download-card') );

downloadCards.forEach( (downloadCard, i) => {

  const title = downloadCard.querySelector(".download-card-title");

  const description = downloadCard.querySelector(".download-card-description");
  

  title.addEventListener("click", function() {
    title.querySelector(".download-card-arrow").classList.toggle("-rotate-0");
    description.classList.toggle("hidden");
  });
});