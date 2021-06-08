function displayArrayObjects(arrayObjects) {
    var len = arrayObjects.length,
      text = "";
  
    for (var i = 0; i < len; i++) {
      var person = arrayObjects[i];
      text += "Pizza " + (i+1) + "<br>";

      for (var x in person) {
        text += (x + ": " + person[x] + " " + "<br />");    
      }

      text +=  "</br>";
    }
    
    document.getElementById("menu1").innerHTML = text;
  }
  
  function createMenu() {
  
    var newMenu = new Object();
  
    newMenu.Name = document.getElementById('Name').value;
    newMenu.Price = document.getElementById('Price').value;
    newMenu.Toppings = document.getElementById('Toppings').value;
    newMenu.Heat = document.getElementById('Heat').value;
  
  
  
    if (sessionStorage.menu) {
      menu = JSON.parse(sessionStorage.getItem('menu'));
    } else {
      menu = [];
    }
    menu.push(newMenu)
    sessionStorage.setItem('menu', JSON.stringify(menu));
  
  document.getElementById("Name").value = "";
  document.getElementById("Price").value = "";
  document.getElementById("Heat").value = "";
  document.getElementById("Toppings").value = "";
  }
  
  function print() {

  var retrievedObject = sessionStorage.getItem('menu');

  displayArrayObjects(JSON.parse(retrievedObject))
  }
  
  function sortbyname() {
    var retrievedObject = sessionStorage.getItem('menu');
    var array = JSON.parse(retrievedObject);

    array.sort(function (a, b) {
      var nameA = a.Name.toUpperCase();
      var nameB = b.Name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    displayArrayObjects(array)
  }

  function sortbyprice() {
    var retrievedObject = sessionStorage.getItem('menu');
    var array = JSON.parse(retrievedObject);

    array.sort(function (a, b) {
      return a.Price - b.Price;
    });
    displayArrayObjects(array)
  }

  function sortbyheat() {
    var retrievedObject = sessionStorage.getItem('menu');
    var array = JSON.parse(retrievedObject);
    
    array.sort(function (a, b) {
      return a.Heat - b.Heat;
    });
    displayArrayObjects(array)
  }

  function removepizza() {
    var toremove = document.getElementById('remove').value;
    sessionStorage.removeItem("toremove");
    var retrievedObject = sessionStorage.getItem('menu');

  displayArrayObjects(JSON.parse(retrievedObject))

  }

  function clear() {
    sessionStorage.clear();
  }

  function display() {
    document.getElementById("namesort").style.display = "";
    document.getElementById("pricesort").style.display = "";
    document.getElementById("heatsort").style.display = "";
    document.getElementById("removep").style.display = "";
  }