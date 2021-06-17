import {avatar, message, name} from './data.js';

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
const comments = () => ({
  id: makeUniqueRandomIntegerGenerator,
  avatar: getRandomNumber(0, avatar.length - 1),
  message: getRandomNumber(0, message.length - 1),
  name: getRandomNumber(0, name.length - 1),
});
comments();

//случайный объект
const generatedObjects = () =>({
  id:  descriptionId,
  url: 'photos{descriptionId}.jpg',
  likes: getRandomNumber(0, 200),
  comments: comments,
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
