var link = document.querySelector('.contact-link');
var popup = document.querySelector('.modal-contact');
var close = popup.querySelector('.modal-close');
var login = popup.querySelector('[name=login]');
var email = popup.querySelector('[name=email]');
var message = popup.querySelector('textarea');
var form = popup.querySelector('form');
var input = popup.querySelectorAll('input');

var inputs = [login, email, message];
var invalidInputs;

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

var addInvalidInput = function (input) {
  if (invalidInputs.indexOf(input) < 0) {
    invalidInputs.push(input);
  }
};

var removeInvalidInput = function (input) {
  var index = invalidInputs.indexOf(input);
  if (index > -1) {
    invalidInputs.splice(index, 1);
    input.classList.remove('invalid');
  }
};

var setStorage = function (input) {
  if (isStorageSupport) {
    var inputName = input.getAttribute('name');
    localStorage.setItem(inputName, input.value);
  }
};

var setInputValue = function (input) {
  if (isStorageSupport) {
    var inputName = input.getAttribute('name');
    if (localStorage.getItem(inputName)) {
      input.value = localStorage.getItem(inputName);
    } else {
      addInvalidInput(input);
    }
  }
};

var setFocus = function () {
  if (invalidInputs.length > 0) {
    invalidInputs[0].focus();
  } else {
    login.focus();
  }
};

var validateInputs = function () {
  inputs.forEach(function(input) {
    if (input.value) {
      removeInvalidInput(input);
    } else {
      addInvalidInput(input);
      input.classList.add('invalid');
    }
  }); 
};

var onTextInput = function (evt) {
  var input = evt.target;
  setStorage(input);
  (input.value) ? removeInvalidInput(input) : addInvalidInput(input);
};

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  invalidInputs = [];

  inputs.forEach(function(input) {
    setInputValue(input);
    input.addEventListener('input', onTextInput);
  });
  setFocus();
});

var closeContactPopup = function () {
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
  inputs.forEach(function(input) {
    input.removeEventListener('input', onTextInput);
  });
};

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  closeContactPopup();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('modal-show')) {
      closeContactPopup();
    }
  }
});

form.addEventListener('submit', function (evt) {
  validateInputs();
  if (invalidInputs.length > 0) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
    setFocus();
  }
});

var mapLink = document.querySelector('.contacts-map-link');
var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.add('modal-show');
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains('modal-show')) {
      mapPopup.classList.remove('modal-show');
    }
  }
});
