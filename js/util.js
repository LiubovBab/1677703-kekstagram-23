import {avatar, message, name, userPhotoCount, userComentCount, description} from './data.js';

//Получение случайного числа
const getRandomNumber = function (min, max){
  if (min< 0||min>=max){
    return 'Неверный диапазон';
  }
  return Math.floor(Math.random()*(max-min+1))+min;};

//Получение случайного неповторяющегося числа
const makeUniqueRandomIntegerGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${  min  } до ${  max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

//Coздание неповторяющегося индетефикатора описания
const descriptionId = makeUniqueRandomIntegerGenerator (0, 25);

//Создание случайного комментария
const createComments = () => ({
  commentId: makeUniqueRandomIntegerGenerator,
  avatar: `img/avatar-${getRandomNumber(0, avatar.length - 1)}.svg`,
  message: getRandomNumber(0, message.length - 1),
  name: getRandomNumber(0, name.length - 1),
});

const getRandomArrayElement = (elements) => {
  elements = getRandomNumber(0, elements.length - 1);
  return elements;};

const descriptionUrl = makeUniqueRandomIntegerGenerator (0, 25);
descriptionUrl();

///случайный объект
const generatedObjects = () =>({
  id:  descriptionId(),
  url: 'photos{descriptionUrl()}.jpg',
  description: getRandomArrayElement(description),
  likes: getRandomNumber(15, 200),
  comment: new Array(getRandomNumber(1,userComentCount.length - 1)).full(null).map(()=>createComments()),
});

const userPhoto = new Array(userPhotoCount).fill(null).map(()=>generatedObjects());


//Функция для проверки максимальной длины строки;
const testCommentsLength = function (commentsTest, lengthComments){
  if (commentsTest.length>lengthComments){
    return false;
  }
  return true;
};
testCommentsLength('',140);

export {userPhoto};
