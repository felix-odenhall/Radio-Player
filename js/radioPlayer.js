// document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);

function playPause(){
    const audio = document.querySelector("#musicPlayer")
    const image = document.querySelector(".playPause-img")
    if(audio.paused){
        console.log("sound on")
        audio.play()
        image.src = "../assets/pause.png"
    } else {
        console.log("sound off")
        audio.pause()
        image.src = "../assets/play.png"
    }
}

function changeVolume(){
    const audio = document.querySelector("#musicPlayer")
    audio.volume = document.getElementById("change_vol").value;
}
// let player;

// function startplayer() {
//     player = document.getElementById('musicPlayer');
//     player.controls = false;
// }

// function playRadio() {
//     if(player.isPlaying){
//         player.play();
//     } else {
//         player.pause();
//     }
// } 
// function pauseRadio() {
//     player.pause();
// }
// function changeVolume(){
//     player.volume = document.getElementById("change_vol").value;
// }

// function playPause() {
//     let contolImg = document.querySelector(".multi-btn")
//     if (audio.isPlaying) {
//         audio.pause()
//         contolImg.src = "../assets/pause.png"
//     } else {
//         audio.play()
//         contolImg.src = "../assets/play.png"
//     }
// }

// function playPause(){

//     if (player.isPlaying) {
//         player.pause()
//     controlImg.img.src = "../image/pause.png"
//     } else {
//         player.play()
//     controlImg.img.src = "../image/play.png"
//     }
//     }



async function createLiveRadio(){
    const id = JSON.parse(findQuery("id"))
    const audioElement = document.querySelector(".liveAudio")
    const channelImg = document.querySelector('.live-img')
    const programs = await getApi()
    
    const nowPlaying = await nowPlayingApi(id)
    const nowPlayingElement = document.querySelector(".playing-now")
    programs.channels.filter((program) => {
        if(program.id === id){
            channelImg.src = program.image
            audioElement.src = program.liveaudio.url
            nowPlayingElement.innerHTML = nowPlaying.playlist.song 
            ? nowPlaying.playlist.song.description: 
            ""
        }
    })
}

function findQuery (param) {
    const searchUrlParams = new URLSearchParams(window.location.search);
    return searchUrlParams.get(param);
};