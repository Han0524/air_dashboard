import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const errorData = [...Array(9)].map((_, index) => ({
    id: faker.string.uuid(),
    sequence: index+1,
    date: sample(["24-01-17"]),
    timestamp: sample(["15:36:14"]),
    nodeAddress: sample(['1','2','3','9']),
    location: sample(["현동홀"]),
    errerType: sample(["값이 들어오지 않음"]),
    errerCause: sample(["베터리 잔량 부족"]),
    solution: sample(["베터리 교체"]),
    done: sample(['Yes','No']),
  }));
