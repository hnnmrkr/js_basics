// Ülesanne 1.1
// console.log("Tere, maailm!") */

// Ülesanne 1.2
/*
let aasta = 2016
let president = "Kersti Kaljulaid"
let lause_keskosa = ". aastal valiti Eesti presidendiks "
let lause = aasta + lause_keskosa + president
console.log(lause)
 */

// Ülesanne 1.3
/*
let alus = prompt("Sisesta alus: ")
let astendaja = prompt("Sisesta astendaja: ")
let vastus = alus ** astendaja

// saab ka Math.pow

 console.log(vastus)
 */

// Ülesanne 1.4
/*
let nimi = prompt("Sisestage oma nimi: ")
let lubatud_kiirus = parseInt(prompt("Sisestage lubatud kiirus:"))
let tegelik_kiirus = parseInt(prompt("Sisestage tegelik kiirus: "))

function trahviArvutus() {
    let trahv = (tegelik_kiirus - lubatud_kiirus) * 3
    if (trahv <= 190) {
        console.log(nimi + ", kiiruse ületamise eest trahv " + trahv + " eurot")
    } else {
        console.log(nimi + " kiiruse ületamise eest trahv 190 eurot")
    }
}
console.log(trahviArvutus())
*/

// Ülesanne 1.5
/*

let ainepunktid = prompt("Sisesta ainepunktide arv")
let nadala_arv = prompt("Sisesta nädalate arv")
let ainepunktid_kokku = ainepunktid*26
let kokku = ainepunktid_kokku / nadala_arv
console.log("Ainepunktide arv: " + ainepunktid)
console.log("Nädalate arv: " + nadala_arv)
console.log("Kokku: " + Math.ceil(kokku))
*/

// Ülesanne 1.6
/*
let inimeste_arv = prompt("Sisesta inimeste arv")
let kohtade_arv = 30
let busside_arv = Math.floor(inimeste_arv / kohtade_arv)
let maha_jaanud = inimeste_arv % kohtade_arv
let mahtus_peale = inimeste_arv - maha_jaanud

console.log("Inimeste arv: " + inimeste_arv)
console.log("Kohtade arv ühes bussis: " + kohtade_arv)
console.log("Busse telliti: " + busside_arv)
console.log("Bussi mahtus: " + mahtus_peale)
console.log("Maha jäi: " + maha_jaanud)
*/

// Ülesanne 2.1
/*
let ohutemperatuur = prompt("Sisesta õhutemperatuur")
function temperatuur () {
    if (ohutemperatuur > 4) {
        console.log("Ei ole jäätumise ohtu")
    } else if (ohutemperatuur <= 4) {
        console.log("On jäätumise oht")
    }
}

console.log(temperatuur())
*/



