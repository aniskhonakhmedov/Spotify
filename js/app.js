import { data, all_play } from './data.js'

if (!localStorage.liked) localStorage.liked = []
localStorage.like += JSON.stringify(all_play)
if (!localStorage.recently) localStorage.recently = []

//QuerySelectors
let leftRandom = document.querySelector('.left-random')
let midLiked = document.querySelector('.mid-liked')
let name_track = document.querySelector('.name-track')
let pause = document.querySelector('.pause')
let album = document.querySelector('.album')
let time = document.querySelector('.time')
let play = document.querySelector('.play')
let treck_audio = document.querySelector('.treck_audio')
let p_playList = document.querySelector('.playlistName')
let close = document.querySelector('.close')
let modal = document.querySelector('.modal')
let bg = document.querySelector('.bg')
let create = document.querySelector('.create-close')
let name_tracks = document.querySelector('.name-tracks')
let name_ = document.querySelector('p[data-name="name"]')
let author = document.querySelector('p[data-author="author"]')
let second_num = document.querySelector('.second-num')
let RightListened = document.querySelector('.right-listened')
let activeButton = document.querySelector(".menu.active");
let el = document.querySelector('audio')
let list = document.querySelector('.tra')

//Forms
let form = document.forms.register

//Object
let obj = {}

//Numbers
let procent = 0
let num_num = 0

//Array
let recently_for_local = localStorage.recently.split(',') || []
let liked_for_local = localStorage.liked.split(',') || []
let array = []
let send = []
let numbers = []

// Ранжомное число
let randomNumber = () => {
    let random_start = 0; // От какого генерировать
    let random_end = data.length; // До какого генерировать

    let allСycles = data.length;


    for (let i = random_start; i <= random_end; i++) {
        array.push(i)
    }

    for (let countCycles = 1; countCycles <= allСycles; countCycles++) {
        numbers.push(array.splice(Math.random() * array.length, 1)[0])
    }
    numbers.splice(10)
}

randomNumber()

let p_rand = document.createElement('p')
p_rand.innerHTML = '10 random songs'
p_rand.classList.add('item')

let p_liked = document.createElement('p')
p_liked.innerHTML = 'liked tracks'
p_liked.classList.add('item')


