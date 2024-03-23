
const downloadCards = Array.prototype.slice.call( document.querySelectorAll('.download-card') );

downloadCards.forEach( (downloadCard, i) => {

  const title = downloadCard.querySelector(".download-card-title");

  const description = downloadCard.querySelector(".download-card-description");
  

  title.addEventListener("click", function() {
    title.querySelector(".download-card-arrow").classList.toggle("-rotate-0");
    description.classList.toggle("hidden");
  });
});

const cardCTAs = Array.prototype.slice.call( document.querySelectorAll('.card-cta') );
const formPopups = Array.prototype.slice.call( document.querySelectorAll('.form-popup') );
const formBodies = Array.prototype.slice.call( document.querySelectorAll('.form-body') );

const thankyous = Array.prototype.slice.call( document.querySelectorAll('.form-thankyou') );

cardCTAs.forEach( (cta, i) => {
  cta.addEventListener("click", function(e) {
    formPopups[i].classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
   
    if( !e.target.classList.contains("generated-form") ) {
      
      hbspt.forms.create({
        target: `.form-${ cta.dataset.formTrigger }`,
        portalId: "488764",
        region: "na1",
        formId: "dfa55b0e-486e-4d98-9391-db9b6b5eae79",
        onFormReady: () => { 
          formBodies[i].querySelector(".form-loading").classList.add("hidden");
          formBodies[i].querySelector(".form-loaded").classList.remove("hidden");

        },
        onFormSubmit: () => {
          formBodies[i].classList.add("hidden");
          thankyous[i].classList.remove("hidden");
        }
      });

      e.target.classList.add("generated-form");
    }
  });
});

const formBgs = Array.prototype.slice.call( document.querySelectorAll('.form-bg') );

formBgs.forEach( (bg, i) => {
  bg.addEventListener("click", function() {
    formPopups[i].classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  });
});