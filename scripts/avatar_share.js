const VIEW = document.getElementById('showOptions');
const OCCULT = document.getElementById('hideOptions');
const MODAL = document.getElementsByClassName('modal')[0];
const SOCIAL = document.getElementById('share')
OCCULT.onclick = () => {
    SOCIAL.classList.remove('show')
    SHARE.setAttribute('images', './images/icon-share.svg')
    SOCIAL.classList.remove('show')
}

VIEW.onclick = (e) => {
    if(MODAL.classList.contains('show')){
        SOCIAL.setAttribute('images', './images/icon-share.svg')
        MODAL.classList.remove('show')
    }else{
        SOCIAL.setAttribute('images', './images/icon-shareWhite.svg')
        MODAL.classList.add('show')
    }
}