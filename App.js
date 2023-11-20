let input = document.getElementById('input');
const cityBtn = document.getElementById('cityBtn');
const stateBtn = document.getElementById('stateBtn');
const centerBtn = document.getElementById('centerBtn')
const headName = document.getElementById('headName');
const outputArea = document.getElementById('outputArea')
const body = document.querySelector('body');
const btn = document.getElementsByClassName('btn');
let txtColor = "#004AAD"

// headName.style.color = txtColor;
// function colorFirstLetter() {
//     let letters = headName.innerText.split(" ");
//     letters.forEach(element => {
//         let word = element.charAt(0);

//     });

// }

// colorFirstLetter();

async function initial() {
    const response = await fetch('https://isro.vercel.app/api/centres');
    const data = await response.json();
    console.log(data.centres) // for API data count

    let count = 0;
    const arrData = data.centres;
    arrData.forEach(element => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card')

        Object.keys(element).forEach(i => {

            let item = document.createElement('div');
            item.setAttribute('class', "items");

            let h3 = document.createElement('h2');
            h3.setAttribute('class', 'itemHeader');

            let p = document.createElement('p');
            p.setAttribute('class', 'itemTxt');

            // fetching heading
            if (i === "name") {
                h3.textContent = 'CENTER';
                p.textContent = element[i];
            } else if (i === "Place") {
                h3.textContent = "CITY";
                p.textContent = element[i];
            } else if (i === "State") {
                h3.textContent = "STATE";
                p.textContent = element[i];
            }

            item.appendChild(h3);
            item.appendChild(p);

            card.appendChild(item);
        });
        outputArea.appendChild(card);
        count++;
    });
    console.log(count) // data count that comming from API
}

initial();
//===========================================================================================
// function creatingCard() {
//     let card = document.createElement('div');
//     card.setAttribute('class', 'card');
//     let item
//     outputArea.appendChild(card)
// }

// creatingCard();
//===========================================================================================

// button actie effect

// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener('click', (e) => {


//     })
// }

// cityBtn.addEventListener('click', (data) => {
//     if ()
// })
