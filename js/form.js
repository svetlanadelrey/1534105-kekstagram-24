import {isEscapeKey} from './utils.js';

const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;

const uploadFile = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = document.querySelector('#upload-cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const regex = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const textDescriptionInput = document.querySelector('.text__description');

const closeForm = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onUploadEscKeydown);
};

function onUploadEscKeydown (evt) {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
}

const openForm = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onUploadEscKeydown);
};

uploadFile.addEventListener('change', openForm);
closeButton.addEventListener('click', closeForm);

hashtagInput.addEventListener('input', () => {
  const hashtagsArray = hashtagInput.value.split('');

  hashtagsArray.forEach((hashtag) => {
    if (hashtagsArray[0] !== '#') {
      hashtagInput.setCustomValidity('Хэштег должен начинаться с #');
    } else if (hashtag === '#') {
      hashtagInput.setCustomValidity('Хэштег не может состоять только из одной решётки');
    } else if (hashtag.length > MAX_HASHTAG_LENGTH) {
      hashtagInput.setCustomValidity('Максимальная длина хэштега 20 символов');
    } else if (hashtagsArray.length > MAX_HASHTAG_COUNT) {
      hashtagInput.setCustomValidity('Нельзя указать больше 5 хэштегов');
    } else if (!regex.test(hashtag)) {
      hashtagInput.setCustomValidity('Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи');
    } else {
      hashtagInput.setCustomValidity('');
    }
    hashtagInput.reportValidity();
  });
});

textDescriptionInput.addEventListener('input', () => {
  if (textDescriptionInput.value.length > MAX_COMMENT_LENGTH) {
    textDescriptionInput.setCustomValidity('Длина коммментария не может превышать 140 символов');
  } else {
    textDescriptionInput.setCustomValidity('');
  }
  textDescriptionInput.reportValidity();
});
