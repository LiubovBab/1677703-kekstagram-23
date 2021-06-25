//модуль, который будет отвечать за отрисовку окна с полноразмерным изображением
const bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');

//Добавление url
const bigPictureImg= bigPicture.querySelector('.big-picture__img');
const bigPictureSrc = bigPictureImg.querySelector('#src');
bigPictureSrc.appendChild = '<url = " bigPictureSrc">';
