document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);

var player;

var player;

function startplayer() 
{
 player = document.getElementById('musicPlayer');
 player.controls = false;
}

function playRadio() 
{
 player.play();
} 
function pauseRadio() 
{
 player.pause();
}
function changeVolume()
{
 player.volume=document.getElementById("change_vol").value;
}