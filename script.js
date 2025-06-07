var alfabeto = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

//const fs = require("fs") 

async function carica() {
    try {
        const response = await fetch('https://corsproxy.io/?https://www.wandery.it/randomword-ita.php');
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const parola = doc.querySelector('p.randomword strong')?.textContent.trim();
        if (parola) {
            return parola;
        } else {
            console.error("Parola non trovata nella risposta.");
            return 0;
        }
    } catch (err) {
        console.error("Errore nel fetch:", err);
        return 0;
    }
}

function cambia_lettera(){
    var randomIndex_lettera = Math.floor(Math.random() * alfabeto.length);
    var lettera = alfabeto[randomIndex_lettera];
    document.getElementById("lettera").innerHTML = lettera
}

async function cambia_parole() {
    for (let i = 1; i <= 5; i++) {
        let parola = await carica();
        if (parola)
            document.getElementById("Parola" + i).innerHTML = parola;
        else
            document.getElementById("Parola" + i).innerHTML = "errore";
    }
}

function tmp(){

}