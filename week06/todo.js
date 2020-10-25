function addButton() {

    let butn = document.getElementById("inputtxt").value;

    let inputText = document.createTextNode(butn);
    let newText = document.createElement('li');
    newText.appendChild(inputText)
    document.getElementById('list').appendChild(newText);


    var list = document.querySelector('ul');
    list.addEventListener('click', function(cklist) {
        if (cklist.target.tagName == 'LI') {
            cklist.target.classList.toggle('checked');
        }
    }, false);


}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function deletetext() {
    location.reload();

}