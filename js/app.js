
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
                createRadioLink.innerHTML =`<img class="radio-logo-img" src="${channelsArray[i].image}" alt="Logo of the radio station ${channelsArray[i].name}" /> </ br>
                `
                radioLinkContainer.appendChild(createRadioLink)
        }
    }
}

async function getApi() {
    let response = await fetch("https://api.sr.se/api/v2/channels?format=json&pagination=false");
    let data = await response.json();
    return data
}

async function nowPlayingApi(id){
    let response = await fetch(`http://api.sr.se/api/v2/playlists/rightnow?channelid=${id}&format=json`)
    let data = await response.json();
    return data
}

