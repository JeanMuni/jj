// script.js
let score = 0;
const scoreElement = document.getElementById('score');
const button = document.getElementById('clickButton');

// Função para atualizar a pontuação
function updateScore() {
    score += 1;
    scoreElement.textContent = score;
}

// Adiciona o evento de clique ao botão
button.addEventListener('click', updateScore);