//reload
const reload = (track) => {
    leftRandom.innerHTML = ''
    leftRandom.append(p_rand)

    midLiked.innerHTML = ''
    midLiked.append(p_liked)
    num_num = 0
    for (let item of track) {

        //Рандомные треки (10шт)
        for (let num of numbers) {
            if (item.id == num) {
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
                img_author.classList.add('hre')

                div_num.innerHTML = ++num_num
                img_author.setAttribute('src', `./picture/${item.img}.jpg`)
                img_author.style.width = '40px'
                img_author.style.height = '40px'
                p_name.innerHTML = item.title
                p_author.innerHTML = item.author
                img_circle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>`

                p_like.innerHTML = "Like"
                p_add.innerHTML = 'Add to playlist'
                p_listen.innerHTML = 'Listen now'



                p_like.onclick = () => {
                    like(item.id)
                    event.preventDefault()
                }

                img_circle.onclick = () => {
                    if (div_menu.classList.contains("active")) return;

                    div_menu.classList.add("active");
                    document.querySelector('.close').classList.add('active')
                    if (activeButton) activeButton.classList.remove("active")

                    activeButton = div_menu;
                }

                p_add.onclick = () => {
                    modal.classList.add('active')
                    send_idPlayList(item.id)
                    document.body.style.overflow = 'hidden'
                }

                p_listen.onclick = () =>{
                    listen(item)
                    if (!recently_for_local.includes(item.id)) {
                        aside_reload()
                        recently_()
                    }
                    nedavno(item.id)
                }

                div_img.onclick = () => {
                    listen(item)
                    if (!recently_for_local.includes(item.id)) {
                        aside_reload()
                        recently_()
                    }
                    nedavno(item.id)
                }

                div_main.append(div_num, div_info, div_img, div_about)
                div_img.append(img_author)
                div_about.append(div_name, div_time_menu)
                div_name.append(p_name, p_author)
                div_time_menu.append(p_time, img_circle, div_menu)
                div_menu.append(p_like, p_add, p_listen)
                leftRandom.append(div_main)
            }

        }

        //Понравившиеся треки
        let like_reload = () => {
            for (let id of liked_for_local) {
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

                    p_like.onclick = () => {
                        like_reload()
                        like(item.id)
                    }

                    img_circle.onclick = () => {
                        if (div_menu.classList.contains("active")) return;

                        div_menu.classList.add("active");
                        document.querySelector('.close').classList.add('active')

                        if (activeButton) {
                            activeButton.classList.remove("active");
                        }
                        activeButton = div_menu;
                    }

                    div_img.onclick = () => {
                        listen(item)
                        if (!recently_for_local.includes(item.id)) {
                            aside_reload()
                            recently_()
                        }
                        nedavno(item.id)
                    }

                    p_add.onclick = () => {
                        modal.classList.add('active')
                        send_idPlayList(item.id)
                        document.body.style.overflow = 'hidden'
                    }

                    p_listen.onclick = () =>{
                        listen(item)
                        if (!recently_for_local.includes(item.id)) {
                            aside_reload()
                            recently_()
                        }
                        nedavno(item.id)
                    }

                    div_main.append(div_num, div_info, div_img, div_about)
                    div_img.append(img_author)
                    div_about.append(div_name, div_time_menu)
                    div_name.append(p_name, p_author)
                    div_time_menu.append(p_time, img_circle, div_menu)
                    div_menu.append(p_like, p_add, p_listen)
                    midLiked.append(div_main)
                }
            }
        }
        like_reload()

        //Недавно
        let recently_ = () => {
            if (recently_for_local.includes(item.id.toString())) {
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

                p_like.onclick = () => {
                    like(item.id)
                    event.preventDefault()
                }

                img_circle.onclick = () => {
                    if (div_menu.classList.contains("active")) return;

                    div_menu.classList.add("active");
                    document.querySelector('.close').classList.add('active')

                    if (div_menu.classList.add("active")) {
                        div_menu.onclick = () => div_menu.classList.remove("active");
                    }
                    if (activeButton) {
                        activeButton.classList.remove("active");
                    }
                    activeButton = div_menu;
                }

                close.onclick = () => {
                    div_menu.classList.remove('active')
                }

                p_add.onclick = () => {
                    modal.classList.add('active')
                    send_idPlayList(item.id)
                    document.body.style.overflow = 'hidden'
                }

                div_img.onclick = () => {
                    listen(item)
                    if (!recently_for_local.includes(item.id)) {
                        aside_reload()
                        recently_()
                    }
                    nedavno(item.id)
                }

                p_listen.onclick = () =>{
                    listen(item)
                    if (!recently_for_local.includes(item.id)) {
                        aside_reload()
                        recently_()
                    }
                    nedavno(item.id)
                }

                div_main.append(div_num, div_info, div_img, div_about)
                div_img.append(img_author)
                div_about.append(div_name, div_time_menu)
                div_name.append(p_name, p_author)
                div_time_menu.append(p_time, img_circle, div_menu)
                div_menu.append(p_like, p_add, p_listen)
                RightListened.prepend(div_main)
            }
            // }
        }
        recently_()

        //aside reload
        let aside_reload = () => {
            if (recently_for_local.includes(item.id.toString())) {
                let a = document.createElement('a')
                let span = document.createElement('span')
                a.setAttribute('href', '#')
                a.innerHTML = item.title

                setTimeout(() => {
                    span.innerHTML = item.length
                }, 300)
                a.classList.add('list-link')
                a.append(span)
                list.append(a)
            }
        }
        aside_reload()
    }
}
reload(data)


// like
const like = (details) => {
    liked_for_local.push(details)
    localStorage.liked = [...new Set(liked_for_local)]
    window.location.reload();
    let find = data.filter(item => item.id == details)[0]
    find.isLiked = !find.isLiked
}

//recently
let nedavno = (param) => {
    recently_for_local.push(param)
    localStorage.recently = recently_for_local
    let find = data.filter(item => item.id == param)[0]
}

//Прослушанные треки
let listen = (param) => {
    name_.innerHTML = param.title;
    author.innerHTML = param.author;
    name_tracks.innerHTML = param.title
    name_track.innerHTML = param.author
    time.innerHTML = param.length
    album.setAttribute('src', `./picture/${param.img}.jpg`)
    treck_audio.setAttribute("src", `./audio/${param.title_org}.mp3`);
    second_num.innerHTML = param.length;
    treck_audio.removeAttribute("muted", "muted");
    treck_audio.setAttribute("autoplay", "autoplay");
    treck_audio.play();
    play.classList.remove("active");
    pause.classList.add("active");

    status_bar(param)
};

let count_po = document.querySelector('.count')

let status_bar = (param) => {

    setInterval(() => {
       count_po.style.width = procent + '%'
 
       procent++
 
       if (procent >= 100) procent = 0
       if (procent == +param.length.replace(':', '') * 60) next()
    }, +param.length.replace(':', '') * 60)
    console.log(+param.length.replace(':', ''));
 }

//modal view
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


//form
form.onsubmit = () => {
    event.preventDefault()

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        obj[key] = value
        obj['music'] = []
    })
    localStorage.playlist += '$' + JSON.stringify(obj)

    reload_playlist()
}


//reload playlist
let reload_playlist = () => {
    p_playList.innerHTML = ''

    for (let item of all_play) {
        let p = document.createElement('p')
        let count = document.createElement('p')
        let block_p = document.createElement('div')
        
        count.innerHTML = item.music.length + ' songs'
        p.innerHTML = item.title
        block_p.onclick = () => {
            takePlaylist(item)
        }

        block_p.classList.add('som')
        block_p.append(p, count)
        p_playList.append(block_p)
    }
}
reload_playlist()

//take playlist
let send_idPlayList = (param) => {
    send.push(param)
}

let takePlaylist = (param) => {
    for (let item of send) {
        if (param.music.includes(item)) {
            console.log('have');
        } else {
            param.music.push(item)
            console.log(param);
        }
    }
}

