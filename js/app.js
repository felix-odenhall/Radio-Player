//MAKE THE API URL INTO A VARIABLE, THEN THIS FETCH CAN BE REUSED
let stationArray = [];

const defaultAPI = "https://api.sr.se/api/v2/";

async function getApi() {
  //CHANGE THESE TO CONST // sorted
  const response = await fetch(
    `${defaultAPI}channels?format=json&pagination=false`
  );
  const data = await response.json();
  stationArray = data;
  return data;
}

async function nowPlayingApi(id) {
  const response = await fetch(
    `${defaultAPI}playlists/rightnow?channelid=${id}&format=json`
  );
  const data = await response.json();
  return data;
}

async function createRadioLinks() {
  const data = await getApi();
  const channelsArray = data.channels;
  const radioLinkContainer = document.getElementById("radio-logo-container");
  for (let i = 0; i < channelsArray.length; i++) {
    if (
      channelsArray[i].channeltype != "Extrakanaler" &&
      channelsArray[i].channeltype != "Minoritet och språk"
    ) {
      createRadioLinkImg(i, radioLinkContainer, channelsArray);
    }
  }
}

// Use break?

function createRadioLinkImg(i, radioLinkContainer, channelsArray) {
  let createRadioLink = document.createElement("a");
  createRadioLink.className = "radio-link";
  createRadioLink.href = `./radioStation/?id=${channelsArray[i].id}`;
  //   createRadioLink.addEventListener("click", () => {});
  createRadioLink.innerHTML = `<img class="radio-logo-img" src="${channelsArray[i].image}" alt="Logo of the radio station ${channelsArray[i].name}" />`;
  radioLinkContainer.appendChild(createRadioLink);
}

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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//PARAM IS A BAD VARIABLE NAME // Sorted - changed param to id
function retriveUrl(id) {
  const searchUrlParams = new URLSearchParams(window.location.search);
  return searchUrlParams.get(id);
}

//https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

// Feedback (just for JavaScript):

// ----- Sorted
// You mentioned it yourself, but yeah at the moment getApi doesn't make sense since you're fetching one particular endpoint.
// I would create a variable for the default API url and then rename the function to specify what you're fetching and then using the default API url + the specific endpoint
// Like you're for example doing with nowPlayingApi

// ------ Changed radio-logo-container from class to ID since its only one.
//  Unsure of the use of the querySelector since...
// it returns the first Element within the document that matches the specified selector, or group of selectors
// meaning that if you would have multiple elements with the same selector you'd run into issues...

//----------- SORTED, This was not needed
// You have an unused addEventListener for click.

// I'd break out everything inside the for loop.

// You seem to fetch twice from getApi, a second time inside radioPlayer.js?

// What's the reason for programs.channels.filter?

// I'd also break out everything inside the filter
// And then I would also not run anything inside the filter, since the filter will return a new array.
// Assign the new array to a variable and then use it after that...

// I also don't think you need to separate it into two different files

// Example form lecture

// import { Routes, Route } from "react-route-dom";

// function app() {
//   return {
//     <div classNAme="App">
//     <Route>
//     <Route path="/profile/:id" element={<UserProfile />}
//     </Route>
//     </div>
//   }
// };

// import { Link } from "react-route-dom";

// function app() {
//   return {
//     <div classNAme="App">
//     <Route>
//     <Link to="/about">About Page</Link>}
//     </Route>
//     </div>
//   }
// };

// Example 2

// import { Link } from "react-route-dom";

// function app() {
// const user = {
//   id: 123,
//   name: "Felix Odenhall"
// }
//   return {
//     <div classNAme="App">
//     <Route>
//     <Link to=`/profile/${user.id}`>{user.name}</Link>}
//     </Route>
//     </div>
//   }
// };

// Example 3

// import { useState } from 'react';
// import { userParams } from 'react-router-dom';

// function UserProfile() {
//   const [user, setUser] = useState(null);
//   const { id } = userParams();

//   async getUser() {
//     const user = await fetchUser(id);
//     setUser(user);
//   }
// }
