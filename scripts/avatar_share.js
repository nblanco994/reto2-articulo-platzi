const SHOW = document.getElementById('showOptions');  //showModal
const HIDE = document.getElementById('hideOptions');    // hideModal
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
        SHARE.setAttribute('images', './images/icon-share-white.svg')
        MODAL.classList.add('show')
        SHOW.classList.add("black")
    }
}