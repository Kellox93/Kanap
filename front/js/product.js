const urlB = window.location.search;

const urlV = new URLSearchParams(urlB)

const urlP = urlV.get("id");

fetch('http://localhost:3000/api/products/'+urlP)
.then(function(rep) {
  if (rep.ok) {
    return (rep.json());
  }
})

.then(function(repPro){

 document.getElementById('productImg').setAttribute("src" , repPro.imageUrl);
 document.getElementById('productImg').setAttribute("alt" , repPro.altTxt);
 document.getElementById('title').innerHTML = repPro.name;
 document.getElementById('description').innerHTML = repPro.description;
 document.getElementById('price').innerHTML = repPro.price;
 const Pco = document.getElementById('colors');
 const Csup = document.getElementsByTagName('option')[2];
 const totoCo = repPro.colors.length;
 if (totoCo < Pco.length) { Pco.removeChild(Csup) ;} else {}; 
 for (let i = 0; i < colors.length;) {document.querySelectorAll('#colors option')[i].innerHTML = repPro.colors[i];
                                      document.querySelectorAll('#colors option')[i].setAttribute("value", repPro.colors[i]);i++}

const Quty = document.getElementById('quantity');
const bajt = document.getElementById('addToCart');







console.log(repPro);




Pco.addEventListener("change", function(x){x.target.value;});


 bajt.addEventListener('click', function (){

  var jsons = localStorage.getItem("infos");
if (jsons == null) {jsons = new Array();} else {jsons = JSON.parse(jsons)};

    let NbC = JSON.stringify(Pco.value);
    jsons.push(repPro);
    let NbQ = JSON.stringify(parseInt(Quty.value));
    localStorage.setItem("infos", JSON.stringify(jsons));
    localStorage.setItem("infoC", NbC);
    localStorage.setItem("infoQ", NbQ);
    console.log(jsons);console.log(NbC);console.log(NbQ);
});
}
);




