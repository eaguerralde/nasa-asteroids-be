import { Favourite } from './types';

let inMemoryStore: Favourite[] = [];

function findInStore(favourite: Favourite) {
  return inMemoryStore.find(item => 
    item.neoId === favourite.neoId && item.userId === favourite.userId);
}

export const create = async (favourite: Favourite): Promise<Favourite> => {
  const existingItem = findInStore(favourite);
  if (!existingItem) inMemoryStore.push(favourite);
  return favourite;
};

export const read = async (): Promise<Favourite[]> => {
  return inMemoryStore;
};

export const remove = async (favourite: Favourite): Promise<Boolean> => {
  const existingItem = findInStore(favourite);
  if (existingItem) {
    inMemoryStore.splice(inMemoryStore.indexOf(existingItem), 1);
    return true;
  } else {
    return false;
  }
};