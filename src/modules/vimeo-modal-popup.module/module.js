const modals = Array.prototype.slice.call( document.querySelectorAll('.modal') );

document.addEventListener("DOMContentLoaded", function() {

if(modals.length) {
  const players = modals.map((modal, i) => {
    if( modal.querySelector("iframe") ) {

      modal.setAttribute("data-modal-number", i);
      return new Vimeo.Player(modal.querySelector("iframe"));

    }
  });
  MicroModal.init({
    onShow: function(modal) {
      document.body.classList.add("overflow-hidden");
      players[modal.dataset.modalNumber].play();

    }, 
    onClose: function(modal) {
      
      document.body.classList.remove("overflow-hidden");
      players[modal.dataset.modalNumber].pause();

    },
    openTrigger: 'data-modal-open',
    closeTrigger: 'data-modal-close', 
    openClass: 'is-open',
    disableScroll: true, 
    disableFocus: false, 
    awaitOpenAnimation: false, 
    awaitCloseAnimation: false,
    debugMode: true 
  });

}
});