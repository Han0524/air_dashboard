import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(8)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: ['이수현', '이찬휘', '이신원', '김예인', '이찬영', '최은총', '유현도', '한상화'][index],
  company: ['한동대학교'],
  isVerified: faker.datatype.boolean(),
  status: sample(['active']),
  role: [
    'Leader & Packaging',
    'Sensor & Battery',
    'Front End Developer',
    'Front End Developer',
    'Packaging',
    'Full Stack Developer',
    'Sensor & Battery',
    'Front End Developer',
  ][index]
}));
