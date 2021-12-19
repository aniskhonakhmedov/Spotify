let playlists = [{
    title: 'liked',
    music: []
}]
let all_play = []

if(localStorage.playlist){
    for (let item of localStorage.playlist.split('$').splice(1)) {
        item = JSON.parse(item)
        all_play.push(item)
    }
}


let treck_audio = document.querySelector('.treck_audio')


let music = [
    // {
    //     title: String,
    //     author: String,
    //     title_org: String,        
    //     length: Number,
    //     isLiked: false,
    // },
    {
        title: 'lovely',
        title_org: "lovely", //for audio in js
        author: 'Khalid, Billie Eilish',
        img: 'lovely',

        length: Number,
        isLiked: false,
    },
    {
        title: 'bad guy',
        title_org: 'bad-guy',
        author: 'BillieEilish',
        img: 'badGuy',

        length: Number,
        isLiked: false,
    },
    {
        title: 'Six Feet Under',
        author: 'Billie Eilish',
        title_org: "SixFeetUnder",
        img: 'six',

        length: Number,
        isLiked: false,
    },
    {
        title: 'Сан Ларан',
        author: 'Платина, дора',
        title_org: 'СанЛаран',
        img: 'sanLoran',

        length: Number,
        isLiked: false,
    },
    {
        title: 'Младшая сестра',
        author: 'дора',
        title_org: 'МладшаяСестра',
        img: 'doradura',

        length: Number,
        isLiked: false,
    },
    {
        title: 'Втюрилась',
        author: 'дора',
        title_org: 'Втюрилась',
        img: 'vturilas',

        length: Number,
        isLiked: false,
    },
    {
        title: 'Дорадура',
        author: 'дора',
        title_org: 'Дорадура',
        img: 'doradura',

        length: Number,
        isLiked: false,
    },
    {
        title: 'Toxic',
        author: 'BoyWithUke',
        title_org: 'Toxic',
        img: 'toxic',

        length: Number,
        isLiked: false,
    },
    {
        title: 'MONEY',
        author: 'LISA',
        title_org: 'MONEY',
        img: 'money',

        length: Number,
        isLiked: false,
    },
    {
        title: 'I WANNA BE YOUR SLAVE',
        author: 'Måneskin',
        title_org: 'IWANNABEYOURSLAVE',
        img: 'wanna',

        length: Number,
        isLiked: false,
    },
    {
        title: 'PUSSY BOY',
        author: 'ЕГОР КРИД',
        title_org: 'PUSSYBOY',
        img: 'pussy',

        length: Number,
        isLiked: false,
    },
    {
        title: 'LIPSI HA',
        author: 'INSTASAMKA',
        title_org: 'LIPSIHA',
        img: 'lipsi',

        length: Number,
        isLiked: false,
    },
    {
        title: 'STAY',
        author: 'The Kid LAROI, Justin Bieber',
        title_org: 'stay',
        img: 'stay',

        length: Number,
        isLiked: false,
    },
    {
        title: 'Astronaut In The Ocean',
        author: "Masked Wolf",
        title_org: 'Astronaut',
        img: 'ocean',

        length: Number,
        isLiked: false,
    },
]


music.forEach((item, i) => {
    item.id = i;
});

let div = document.createElement('div')
div.classList.add('hidden')

let data = music
for (let item of music) {
    // READ MUSIC INFO
    let audio = document.createElement('audio')

    audio.setAttribute('src', './audio/' + item.title_org + '.mp3')
    audio.controls = true

    div.innerHTML = ''
    div.append(audio)
    document.body.prepend(div)


    audio.addEventListener("loadeddata", function () {
        // audio.duration ? console.log(audio.duration) : console.log('NO FILE!')
        item.length = audio.duration 
        item.length = item.length / 60
        item.length = Math.ceil((item.length)*100)/100
        item.length = item.length.toString().replace('.', ':')
        data.push(item)
    });
}


export { data, all_play } 

