/*! @name w1tplay @version 1.0.0 @license Apache-2.0 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var videojs = _interopDefault(require('video.js'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var Play = "Воспроизвести";
var Pause = "Приостановить";
var Replay = "Воспроизвести снова";
var Duration = "Продолжительность";
var LIVE = "ПРЯМОЙ ЭФИР";
var Loaded = "Загрузка";
var Progress = "Прогресс";
var Fullscreen = "Полноэкранный режим";
var Mute = "Без звука";
var Unmute = "Со звуком";
var Subtitles = "Субтитры";
var Captions = "Подписи";
var Chapters = "Главы";
var Descriptions = "Описания";
var Close = "Закрыть";
var Text = "Текст";
var White = "Белый";
var Black = "Черный";
var Red = "Красный";
var Green = "Зеленый";
var Blue = "Синий";
var Yellow = "Желтый";
var Magenta = "Пурпурный";
var Cyan = "Голубой";
var Background = "Фон";
var Window = "Окно";
var Transparent = "Прозрачный";
var Opaque = "Прозрачность";
var None = "Ничего";
var Raised = "Поднятый";
var Depressed = "Пониженный";
var Uniform = "Одинаковый";
var Dropshadow = "Тень";
var Casual = "Казуальный";
var Script = "Рукописный";
var Reset = "Сбросить";
var Done = "Готово";
var ru = {
	"Audio Player": "Аудиоплеер",
	"Video Player": "Видеоплеер",
	Play: Play,
	Pause: Pause,
	Replay: Replay,
	"Current Time": "Текущее время",
	Duration: Duration,
	"Remaining Time": "Оставшееся время",
	"Stream Type": "Тип потока",
	LIVE: LIVE,
	"Seek to live, currently behind live": "Переход к прямому эфиру (воспроизведение идёт с отставанием)",
	"Seek to live, currently playing live": "Переход к прямому эфиру (воспроизведение идёт без отставания)",
	Loaded: Loaded,
	Progress: Progress,
	"Progress Bar": "Индикатор загрузки",
	"progress bar timing: currentTime={1} duration={2}": "{1} из {2}",
	Fullscreen: Fullscreen,
	"Non-Fullscreen": "Неполноэкранный режим",
	Mute: Mute,
	Unmute: Unmute,
	"Playback Rate": "Скорость воспроизведения",
	Subtitles: Subtitles,
	"subtitles off": "Субтитры выкл.",
	Captions: Captions,
	"captions off": "Подписи выкл.",
	Chapters: Chapters,
	Descriptions: Descriptions,
	"descriptions off": "Отключить описания",
	"Audio Track": "Звуковая дорожка",
	"Volume Level": "Уровень громкости",
	"You aborted the media playback": "Вы прервали воспроизведение видео",
	"A network error caused the media download to fail part-way.": "Ошибка сети вызвала сбой во время загрузки.",
	"The media could not be loaded, either because the server or network failed or because the format is not supported.": "Не удалось загрузить видео из-за сетевого или серверного сбоя либо неподдерживаемого формата видео.",
	"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "Воспроизведение прервано из-за повреждения либо в связи с тем, что видео использует функции, неподдерживаемые вашим браузером.",
	"No compatible source was found for this media.": "Совместимые источники для этого видео отсутствуют.",
	"The media is encrypted and we do not have the keys to decrypt it.": "Видео зашифровано, а у нас нет ключей для его расшифровки.",
	"Play Video": "Воспроизвести видео",
	Close: Close,
	"Close Modal Dialog": "Закрыть модальное окно",
	"Modal Window": "Модальное окно",
	"This is a modal window": "Это модальное окно",
	"This modal can be closed by pressing the Escape key or activating the close button.": "Модальное окно можно закрыть нажав Esc или кнопку закрытия окна.",
	", opens captions settings dialog": ", откроется диалог настройки подписей",
	", opens subtitles settings dialog": ", откроется диалог настройки субтитров",
	", opens descriptions settings dialog": ", откроется диалог настройки описаний",
	", selected": ", выбрано",
	"captions settings": "настройки подписей",
	"subtitles settings": "настройки субтитров",
	"descriptions settings": "настройки описаний",
	Text: Text,
	White: White,
	Black: Black,
	Red: Red,
	Green: Green,
	Blue: Blue,
	Yellow: Yellow,
	Magenta: Magenta,
	Cyan: Cyan,
	Background: Background,
	Window: Window,
	Transparent: Transparent,
	"Semi-Transparent": "Полупрозрачный",
	Opaque: Opaque,
	"Font Size": "Размер шрифта",
	"Text Edge Style": "Стиль края текста",
	None: None,
	Raised: Raised,
	Depressed: Depressed,
	Uniform: Uniform,
	Dropshadow: Dropshadow,
	"Font Family": "Шрифт",
	"Proportional Sans-Serif": "Пропорциональный без засечек",
	"Monospace Sans-Serif": "Моноширинный без засечек",
	"Proportional Serif": "Пропорциональный с засечками",
	"Monospace Serif": "Моноширинный с засечками",
	Casual: Casual,
	Script: Script,
	"Small Caps": "Капитель",
	Reset: Reset,
	"restore all settings to the default values": "сбросить все настройки на значения по умолчанию",
	Done: Done,
	"Caption Settings Dialog": "Диалог настроек подписи",
	"Beginning of dialog window. Escape will cancel and close the window.": "Начало диалогового окна. Нажмите Escape для отмены и закрытия окна",
	"End of dialog window.": "Конец диалогового окна.",
	"{1} is loading.": "{1} загружается.",
	"Exit Picture-in-Picture": "Закрыть картинку в картинке",
	"Picture-in-Picture": "Картинка в картинке"
};

var onReady = function onReady(w1tplayer) {
  window.console.log('ready', w1tplayer);
};
var W1tPlayer = /*#__PURE__*/function () {
  function W1tPlayer(el, options) {
    var _this = this;
    this._playerOptions = _extends({
      language: 'ru',
      controls: true,
      controlBar: {
        pictureInPictureToggle: false
      }
    }, options);
    if (this._playerOptions.language === 'ru') {
      videojs.addLanguage('ru', ru);
    }
    this._player = videojs(el, this._playerOptions, function () {
      onReady(_this);
    });
  }
  var _proto = W1tPlayer.prototype;
  _proto.dispose = function dispose() {
    if (this._player) {
      this._player.dispose();
    }
  };
  return W1tPlayer;
}();
function w1tplay(el, options) {
  return new W1tPlayer(el, options);
}

module.exports = w1tplay;
