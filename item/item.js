const gameData = {
  title: "Grand Theft Auto V",
  released: "2013-09-17",
  image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png",
  description: "Grand Theft Auto V — мультиплатформенная видеоигра в жанре action-adventure с открытым миром. Действие игры происходит в вымышленном штате Сан-Андреас, основанном на Южной Калифорнии. Сюжет игры строится вокруг трёх грабителей, пытающихся совершить дерзкие ограбления в условиях давления со стороны преступного мира и коррумпированных чиновников."
};

function renderGamePage() {
	const root = document.getElementById('root');

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

document.addEventListener('DOMContentLoaded', renderGamePage);