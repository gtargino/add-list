var containerElement = document.querySelector('#idk');
var nomes = [];

function addName() {
    var inputElement = document.querySelector('div#idk input[name = nameAdd]');
    nomes.push(inputElement.value);

    var textElement = document.createTextNode(inputElement.value);
    
    var liElement = document.createElement('li');
    liElement.appendChild(textElement);
    containerElement.appendChild(liElement);

    inputElement.value = '';
}

/*function createAndShowNames() {
    var liElement;
    for (let value of nomes) {
        let textElement = document.createTextNode(value);

        liElement = document.createElement('li');
        liElement.appendChild(textElement);
        containerElement.appendChild(liElement);
    }
}
createAndShowNames();
*/


