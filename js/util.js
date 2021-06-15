import {commentsId, avatar, message, name} from './data.js';

//Получение случайного числа
let getRandomNumber = function (min, max){
    if (min< 0||min>=max){
      return 'Неверный диапазон';
    }
  return Math.floor(Math.random()*(max-min+1))+min;};

//Создание случайного комментария
const getRandomArrayElement = (elements) => {
    return elements[_.random(0, elements.length - 1)];
  };
  const comments = ()=> {
    return {
      comments: comments[_.random(0, commentsId.length - 1)],
      avatar: avatar[_.random(0, avatar.length - 1)],
      message: message[ _.random(0, message.length - 1)],
      name: name[_.random(0, name.length - 1)]
    }
  }

  //Получение количества лайков (генерация случайного числа от 15 до 200)
  let likesIndex = function (){ for (let j=15; j <= 200; j++)
      return likesIndex[j]}
  //случайный объект
  const generatedObjects = () =>{
    return {
      id :  getRandomNumber(0, 25),
      url: ' photos/' + getRandomNumber(0, 25) +'.jpg',
      likes: likesIndex,
      comments: getRandomArrayElement
    }
  };
export {generatedObjects};
  

  //Функция для проверки максимальной длины строки
  
  let testCommentsLength = function (comments, lengthComments){
    if (comments.length>lengthComments){
      return false;
    }
    return true;
  };
  testCommentsLength('',140);