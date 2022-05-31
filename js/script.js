const mario = document.querySelector('.game-mario-running');
const pipe = document.querySelector('.game-pipe');
const clouds = document.querySelector('#clouds');
const montains = document.querySelector('#montains');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const verifyKey = () => {
    if (event.keyCode == 38) {
        jump();
    }
}

const loop = setInterval(() => {
    const heightMario = +window.getComputedStyle(mario).bottom.replace('px','');
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const montainsPosition = montains.offsetLeft;
    if (pipePosition <= 120 && pipePosition > 0 && heightMario < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${heightMario}px`;
        mario.src = 'img/mario_dead.png';
        mario.style.width = '70px';
        
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;
        
        montains.style.animation = 'none';
        montains.style.left = `${montainsPosition}px`;
        
        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', verifyKey);