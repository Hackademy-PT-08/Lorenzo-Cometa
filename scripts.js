// const menu = document.getElementById("menu")

// const menuItems = [
    
//     {
//         text:"Home",
//         url:"#",
//         submenu:[],
//     },
//     {
//         text: "Categorie",
//         url:"#",

//         // ... spread operator
//         submenu:[...categories],
//     },
//     {
//         text: "i nostri prodotti",
//         url:"#",
//         submenu:[]
//     },
//     {
//         text: "Contattaci",
//         url:"#",
//         submenu:[]
//     },
// ];

// function createMenuElements(target, menuItems){

//    menuItems.forEach((item) => {
   
//     let li = document.createElement("li");
//     let anchor = document.createElement("a");

//     li.classList.add ("nav-item")
//     anchor.classList.add("nav-link")

//     anchor.setAttribute("href", item.url)
//     anchor.innerHTML = item.text;
//     li.appendChild(anchor)
//     target.appendChild(li)
//     console.log(item)

//     if (item.submenu.length > 0) {
//        li.classList.add("dropdown"); 
//        anchor.classList.add("dropdown-toggle");
//        anchor.setAttribute("data-bs-toggle","dropdown");

//        let dropdownDiv = document.createElement("div");
//        dropdownDiv.classList.add("dropdown-menu");

//        item.submenu.forEach((submenuItems) => {
//         let dropdownAnchor = document.createElement("a")
//         dropdownAnchor.classList.add ("dropdown-item");
//         dropdownAnchor.setAttribute("href",submenuItems.url);
//         dropdownAnchor.textContent = submenuItems.text;
//         dropdownDiv.appendChild(dropdownAnchor);

//        }); 

//        li.appendChild(dropdownDiv);

//     }

//    }); 
// }







// // // esecuzione
// //  createMenuElements(menu, menuItems);
//  const felice = prompt("La mamme è felice?");

// const momIsHappy = new Promise ((resolve,reject) => {
//     setTimeout (() => {
       
//         if (felice === "si") {
//             resolve(felice);
//         } else {
//             reject ( new Error ("mamma non e felice"))
//         }
//     }, 100);
// });

// momIsHappy

// .then ((ciao) => {
// alert(`La mamma ti da la paghetta: ${ciao}`)
// })
 

// .catch ((Errore) => {
//     alert(` ${Errore}` )
// })


// esercitazione 2 

let prodotti = fetch('https://dummyjson.com/products/1')
.then(res => res.json())

.then(json => {
   let carosello =  document.getElementById ("carosello");
   console.log(json)
   let container = document.getElementById ("figlio")
    
   json.images.forEach(element => {
        // creazione dell'elemento 
        let div = document.createElement ("div");
        let img = document.createElement("img");
      
       img.src = element
       div.classList.add ("carousel-item");
       img.classList.add ("d-block");
       img.classList.add("w-100")
       div.appendChild(img);

       container.appendChild(div)

    });
})
