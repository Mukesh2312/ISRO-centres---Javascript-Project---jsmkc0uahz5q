const cityBtn = document.getElementById('cityBtn');
const stateBtn = document.getElementById('stateBtn');
const centerBtn = document.getElementById('centerBtn')
const headName = document.getElementById('headName');
let txtColor = "#004AAD"

// headName.style.color = txtColor;
// function colorFirstLetter() {
//     let letters = headName.innerText.split(" ");
//     letters.forEach(element => {
//         let word = element.charAt(0);

//     });

// }

// colorFirstLetter();

async function initiall() {
    const response = await fetch('https://isro.vercel.app/api/centres');
    const data = await response.json();

    console.log(data);
}

initiall();


