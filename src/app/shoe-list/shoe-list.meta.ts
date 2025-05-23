export interface Shoe {
  id: number;
  nickname: string;
  distance: number;
  isRetired: boolean;
}

export const SHOE_LIST: Shoe[] = [
  {
    id: 1,
    nickname: 'Nike Air Zoom Pegasus 39',
    distance: 100,
    isRetired: false,
  },
  {
    id: 2,
    nickname: 'Adidas Ultraboost 22',
    distance: 200,
    isRetired: false,
  },
  {
    id: 3,
    nickname: 'Asics Gel-Kayano 29',
    distance: 300,
    isRetired: true,
  },
  {
    id: 4,
    nickname: 'Brooks Ghost 15',
    distance: 400,
    isRetired: false,
  },
  {
    id: 5,
    nickname: 'Hoka One One Clifton 9',
    distance: 500,
    isRetired: false,
  },
  {
    id: 6,
    nickname: 'Saucony Endorphin Speed 3',
    distance: 600,
    isRetired: true,
  },
];
