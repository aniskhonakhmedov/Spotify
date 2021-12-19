import { data, all_play } from './data.js'

let btn = document.querySelector('.create')
let modal = document.querySelector('.modal')
let bg = document.querySelector('.bg')
let main = document.querySelector('main')
let create = document.querySelector('.create-close')
let list_playlist = document.querySelector('.list-playlist')
let set = document.querySelector('.set')



let list_reload_playlist_aside = () => {
    list_playlist.innerHTML = ''

    for (let item of all_play) {
        let p = document.createElement('p')
        p.innerHTML = item.title
        list_playlist.append(p)
    }
}


let list_reload_playlist_main = () => {
    set.innerHTML = ''
    
    // console.log(all_play);
    for(let item of all_play){
        // console.log(JSON.parse(item));
        let p = document.createElement('p')
        p.innerHTML = item.title
        set.append(p)
    }
}

btn.onclick = () => {
    modal.classList.add('active')
    document.body.style.overflow = 'hidden'
}

create.onclick = () => {
    if (document.querySelector('.input').value === '') {
        create.style.backgroundColor = 'red'
        create.setAttribute('disabled', 'disabled')
        setTimeout(() => {
            create.style.backgroundColor = 'transparent'
            create.removeAttribute('disabled', 'disabled')
        }, 400);
    } else {
        window.location.reload()    
        list_reload_playlist_aside()
        list_reload_playlist_main()
        modal.classList.remove('active')
        console.log("Done!");
    }
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
        obj['music'] = []
    })
    localStorage.playlist += '$' + JSON.stringify(obj)

    list_reload_playlist_aside()
    list_reload_playlist_main()
}

list_reload_playlist_aside()
list_reload_playlist_main()


//Send id in playlist

