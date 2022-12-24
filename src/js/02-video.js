import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const KEY_NAME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.setCurrentTime(localStorage[KEY_NAME]);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
  localStorage[KEY_NAME] = event.seconds;
  console.log(event.percent);
}
