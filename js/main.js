let outputMsg = '';

// EVENTO CLICK SUL BOTTONE CALCOLA 
document.getElementById('calcola').addEventListener('click',

    function () {
        // OTTENGO NUMERO DI CHILOMETRI DA PERCORRERE ED ETA' PASSEGGERO
        const chilometri = parseInt(document.querySelector('#km').value);
        const etaPasseggero = document.querySelector('#eta-utente').value;
        const nomeUtente = document.querySelector('#nome-utente').value;
        // CONTROLLO CHE IL CAMPO NOME NON SIA VUOTO
        if (nomeUtente.length < 5) {
            document.getElementById('risultato').innerHTML = `E' necessario inserire un nome valido.`;
        }
        // // CHECK CHILOMETRI ED ETA PASSEGGERO - SONO NUMERI? 
        // else if (isNaN(chilometri) || isNaN(etaPasseggero)) {
        //     document.getElementById('risultato').innerHTML = "E' necessario inserire dei numeri."
        // }
        // SE UN NOME PASSEGGERO E' PRESENTE PROSEGUI 
        else {

            // // IMPOSTO UNA TARIFFA FISSA - es. € 0.21
            const tariffa = 0.21;
            // // CALCOLO IL PREZZO es. € 0.21 per km e impongo massimo due decimali
            let prezzoStandard = parseFloat(tariffa * chilometri).toFixed(2);
            // DICHIARO VARIABILI ELEMENTI HTML 
            let costoBigliettoEl = document.getElementById('costo-biglietto');
            let tipoOffertaEl = document.getElementById('offerta');
            // SE PASSEGGERO E' MINORENNE APPLICO SCONTO DEL 20% con massimo due decimali
            if (etaPasseggero == 'ticket-minorenni') {
                let scontoMinorenni = parseFloat(prezzoStandard - ((prezzoStandard * 20) / 100)).toFixed(2);
                // outputMsg = 'Il prezzo riservato ai minorenni è di € ' + scontoMinorenni;
                costoBigliettoEl.innerHTML = '€ ' + scontoMinorenni;
                tipoOffertaEl.innerHTML = "Biglietto Young"
            }
            // SE IL PASSEGGERO E' OVER 65 APPLICO SCONTO DEL 40% con massimo due decimali
            else if (etaPasseggero == 'ticket-senior') {
                let scontoSenior = parseFloat(prezzoStandard - ((prezzoStandard * 40) / 100)).toFixed(2);
                costoBigliettoEl.innerHTML = '€ ' + scontoSenior;
                tipoOffertaEl.innerHTML = "Biglietto Senior"
                // outputMsg = 'Il prezzo riservato agli over 65 è di € ' + scontoSenior;
            }
            else {
                costoBigliettoEl.innerHTML = '€ ' + prezzoStandard;
                tipoOffertaEl.innerHTML = "Tariffa Ordinaria"
            }
            document.getElementById('passeggero').innerHTML = nomeUtente;
            document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 20) + 1;
            document.getElementById('numero-biglietto').innerHTML = '#' + Math.floor(Math.random() * 10000 + 1000);
        }
    }
)