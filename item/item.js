const gameData = {
  title: "Grand Theft Auto V",
  released: "2013-09-17",
  image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
  description: "Grand Theft Auto V — мультиплатформенная видеоигра в жанре action-adventure с открытым миром. Действие игры происходит в вымышленном штате Сан-Андреас, основанном на Южной Калифорнии. Сюжет игры строится вокруг трёх грабителей, пытающихся совершить дерзкие ограбления в условиях давления со стороны преступного мира и коррумпированных чиновников."
};

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

	const gamesArray = [gameData]; // Попробуй изменить на [] для теста пустого состояния

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
  img.src = gameData.image;
  img.alt = gameData.title;
  img.className = 'game-image';

	const title = document.createElement('h1');
	title.className = 'game-title';
	title.textContent = gameData.title;

	const date = document.createElement('p');
	date.className = 'game-date';
	date.textContent = `Дата выхода: ${gameData.released}`;

	const desc = document.createElement('p');
	desc.className = 'game-description';
	desc.textContent = gameData.description;

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

// Асинхронная версия для начальной загрузки с лоадером
async function initWithLoader() {
  const root = document.getElementById('root');
	createHeader();
	const loader = createLoader();
  root.appendChild(loader)
	await new Promise(resolve => setTimeout(resolve, 1500));
	loader.remove();
	renderGamePage();
}


document.addEventListener('DOMContentLoaded', initWithLoader);