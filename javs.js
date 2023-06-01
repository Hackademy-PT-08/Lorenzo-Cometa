    // let voto=parseInt(prompt(`Digita il tuo voto`))

    // if ( voto <18){
    // alert (`Bocciato`)
    // }
        
    // else if (voto >=18 && voto<21){
    //     alert (`Sufficiente`)
    // }
    // else if ( voto >=21 && voto <=24) {
    //     alert (`Buono`)
    // }
    // else if ( voto >=24 && voto <=27) {
    //     alert (`Distinto`)
    // }
    // else if ( voto >=27 && voto <=29) {
    //     alert (`Ottimo`)
    // }

    // if (voto=30) {
    //     alert (`ECCELLENTE`)
    // }

// const numero= Number (prompt (`inserisci un numero`))

// let tabellina = "questa e la tabellina del "   + numero + "  "  ;
// for (let i = 0; i <=10; i++) 
// {
//    tabellina += (numero * i) + " ";   
// }
// alert(tabellina)
   
// let password=prompt("inserisci una pass")

// let check= password.length>=4;

// while(check) {
//     alert ("pass accettata")
//     break;
// }

// while (!check) {
//     alert ( "riprova")
//     break;
// }


//esercizio 1//

// let numero=parseInt (prompt(`Digita un numero`))

// function num(numero) {   
// if (numero > 0) {
//     console.log ("è un numero positivo")
// } else if (numero < 0){
//     console.log("è un avalore negativo")
// }
// // return numero

// }
// // let verifica=num(numero)
// console.log(num(numero))


// esercizio 2
  
// let num1=parseInt(prompt("digitare il primo numero"))
// let num2=parseInt(prompt("digitare il secondo numero"))

// function controllo(num1,num2)
// {
//     if (num1===num2){
//         console.log("true");
//     }
//     else {
//         console.log("false");
//     }
// }

// console.log (controllo(num1,num2))

// let frase = prompt("scrivi un testo");


// let a = 0;
// let e = 0;
// let i_= 0;
// let o = 0;
// let u = 0;


// let totale = 0;

// for(let i = 0; i < frase.length; i++) {
//     // if (frase[i]===vocale_a){
//     //     console.log(frase[i])
//     let antonio = frase.charAt(i).toLowerCase()
    
//     // }
//  switch(antonio) {
//     case "a":
//     a +=1 ;
//     totale +=1;
//     break;

//     case "e":
//     e +=1;
//     totale += 1;
//     break;
    
//     case "i":
//     i_ += 1;
//     totale += 1;
//     break;
        
//     case "o":
//     o+=1;
//     totale += 1;
//     break;
            
//     case "u":
//     u+=1 ;
//     totale += 1;
//     break;

//      case "t":
//     u+=1 ;
//     totale += 1;
//     break;

// }

// }
// alert (`Il totale e ${totale}`)
// alert(`le A sono: ${a} le E sono : ${e} Le I sono: ${i_} le O sono: ${o} Le U: ${u} I punti interrogativi sono ${t}`)








// let frase = prompt("scrivi un testo");

// let a =0
// let e =0
// let i_=0
// let o =0
// let u =0

// let totale=0

// for (let i = 0; i < frase.length; i++) {
    
//     let ciao= frase.charAt(i).toLowerCase()

//     switch(ciao){
    
//     case "a":
//         a += 1
//         totale += 1
//         break;

//     case "e":
//         e += 1
//         totale += 1
//         break;

//     case "i":
//         i_+= 1
//         totale +=1
//         break;

//     6case "o":
//         o += 1
//         totale +=1
//         break;

//     case "u":
//     u += 1
//     totale += 1
//     break;

//     }

    
// }
// console.log(`IL TOTALE E': ${totale}`)
// console.log (`Tutte le A sono: ${a} Tutte le E sono: ${e} Tutte le I sono: ${i_} Tutte le O sono:${o} Tutte le U sono: ${u}`)



