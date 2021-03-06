const inputText = document.querySelector("#input");
const outputText = document.querySelector("#output");
const btnTranslate = document.querySelector("#btn");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("Ooops! An error has occured.", error);
  alert("Ooops! An error has occured. Please try again later.");
}

function clickHandler() {
  let inputTextValue = inputText.value;

  fetch(getTranslatedURL(inputTextValue))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);