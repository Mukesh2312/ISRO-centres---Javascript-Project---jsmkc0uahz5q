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


async function allCentres() {
    let response = await fetch('https://isro.vercel.app/api/centres');
    let data = await response.json();
    let centres = data.centres;
    return centres;
}

allCentres();

async function bindingName() {
    let input = await allCentres();
    cardBinding(input);

}
bindingName();


function cardBinding(input) {
    console.log(input);
    // let count = 0;
    // const arrData = data.centres;
    // input.forEach(element => {
    //     let card = document.createElement('div');
    //     card.setAttribute('class', 'card')
    //         ;
    //     Object.keys(element).forEach(i => {
    //         // console.log(element);

    //         let item = document.createElement('div');
    //         item.setAttribute('class', "items");

    //         let h3 = document.createElement('h2');
    //         h3.setAttribute('class', 'itemHeader');

    //         let p = document.createElement('p');
    //         p.setAttribute('class', 'itemTxt');

    //         // fetching heading
    //         if (i === "name") {
    //             h3.textContent = 'CENTER';
    //             p.textContent = element[i];
    //         } else if (i === "Place") {
    //             h3.textContent = "CITY";
    //             p.textContent = element[i];
    //         } else if (i === "State") {
    //             h3.textContent = "STATE";
    //             p.textContent = element[i];
    //         }

    //         item.appendChild(h3);
    //         item.appendChild(p);

    //         card.appendChild(item);
    //     });
    //     outputArea.appendChild(card);
    //     count++;
    // });
    // console.log(count) // data count that comming from API


    let list = input.map(function (data) {
        return `
         <div class="card">
                <div class="items">
                    <h3 class="itemHeader">CENTER</h3>
                    <P class="itemTxt">${data.name}</P>
                </div>
                <div class="items">
                    <h3 class="itemHeader">CITY</h3>
                    <P class="itemTxt">${data.Place}</P>
                </div>
                <div class="items">
                    <h3 class="itemHeader">STATE</h3>
                    <P class="itemTxt">${data.State}</P>
                </div>
        </div>`
    });

    outputArea.innerHTML += list;
}


async function searchHandler(type) {
    console.log(type);
    let inputSearch = document.getElementById('input').value.toLowerCase();

    outputArea.innerHTML = '';
    let data = await allCentres();
    let filterData = data.filter(function (data) {
        if (type == 'city') {
            return data.Place.toLowerCase().includes(inputSearch);
        } else if (type == 'center') {
            return data.name.toLowerCase.includes(inputSearch);
        }
        else if (type == 'state') {
            return data.State.toLowerCase().includes(inputSearch);
        }
    })

    cardBinding(filterData);
}
