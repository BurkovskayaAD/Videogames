let root = document.getElementById("root");

const urlGenres = "https://api.rawg.io/api/genres?key=0fc5072e9d5f45a29c5718c6d74bcf2a"
let genresList = [];
async function fetchGenres() {
        const response = await fetch(urlGenres);
        const data = await response.json();
        genresList = data.results;
        console.log(genresList)
        createSelect();
}
function createSelect(){
    const formSelect = document.querySelector(".header-form_search");
    const allOption = new Option('All genres', '');
    formSelect.add(allOption);
    genresList.forEach((genre) => {
    let option = new Option(genre.name, genre.id);
    formSelect.add(option);
    });
}

function createHeader(){
    let header = document.createElement('div')
    root.append(header);
    header.classList.add('header');
    let form = document.createElement('form');
    header.append(form);
    form.classList.add("header-form");
    let formInputSearch = document.createElement('input');
    form.append(formInputSearch);
    formInputSearch.classList.add("header-form_inputSearch");
    formInputSearch.placeholder = "Search"
    let formSelect = document.createElement("select");
    form.append(formSelect);
    formSelect.name = "genres";
    formSelect.classList.add("header-form_search");
    let buttonSearch = document.createElement("button");
    form.append(buttonSearch);
    buttonSearch.classList.add("header-form_buttonSearch");
    buttonSearch.type = "submit";
    buttonSearch.textContent ="SEARCH";
    buttonSearch.addEventListener("click", function(event){
        event.preventDefault();
    })
    if (genresList.length > 0) {
        createSelect();
    }
}
fetchGenres();
createHeader();



