/* eslint-disable id-length */

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}
checkStringLength('Проверяемая строка', 40);

const DESCRIPTION = [
  'Осенняя пора',
  'Хорошо посидели!',
  'Вы только посмотрите!',
  'Встал не с той ноги...',
  'Зацените прикид!',
  'Вернусь сюда снова...',
  'Мои любимые одноклассники',
  'Играем снова и снова!',
];

const NAMES = [
  'Пётр',
  'Степан',
  'Агафья',
  'Егор',
  'Арнольд',
  'Миранда',
  'Кончита',
  'Джозеф',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const generateComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
});

const createPhotoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomPositiveInteger(15,200),
  comments: generateComment(index),
});

const photoDescriptionCount = 25;
const generateObjects = (count) => {
  for (let i= 1; i <= count; i++) {
    createPhotoDescription(i);
  }
};
generateObjects(photoDescriptionCount);

