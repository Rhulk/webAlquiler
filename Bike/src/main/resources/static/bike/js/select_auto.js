var _fruits = ["Banana", "Orange", "Apple", "Mango"];

function loadBikeDisponiblesEntreFechas_() {

  var theBody = document.getElementById('tabla').getElementsByTagName('tbody')[0];
  var newRow = "<tr><td><select>";
  var theOptions = "";
  _fruits.forEach(function(fruit) {
    theOptions += `<option value="${fruit}">${fruit}</option>`;
  });
  newRow += theOptions;
  newRow += "</select></td></tr>";

  theBody.insertAdjacentHTML('beforeend', newRow);

}