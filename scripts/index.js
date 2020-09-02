const SHOW = document.getElementById('showOptions');
const HIDE = document.getElementById('hideOptions');
const MODAL = document.getElementsByClassName('modal')[0];
const SHARE = document.getElementById('share')
HIDE.onclick = () => {
    MODAL.classList.remove('show')
    SHARE.setAttribute('images', './images/icon-share.svg')
    MODAL.classList.remove('show')
}

SHOW.onclick = (e) => {
    if(MODAL.classList.contains('show')){
        SHARE.setAttribute('images', './images/icon-share.svg')
        MODAL.classList.remove('show')
        SHOW.classList.remove("black")
    }else{
        SHARE.setAttribute('images', './images/icon-shareWhite.svg')
        MODAL.classList.add('show')
        SHOW.classList.add("black")
    }
}