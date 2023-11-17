console.log("js connected")

async function initiall() {
    const response = await fetch('https://isro.vercel.app/api/centres');
    const data = await response.json();

    console.log(data);
}

initiall();
