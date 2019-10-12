var containerBElement = document.querySelector('#idk');
var nomes = [];

function addName() {
    var inputElement = document.querySelector('div#idk input[name = nameAdd]');
    nomes.push(inputElement.value);

    var textElement = document.createTextNode(inputElement.value);
    
    var liElement = document.createElement('li');
    liElement.appendChild(textElement);
    containerBElement.appendChild(liElement);

    inputElement.value = '';
}

function createAndShowNames() {
    var liElement;
    for (let value of nomes) {
        let textElement = document.createTextNode(value);

        liElement = document.createElement('li');
        liElement.appendChild(textElement);
        containerBElement.appendChild(liElement);
    }
}
// createAndShowNames();