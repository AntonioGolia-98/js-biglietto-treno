
const km = parseInt(prompt("Inserisci il numero di km che andrai ad effettuare"));
const età = parseInt(prompt("Inserisci la tua età"));

const ticketKm = 0.21;
const ticket= km * ticketKm;
const scontoMinorenni= (ticket * 20) /100;
const scontoOver= (ticket * 40) / 100;
let ticketMinorenni= ticket - scontoMinorenni;
let ticketOver= ticket - scontoOver;


if (età >= 18 && età <= 65) {
    console.log(`il prezzo del biglietto è ${ticket}`);
}else if (età < 18){
    console.log(`il prezzo del biglietto è ${ticketMinorenni.toFixed(2)}`);
}else if (età > 65 ){
    console.log(`il prezzo del biglietto è ${ticketOver.toFixed(2)}`);
}
