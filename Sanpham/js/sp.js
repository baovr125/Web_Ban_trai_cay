function showDropdownMenu() {
  document.getElementById("dropdownMenu").classList.add("show");
}

function hideDropdownMenu() {
  document.getElementById("dropdownMenu").classList.remove("show");
}
function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value--;
  document.getElementById('number').value = value < 1 ? 1 : value;
}

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}


