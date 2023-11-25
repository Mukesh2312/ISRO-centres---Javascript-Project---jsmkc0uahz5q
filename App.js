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

//========================➡️➡️➡️➡️Fetching data and returning⬅️⬅️⬅️⬅️========================

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


//========================➡️➡️➡️➡️Creating card Structure for data⬅️⬅️⬅️⬅️========================

function cardBinding(input) {
    console.log(input);

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
        </div>
        `
    });
    console.log(list);
    outputArea.innerHTML += `${list}`;
}

//========================➡️➡️➡️➡️Searching by city, state and centre name ⬅️⬅️⬅️⬅️========================


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
