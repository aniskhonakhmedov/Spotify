import { data, playlists } from './data.js'
let btn = document.querySelector('.create')
let modal = document.querySelector('.modal')
let bg = document.querySelector('.bg')
let main = document.querySelector('main')

// for(let item of data){

// }

btn.onclick = () => {
    modal.classList.add('active')
    document.body.style.overflow = 'hidden'
}

bg.onclick = () => {
    modal.classList.remove('active')
}
let obj = {}

let form = document.forms.register

form.onsubmit = () => {
    event.preventDefault()

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        obj[key] = value
        obj[music] = []
    })
    localStorage.like += JSON.stringify(obj)
}
// localStorage.like = JSON.parse(localStorage.like)
// console.log(localStorage.like = JSON.parse(localStorage.like));


// let reload = () => {
//     main.innerHTML = ''
   
// }
// reload()