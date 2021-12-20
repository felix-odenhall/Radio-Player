//MAKE THE API URL INTO A VARIABLE, THEN THIS FETCH CAN BE REUSED
async function getApi() {
    //CHANGE THESE TO CONST // sorted
    const response = await fetch("https://api.sr.se/api/v2/channels?format=json&pagination=false");
    const data = await response.json();
    return data
}

async function nowPlayingApi(id){
    const response = await fetch(`http://api.sr.se/api/v2/playlists/rightnow?channelid=${id}&format=json`)
    const data = await response.json();
    return data
}

async function createRadioLinks(){
    const data = await getApi()
    const channelsArray = data.channels;
    const radioLinkContainer = document.querySelector(".radio-logo-container")
    for (let i = 0; i < channelsArray.length; i++) { 
        if (channelsArray[i].channeltype != "Extrakanaler" && channelsArray[i].channeltype != "Minoritet och språk"){
            let createRadioLink = document.createElement("a")
                createRadioLink.className ="radio-link"
                createRadioLink.href = `./radioStation/?id=${channelsArray[i].id}`
                createRadioLink.addEventListener('click', ()=>{
                })
                createRadioLink.innerHTML =`<img class="radio-logo-img" src="${channelsArray[i].image}" alt="Logo of the radio station ${channelsArray[i].name}" />`
                radioLinkContainer.appendChild(createRadioLink)
        }
    }
}

