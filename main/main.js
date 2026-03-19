
const icon = document.createElement('div');
icon.className = 'game-icon';
const data = [
    { text: 'Игры, похожие на Baldur’s Gate 3', type: 'header' },
    { type: 'image', src: 'https://ytools.org/uploads/cdn/2025/08/11/848bf55ee4af444f89850cbc93518d07.jpeg' },
    { text: '91', type: 'score-low' },
    { text: 'Dragon Age: Origins', type: 'title' },
    { text: '+6,680', type: 'rating' }
];

data.forEach(item => {
    let el;

    if (item.type === 'image') {
        el = document.createElement('img');
        el.src = item.src;
        el.className = 'game-icon-image';
        el.alt = 'game icon image';
    } else {
        el = document.createElement('div');
        el.textContent = item.text;

        switch (item.type) {
            case 'header':
                el.className = 'icon-header';
                break;
            case 'score-high':
                el.className = 'score score-high';
                break;
            case 'score-low':
                el.className = 'score score-low';
                break;
            case 'title':
                el.className = 'game-title-line';
                break;
            case 'tag':
                el.className = 'dy-tag';
                break;
            case 'rating':
                el.className = 'rating-count';
                break;
            default:
                break;
        }
    }

    icon.appendChild(el);
});

document.body.appendChild(icon);