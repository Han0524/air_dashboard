import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const rawData = [...Array(9)].map((_, index) => ({
    id: faker.string.uuid(),
    date: sample(['24-01-17','24-01-18']),
    timestamp: sample(["15:36:14"]),
    nodeAddress: sample(['1']),
    location: sample(["현동홀"]),
    pm25: sample(["76"]),
    pm10: sample(["151"]),
    ch2o: sample(["0.002"]),
    wind_speed: sample(["5m/s"]),
    wind_direction: sample(["남서"]),
    temperature: sample(["8 °C"]),
    humidity: sample(["30%"]),
  }));
