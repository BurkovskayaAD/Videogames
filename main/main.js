let root = document.getElementById("root");
let apiKey = '0fc5072e9d5f45a29c5718c6d74bcf2a';
let URL = 'https://api.rawg.io/api/games?key=0fc5072e9d5f45a29c5718c6d74bcf2a';
let array = [];

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
        ["All", "fantasy", "horror"].forEach((text, index) => {
    let option = new Option(text, "value" + index);
    formSelect.add(option);
    });
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
}

async function fetchData(URL, apiKey ) {
    try {
        let response = await fetch(URL, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        let data = await response.json();
        return data;
    } catch (error) {
    console.error('Ошибка:', error);
    }
}


fetchData(URL,apiKey).then(data => console.log(data.results))
fetchData(URL,apiKey).then(data => {
    // array = data.results
    createCard(data.results)
})
createHeader();

// async function getGameById(id,URL,apiKey){

//         let url = (id) => `URL/${id}`
//         try {
//             let response = await fetch(URL, {
//                 headers: { 'Authorization': `Bearer ${apiKey}` }
//             });
//             let data = await response.json();
//             return data;
//     } catch (error) {
//     console.error('Ошибка:', error);
//     }
// }

// getGameById(id ,URL, apiKey).then(data => console.log(data));


function createCard(array) {
    const icon = document.createElement('div');
    icon.className = 'game-icon';
    // const data = [
    //     { text: 'Игры, похожие на Baldur’s Gate 3', type: 'header' },
    //     { type: 'image', src: 'https://ytools.org/uploads/cdn/2025/08/11/848bf55ee4af444f89850cbc93518d07.jpeg' },
    //     { text: '91', type: 'score-low' },
    //     { text: 'Dragon Age: Origins', type: 'title' },
    //     { text: '+6,680', type: 'rating' }
    // ];



    array.forEach(item => {

        let el = document.createElement('img');
        el.src = item.background_image;
        el.className = 'game-icon-image';
        el.alt = 'game icon image';
        console.log(el)

        // let el;

        // if (item.type === 'image') {
        //     el = document.createElement('img');
        //     el.src = item.src;
        //     el.className = 'game-icon-image';
        //     el.alt = 'game icon image';
        // } else {
        //     el = document.createElement('div');
        //     el.textContent = item.text;

        //     switch (item.type) {
        //         case 'header':
        //             el.className = 'icon-header';
        //             break;
        //         case 'score-high':
        //             el.className = 'score score-high';
        //             break;
        //         case 'score-low':
        //             el.className = 'score score-low';
        //             break;
        //         case 'title':
        //             el.className = 'game-title-line';
        //             break;
        //         case 'tag':
        //             el.className = 'dy-tag';
        //             break;
        //         case 'rating':
        //             el.className = 'rating-count';
        //             break;
        //         default:
        //             break;
        //     }
        // }

        icon.appendChild(el);
    });

    document.body.appendChild(icon);
    }




// createCard(array)







async function fetchDataId(id, URL, apiKey ) {
    try {
        let response = await fetch(`${URL}/${id}`, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        let data = await response.json();
        return data;
    } catch (error) {
    console.error('Ошибка:', error);
    }
}


fetchDataId("22519", URL, apiKey).then(data => console.log(data))