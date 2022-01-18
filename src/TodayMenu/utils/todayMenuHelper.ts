import { getRandomArrayIndex } from '@shared/utils/mathHelper';

export const menus = [
  { id: 0, name: '떡볶이' },
  { id: 1, name: '돈가스' },
  { id: 2, name: '라멘' },
  { id: 3, name: '삼겹살' },
  { id: 4, name: '닭갈비' },
  { id: 5, name: '초밥' },
  { id: 6, name: '덮밥' },
  { id: 7, name: '짬뽕' },
  { id: 8, name: '짜장면' },
  { id: 9, name: '볶음밥' },
  { id: 10, name: '전골' },
  { id: 11, name: '만두' },
  { id: 12, name: '치킨' },
  { id: 13, name: '피자' },
  { id: 14, name: '쌀국수' },
  { id: 15, name: '카레' },
  { id: 16, name: '보쌈' },
  { id: 17, name: '족발' },
  { id: 18, name: '찌개' },
  { id: 19, name: '국밥' },
  { id: 20, name: '순대' },
  { id: 21, name: '샤브샤브' },
  { id: 22, name: '마라탕' },
  { id: 23, name: '김밥' },
  { id: 24, name: '일식' },
  { id: 25, name: '중식' },
  { id: 26, name: '한식' },
  { id: 27, name: '양식' },
  { id: 28, name: '파스타' },
  { id: 29, name: '라면' },
  { id: 30, name: '소고기' },
];

export const pickRandomMenu = () => menus[getRandomArrayIndex(menus.length)];