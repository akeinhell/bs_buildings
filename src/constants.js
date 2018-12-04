export const STORAGE = 'storage';
export const TOWER = 'tower';
export const HOUSE = 'house';
export const FOOD = 'food';
export const WOOD = 'wood';
export const STONE = 'stone';
export const BARRACK = 'barrack';
export const WALL = 'wall';
export const TREB = 'treb';
export const BALLISTA = 'ballista';

export const BUILDINGS = [STORAGE, TOWER, HOUSE, FOOD, WOOD, STONE, BARRACK, WALL, TREB, BALLISTA];

export const TOWER_CAPACITY = 500000;

export const coefficients = {    
    [STORAGE]:  { name: 'Склад', gold: 200, wood: 100, stone: 100, icon: '🏚'},
    [TOWER]:    { name: 'Ратуша', gold: 500, wood: 200, stone: 200, icon: '🏤'},
    [HOUSE]:    { name: 'Дома', gold: 200, wood: 100, stone: 100, icon: '🏘'},
    [FOOD]:     { name: 'Ферма', gold: 100, wood: 50, stone: 50, icon: '🌻'},
    [WOOD]:     { name: 'Лесопилка', gold: 100, wood: 50, stone: 50, icon: '🌲'},
    [STONE]:    { name: 'Шахта', gold: 100, wood: 50, stone: 50, icon: '⛏'},
    [BARRACK]:  { name: 'Казармы', gold: 200, wood: 100, stone: 100, icon: '🛡'},
    [WALL]:     { name: 'Стена', gold: 5000, wood: 500, stone: 1500, icon: '🏰'},
    [TREB]:     { name: 'Требушет', gold: 8000, wood: 1000, stone: 300, icon: '⚔️'},
    [BALLISTA]: { name: 'Баллиста', gold: 30000, wood: 2100, stone: 300, icon: '⚔️'},
};