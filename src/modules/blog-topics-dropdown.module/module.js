(function() {
  // Variables
  const blogTagSelects = document.querySelectorAll('.tag-select');

  // Functions
  blogTagSelects.forEach((select, i) => {
    select.addEventListener('change', function() {
      if (select.value) {
        window.location = select.value;
      }
      return false;
    });
  });

  const resourceSelects = document.querySelectorAll('.filter-select');

  // init Isotope
  const $grid = new Isotope('.resource-grid', {
    itemSelector: '.resource-column',
  });

  const filters = {};

  resourceSelects.forEach((select, i) => {
    select.addEventListener('change', function(e) {

      const index = select[0].label.toLowerCase().replaceAll(" ", "-");

      // set filter for group
      filters[ index ] = e.target.value;

      console.log({filters})
      

      const filterValue = concatValues( filters );

      console.log({filterValue});
      
      // set filter for Isotope
      $grid.arrange({ filter: filterValue });

      return false;
    });
  });
  
})();

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    if(obj[prop]) {
      value += `.${obj[ prop ]}`;
    }
  }
  return value;
}
