var price;
var youngSales;
var oldSales;

var age = parseInt(prompt('quanti anni hai?'));
var km = parseInt(prompt('quanti kilometri vuoi percorrere?'));

document.getElementById('age').innerHTML = age;
document.getElementById('km').innerHTML = km;

var price = (km * 0.21).toFixed(2);

var youngSales = (price * 20 / 100).toFixed(2);

var oldSales = (price * 40 / 100).toFixed(2);

if ( age < 18 ) {
  price = (price - youngSales).toFixed(2);
}

if ( age >= 65 ) {
  price = (price - oldSales).toFixed(2);
}

document.getElementById('price').innerHTML = price;
