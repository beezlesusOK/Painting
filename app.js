const board = document.querySelector('#board');
const colors = ['#FFB6C1', '#DB7093', '	#DA70D6', '#FF00FF', '#7B68EE',
 '#663399', '#F08080', '#B22222', '	#FF7F50', '#FFFACD', '#00FA9A', '#9ACD32',
  '#20B2AA', '#008080', '#48D1CC', '#0000FF', '#87CEFA', '#B8860B',
   '#2F4F4F', '#B0C4DE', '#20B2AA', '#98FB98', '#BDB76B', '#DC143C'];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
    element.style.backgroundColor  = '#1d1d1d'
    element.style.boxShadow ='0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}