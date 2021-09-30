function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (min >= 0 && max > 0 && min < max) {
    return randomNumber;
  }
  throw new Error('Диапазон задан неверно!');
}
getRandomNumber(100, 200);

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}
checkStringLength('Проверяемая строка', 40);
