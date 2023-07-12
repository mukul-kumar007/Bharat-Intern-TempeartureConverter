let celsius = document.getElementById('celsius');
let farenhite = document.getElementById('farenhite');
let kelvin  = document.getElementById('kelvin');

celsius.oninput = () => {
    let foutput = (parseFloat(celsius.value)*9)/5 + 32;
    let koutput = (parseFloat(celsius.value) + 273.15);

    farenhite.value = parseFloat(foutput.toFixed(2));
    kelvin.value = parseFloat(koutput.toFixed(2));
}

farenhite.oninput = () => {
    let coutput = (parseFloat(farenhite.value)-32)*(5/9);
    let koutput = (parseFloat(farenhite.value -32)*(5/9) + 273.15);

    celsius.value = parseFloat(coutput.toFixed(2));
    kelvin.value = parseFloat(koutput.toFixed(2));
}

kelvin.oninput = () => {
    let foutput = (parseFloat(kelvin.value) - 273.15) * (9/5) + 32;
    let coutput = (parseFloat(kelvin.value) - 273.15);

    farenhite.value = parseFloat(foutput.toFixed(2));
    celsius.value = parseFloat(coutput.toFixed(2));
}

let btn = document.querySelector('.button button');

btn.addEventListener('click', ()=>{
    celsius.value = "";
    farenhite.value = "";
    kelvin.value = "";
})