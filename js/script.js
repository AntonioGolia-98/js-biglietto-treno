
const km = parseInt(prompt("Inserisci il numero di km che andari ad effettuare"));
const età = parseInt(prompt("Inserisci la tua età"));

const ticketKm = 0.21;
const ticket= km * ticketKm;
const scontoMinorenni= (ticket * 20) /100;
const scontoOver= (ticket * 40) / 100;


if (età > 18 && età < 65) {
    console.log(`il prezzo del biglietto è ${ticket}`);
}else if (età < 18){
    console.log(`il prezzo del biglietto è ${ticket - scontoMinorenni}`);
}else if (età > 65 ){
    console.log(`il prezzo del biglietto è ${ticket - scontoOver}`);
}



