import { setupListeners, removeListeners } from './effects.js';

const imageForm = document.querySelector('.img-upload__form');
const imageOverlay = imageForm.querySelector('.img-upload__overlay');
const closeButton = imageForm.querySelector('#upload-cancel');
const uploadFile = document.querySelector('#upload-file');
const img = document.querySelector('.img-upload__preview > img');

closeButton.onclick = (evt) => {
  evt.preventDefault();
  closeWindow();
};

const closeOnButton = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeWindow();
  }
};

function closeWindow() {
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  img.classList.remove(...img.classList);
  img.classList.add('effects__preview--none');
  removeListeners();
  cleanForm();
}

const openWindow = (e) => {
  img.src = window.URL.createObjectURL(e.target.files[0]);
  imageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
  setupListeners();
};

function cleanForm() {
  document.querySelector('#upload-select-image').reset();
  document.querySelector('#upload-file').value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
}

uploadFile.addEventListener('change', openWindow);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeWindow();
  }
});

const cancelButton = document.querySelector('#upload-cancel');

cancelButton.addEventListener('click', () => closeWindow());

export { closeWindow };
