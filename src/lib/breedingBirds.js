import {
  confirmed,
  probable,
  possible,
} from '$lib/breedingCodes.js';

export const phillyBreeders = [
  'Canada Goose', 'Mute Swan', 'Wood Duck', 'Mallard', 'American Black Duck',
  'Hooded Merganser', 'Common Merganser', 'Wild Turkey', 'Pied-billed Grebe', 'Rock Pigeon',
  'Mourning Dove', 'Yellow-billed Cuckoo', 'black-billed Cuckoo', 'Common Nighthawk', 'Chimney Swift',
  'Ruby-throated Hummingbird', 'Vriginia Rail', 'Sora', 'Common Gallinule', 'American Coot',
  'Killdeer', 'Wilson\'s Snipe', 'Spotted Sandpiper', 'Ring-billed Gull', 'Double-crested Cormorant',
  'Least Bittern', 'Great Blue Heron', 'Great Egret', 'Green Heron', 'Black-crowned Night Heron',
  'Black Vulture', 'Turkey Vulture', 'Osprey', 'Cooper\'s Hawk', 'Bald Eagle', 
  'Red-shouldered Hawk', 'Red-tailed Hawk', 'Eastern Screech-Owl', 'Great Horned Owl', 'Barred Owl',
  'Belted Kingfisher', 'Red-bellied Woodpecker', 'Downy Woodpecker', 'Hairy Woodpecker', 'Northern Flicker',
  'Pileated Woodpecker', 'American Kestrel', 'Peregrine Falcon', 'Eastern Wood-Pewee', 'Acadian Flycatcher',
  'Willow Flycatcher', 'Eastern Phoebe', 'Great Crested Flycatcher', 'Eastern Kingbird', 'White-eyed Vireo',
  'Yellow-throated Vireo', 'Warbling Vireo', 'Red-eyed Vireo', 'Blue Jay', 'American Crow',
  'Fish Crow', 'Common Raven', 'Carolina Chickadee', 'Tufted Titmouse', 'Horned Lark',
  'Bank Swallow', 'Tree Swallow', 'Northern Rough-winged Swallow', 'Purple Martin', 'Barn Swallow',
  'Cliff Swallow', 'White-breasted Nuthatch', 'Blue-gray Gnatcatcher', 'House Wren', 'Marsh Wren',
  'Carolina Wren', 'European Starling', 'Gray Catbird', 'Brown Thrasher', 'Northern Mockingbird',
  'Eastern Bluebird', 'Veery', 'Wood Thrush', 'American Robin', 'Cedar Waxwing',
  'House Sparrow', 'House Finch', 'American Goldfinch', 'Chipping Sparrow', 'Field Sparrow',
  'Song Sparrow', 'Swamp Sparrow', 'Eastern Towhee', 'Eastern Meadowlark', 'Orchard Oriole',
  'Baltimore Oriole', 'Red-winged Blackbird', 'Brown-headed Cowbird', 'Common Grackle', 'Ovenbird',
  'Louisiana Waterthrush', 'Blue-winged Warbler', 'Common Yellowthroat', 'American Redstart', 'Northern Parula',
  'Yellow Warbler', 'Pine Warbler', 'Summer Tanager', 'Scarlet Tanager', 'Northern Cardinal', 
  'Blue Grosbeak', 'Indigo Bunting',
];

const notin2020Survey = [
  'Hooded Merganser', 'Common Merganser', 'Virginia Rail', 'Sora', 'Wilson\'s Snipe',
  'Black-crowned Night Heron', 'Horned Lark', 'Cliff Swallow', 'Summer Tanager',
]

const in2020SurveyButNotHere = [
  'Laughing Gull', 'Great Black-backed Gull', 'Caspian Tern'
]

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

weeks.Jan1 = {
  'Rock Pigeon': [...confirmed, ...probable, ...possible],
  'Barn Owl': [...confirmed, ...probable],
  'Great Horned Owl': [...confirmed, ...probable, ...possible],
  'Red Crossbill': [...confirmed, ...probable, ...possible],
};

weeks.Jan2 = {
  'Rock Pigeon': [...confirmed, ...probable, ...possible],
  'Barn Owl': [...confirmed, ...probable],
  'Great Horned Owl': [...confirmed, ...probable, ...possible],
  'Red Crossbill': [...confirmed, ...probable, ...possible],
};

weeks.Jan3 = {
  'Rock Pigeon': [...confirmed, ...probable, ...possible],
  'Barn Owl': [...confirmed, ...probable],
  'Great Horned Owl': [...confirmed, ...probable, ...possible],
  'Barred Owl': [...confirmed, ...probable, ...possible],
  'Red Crossbill': [...confirmed, ...probable, ...possible],
};

weeks.Jan4 = {
  'Rock Pigeon': [...confirmed, ...probable, ...possible],
  'American Goshawk': [...confirmed, ...probable],
  'Bald Eagle': [...confirmed, ...probable],
  'Barn Owl': [...confirmed, ...probable],
  'Great Horned Owl': [...confirmed, ...probable, ...possible],
  'Barred Owl': [...confirmed, ...probable, ...possible],
  'Red Crossbill': [...confirmed, ...probable, ...possible],
};

weeks.Febw1 = {
  'Rock Pigeon': [...confirmed, ...probable, ...possible],
  'American Goshawk': [...confirmed, ...probable],
  'Bald Eagle': [...confirmed, ...probable],
  'Red-tailed Hawk': [...confirmed, ...probable],
  'Barn Owl': [...confirmed, ...probable],
  'Great Horned Owl': [...confirmed, ...probable, ...possible],
  'Barred Owl': [...confirmed, ...probable, ...possible],
  'House Sparrow': [...confirmed, ...probable],
  'Red Crossbill': [...confirmed, ...probable, ...possible],
};

weeks.Febw2 = {
  'Rock Pigeon': [...confirmed, ...probable, ...possible],
  'American Goshawk': [...confirmed, ...probable],
  'Bald Eagle': [...confirmed, ...probable],
  'Red-tailed Hawk': [...confirmed, ...probable],
  'Barn Owl': [...confirmed, ...probable],
  'Great Horned Owl': [...confirmed, ...probable, ...possible],
  'Barred Owl': [...confirmed, ...probable, ...possible],
  'House Sparrow': [...confirmed, ...probable, ...possible],
  'Red Crossbill': [...confirmed, ...probable, ...possible],
}; 

weeks.Febw3 = {
  'Rock Pigeon': [...confirmed, ...probable, ...possible],
  'American Goshawk': [...confirmed, ...probable],
  'Bald Eagle': [...confirmed, ...probable],
  'Red-tailed Hawk': [...confirmed, ...probable],
  'Barn Owl': [...confirmed, ...probable],
  'Great Horned Owl': [...confirmed, ...probable, ...possible],
  'Barred Owl': [...confirmed, ...probable, ...possible],
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
