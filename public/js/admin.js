/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function selectConsole() {
    document.getElementById("consoleDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// Dropdown on Console Name and Value
function Add() {
  let addConsole = document.getElementById('addConsole');
  let option = document.createElement('OPTION');
  option.innerHTML = document.getElementById('addText').value;
  // option.value = document.getElementById('addValue').value;
  addConsole.options.add(option);
}