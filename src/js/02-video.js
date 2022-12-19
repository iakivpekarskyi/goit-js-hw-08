import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player('iframe');


player.on('play', function () {
localStorage.setItem('videoplayer-current-time', seconds);
});

player
  .setCurrentTime(30.456)
  .then(function (seconds) {
  });

