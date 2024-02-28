import {
  confirmed,
  probable,
  possible,
} from '$lib/breedingCodes.js';

export const phillyBreeders = [
  'Wild Turkey', 'Rock Pigeon', 'Bald Eagle', 'Red-tailed Hawk', 'Eastern Screech-Owl',
  'Great Horned Owl', 'Barred Owl', 'American Kestrel', 'Common Raven', 'Carolina Chickadee',
  'House Sparrow',
];

export const weeks = {
  Janw1: {}, Janw2: {}, Janw3: {}, Janw4: {},
  Febw1: {}, Febw2: {}, Febw3: {}, Febw4: {},
  Marw1: {}, Marw2: {}, Marw3: {}, Marw4: {},
  Aprw1: {}, Aprw2: {}, Aprw3: {}, Aprw4: {},
  Mayw1: {}, Mayw2: {}, Mayw3: {}, Mayw4: {},
  Junw1: {}, Junw2: {}, Junw3: {}, Junw4: {},
  Julw1: {}, Julw2: {}, Julw3: {}, Julw4: {},
  Augw1: {}, Augw2: {}, Augw3: {}, Augw4: {},
  Sepw1: {}, Sepw2: {}, Sepw3: {}, Sepw4: {},
  Octw1: {}, Octw2: {}, Octw3: {}, Octw4: {},
  Novw1: {}, Novw2: {}, Novw3: {}, Novw4: {},
  Decw1: {}, Decw2: {}, Decw3: {}, Decw4: {},
};

weeks.Febw3 = {
  'Rock Pigeon': [...confirmed, ...probable, ...possible],
  'American Goshawk': [...confirmed, ...probable],
  'Bald Eagle': [...confirmed, ...probable],
  'Barn Owl': [...confirmed, ...probable],
  'Great Horned Owl': [...confirmed, ...probable, ...possible],
  'Barred Owl': [...confirmed, ...probable, ...possible],
  'Red-tailed Hawk': [...confirmed, ...probable],
  'Common Raven': [...confirmed, ...probable],
  'House Sparrow': [...confirmed, ...probable, ...possible],
  'Red Crossbill': [...confirmed, ...probable, ...possible],
}; 

weeks.Febw4 = {
  'Rock Pigeon': [...confirmed, ...probable, ...possible],
  'American Goshawk': [...confirmed, ...probable],
  'Bald Eagle': [...confirmed, ...probable],
  'Red-tailed Hawk': [...confirmed, ...probable],
  'Barn Owl': [...confirmed, ...probable],
  'Great Horned Owl': [...confirmed, ...probable, ...possible],
  'Barred Owl': [...confirmed, ...probable, ...possible],
  'Short-eared Owl': [...confirmed, ...probable],
  'Common Raven': [...confirmed, ...probable],
  'Carolina Chickadee': [...confirmed, ...probable],
  'House Sparrow': [...confirmed, ...probable, ...possible],
  'Red Crossbill': [...confirmed, ...probable, ...possible],
}; 

weeks.Mar1 = {
  'Wild Turkey': [...confirmed, ...probable],
  'American Goshawk': [...confirmed, ...probable],
  'Rock Pigeon': [...confirmed, ...probable, ...possible],
  'Bald Eagle': [...confirmed, ...probable],
  'Red-tailed Hawk': [...confirmed, ...probable],
  'Eastern Screech-Owl': [...confirmed, ...probable],
  'Great Horned Owl': [...confirmed, ...probable, ...possible],
  'Barred Owl': [...confirmed, ...probable, ...possible],
  'Long-eared Owl': [...confirmed, ...probable],
  'Short-eared Owl': [...confirmed, ...probable, ...possible],
  'American Kestrel': [...confirmed, ...probable],
  'Common Raven': [...confirmed, ...probable, ...possible],
  'Carolina Chickadee': [...confirmed, ...probable],
  'House Sparrow': [...confirmed, ...probable, ...possible],
  'Red Crossbill': [...confirmed, ...probable, ...possible],
}; 
