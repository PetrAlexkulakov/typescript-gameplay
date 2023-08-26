import { Booster } from "./Bosters/boster";
import { CollectionBooster } from "./Bosters/collectionBooster";
import { LuckBooster } from "./Bosters/luckBooster";
import { UniformBooster } from "./Bosters/uniformBooster";
import { IInventory, RARITY } from "./interfaces";
import { Item } from "./items";

// коллекция экземпляров бустерпаков, ключ - ID бустерпака
let boostersBase: { [key: number]: Booster | LuckBooster | UniformBooster | CollectionBooster } = {
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
const playerInventory: IInventory = {}

for (const boosterID in boostersBase) { 
  const loot = getBoosterLoot(Number(boosterID), playerInventory);
  console.log(`Loot from Booster ${boosterID}:`);
  console.log(loot);
}

console.log(playerInventory)
