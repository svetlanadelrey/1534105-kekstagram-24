function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  const messageError = 'Диапазон задан неверно!';
  if (min >= 0 && max > 0 && min < max) {
    return randomNumber;
  }
  return messageError;
}
getRandomNumber(100, 200);

function checkStringLength(string, maxLength) {
  const messageError = 'Превышение допустимого числа символов';
  if (string.length <= maxLength) {
    return true;
  }
  return messageError;
}
checkStringLength('Проверяемая строка', 40);
