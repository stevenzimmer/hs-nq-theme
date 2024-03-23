


document.addEventListener("DOMContentLoaded", function() 
{

  // const headers = Array.prototype.slice.call(document.querySelectorAll('.header-item'));

  // const sectionHeaders = Array.prototype.slice.call(document.querySelectorAll('.section-header'));

  // const firstSectionHeader = sectionHeaders[0];

  // const lastSectionHeader = sectionHeaders[sectionHeaders.length - 1];

  // const sectionStickyHeader = document.querySelector('.dnd_area-row-1-background-color');

  // sectionHeaders.forEach( (sectionHeader,i) => {

  //   sectionHeader.setAttribute("id","section-" + i)

  //   const waypointDown = new Waypoint({
  //     element: sectionHeader,
  //     handler: function(direction) {
      
  //       if (direction === 'down') {
  //         headers.forEach((header) => {
  //           header.classList.remove('active');
  //         });
  //         headers[i].classList.add('active');

  //         if( i === sectionHeaders.length - 1 ) {

  //           sectionStickyHeader.classList.remove('stuck');
  //           sectionStickyHeader.classList.add('absolute', "w-full", "left-0", "right-0");

  //           sectionStickyHeader.style.top = lastSectionHeader.offsetTop - sectionStickyHeader.offsetHeight - lastSectionHeader.offsetHeight - sectionHeader.offsetHeight  + "px";
            
  //         }
  //       }
  //     },
  //     offset: '30%'
  //   });

  //   const waypointUp = new Waypoint({
  //     element: sectionHeader,
  //     handler: function(direction) {
  //       if (direction === 'up') {
  //         headers.forEach((header) => {
  //           header.classList.remove('active');
  //         });

  //         headers[i].classList.add('active');
        
  //           sectionStickyHeader.classList.add('stuck');
  //           sectionStickyHeader.classList.remove('absolute', "w-full", "left-0", "right-0");

  //           sectionStickyHeader.style.top = 0 + "px";
           
  //       }
  //     },
  //     offset: '20%'
  //   });

  // });


  // const firstSectionWaypoint = new Waypoint({
  //   element: firstSectionHeader,
  //   handler: function(direction) {
  //     if (direction === 'up') {
  //       headers.forEach((header) => {
  //         header.classList.remove('active');
  //       });
        
  //       headers[i].classList.add('active');
  //       sectionStickyHeader.classList.remove('stuck');
  //       sectionStickyHeader.classList.add("reltative");
  //       sectionStickyHeader.style.top = 0 + "px";
         
  //     }
  //   },
  //   offset: '50%'
  // });


  headers.forEach((header, i, all) => {
    header.addEventListener('click', (e) => {

      console.dir({e});

      all.forEach((header) => {
        header.classList.remove('active');
      });
      e.target.classList.add('active');
    });
  });

  // const sticky = new Waypoint.Sticky({
  //   element: $('.dnd_area-row-1-background-color')[0]
  // });


});