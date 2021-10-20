function getRandomPositiveInteger (from, to) {
  const lower = Math.ceil(Math.min(Math.abs(from), Math.abs(to)));
  const upper = Math.floor(Math.max(Math.abs(from), Math.abs(to)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}
checkStringLength('Проверяемая строка', 40);

export{getRandomPositiveInteger};
