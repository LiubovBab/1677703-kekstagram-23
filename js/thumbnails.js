//Модуль, который будет отвечать за отрисовку миниатюр
import {userPhotos} from './util.js';
//находим нужный шаблон
const pictureRandomUser = document.querySelector('#picture').content;
const pattern = pictureRandomUser.querySelector('.picture');
const blockPicture = document.querySelector('.pictures');

const userPicture = userPhotos();

const userPictureFragment  = document.createDocumentFragment();//создание пустого фрагмента

userPicture.forEach(({url, likes, comment}) => {
  const clonedPattern = pattern.cloneNode(true);
  clonedPattern.querySelector('.picture__img').src = url;
  clonedPattern.querySelector('.picture__likes').textContent=likes;
  clonedPattern.querySelector('.picture__comments').textContent=comment;
  userPictureFragment.appendChild(clonedPattern);//наполнение фрагмента
});
blockPicture.appendChild(userPictureFragment);
