import videojs from 'video.js';
import ru from './ru.json';

const onReady = function (w1tplayer) {
  window.console.log('ready', w1tplayer)
}

class W1tPlayer {
  constructor(el, options) {
    this._playerOptions = {
      language: 'ru',
      controls: true,
      controlBar: {
        pictureInPictureToggle: false
      },
      ...options,
    };

    if (this._playerOptions.language === 'ru') {
      videojs.addLanguage('ru', ru);
    }

    this._player = videojs(el, this._playerOptions, () => {
      onReady(this);
    });
  }

  dispose() {
    if (this._player) {
      this._player.dispose();
    }
  }
}

export default function w1tplay(el, options) {
  return new W1tPlayer(el, options);
}
