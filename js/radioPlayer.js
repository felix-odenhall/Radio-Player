const audio = document.querySelector("#music-player");

function playPause() {
  const playPauseImg = document.querySelector(".playPause-img");
  if (audio.paused) {
    audio.play();
    playPauseImg.src = "../assets/pause.png";
  } else {
    audio.pause();
    playPauseImg.src = "../assets/play.png";
  }
}

function changeVolume() {
  audio.volume = document.getElementById("control-volume").value;
}

async function populateRadioPlayer() {
  const id = JSON.parse(retriveUrl("id"));
  const audioElement = document.querySelector(".live-audio");
  const channelImg = document.querySelector(".live-img");
  const programs = await getApi();

  const nowPlaying = await nowPlayingApi(id);
  const nowPlayingElement = document.querySelector(".playing-now");
  programs.channels.filter((program) => {
    if (program.id === id) {
      channelImg.src = program.image;
      channelImg.alt = `Logo of the radio station ${program.name}`;
      audioElement.src = program.liveaudio.url;
      nowPlayingElement.innerHTML = nowPlaying.playlist.song
        ? nowPlaying.playlist.song.description
        : "";
    }
  });
}

//PARAM IS A BAD VARIABLE NAME // Sorted - changed param to id
function retriveUrl(id) {
  const searchUrlParams = new URLSearchParams(window.location.search);
  return searchUrlParams.get(id);
}
