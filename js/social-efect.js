const backgroundMouseActions = document.querySelector('.social-medias');
const backgroundItems = document.querySelector('.socials-background');
const iconInstagram = document.querySelector('.instagram');
const iconGithub = document.querySelector('.github');
const iconLinkedin = document.querySelector('.linkedin');

const showSocials = () => {
    backgroundItems.style.width = '10vw';
    backgroundItems.style.left = '5px';
    iconInstagram.style.display = 'flex';
    iconGithub.style.display = 'flex';
    iconLinkedin.style.display = 'flex';
}

const hideSocials = () => {
    backgroundItems.style.width = '60px'
    backgroundItems.style.left = '-35px'
    iconInstagram.style.display = 'none';
    iconGithub.style.display = 'none';
    iconLinkedin.style.display = 'none';
}

backgroundMouseActions.addEventListener('mouseover', showSocials);
backgroundMouseActions.addEventListener('mouseout', hideSocials)