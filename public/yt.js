// accessible variable for calling player functions
let player;



// gets called automatically when YouTube player loads
function onYouTubeIframeAPIReady() {
    // using global variable
    player = new YT.Player('yt-player', {
      height: '0',
      width: '0',
      playerVars: {  'start': 159,'autoplay': 1, 'controls': 0, 'modestbranding': 1, 'showinfo': 0,},
      events: {
        'onStateChange': onPlayerStateChange, 
        
      }
    });
  }

  // this function triggers when we change song in player
  // can be used to update things, like counters
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) return
  }
  /*
  // call the function every 1 second.
setInterval(displTime,1000); 

function displTime() {
//if (! player)
   //alert("NO player object !");  // Check if player has been set. 
// player.getCurrentTime() or player.getDuration()
var mind = player.getCurrentTime();   // returns elapsed time in seconds 
var m = Math.floor(mind / 60);
var secd = mind % 60;
var s = Math.ceil(secd)
curretTime = m + ":" + s
console.log(curretTime);  // Using the JQUERY library to write to body
}

function displDuration() {
  var mind = player.getDuration();  
  var m = Math.floor(mind / 60);
  var secd = mind % 60;
  var s = Math.ceil(secd)
  duration = m + ":" + s
  console.log(duration ); 
  
}*/