// const numPari = [2, 4, 6, 8, 10];
// const numDispari = [1, 3, 5, 7, 9];
// const risultati = [];



// function calcolo () {
// if (numPari.length === numDispari.length) {

//   for (let i = 0; i < numPari.length; i++) {
//     risultati.push(numPari[i] * numDispari[i]);
//   }

// alert (`i risultati sono ${risultati}`);
// }
// }
// calcolo()


// // esercizio 2
// let visualizza=[]
// visualizza.push (prompt ("inserisci un dato"));
// // const bye=[`ciao`, 5, `Milan`,118];

// let ciao = visualizza.includes (prompt("Il valore sarà"));
   
// alert (ciao);


// const numbers = [1,-4,7,12]

//  function addPositivo(numbers){
//   let summ = 0;
//   for (let i = 0; i < numbers.length; i++ ){
//     if (numbers[i] > 0) {
//         summ += numbers[i];
//     }
//   }
//   return summ;
//  }
//  let risultato = addPositivo(numbers)

//  alert (risultato)


// let titoloFilm="Rocky"
// let annoFilm="1982"
// let movieDirector="Goldmill"

// console.log( "titolo film " + titoloFilm + "\nanno film " + annoFilm + "\nregista " + movieDirector )

// let bookTitle;

// bookTitle="Metal Gear"

// let bookDescription="un libro d'azione scritto da hideo kojima"

// console.log(`Nome libro: ${bookTitle} \ndescrizione libro: ${bookDescription}`)


// let admin;


// let nome;

// nome="Gino";

// admin=nome;

// alert(admin)



// let username = prompt("inserisci un unsername");

// let password = prompt ( "inserisci una password");

// alert( `Benvenuto ${username} nell'area personale, \nla tua password e ${password}`)






// let primo= parseInt(prompt("inserisci il primo nunmero"));

// let secondo= parseInt(prompt("inserisci il secondo numero"));

// let terzo= parseInt(prompt("inserisci il terzo numero"));

// let quarto = parseInt(prompt("inserisci il quarto numero"));

// let quinto = parseInt(prompt("inserisci il quinto numero"));

// let somma = primo + secondo + terzo + quarto + quinto;

// alert(somma);

// let media = (primo + secondo + terzo + quarto + quinto) / 5;

// console.log("la media e:" + media );


// let tempBari= 20; 

// let tempNapoli= 30;

// let tempRoma= 15;

// let tempMIlano= 5;

 

// console.log("La temperatura più bassa è: " + Math.min(tempBari, tempNapoli, tempRoma, tempMIlano));

// console.log ("la temperatura piu alta è: " + Math.max (tempBari, tempNapoli, tempRoma, tempMIlano));


 
// let annoCorrente = 2023;

// let annoNascita = 1990;

// let anni = annoCorrente - annoNascita;

// let pensione = 100 - anni;

// console.log (`tu hai ${anni} anni \nti mancano ${pensione} anni alla pensione` );


// let utente1= prompt("inserisci un nome");

// let utente2 = prompt ("inserisci un secondo nome");

// let risultato= utente1===utente2;

// alert(`il risultato e ${risultato}`);


// let votazione = parseInt(prompt("INSERISCI UN VOTO DA 1 A 30"));

// if ( votazione >30 || votazione < 1){
//     alert ( "Errore non hai rispettato i parametri");
// }   else { 
//     if (votazione < 18  ){
//         alert (`insufficiente`);
//     } else if ( votazione < 21 & votazione >=18){
//         alert (`sufficiente`);
//     } else if (votazione < 24 & votazione >= 21){
//         alert( `Buono`);
//     } else if ( votazione <27 & votazione >= 24){
//         alert ("distinto")
//     } else if ( votazione >=27 & votazione <=29){
//         alert(`ottimo`)
//     } else if ( votazione ==30){
//         alert ( `Eccellente`)
//     }
    
// }  
 


































