import { data, playlists } from './data.js'
if (!localStorage.liked) localStorage.liked = []
let liked_for_local = localStorage.liked.split(',') || []

let main = document.querySelector('.main')
let activeButton = document.querySelector(".menu.active");
let album = document.querySelector('.audio-user-album')
let track = document.querySelector('.audio-play')
let el = document.querySelector('audio')

let user_name = document.querySelector('.audio-user-name')
// let data = music
let reload = (param) => {
    main.innerHTML = ''
    
    for (let id of liked_for_local) {
        for (let item of param) {
            if (item.isLiked == true || item.id == id) {
                let div_main = document.createElement('div')
                let div_num = document.createElement('div')
                let div_info = document.createElement('div')
                let div_img = document.createElement('div')
                let div_about = document.createElement('div')
                let div_name = document.createElement('div')
                let div_time_menu = document.createElement('div')
                let div_menu = document.createElement('div')
                let img_author = document.createElement('img')
                let img_circle = document.createElement('span')
                let p_name = document.createElement('p')
                let p_author = document.createElement('p')
                let p_time = document.createElement('p')
                let p_like = document.createElement('p')
                let p_add = document.createElement('p')
                let p_listen = document.createElement('p')


                div_main.classList.add("track")
                div_num.classList.add('num')
                div_img.classList.add('img')
                div_info.classList.add('info')
                div_about.classList.add('about')
                div_name.classList.add('name')
                div_time_menu.classList.add('time-menu')
                p_listen.classList.add("listen")
                p_listen.classList.add("toUpper")
                p_like.classList.add("toUpper")
                p_like.classList.add('like')
                p_add.classList.add("toUpper")
                p_add.classList.add('add')
                p_time.classList.add('time')
                div_menu.classList.add("menu")
                img_circle.classList.add('three-circle')


                img_author.setAttribute('src', `./picture/${item.img}.jpg`)
                img_author.style.width = '40px'
                img_author.style.height = '40px'
                p_name.innerHTML = item.title
                p_author.innerHTML = item.author
                img_circle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>`

                p_like.innerHTML = "Like"
                p_add.innerHTML = 'Add to playlist'
                p_listen.innerHTML = 'Listen now'

                p_like.onclick = () => like(item.id)

                img_circle.onclick = () => {
                    if (div_menu.classList.contains("active")) return;

                    div_menu.classList.add("active");

                    if (activeButton) {
                        activeButton.classList.remove("active");
                    }
                    activeButton = div_menu;
                }


                p_like.onclick = () => {
                    reload(data)
                    like(item.id)
                }

                div_main.onclick = () => listen(item)

                div_main.append(div_num, div_info, div_img, div_about)
                div_img.append(img_author)
                div_about.append(div_name, div_time_menu)
                div_name.append(p_name, p_author)
                div_time_menu.append(p_time, img_circle, div_menu)
                div_menu.append(p_like, p_add, p_listen)
                main.append(div_main)
            }
        }
    }
}
reload(data)

let listen = (param) => {
    console.log(param);
    user_name.innerHTML = param.title
    album.innerHTML = param.author
    console.log(album, user_name);
    track.setAttribute('src', `./audio/${param.title_org}.mp3`)
    track.removeAttribute('muted', "muted")
    track.setAttribute('autoplay', 'autoplay')
    param.length = el.duration
    console.log(param.length);
}

const like = (details) => {
    liked_for_local.push(details)

    localStorage.liked = [...new Set(liked_for_local)]

    let find = data.filter(item => item.id == details)[0]
    find.isLiked = !find.isLiked
}