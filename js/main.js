
// EVENTO CLICK SUL BOTTONE CALCOLA 
document.getElementById('calcola').addEventListener('click',

    function () {
        // OTTENGO NUMERO DI CHILOMETRI DA PERCORRERE ED ETA' PASSEGGERO
        const chilometri = parseInt(document.querySelector('#km').value);
        const etaPasseggero = document.querySelector('#eta-utente').value;
        const nomeUtente = document.querySelector('#nome-utente').value;
        // ID MESSAGGIO DI ERRORE E SECTION BIGLIETTO
        let errorMsg = document.getElementById('risultato');
        let bigliettoCompletoEl = document.getElementById('biglietto');
        // CONTROLLO CHE IL CAMPO NOME NON SIA VUOTO E NON SIA UN NUMERO
        if (nomeUtente.length < 5 || !isNaN(nomeUtente)) {
            errorMsg.innerHTML = `E' necessario inserire un nome valido.`;
            errorMsg.classList.add('d-block');
            // CHIUDO EVENTUALI BIGLIETTI GIA' APERTI 
            bigliettoCompletoEl.style.display = 'none';
        }
        // CHECK CHILOMETRI - E' UN NUMERO? 
        else if (isNaN(chilometri) || chilometri == 0) {
            errorMsg.innerHTML = "E' necessario inserire il numero di chilometri"
            errorMsg.classList.add('d-block');
            // CHIUDO EVENTUALI BIGLIETTI GIA' APERTI 
            bigliettoCompletoEl.style.display = 'none';
        }
        // SE PASSEGGERO E CHILOMETRI SONO VALIDI PROSEGUI 
        else {

            // IMPOSTO UNA TARIFFA FISSA - es. € 0.21
            const tariffa = 0.21;
            // CALCOLO IL PREZZO es. € 0.21 per km e impongo massimo due decimali
            let prezzoStandard = parseFloat(tariffa * chilometri).toFixed(2);
            // DICHIARO VARIABILI ELEMENTI HTML 
            let costoBigliettoEl = document.getElementById('costo-biglietto');
            let tipoOffertaEl = document.getElementById('offerta');
            // SE PASSEGGERO E' MINORENNE APPLICO SCONTO DEL 20% con massimo due decimali
            if (etaPasseggero == 'ticket-minorenni') {
                let scontoMinorenni = parseFloat(prezzoStandard - ((prezzoStandard * 20) / 100)).toFixed(2);
                // MOSTRO IL COSTO NELL'ELEMENTO HTML 
                costoBigliettoEl.innerHTML = '€ ' + scontoMinorenni;
                // TIPO DI OFFERTA 
                tipoOffertaEl.innerHTML = "Biglietto Young"
            }
            // SE IL PASSEGGERO E' OVER 65 APPLICO SCONTO DEL 40% con massimo due decimali
            else if (etaPasseggero == 'ticket-senior') {
                let scontoSenior = parseFloat(prezzoStandard - ((prezzoStandard * 40) / 100)).toFixed(2);
                costoBigliettoEl.innerHTML = '€ ' + scontoSenior;
                tipoOffertaEl.innerHTML = "Biglietto Senior"
            }
            // ALTRIMENTI APPLICO IL PREZZO STANDARD 
            else {
                costoBigliettoEl.innerHTML = '€ ' + prezzoStandard;
                tipoOffertaEl.innerHTML = "Tariffa Ordinaria"
            }

            // MOSTRO IL NOME UTENTE NEL BIGLIETTO 
            document.getElementById('passeggero').innerHTML = nomeUtente;

            // NUMERO CARROZZA 
            document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 20) + 1;

            // NUMERO BIGLIETTO 
            document.getElementById('numero-biglietto').innerHTML = '#' + parseInt(Math.floor(Math.random() * 10000) + 1000);

            // MOSTRO LA SECTION DEL BIGLIETTO 
            bigliettoCompletoEl.style.display = 'block';

            // RESET DI EVENTUALI ERRORI PRECEDENTI
            errorMsg.className = 'd-none';
        }
    }
)