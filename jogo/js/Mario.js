const Mario = document.querySelector('.MarioCorrendo')
const Pipe = document.querySelector('.canoDoMario')
const jump = () =>{ //criando uma função para o Mário Pular

    Mario.classList.add('jump')//adcionando a class "jump" feita no css
    setTimeout(()=>{

        Mario.classList.remove('jump')//sempre que o Mario pular, automaticamente a classe "jump" vai ser eliminada, para que ela possa ser novamente ativada

    },500)//o pulo só sera possível em 500 e 500ms
}
const loop = setInterval(() =>{//criando um loop infinito

    const pipePosition = Pipe.offsetLeft; //chamando a função pipLeft que

    const marioPosition = window.getComputedStyle(Mario).bottom.replace('px', '')//aqui a gente esta pegando todos os estilos com "getComputedStyle" da class "Mario"
    
    if (pipePosition <= 120 && marioPosition < 90 && pipePosition > 0){//se o left for de 120px o Mario para. E se o Bottom for menor que 120. o mario para

        Pipe.style.animation ='none';//se ele bater no cano a animação para

        Pipe.style.left = `${pipePosition}px`
    }
},10)
document.addEventListener('keydown',jump)
