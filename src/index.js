import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WaveSurfer from 'wavesurfer.js';

import firstTrack from '../src/assets/keiyaa--forever-ya-girl/01-i-thot-there-was-one-wound-in-this-house-theres-two.mp3'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

      
var Spectrum = WaveSurfer.create({
  container: '#audio-spectrum',
  progressColor: "#ffffff",
  height: 50,
autoCenter: true
});

var buttons = {
  play: document.getElementById("play--icon"),
//                                     pause: document.getElementById("btn-pause"),
//                                     stop: document.getElementById("btn-stop")
};

const lyricsText = document.getElementById('lyrics-text'); 
const lyricsToggle = document.getElementById('lyrics-toggle');

lyricsToggle.addEventListener("click", function () {
  if(!lyricsText.classList.contains('noshow')) {
    lyricsText.classList.add('noshow');
  } else {
    lyricsText.classList.remove('noshow');
  }
});

//Handle Play button
buttons.play.addEventListener("click", function () {
  if(Spectrum.pause){
              Spectrum.play();
              buttons.innerHTML = "||";
            } else {
              Spectrum.pause();
              buttons.innerHTML = ">";
            }
});

//                                 // Add a listener to enable the play button once it's ready
Spectrum.on('ready', function () {
  buttons.play.disabled = false;
});

//                                 // If you want a responsive mode (so when the user resizes the window)
//                                 // the spectrum will be still playable
// window.addEventListener("resize", function () {
//   // Get the current progress according to the cursor position
//   var currentProgress = Spectrum.getCurrentTime() / Spectrum.getDuration();

//   // Reset graph
//   Spectrum.empty();
//   Spectrum.drawBuffer();
//   // Set original position
//   Spectrum.seekTo(currentProgress);

//   // Enable/Disable respectively buttons
//   buttons.pause.disabled = true;
//   buttons.play.disabled = false;
//   buttons.stop.disabled = false;
// });

// Load the audio file from your domain !
Spectrum.load(firstTrack);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
