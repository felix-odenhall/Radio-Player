let GuessArtist;



var el = document.getElementById("songGuess");
el.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

function getSong(data){
    GuessArtist = data.playlist.previoussong ? 
    data.playlist.previoussong.artist: 'undefined'
    let wrapperSongContainer = document.querySelector(".song-container")
    if (data.playlist.song){
        let currerntArtist = document.querySelector(".addCurrentArtist");
        let currerntSong = document.querySelector(".addCurrentSong");
        currerntArtist.innerHTML = `Artist: ${data.playlist.song.artist}`
        currerntSong.innerHTML = `Song: ${data.playlist.song.title}`

        let previousArtist = document.querySelector(".addPreviousArtist");
        let previousSong = document.querySelector(".addPreviousSong");
        previousArtist.innerHTML = `Artist: ${data.playlist.previoussong.artist}`
        previousSong.innerHTML = `Song: ${data.playlist.previoussong.title}`
    } else {
        wrapperSongContainer.innerHTML = `<h2>There is no song playing at the moment, just random talks about dogs in swedish, 
        last song was ${data.playlist.previoussong.artist} with ${data.playlist.previoussong.title}</h2>`
    }
    
    let previousSongGuess = document.querySelector(".addPreviousSongGuess");
    previousSongGuess.innerHTML = `${data.playlist.previoussong.title}`
    // let previouspreviousArtistGuess = document.querySelector(".addPreviousSongGuess");
    // previouspreviousArtistGuess.innerHTML = `${data.playlist.previoussong.artist}`
    

}

//ta reda på value, kör en submit function, järmför song med value


//Check if the guess matches the current song
function checkIfCorrect(){
    let check = document.getElementById("songGuess").value == GuessArtist
    if (check){
        console.log("Correct!")
    }
    if (!check) {
        console.log("Incorrect!")
    }
    document.getElementById('songGuess').value = ''
}

// function updatePage(){
//     setInterval(()=>{
//         getApi();
//     }, 5000);
// }
    
// function hideGuess(){
//     if(songGuessText){
//         document.getElementById("guess-container").classList.remove("hide");
//     } else {
//         document.getElementById("guess-container").classList.add("hide");
//     }
    
// }

async function getApi() {
    let response = await fetch("http://api.sr.se/api/v2/playlists/rightnow?channelid=2576&format=json");
    let data = await response.json();
    getSong(data)
    // musicQuiz()
    console.log(data)
}

getApi();
// updatePage();
// hideGuess()
