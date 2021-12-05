// Анимации 2. Карусели/слайдеры
const carousel = document.querySelector('.carousel')
const next = document.querySelector('.next')
const previous = document.querySelector('.previous')
const statusBar = document.querySelector('.status-bar div')
const timer = 3000

let counter = 0
let procent = 0

// START
const SetNextSlide = () => {
    if(counter >= carousel.children.length - 1) {
        counter = 0

        carousel.lastElementChild.classList.remove('active')
        carousel.firstElementChild.classList.add('active')
    } else {
        carousel.children[counter].classList.remove('active')
        carousel.children[counter + 1].classList.add('active')
        
        counter++
    }

    carousel.style.backgroundImage = carousel.children[counter].style.backgroundImage
}

const SetPreviousSlide = () => {
    if(counter <= 0) {
        counter = carousel.children.length - 1

        carousel.lastElementChild.classList.add('active')
        carousel.firstElementChild.classList.remove('active')
    } else {
        carousel.children[counter].classList.remove('active')
        carousel.children[counter - 1].classList.add('active')
        
        counter--
    }
}

// UI
next.onclick = () => { SetNextSlide() }
previous.onclick = () => { SetPreviousSlide() }

const ChangeStatusBar = () => {
    setInterval(() => {
        statusBar.style.width = procent + '%'
        
        procent++

        if(procent >= 100) procent = 0
    }, timer / 100)
}

// Autoplay
let interval
const intervalFunction = () => {
    interval = setInterval(() => {
        SetNextSlide()
    }, timer)
}

ChangeStatusBar()
intervalFunction()

carousel.onmouseenter = () => {
    console.log('Stopped!')
    clearInterval(interval)
}

carousel.onmouseleave = () => {
    console.log('Play!')
    intervalFunction()
}
