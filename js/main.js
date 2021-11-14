import {generateObjects, PHOTO_DESCRIPTION_COUNT} from './data.js';
import {createThumbnails} from './thumbnails.js';
import './form.js';

generateObjects(PHOTO_DESCRIPTION_COUNT);

const generateThumbnails = generateObjects(PHOTO_DESCRIPTION_COUNT);
createThumbnails(generateThumbnails);

