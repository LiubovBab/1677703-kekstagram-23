const { name } = require("browser-sync");

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

//Создание случайного комментария
const commentsId =[];//случайный идентификатор комментария
const avatar =[
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg'
];
const message = [//массив текста комментария
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.'
];
 const name = [
   'Валера',
   'Афанасий',
   'Анастасия',
   'Варвара',
   'Андрей',
 ];
 
//случайный комментарий
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
let genObjId = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
let genObjIdIndex = function (){ for (let i=0; i < genObjId.length; i++)
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
