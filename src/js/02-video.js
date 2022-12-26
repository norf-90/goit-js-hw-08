import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_NAME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const time = localStorage[KEY_NAME] ?? 0;
player.setCurrentTime(time);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(currentTime) {
  localStorage[KEY_NAME] = currentTime.seconds;
}
