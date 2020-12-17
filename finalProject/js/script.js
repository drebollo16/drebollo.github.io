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