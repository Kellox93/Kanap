let sauvgB = localStorage.getItem("infos");
let sauvgN = JSON.parse(sauvgB);

let sauvgBQ = localStorage.getItem("infoQ");


let sauvgBC = localStorage.getItem("infoC");

let placeProd = document.getElementById('cart__items');
let base = document.querySelector('.cart__item');
console.log(sauvgN);



for (let i = 0; i < sauvgN.length; ) {

let COL = JSON.parse(sauvgBC);
let QT = JSON.parse(sauvgBQ);
console.log(QT);
let valueco = base.getElementsByClassName('itemQuantity')[0];
base.getElementsByTagName('h2')[0].innerHTML = sauvgN[i].name;
base.getElementsByTagName('img')[0].setAttribute("src", sauvgN[i].imageUrl);
base.getElementsByTagName('p')[0].innerHTML = COL;
valueco.setAttribute("value", QT);
base.getElementsByTagName('p')[1].innerHTML = sauvgN[i].price * valueco.value + " €";

valueco.addEventListener('click', function(){ 
    valueco.setAttribute("value", QT[i]);
    base.getElementsByTagName('p')[1].innerHTML = sauvgN[i].price * valueco.value + " €";});
base.getElementsByClassName('deleteItem')[0].addEventListener('click' , function(){ document.getElementById('cart__items').removeChild(base);});

var clone = base.cloneNode(true);
    placeProd.appendChild(clone);
    
    


i++};
