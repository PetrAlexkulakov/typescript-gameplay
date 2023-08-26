import { IInventory } from "../interfaces";
import { Item } from "../items";
import { ILuckBoosterSettings } from "./luckBooster";
import { UniformBooster } from "./uniformBooster";

// Класс бустерпака с обратно пропорциональной вероятностью выпадения предметов
export class CollectionBooster extends UniformBooster {
    constructor(settings: ILuckBoosterSettings) {
      super(settings);
    }

    getBoosterLoot(playerInventory: IInventory): Item[] {
      // Реализация выдачи предметов с учетом обратно пропорциональной вероятности
      const loot: Item[] = [];
        
      for (let i = 0; i < this.numberOfItems; i++) {
        let [newItem, itemID] = this.uniformItems(loot, i)

        while (Math.random() > 1 / playerInventory[itemID]) {
            [newItem, itemID] = this.uniformItems(loot, i)
        } 

        super.pushItemToLootAndPlayerInventory(newItem, itemID, loot, playerInventory);
      }

      return loot;
    }
}