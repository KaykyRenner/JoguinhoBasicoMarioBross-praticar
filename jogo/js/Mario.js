const Mario = document.querySelector('.MarioCorrendo')
const Pipe = document.querySelector('.canoDoMario')
const score1 = document.querySelector('.Score')
const inicia = document.querySelector('.iniciar')
const cloud1 = document.querySelector('.cloud')
const cloud2 = document.querySelector('.cloud2')
const GameOver = document.querySelector('.GameOver')
const CloudMorte = document.querySelector('.CloudMorte')
const jump = () =>{ //criando uma função para o Mário Pular
    Mario.classList.add('jump')//adcionando a class "jump" feita no css
    setTimeout(()=>{
        Mario.classList.remove('jump')//sempre que o Mario pular, automaticamentea classe "jump" vai ser eliminada, para que ela possa ser novamenteativada
},500)//o pulo só sera possível em 500 e 500ms
}
let score = 0

loop = setInterval(() =>{//criando um loop infinito
const pipePosition = Pipe.offsetLeft; //chamando a função pipLeft que
const marioPosition = window.getComputedStyle(Mario).bottom.replace('px', '')//aqui a gente esta pegando todos os estilos com "getComputedStyle" da class "Mario"
if (pipePosition <= 120 && marioPosition < 90 && pipePosition > 0){//se o leftfor de 120px o Mario para. E se o Bottom for menor que 120. o mario para
    cloud1.style.animation ='none'
    cloud2.style.animation ='none'
    GameOver.src='img/GameOver.png'
    CloudMorte.src='img/cloud.png'
    Pipe.style.animation ='none';//se ele bater no cano a animação para
    Pipe.style.left = `${pipePosition}px`
    clearInterval(g1)
    clearInterval(loop)
    Mario.style.animation ='none';
    Mario.style.bottom = `${marioPosition}px`
    Mario.src = 'img/gameOverOFC.png'}
},10)
const g1 = setInterval(()=>{score1.innerHTML = `Score:${score}`;
score++;
},100)

document.addEventListener('keydown',jump)
document.addEventListener('click',jump)


