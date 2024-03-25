import { sample } from 'lodash';

// ----------------------------------------------------------------------

export const nodes = [...Array(9)].map((_, index) => ({
    location: ['그레이스', '현동홀', '뉴턴홀','느헤미야홀','Ark','복지동','히딩크','어푸푸','소라'][index],
    latitude: sample(['129.3893111']),
    battery: `${[47,20,35,89,30,23,45,39,40][index]} %`,
    longitude: sample([
      '36.1032756'
    ]),
  }));
