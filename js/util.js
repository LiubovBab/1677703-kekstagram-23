import {commentsId, avatar, message, name} from './data.js';

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
  //Генерация случайного ID объекта
let genObjIdIndex = function (){
    let genObjId;
    for (let i=0; i < genObjId.length; i++)
    return genObjId[i]};//возможно не нужна эта переменная
  //Получение количества лайков (генерация случайного числа от 15 до 200)
  let likesIndex = function (){ for (let j=15; j <= 200; j++)
      return likesIndex[j]}
  //случайный объект
  const generatedObjects = () =>{
    return {
      id : genObjId[_.random(0,genObjId.length - 1)],
      url: ' photos/' + [_.random(0,genObjId.length - 1)] +'.jpg',
      likes: likesIndex,
      comments: getRandomArrayElement
    }
  };
  export {generatedObjects};
  
//доп. функция
let getRandomNumber = function (min, max){
    if (min< 0||min>=max){
      return 'Неверный диапазон';
    }
  return Math.floor(Math.random()*(max-min+1))+min;};
  
  //Функция для проверки максимальной длины строки
  
  let testCommentsLength = function (comments, lengthComments){
    if (comments.length>lengthComments){
      return false;
    }
    return true;};
  testCommentsLength('',140);