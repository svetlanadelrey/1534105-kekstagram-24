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

const PHOTO_DESCRIPTION_COUNT = 25;
const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;
const MIN_LIKES_NUMBER = 15;
const MAX_LIKES_NUMBER = 200;
const MIN_COMMENTS_NUMBER = 1;
const MAX_COMMENTS_NUMBER = 5;

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

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomPositiveInteger(MIN_AVATAR_NUMBER,MAX_AVATAR_NUMBER)}.svg`,
  message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomPositiveInteger(0, NAMES.length - 1)],
});

const generateComments = (minNumber, maxNumber) => {
  const commentArray = [];
  for (let i= 1; i <= getRandomPositiveInteger(minNumber, maxNumber); i++) {
    commentArray.push(createComment(i));
  }
  return commentArray;
};

const createPhotoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomPositiveInteger(MIN_LIKES_NUMBER,MAX_LIKES_NUMBER),
  comments: generateComments(MIN_COMMENTS_NUMBER, MAX_COMMENTS_NUMBER),
});

const generateObjects = (count) => {
  const photoArray = [];
  for (let i= 1; i <= count; i++) {
    photoArray.push(createPhotoDescription(i));
  }
  return photoArray
};
generateObjects(PHOTO_DESCRIPTION_COUNT);
