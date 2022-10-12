fetch("http://localhost:3000/api/products")
.then(function(res) {console.log(res);
  if (res.ok) {
    return res.json();
  }
})




.then(function(value) {
    let sectionItems = document.getElementById('items');
    let nvxProduct = document.getElementsByClassName('productLien');
    let art = document.querySelector( '#items .productLien article');
    
    
    for (let x = 0; x < value.length;) {
        const cloneA = nvxProduct[x].cloneNode(false); 
        const cloneB = art.cloneNode(true);
        sectionItems.appendChild(cloneA);
        nvxProduct[x].appendChild(cloneB);
        x++;
        }; 
        console.log(art);
        if ( nvxProduct[0].length != 1){nvxProduct[0].removeChild(art);}else{};
        
    
    for (let i = 0; i < value.length;) {    
        let ref = document.getElementsByClassName('productName')[i];
        let des = document.getElementsByClassName('productDescription')[i];
        let tof = document.getElementsByClassName('productImg')[i];
        let lien = document.getElementsByClassName( 'productLien')[i].href += (value[i]._id);
        console.log(value[i]);
        ref.innerHTML = value[i].name;
        des.innerHTML = value[i].description;
        tof.setAttribute("src" , value[i].imageUrl);
        tof.setAttribute("alt" , value[i].altTxt);
        
        i++};});


        