let recipes = [];
//function addRecipe() {

const Addrecipe = (add) => {
    add.preventDefault();
    let recipe = {
        "Recipe Name": document.getElementById('nameID').value,
        "Recipe Ingridents ": document.getElementById('ingridents').value,
        "ingridents": document.getElementById('input').value
    }


    recipes.push(recipe);
    document.forms[0].reset();

    console.warn('added', { recipes });
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(recipes, '\t', 2);

    localStorage.setItem('RecipeList', JSON.stringify(recipes));

}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('butn').addEventListener('click', Addrecipe);
});

function clearStorage() {
    localStorage.clear();
    location.reload();
}






function getRecipeJson() {
    var apiKey = "your-api-key-here";
    var RecipeID = 196149;
    var url = "https://api2.bigoven.com/recipe/" + RecipeID + "?api_key=" + apiKey;
    $.ajax({
        type: "GET",
        dataType: 'json',
        cache: false,
        url: url,
        success: function(data) {
            alert('success');
            //console.log(data);
        }
    });
}

function getRecipeJson() {
    var apiKey = "your-api-key-here";
    var TitleKeyword = "lasagna";
    var url = "https://api2.bigoven.com/recipes?pg=1&rpp=25&title_kw=" +
        TitleKeyword +
        "&api_key=" + apiKey;
    $.ajax({
        type: "GET",
        dataType: 'json',
        cache: false,
        url: url,
        success: function(data) {
            alert('success');
            //console.log(data);
        }
    });
}



/*let recipes = [];
 //function addRecipe() {

 const Addrecipe = (add) => {
     add.preventDefault();

     let recipe = document.getElementById('nameID').value;
     let ingrident = document.getElementById('ingridents').value;
     let input = document.getElementById('input').value;

     recipes.push(recipes);
     document.forms[0].reset();

     console.warn('added', { recipes });
     let pre = document.querySelector('#msg pre');
     pre.textContent = JSON.stringify(recipes, '\t', 2);

     localStorage.setItem('RecipeName', recipe);
     localStorage.setItem('ingridents', ingrident);
     localStorage.setItem('steps', input);

     let recipess = document.getElementById('msg').innerHTML = 'Recipe Name: ' + localStorage.getItem('RecipeName') + "<br>" +
         "Recipe Ingridents: " + localStorage.getItem('ingridents') + "<br>" +
         "Recipe Steps for Cooking " + localStorage.getItem('steps');
 }

 document.addEventListener('DOMContentLoaded', () => {
     document.getElementById('butn').addEventListener('click', Addrecipe);
 });

 function clearStorage() {
     localStorage.clear();
     location.reload();
 }

*/