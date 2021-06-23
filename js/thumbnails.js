//Модуль, который будет отвечать за отрисовку миниатюр
import {createComment, getRandomNumber} from './util.js';
//находим нужный шаблон
const pictureRandomUser = document.querySelector('#picture').content;
const pattern = pictureRandomUser.querySelector('.picture');
//клонируем шаблон
const clonedPattern = pattern.cloneNode(true);
//Добавление url
const attributeSrc= clonedPattern.querySelector('.picture__img');
attributeSrc.innerHTML = '<url = "">';

//Добавляем случайное количество лайков в шаблон
const pictureLikes = clonedPattern.querySelector('.picture__likes');
const randomLikes = getRandomNumber(15, 200);
pictureLikes.textContent=randomLikes;
//добавляем комментарии
const pictureComments = clonedPattern.querySelector('.picture__comments');
const randomComments = getRandomNumber(createComment);
pictureComments.appendChild=randomComments;

pattern.appendChild(clonedPattern);
