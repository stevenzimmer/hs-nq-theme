const universalDropdownTrigger = document.getElementById("universal-dropdown-trigger");
const universalDropdown = document.getElementById("universal-dropdown");
universalDropdownTrigger.addEventListener("click", (e) => {
  universalDropdownTrigger.classList.toggle("active");
  universalDropdown.classList.toggle("hidden");
});

