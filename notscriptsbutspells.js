function colorchange() {
    const tomato = document.getElementById("tomato");
    const juice = document.getElementById("juice");
    const eDrink = document.getElementById("eDrink");
    if (tomato.checked) {
        document.getElementById("spellcasting").style.backgroundColor = "crimson";
    }
    else if (juice.checked) {
        document.getElementById("spellcasting").style.backgroundColor = "coral";
    }
    else if (eDrink.checked) {
        document.getElementById("spellcasting").style.backgroundColor = "plum"
    }
}
