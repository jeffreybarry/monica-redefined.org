////////////////////////////////////
// Set up audio player and timeline
////////////////////////////////////

// create variables
var btn = document.querySelector('.btn'),
    tl = new TimelineLite({paused:true}),
    audio = new Audio();
    playing = false;

// set audio. Path is not relevant to the js file.
audio.src = "audio/TrippTapes10_06_1997.mp3";

//audio.src = "https://raw.githubusercontent.com/ahmednooor/textonome/master/media/gotViolin.mp3";
// set durationg and time it takes to fill each progress bar once audio is loaded
//audio.addEventListener('loadedmetadata', function() {
//    duration = audio.duration;
//    if (w>500) {
  //    interval = duration/elCount;
  //  } else {
  //    interval = duration/elCountMobile;
  //  }
    // creates timeline once duration and interval are set
  //  createTimeline();
//});
//createTimeline();

//function createTimeline() {
//  tl.staggerTo('.progress-bar', interval,{strokeOpacity:1}, interval);
//}

//pause button is not pausing playback

btn.addEventListener('click', function() {
  // Pressing play button, i.e., tl is not active, then audio plays and changes button to pause
  // Pressing pause button, i.e., tl is active, then audio pauses and changes button to play
  console.log("catches event listener on button");
  //the pause button catches the event listener but does not pause the audio because it doesn't meet the condition of the if statement tl.isActive
  //if var playing is undefined, then set to false.

  console.log("Button label status on catch is " + playing);
  //set a boolean var to true for playing
   //if (tl.isActive()) {
  // if playing is true then pause, else play {
   if (playing) {
    btn.innerText = 'Play';
    console.log("in play");
    audio.pause();
    tl.pause();
    playing = false;
  } else {
    btn.innerText = 'Pause';
    console.log("in pause");
    audio.play();
    tl.play();
    //set a boolean var to true for playing
    playing = true;
    console.log("Button label in pause state is " + playing);
  }
});

// restart audio and timeline when clip ends
audio.addEventListener('ended', function() {
  console.log('audio ended');
  btn.innerText = 'Replay';
  tl.restart();
  tl.pause();
})
