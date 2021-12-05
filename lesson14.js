// Анимации 1. Модальные окна и меню
const allButtons = document.querySelectorAll('.btn-modal')
const closeAll = document.querySelector('.close-all')

for(let item of allButtons) {
    item.querySelector('button').onclick = () => {
        item.children[1].classList.toggle('active')
    }
}

closeAll.onclick = () => {
    for(let item of allButtons) {
        item.children[1].classList.remove('active')
    }
}
