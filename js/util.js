import {commentsId, avatar, message, name} from './data.js';

//Получение случайного числа
const getRandomNumber = function (min, max){
  if (min< 0||min>=max){
    return 'Неверный диапазон';
  }
  return Math.floor(Math.random()*(max-min+1))+min;};

//Создание случайного комментария
const getRandomArrayElement = (elements) => {
  elements = elements[_.random(0, elements.length - 1)];
  return elements;
};
const comments = () => ({
  comments: comments[_.random(0, commentsId.length - 1)],
  avatar: avatar[_.random(0, avatar.length - 1)],
  message: message[ _.random(0, message.length - 1)],
  name: name[_.random(0, name.length - 1)],
});
comments();

//Получение количества лайков (генерация случайного числа от 15 до 200)
const likesIndex = function ()
{for (let j=15; j <= 200; j++) {likesIndex[j];};
  return likesIndex[j];};
//случайный объект
const generatedObjects = () =>({
  id:  getRandomNumber(0, 25),
  url: 'photos/${getRandomNumber(0, 25)}.jpg',
  likes: likesIndex,
  comments: getRandomArrayElement,
});
export {generatedObjects};

//Функция для проверки максимальной длины строки; 
const testCommentsLength = function (commentsTest, lengthComments){
  if (commentsTest.length>lengthComments){
    return false;
  }
  return true;
};
testCommentsLength('',140);