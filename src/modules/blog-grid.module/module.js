const blogColumnsToLoad = document.querySelectorAll(".blog-column.hidden");
const loadMoreBtn = document.getElementById("load-more-btn");

let clickTracker = 0;

const numberToLoad = 8;

const blogColumnGroups = Math.ceil(blogColumnsToLoad.length / numberToLoad);

loadMoreBtn.addEventListener("click", function() {
    
  clickTracker++;

  if(clickTracker === blogColumnGroups ) {
    loadMoreBtn.classList.add("hidden");
  }

  if(clickTracker <= blogColumnGroups ) {
    for( let i = 0; i < clickTracker * numberToLoad; i++) {
      blogColumnsToLoad[i].classList.remove("hidden");
    }
  }
})
