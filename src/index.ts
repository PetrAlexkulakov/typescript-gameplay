import { Booster } from "./Bosters/boster";
import { LuckBooster, ILuckBoosterSettings } from "./Bosters/luckBooster";
import { UniformBooster } from "./Bosters/uniformBooster";
import { IInventory, ITEMTYPE, RARITY } from "./interfaces";
import { Item, itemsBase } from "./items";

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
  2: new Booster({ rarity: RARITY.LEGENDARY, numberOfItems: 4 }),
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
    return boostersBase[boosterID].getBoosterLoot(playerInventory);
}
// TEST

console.log(new Booster({ rarity: RARITY.RARE, numberOfItems: 5 }).getBoosterLoot({}))

for (const boosterID in boostersBase) {
  const loot = getBoosterLoot(Number(boosterID), {}); // Передайте актуальный инвентарь игрока
  console.log(`Loot from Booster ${boosterID}:`);
  console.log(loot);
}