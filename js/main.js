let outputMsg = '';

// EVENTO CLICK SUL BOTTONE CALCOLA 
document.getElementById('calcola').addEventListener('click',

    function () {
        // OTTENGO NUMERO DI CHILOMETRI DA PERCORRERE ED ETA' PASSEGGERO
        const chilometri = parseInt(document.querySelector('#km').value);
        const etaPasseggero = parseInt(document.querySelector('#eta-utente').value);
        const nomeUtente = document.querySelector('#nome-utente').value;
        // // IMPOSTO UNA TARIFFA FISSA - es. â‚¬ 0.21
        const tariffa = 0.21;
        // // CALCOLO IL PREZZO es. â‚¬ 0.21 per km e impongo massimo due decimali
        let prezzoStandard = parseFloat(tariffa * chilometri).toFixed(2);
        // SE PASSEGGERO E' MINORENNE APPLICO SCONTO DEL 20% con massimo due decimali
        if (etaPasseggero < 18) {
            let scontoMinorenni = parseFloat(prezzoStandard - ((prezzoStandard * 20) / 100)).toFixed(2);
            outputMsg = 'Il prezzo riservato ai minorenni è di € ' + scontoMinorenni;
        }
        // SE IL PASSEGGERO E' OVER 65 APPLICO SCONTO DEL 40% con massimo due decimali
        else if (etaPasseggero > 65) {
            let scontoSenior = parseFloat(prezzoStandard - ((prezzoStandard * 40) / 100)).toFixed(2);
            outputMsg = 'Il prezzo riservato agli over 65 è di € ' + scontoSenior;
        }
        else {
            outputMsg = 'Il prezzo standard è di € ' + prezzoStandard;
        }
        document.getElementById('risultato').innerHTML = `Ciao ${nomeUtente}, ${outputMsg}`;
    }
)