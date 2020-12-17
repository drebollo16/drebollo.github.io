//const API_KEY = "f87c22e3acf9b62024822b1b938e37d0";
const API_ID = "5e7124ab";


const API_KEY = "a48000fcb94995b383b79cdebbf16765";
const api_URL = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

async function getData() {
    const response = await fetch(api_URL);
    const data = await response.json();

    const html = data.hits.map(user => {
        return user.hits
    }).join(' ')
    console.log(html);

    document.getElementById('app').textContent = html;


    console.log(data.hits);
    console.log(data)
        //    console.log(data.label);
        //  console.log(data.ingridents);

}
getData();

/*
////////////////////////////
fetch("https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free");
res => {
    res.json().then();
    data => {
        console.log(data);
        if (data.length > 0) {
            var temp = "";
            data.forEach(res => {
                temp += "<tr>";
                temp += res.hits;
            });
        }
    }
}

 */