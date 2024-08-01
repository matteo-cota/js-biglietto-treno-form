console.log('JS OK');

/*
   Step da seguire:
   1. Selezioniamo il form e il paragrafo dove visualizzeremo il risultato
   2. Aggiungi un event listener al form per gestire la sottomissione del form
   3. Ottieni i valori dagli input del form
   4. Definisci il prezzo per chilometro
   5. Calcola il prezzo base del biglietto
   6. Inizializza il prezzo finale del biglietto
   7. Applica lo sconto in base alla fascia d'età
   8. Arrotonda i prezzi a due decimali
   9. Mostra i risultati nella console
   10. Aggiorna il contenuto del biglietto con i valori calcolati
   11. Mostra il biglietto 
   12. Aggiungi un event listener al bottone "Annulla" per gestire il reset del form
*/

// Selezioniamo il form e il paragrafo dove visualizzeremo il risultato
const resultElement = document.getElementById('ticket');
console.log(resultElement);

// Aggiungi un event listener al form per gestire la sottomissione del form
document.getElementById('ticketForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previeni l'invio normale del form

    // Ottieni i valori dagli input del form
    const name = document.getElementById('name').value;
    const km = parseFloat(document.getElementById('km').value);
    const eta = document.getElementById('eta').value;

    // Definisci il prezzo per chilometro
    const prezzoPerKm = 0.21;

    // Calcola il prezzo base del biglietto
    let prezzoBase = km * prezzoPerKm;

    // Inizializza il prezzo finale del biglietto
    let prezzoFinale = prezzoBase;

    // Applica lo sconto in base alla fascia d'età
    if (eta === 'minorenne') {
        prezzoFinale = prezzoBase * 0.80;
    } else if (eta === 'over65') {
        prezzoFinale = prezzoBase * 0.60;
    }

    // Arrotonda i prezzi a due decimali
    prezzoFinale = prezzoFinale.toFixed(2);

    // Mostra i risultati nella console
    console.log(`Chilometri: ${km} km`);
    console.log(`Età del passeggero: ${eta}`);
    console.log(`Prezzo totale del biglietto: €${prezzoFinale}`);

    // Aggiorna il contenuto del biglietto con i valori calcolati
    document.getElementById('ticketName').innerText = name;
    document.getElementById('ticketFinalPrice').innerText = `€${prezzoFinale}`;

    // Mostra il biglietto nascosto
    document.getElementById('ticket').style.display = 'block';
});

// Aggiungi un event listener al bottone "Annulla" per gestire il reset del form
document.getElementById('annullaButton').addEventListener('click', function () {
    document.getElementById('ticketForm').reset();
    document.getElementById('ticket').style.display = 'none';
});
