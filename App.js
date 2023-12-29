const cityBtn = document.getElementById('cityBtn');
const stateBtn = document.getElementById('stateBtn');
const centerBtn = document.getElementById('centerBtn')
const headName = document.getElementById('headName');
const outputArea = document.getElementById('outputArea')
const body = document.querySelector('body');
const btn = document.querySelectorAll('.btn');
let txtColor = "#004AAD"



//========================➡️➡️➡️➡️button Hover on click⬅️⬅️⬅️⬅️========================


btn.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        element.classList.add('active');
    })
});

//========================➡️➡️➡️➡️Fetching data and returning⬅️⬅️⬅️⬅️========================

async function allCentres() {
    let response = await fetch('https://isro.vercel.app/api/centres');
    let data = await response.json();
    let centres = data.centres;
    // console.log(centres);
    return centres;
}

allCentres();

async function bindingName() {
    let input = await allCentres();
    cardBinding(input);
    console.log(input);

}
bindingName();


//========================➡️➡️➡️➡️Creating card Structure for data⬅️⬅️⬅️⬅️========================

function cardBinding(input) {
    // console.log(input);

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
    }).join('');
    // console.log(list);
    outputArea.innerHTML = `${list}`;
}

//========================➡️➡️➡️➡️Searching by city, state and centre name ⬅️⬅️⬅️⬅️========================


async function searchHandler(type) {
    // console.log(type);
    let inputSearch = document.getElementById('input').value.toLowerCase();

    outputArea.innerHTML = '';
    let data = await allCentres();

    let filterData = data.filter(function (data) {
        if (type == 'city') {
            return data.Place.toLowerCase().includes(inputSearch);
        } else if (type == 'center') {
            return data.name.toLowerCase().includes(inputSearch);
        }
        else if (type == 'state') {
            return data.State.toLowerCase().includes(inputSearch);
        }
    })

    cardBinding(filterData);
    console.log(filterData)
}


//========================➡️➡️➡️➡️Searching data onclick on the search button  ⬅️⬅️⬅️⬅️========================

const onSearchButtonHandler = async () => {
    let inputSearch = document.getElementById('input').value.toLowerCase();

    const data = await allCentres();
    const filterData = data.filter(data =>
        data.name.toLowerCase().includes(inputSearch) ||
        data.Place.toLowerCase().includes(inputSearch) ||
        data.State.toLowerCase().includes(inputSearch)
    );
    cardBinding(filterData);
}
