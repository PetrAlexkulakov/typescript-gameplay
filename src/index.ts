import { RARITY } from "./interfaces";

// Интерфейс инвентаря. Ключ - ID предмета, значение - количество экземпляров этого предмета в инвентаре
interface IInventory {
    [key: number]: number
}
// Настройки простого бустерпака
interface IBoosterSettings {
    rarity: RARITY;
    numberOfItems: number;
    upgradeChance?: number;
}
// Класс простого бустерпака
class Booster {
    rarity: RARITY;
    numberOfItems: number;
    upgradeChance: number;

    constructor(settings: IBoosterSettings) {
        this.rarity = settings.rarity;
        this.numberOfItems = settings.numberOfItems;
        this.upgradeChance = settings.upgradeChance || 0;
    }

    getBoosterLoot(playerInventory: IInventory): Item[] {
        // Реализация выдачи предметов из бустерпака
    }
}
// Настройки бустерпака удачи
interface ILuckBoosterSettings extends IBoosterSettings {}
// Класс бустерпака удачи
class LuckBooster extends Booster {
  constructor(settings: ILuckBoosterSettings) {
    super(settings);
  }

  getBoosterLoot(playerInventory: IInventory): Item[] {
    // Реализация выдачи предметов с учетом шанса на повышение редкости
  }
}

// Класс бустерпака равномерного распределения
class UniformBooster extends LuckBooster {
  constructor(settings: ILuckBoosterSettings) {
    super(settings);
  }

  getBoosterLoot(playerInventory: IInventory): Item[] {
    // Реализация выдачи предметов с учетом равномерного распределения
  }
}

// Класс бустерпака с обратно пропорциональной вероятностью выпадения предметов
class CollectionBooster extends UniformBooster {
  constructor(settings: ILuckBoosterSettings) {
    super(settings);
  }

  getBoosterLoot(playerInventory: IInventory): Item[] {
    // Реализация выдачи предметов с учетом обратно пропорциональной вероятности
  }
}
// коллекция экземпляров бустерпаков, ключ - ID бустерпака
let boostersBase = {
  1: new Booster({ rarity: RARITY.RARE, numberOfItems: 5 }),
  2: new Booster({ rarity: RARITY.LEGENDARY, numberOfItems: 4, upgradeChance: 0.45 }),
  3: new LuckBooster({ rarity: RARITY.RARE, numberOfItems: 5, upgradeChance: 0.10 }),
  4: new LuckBooster({ rarity: RARITY.LEGENDARY, numberOfItems: 4, upgradeChance: 0.45 }),
  5: new UniformBooster({ rarity: RARITY.RARE, numberOfItems: 5, upgradeChance: 0.10 }),
  6: new UniformBooster({ rarity: RARITY.LEGENDARY, numberOfItems: 4, upgradeChance: 0.45 }),
  7: new CollectionBooster({ rarity: RARITY.RARE, numberOfItems: 5, upgradeChance: 0.10 }),
  8: new CollectionBooster({ rarity: RARITY.LEGENDARY, numberOfItems: 4, upgradeChance: 0.45 }),
};
// API
// функция открытия бустерпака
function getBoosterLoot(boosterID: number, playerInventory: IInventory): Item[] {
    return boosters[boosterID].getBoosterLoot(playerInventory);
}
// TEST

for (const boosterID in boostersBase) {
  const loot = getBoosterLoot(Number(boosterID), {}); // Передайте актуальный инвентарь игрока
  console.log(`Loot from Booster ${boosterID}:`);
  console.log(loot);
}