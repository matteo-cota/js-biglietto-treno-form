console.log('JS OK');

/*
   Step da seguire:
   1. Selezioniamo il form e il paragrafo dove visualizzeremo il risultato
   2. Aggiungi un event listener al form per gestire la sottomissione del form
   3. Ottieni i valori dagli input del form
   4. Definisci il prezzo per chilometro
   5. Calcola il prezzo base del biglietto
   6. Inizializza il prezzo finale del biglietto
   7. Applica lo sconto per minorenni (20% di sconto)
   8. Applica lo sconto per over 65 (40% di sconto)
   9. Arrotonda i prezzi a due decimali
   10. Mostra i risultati nella console
   11. Aggiorna il contenuto del biglietto con i valori calcolati
   12. Mostra il biglietto 
*/

// Selezioniamo il form e il paragrafo dove visualizzeremo il risultato
const resultelement = document.getElementById('ticket');
console.log(resultelement);

// Aggiungi un event listener al form per gestire la sottomissione del form
document.getElementById('ticketForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previeni l'invio normale del form

    // Ottieni i valori dagli input del form
    const name = document.getElementById('name').value;
    const km = parseFloat(document.getElementById('km').value);
    const eta = parseInt(document.getElementById('eta').value);

    // Definisci il prezzo per chilometro
    const prezzoPerKm = 0.21;

    // Calcola il prezzo base del biglietto
    let prezzoBase = km * prezzoPerKm;

    // Inizializza il prezzo finale del biglietto
    let prezzoFinale = prezzoBase;

    // Applica lo sconto per minorenni (20% di sconto)
    if (eta < 18) {
        prezzoFinale = prezzoBase * 0.80;
    }
    // Applica lo sconto per over 65 (40% di sconto)
    else if (eta > 65) {
        prezzoFinale = prezzoBase * 0.60;
    }

    // Arrotonda i prezzi a due decimali
    prezzoBase = prezzoBase.toFixed(2);
    prezzoFinale = prezzoFinale.toFixed(2);

    // Mostra i risultati nella console
    console.log(`Chilometri: ${km} km`);
    console.log(`Età del passeggero: ${eta} anni`);
    console.log(`Prezzo prima dello sconto: €${prezzoBase}`);
    console.log(`Prezzo totale del biglietto: €${prezzoFinale}`);

    // Aggiorna il contenuto del biglietto con i valori calcolati
    document.getElementById('ticketName').innerText = name;
    document.getElementById('ticketKm').innerText = km;
    document.getElementById('ticketEta').innerText = eta;
    document.getElementById('ticketBasePrice').innerText = prezzoBase;
    document.getElementById('ticketFinalPrice').innerText = prezzoFinale;

    // Mostra il biglietto 
    document.getElementById('ticket').style.display = 'block';
});

