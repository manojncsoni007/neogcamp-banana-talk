let textInput = document.querySelector('#text-input');
let translateBtn = document.querySelector('#btn-translate');
let output = document.querySelector('#output');

let url = 'https://api.funtranslations.com/translate/minion.json';


function urlTranslater(text) {
    return url + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log('error occured', error)
}

function clickEventHandler() {
    let inputText = textInput.value;

    fetch(urlTranslater(inputText))
        .then(response => response.json())
        .then(json => {
            let outputText = json.contents.translated;
            output.innerText = outputText;
        })
        .catch(errorHandler);

}

translateBtn.addEventListener('click', clickEventHandler);