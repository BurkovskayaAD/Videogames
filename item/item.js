let apiKey = '0fc5072e9d5f45a29c5718c6d74bcf2a';
let URL = 'https://api.rawg.io/api/games?key=0fc5072e9d5f45a29c5718c6d74bcf2a';
let gameData = [];

// загрузки с лоадером
function initWithLoader() {
  const root = document.getElementById('root');
	createHeader();
	const loader = createLoader();
  root.appendChild(loader);
  getGameById(4200, URL, apiKey).then(data => {
    gameData.push(data)
    console.log(gameData)
    loader.remove();
	renderGamePage();
});
	
}

async function getGameById(id,URL,apiKey){
        try {
        let response = await fetch(URL, {
            headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        let data = await response.json();
        let find = data.results.find(u => u.id === id);
        return find;
    } catch (error) {
    console.error('Ошибка:', error);
    }
}




// Функция для создания Loader
function createLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  
  const spinner = document.createElement('div');
  spinner.className = 'loader-spinner';
  
  const text = document.createElement('p');
  text.className = 'loader-text';
  text.textContent = 'Загрузка...';
  
  loader.appendChild(spinner);
  loader.appendChild(text);
  
  return loader;
}

// Функция для отображения контента игры, но с проверкой на пустой массив
function renderGamePage() {
	const root = document.getElementById('root');

	// Очищаем root
  root.innerHTML = '';

	const gamesArray = gameData; // Попробуй изменить на [] для теста пустого состояния
  console.log(gameData)

	// Проверяем, пустой ли массив
  if (gamesArray.length === 0) {
    const emptyContainer = document.createElement('div');
    emptyContainer.className = 'empty-container';
    
    const emptyText = document.createElement('p');
    emptyText.className = 'empty-text';
    emptyText.textContent = 'Игры не найдены';
    
    emptyContainer.appendChild(emptyText);
    root.appendChild(emptyContainer);
    return;
  }

	// Если массив не пустой, отображаем контент
	const container = document.createElement('div');
	container.className = 'game-container';
	const img = document.createElement('img');
  img.src = gameData[0].background_image;
  img.alt = gameData[0].name;
  img.className = 'game-image';

	const title = document.createElement('h1');
	title.className = 'game-title';
	title.textContent = gameData[0].name;

	const date = document.createElement('p');
	date.className = 'game-date';
	date.textContent = `Дата выхода: ${gameData[0].released}`;

	const desc = document.createElement('p');
	desc.className = 'game-description';
	desc.textContent = gameData[0].description;

	container.appendChild(img);
	container.appendChild(title);
	container.appendChild(date);
	container.appendChild(desc);

	root.appendChild(container);
}

// Исправленая функция createHeader с поддержкой лоадера
function createHeader() {
  const root = document.getElementById('root');
  let header = document.createElement('div');
  root.appendChild(header);
  header.classList.add('header');
  let form = document.createElement('form');
  header.appendChild(form);
  form.classList.add("header-form");
  let formInputSearch = document.createElement('input');
  form.appendChild(formInputSearch);
  formInputSearch.classList.add("header-form_inputSearch");
  formInputSearch.placeholder = "Search"
  let formSelect = document.createElement("select");
  ["All", "fantasy", "horror"].forEach((text, index) => {
  let option = new Option(text, "value" + index);
  formSelect.add(option);
  });
  form.appendChild(formSelect);
  formSelect.name = "genres";
  formSelect.classList.add("header-form_search");
  let buttonSearch = document.createElement("button");
  form.appendChild(buttonSearch);
  buttonSearch.classList.add("header-form_buttonSearch");
  buttonSearch.type = "submit";
  buttonSearch.textContent = "SEARCH";
  buttonSearch.addEventListener("click", function(event) {
    event.preventDefault();
		const root = document.getElementById('root');
    const header = document.querySelector('.header');
		while (root.firstChild) {
    root.removeChild(root.firstChild);
    }
		root.appendChild(header);
		const loader = createLoader();
    root.appendChild(loader);
		setTimeout(() => {
			loader.remove();
			renderGamePage();
			}, 1000);
  });
}




document.addEventListener('DOMContentLoaded', initWithLoader);