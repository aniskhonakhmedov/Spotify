let aside = document.querySelector('.aside')
let audio = document.querySelector('.audio')
let el = document.querySelector('audio')
let header = document.querySelector('.header')

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
<a href="./userlist.html" class="list-link">Liked songs</a>
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

header.innerHTML = `<header class="header">
<div class="hidden"><img src="./img/logo.png" class="aside-logo" alt=""></div>
<div class="header-search">
   <input type="text" class="search" placeholder="Search by name and artist">
   <img src="./img/search.png" width="30px">
</div>
<a href="#" class="header-user">
   <div class="header-user-name">Alex Adams</div>
   <div class="header-user-status">Free user</div>
</a>
</header>`

let img_listen = document.querySelectorAll('.hre')
let pause = document.querySelector('.pause')
let play = document.querySelector('.play')
let name_ = document.querySelector('p[data-name="name"]')
let author = document.querySelector('p[data-author="author"]')
let treck_audio = document.querySelector('.treck_audio')
let second_num = document.querySelector('.second-num')

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

let unlisten = () => {
   treck_audio.removeAttribute('src', `./audio/${param.title_org}.mp3`)
}

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

setInterval(() => {
   console.log("clear");
   localStorage.clear()
}, 10000);