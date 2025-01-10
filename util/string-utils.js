export const validarCantidadCaracteres = function (event, campo, limite) {
  if (
    campo.length >= limite &&
    event.keyCode !== 8 &&
    event.keyCode !== 46 &&
    event.keyCode !== 37 &&
    event.keyCode !== 38 &&
    event.keyCode !== 39 &&
    event.keyCode !== 40 &&
    event.keyCode !== 9
  ) {
    event.preventDefault();
  }
};

export const validarKeyNumero = function (evt, campo, limite) {
  if (
    evt.key.includes('Arrow') ||
    evt.key.includes('Backspace') ||
    evt.key.includes('Delete')
  ) {
    return;
  }
  if (!/^\d+$/.test(evt.key)) {
    evt.preventDefault();
    return;
  }
  this.validarCantidadCaracteres(evt, campo, limite);
};

export function isEmptyString (element) {
  return (
    element === undefined ||
    element === null ||
    (typeof element === 'string' && element.trim() === '')
  );
};

export function urlify (text) {
  // crea elemento html temporal
  const tmp = document.createElement('div');
  document.body.appendChild(tmp);
  tmp.innerHTML = text;

  const sanitizedText = tmp.innerText.trim();
  // elimina el elemento temporal
  tmp.parentNode.removeChild(tmp);
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const urls = sanitizedText.match(urlRegex);

  if (isEmptyString(urls)) {
    return text;
  }

  urls.forEach((url) => {
    text = text.replace(url, function (url) {
      return '<a href="' + url + '" target="_blank">' + url + '</a>';
    });
  });
  return text;
};

export function isEmptyHtml (value) {
  // crea elemento html temporal
  const tmp = document.createElement('div');
  document.body.appendChild(tmp);
  tmp.innerHTML = value;

  if (tmp.innerText.trim().length <= 0) {
    tmp.parentNode.removeChild(tmp);
    return true;
  }

  // elimina el elemento temporal
  tmp.parentNode.removeChild(tmp);
  return false;
};

export function set24to12hours (time) {
  if (time.split(':').length !== 2) {
    return time;
  }

  const parts = time.split(':');

  const hours = parseInt(parts[0]) > 12 ? parseInt(parts[0]) - 12 : parts[0];
  const minutes = parts[1];
  const format = parseInt(parts[0]) >= 12 ? 'PM' : 'AM';

  return hours + ':' + minutes + ' ' + format;
};

export function addDots (text, limiter) {
  return (text.length > limiter ? text.substring(0, limiter) + '...' : text);
};

export function validateEmail (valor) {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3,4})+$/;
  if (emailRegex.test(valor)) {
    return true;
  } else {
    return false;
  }
};

export default {
  validarCantidadCaracteres,
  validarKeyNumero,
  urlify,
  isEmptyString,
  set24to12hours,
  addDots,
  isEmptyHtml,
  validateEmail
};
