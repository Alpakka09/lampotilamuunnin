function muunnalampotila() {
    let syote = document.getElementById("lampotila").value;
    let suunta = document.getElementById("suunta").value;
    let desimaalit = document.querySelector('input[name="desimaalit"]:checked').value;
    let tulos = document.getElementById("tulos");

    if (syote === "" || isNaN(syote)) {
        tulos.innerHTML = "Virhe: Syötä numero!";
        return;
    }
    let luku = Number(syote);

    if (suunta === "c2f") {
        if (luku < -273.15) {
            tulos.innerHTML = "Virhe: Alle absoluuttisen nollapisteen (-273.15 °C)";
            return;
        }
        let vastaus = luku * 1.8 + 32;
        tulos.innerHTML = vastaus.toFixed(desimaalit) + " °F";
    }
    else {
        if (luku < -459.67) {
            tulos.innerHTML = "Virhe: Alle absoluuttisen nollapisteen (-459.67 °F)";
            return;
        }
        let vastaus = (luku - 32) / 1.8;
        tulos.innerHTML = vastaus.toFixed(desimaalit) + " °C";
    }
}