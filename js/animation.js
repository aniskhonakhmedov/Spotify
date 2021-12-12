let aside_logo = document.querySelector('.header .aside-logo')
let aside = document.querySelector('.aside')
let close_logo = document.querySelector('.close-logo')

aside_logo.onclick = () => {
    aside.style.transform = 'translateX(0px);'
    aside_logo.classList.toggle('active')
    aside.classList.toggle('active')
}

document.querySelector('.close').onclick = () => {
    document.querySelector('.close').classList.remove('active')
}

close_logo.onclick = () => {
    aside.style.transform = 'translateX(-1000px);'
    aside_logo.classList.remove('active')
    aside.classList.remove('active')
}
