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
    } else {
        console.log("On jäätumise oht")
    }
}

*/

// Ülesanne 2.3
/*
let vanus = Number(prompt("Sisesta oma vanus"))
let sugu = prompt("Sisesta oma sugu")
let treeninguTyyp = prompt("Siseta treeningu tüüp (1/2/3)")
let pulsisagedus;

if(sugu == 'm' || sugu == 'M'){
    pulsisagedus = 220 - vanus
} else if(sugu == 'n' || sugu == 'N'){
    pulsisagedus = 206 - 0.88 * vanus
}
let minimaalne;
let maksimaalne;

if (treeninguTyyp == 1) {
    minimaalne = 0.5 * pulsisagedus
    maksimaalne = 0.7 * pulsisagedus
} else if (treeninguTyyp == 2) {
    minimaalne = 0.7 * pulsisagedus
    maksimaalne = 0.8 * pulsisagedus
} else if (treeninguTyyp == 3) {
    minimaalne = 0.8 * pulsisagedus
    maksimaalne = 0.87 * pulsisagedus
}

console.log(`Pulsisagedus peab olema vahemikus ${Math.round(minimaalne)} kuni ${Math.round(maksimaalne)}`)
*/

// Ülesanne 2.4
/*
let valik = prompt('Kas soovite istekohta ise "ise" valida või loosida "loos"?')
let koht;

if (valik == 'ise') {
    let kohavalik = prompt('Kas soovite akna "aken" ääres või mujal "muu"')
    console.log("Valisite ise.")
    if (kohavalik == 'aken') {
        koht = 'Aknakoht'
    }else if (kohavalik == 'muu') {
        koht = 'Vahekäigukoht'
    }
} else if (valik == 'loos') {
    console.log("Istekoht loositi.")
    let juhuarv = Math.ceil(Math.random() * 3)

    if (juhuarv == 1) {
        koht = "Aknakoht"
    } else {
        koht = "Vahekäigu koht"
    }
}

console.log(koht)
 */

// Ülesanne 2.5
/* let kirjaSuurus = parseFloat(prompt("Sisestage kirja suurus"))
let kirjaTeema = prompt("Sisestage kirja teema pealkiri")
let fail = prompt("Kas kirjaga on kaasas fail? jah/ei")

if (kirjaTeema == "" || kirjaSuurus >= 1){
    console.log("Kiri on spämm")
} else {
    console.log("Kiri ei ole spämm")
}
*/

// Tsüklid

// Ülesanne 3.1
/* let aratus = Number(prompt("Sisetage mitu korda äratada"))
for (let kordus = 0; kordus < aratus; kordus++) {
    console.log("Tõuse ja sära")
}
*/

// Ülesanne 3.2
/* let ringideArv = prompt("Sisesta ringide arv")
let porgandidKokku = 0
let ring = 1

while (ring <= ringideArv) {
    // console.log(`${ring}. ring`)
    if(ring % 2 == 0){

       // console.log(`Saab ${ring} porgandit`)
        porgandidKokku = porgandidKokku + ring
       // console.log(porgandidKokku)
    }
    ring++
}
console.log(`Porgandite koguarv on: ${porgandidKokku}.`) */

// Ülesanne 3.3
let taringuteArv = prompt("Täringute arv")

for(let kord = 1; kord <= taringuteArv; kord++){
    let taring = Math.ceil(Math.random() * 6)
    console.log(taring)
}