var unirest = require("unirest");

var req = unirest("GET", "https://yummly2.p.rapidapi.com/feeds/search");

req.query({
    "start": "0",
    "maxResult": "18",
    "FAT_KCALMax": "1000",
    "maxTotalTimeInSeconds": "7200",
    "allowedAttribute": "diet-lacto-vegetarian,diet-low-fodmap",
    "q": "chicken soup"
});

req.headers({
    "x-rapidapi-key": "e243001d04msh0b298ea0bd687efp1d065ajsnb763ceab5234",
    "x-rapidapi-host": "yummly2.p.rapidapi.com",
    "useQueryString": true
});


req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});




const API_KEY = "f87c22e3acf9b62024822b1b938e37d0";
const API_ID = "5e7124ab";

const api_URL = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;




async function getData() {
    const response = await fetch(api_URL);
    const data = await response.json();


    document.getElementById('recipe').textContent = label;

    // document.getElementById('ingrident').textContent = ingridents;
    //document.getElementById('picture').textContent = image;
    document.getElementById('picture').textContent = hits;


    console.log(data.hits);
    console.log(data)
        //    console.log(data.label);
        //  console.log(data.ingridents);

}
getData();