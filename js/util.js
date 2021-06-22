import { description, message, names, userPhotoСount, userCommentСount } from './data.js';

//Функция генерации случайного числа
const getRandomNumber = function (min, max) {
  if (min < 0 || min >= max) {
    return 'неверный диапазон';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumber(0, 1000);

//Функция проверки длины вводимого сообщения
const testTextLength = function (text, length) {
  if (text.length > length) {
    return false;
  }

  return true;
};
testTextLength('', 140);

//Функция генерации неповторяющегося числа

const makeUniqueRandomIntegerGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomNumber(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${min} до ${max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomNumber(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

//Генерация комментария
const createComment = () => ({
  commentId: getRandomNumber(1, 25),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(message),
  userName: getRandomArrayElement(names),
});
const getRandomId = makeUniqueRandomIntegerGenerator(1, 25);
const getRandomUrl = makeUniqueRandomIntegerGenerator(1, 25);

//Генерация обьекта
const greateObject = () => ({
  id: getRandomId(),
  url: `photos/${getRandomUrl()}.jpg`,
  description: getRandomArrayElement(description),
  likes: getRandomNumber(15, 200),
  comment: new Array(getRandomNumber(1, userCommentСount))
    .fill(null)
    .map(() => createComment()),
});

const userPhotos = new Array(userPhotoСount)
  .fill(null)
  .map(() => greateObject());

export {userPhotos,createComment, getRandomNumber};
