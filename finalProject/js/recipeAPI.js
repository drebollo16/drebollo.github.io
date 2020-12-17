/*const API_KEY = "f87c22e3acf9b62024822b1b938e37d0";
const API_ID = "5e7124ab";

const api_URL = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

async function getData() {
    const response = await fetch(api_URL);
    const data = await response.json();

    const html = data.hits.map(user => {
        return user.hits
    }).join(' ')
    console.log(html);

    //document.querySelector('#app').insertAdjacentHTML("afterbegin", html);

    document.getElementById('app').textContent = html;
    // document.getElementById('recipe').textContent = label;

    // document.getElementById('ingrident').textContent = ingridents;
    //document.getElementById('picture').textContent = image;
    //document.getElementById('picture').textContent = hits;


    console.log(data.hits);
    console.log(data)
        //    console.log(data.label);
        //  console.log(data.ingridents);

}
getData();
 

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
}*/
const requestURL = 'https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {

        const recipes = jsonObject['hits'];
        recipes.forEach(recipes => {

            let card = document.createElement('section');

            let label = document.createElement('h2');
            let ingridents = document.createElement('div');
            let image = document.createElement('img');


            h2.innerHTML = `${recipes.hits}`;

            image.setAttribute('src', recipes.imageurl);
            h2.innerHTML = `<strong>Name: ${recipes.label}</strong>`;
            ingridents.innerHTML = `<strong>Ingridents: ${recipes.ingridents}</strong>`;


            card.appendChild(label);
            card.appendChild(ingridents);
            card.appendChild(image);

            document.querySelector('div.app').appendChild(card);
        });
    });