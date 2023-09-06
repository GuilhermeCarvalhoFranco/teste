const api = {
    key: "64ed82577ced7f69cb1687f0ce536131",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"
}

const search_button = document.querySelector('.busca-btn');
const search_input = document.querySelector('.busca');





/*
const city = document.querySelector('.cidade')
const date = document.querySelector('.data');
const container_img = document.querySelector('.imagem');
const container_temp = document.querySelector('.texto');
const temp_number = document.querySelector('.texto');
const temp_unit = document.querySelector('.texto-span');
const weather_t = document.querySelector('.clima');

const low_high = document.querySelector('.temp');

search_button.addEventListener('click', function() {
    searchResults(search_input.value)
})

search_input.addEventListener('keypress', enter)
function enter(event) {
    key = event.keyCode
    if (key === 13) {
        searchResults(search_input.value)
    }
}

function searchResults(city) {
    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
        .then(response => {
            displayResults(response)
        });
}

*/
//==========================================================

