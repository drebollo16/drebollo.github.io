function addButton() {

    let butn = document.getElementById("inputtxt").value;

    let inputText = document.createTextNode(butn);
    let newText = document.createElement('li');
    newText.appendChild(inputText)
    document.getElementById('list').appendChild(newText);

}

function deletetext() {
    location.reload();

}