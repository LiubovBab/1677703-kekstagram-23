//доп. функция
let getRandomNumber = function (min, max){
  if (min< 0||min>=max){
    return 'Неверный диапазон'
  }
return Math.floor(Math.random()*(max-min+1))+min;}

//Функция для проверки максимальной длины строки

let testCommentsLength = function (comments, lengthComments){
  if (comments.length>lengthComments){
    return false;
  }
  return true;};
testCommentsLength('',140);
