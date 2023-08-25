import { RARITY, ITEMTYPE, IInventory, IBoosterSettings } from "./interfaces";
import { Item, itemsBase } from "./items";

// Класс простого бустерпака
export class Booster {
    rarity: RARITY;
    numberOfItems: number;

    constructor(settings: IBoosterSettings) {
        this.rarity = settings.rarity;
        this.numberOfItems = settings.numberOfItems;
    }

    getBoosterLoot(playerInventory: IInventory): Item[] {
        const loot: Item[] = [];
        
        for (let i = 0; i < this.numberOfItems; i++) {
            const rarity = i < this.numberOfItems * 2 / 3 - 1 || this.rarity === 0 ? this.rarity : this.rarity - 1
            let newItem: Item = itemsBase[0]
            let itemID = 0

            do {
                itemID = Math.floor(Math.random() * Object.values(itemsBase).length)
                newItem = itemsBase[itemID];
            } while (newItem.rarity !== rarity)

            loot.push(newItem);
            if (playerInventory[itemID]) {
                playerInventory[itemID]++;
            } else {
                playerInventory[itemID] = 1;
            }
        }

        return loot;
    }
}

console.log(new Booster({ rarity: RARITY.RARE, numberOfItems: 5 }).getBoosterLoot({}))