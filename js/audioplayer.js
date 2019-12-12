////////////////////////////////////
// Set up audio player and timeline
////////////////////////////////////

// create variables
//var btn = document.querySelector('.btn'),
var btn = document.getElementById("playButton"),
    tl = new TimelineLite({paused:true}),
    audio = new Audio();
  var  playing = false;
var belowPlayButton = document.getElementById("belowPlayButton");

// set audio. Path is not relevant to the js file.
audio.src = "audio/TrippTapes10_06_1997.mp3";

var timel = gsap.timeline();


btn.addEventListener('click', function() {
  // Pressing play button, i.e., tl is not active, then audio plays and changes button to pause
  // Pressing pause button, i.e., tl is active, then audio pauses and changes button to play
//  let tween = gsap.to("#playButton", {duration:1, y:8, yoyo:true});



  // if playing is true then pause, else play
   if (playing) {
    btn.innerText = 'Play';
    audio.pause();
    tl.pause();
    playing = false;
    timel.to("#playButton", {duration:1, y:0});
    belowPlayButton.style.display = "block";
    //return button to starting point
  } else {
    btn.innerText = 'Pause';
    console.log("in pause");
    audio.play();
    tl.play();
    playing = true;
    //hide bottom of play button
    belowPlayButton.style.display = "none";
    timel.to("#playButton", {duration:1, y:8});
  }
});

// restart audio and timeline when clip ends
audio.addEventListener('ended', function() {
  console.log('audio ended');
  btn.innerText = 'Replay';
  tl.restart();
  tl.pause();
})
