import {
   data,
   playlists
} from './data.js'

let aside = document.querySelector('.aside')
let audio = document.querySelector('.audio')
let el = document.querySelector('audio')
let header = document.querySelector('.header')
setTimeout(() => {
   let list_playlist = document.querySelector('.list-playlist')
   console.log(list_playlist);
}, 100);

aside.innerHTML = `<a href="#" class="aside-logo close-logo">
<img src="./img/logo.png">
</a>
<div class="list">
<p class="list-name">NAVIGATION</p>
<a href="./index.html" class="list-link">Homepage</a>
<a href="./playlist.html" class="list-link">Playlists</a>
<a href="./settings.html" class="list-link">Settings</a>
</div>

<div class="list">
<p class="list-name">PLAYLISTS</p>
<div class="list-playlist"></div>
</div>

<div class="list tra">
<p class="list-name">STAY</p>

</div>`

audio.innerHTML = `<figure>
<figcaption>
   <p data-name="name"></p>
   <p data-author="author"></p>
</figcaption>
<audio class="treck_audio" controls src="./audio/bad-guy.mp3">

</audio>
<div class="audio_player">

</div>
</figure>

<div class="player-item">
   <div class="top">
      <img src="./img/play.svg" class="hg active play" alt="play">
      <img src="./img/pause.svg" class="hg pause" alt="pause">
   </div>
   <div class="bottom">
      <div class="first-num hm active">0</div>
      <div class="long"></div>
      <div class="second-num hm">4:30</div>
   </div>
</div>
`

header.innerHTML = `
<div class="hidden"><img src="./img/logo.png" class="aside-logo" alt=""></div>
<div class="header-search">
   <input type="text" class="search" id="input" placeholder="Search by name and artist">
   <div class="search_treck"></div>
   <img src="./img/search.png" width="30px">
</div>
<a href="#" class="header-user">
   <div class="header-user-name">Alex Adams</div>
   <div class="header-user-status">Free user</div>
</a>`


let img_listen = document.querySelectorAll('.hre')
let pause = document.querySelector('.pause')
let play = document.querySelector('.play')
let name_ = document.querySelector('p[data-name="name"]')
let author = document.querySelector('p[data-author="author"]')
let treck_audio = document.querySelector('.treck_audio')
let second_num = document.querySelector('.second-num')



pause.onclick = () => {
   if (treck_audio.paused == false) treck_audio.pause();
   else treck_audio.play();
   play.classList.add('active')
   pause.classList.remove('active')
}

play.onclick = () => {
   if (treck_audio.paused == false) treck_audio.pause();
   else treck_audio.play();
   play.classList.remove('active')
   pause.classList.add('active')
}

let search = document.querySelector('.search')
let search_treck = document.querySelector('.search_treck')

search.onkeyup = () => {
   
   localStorage.search = event.target.value.trim()
   
   document.querySelector('.search_treck').classList.add('active')
   document.querySelector('.search_treck').style.display = 'block'
   if (event.target.value.trim().length >= 2) {
      search_treck.innerHTML = ''
      for (let item of data) {
         if (item.title.toLowerCase().trim().includes(event.target.value.toLowerCase().trim())) {
            console.log('create!');

            let name_p = document.createElement('p')
            let author_p = document.createElement('p')
            let length_p = document.createElement('p')
            let div_block = document.createElement('div')
            let left_div = document.createElement('div')
            let right_div = document.createElement('div')

            div_block.classList.add('asdf')

            name_p.innerHTML = item.title
            author_p.innerHTML = item.author
            length_p.innerHTML = item.length

            left_div.append(name_p, author_p)
            right_div.append(length_p)
            div_block.append(left_div, right_div)
            search_treck.append(div_block)

            div_block.onclick = () => listen(item)
         }
      }
   } else {
      document.querySelector('.search_treck').classList.remove('active')
      document.querySelector('.search_treck').style.display = 'none'
   }

   // if(){

   // }
}

document.getElementById('input').addEventListener('change', onChange());

function onChange() {
   var text = document.getElementsByTagName("input");
   var val = text.value;

   data.forEach(function (item) {
      if (item.title.includes(val)) {
         console.log(item.title);
      }
   });
}

let listen = (param) => {
   name_.innerHTML = param.title
   author.innerHTML = param.author
   treck_audio.setAttribute('src', `./audio/${param.title_org}.mp3`)
   second_num.innerHTML = param.length
   treck_audio.removeAttribute('muted', "muted")
   treck_audio.setAttribute('autoplay', 'autoplay')
   treck_audio.play()
   play.classList.remove('active')
   pause.classList.add('active')
}

let list_reload_playlist = () => {

}