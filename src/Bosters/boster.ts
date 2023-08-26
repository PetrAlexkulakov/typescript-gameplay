import { RARITY, IInventory } from "../interfaces";
import { Item, itemsBase } from "../items";

// Настройки простого бустерпака
export interface IBoosterSettings {
    rarity: RARITY;
    numberOfItems: number;
    upgradeChance?: number;
}

// Класс простого бустерпака
export class Booster {
    rarity: RARITY;
    numberOfItems: number;

    constructor(settings: IBoosterSettings) {
        this.rarity = settings.rarity;
        this.numberOfItems = settings.numberOfItems;
    }

    private getAmountOfRearityItems(): number {
        return Math.floor(this.numberOfItems * (1 - this.rarity * 0.25))
    }

    protected pushItemToLootAndPlayerInventory (item: Item, itemID: number, loot: Item[], playerInventory: IInventory) { 
        loot.push(item);
        if (playerInventory[itemID]) {
            playerInventory[itemID]++;
        } else {
            playerInventory[itemID] = 1;
        }
    }

    protected findElementWithRarity(rarity: number): [Item, number] {
        let newItem: Item = itemsBase[0]
        let itemID = 0

        do {
            itemID = Math.ceil(Math.random() * Object.values(itemsBase).length)
            newItem = itemsBase[itemID];
        } while (newItem.rarity !== rarity)

        return [newItem, itemID]
    }

    protected findElement(i: number): [Item, number] {
        const rarity = i < this.getAmountOfRearityItems() || this.rarity === 0 ? 
            this.rarity : 
            this.rarity - 1

        return this.findElementWithRarity(rarity)
    }

    getBoosterLoot(playerInventory: IInventory): Item[] {
        const loot: Item[] = [];
        
        for (let i = 0; i < this.numberOfItems; i++) {
            const [newItem, itemID] = this.findElement(i)

            this.pushItemToLootAndPlayerInventory(newItem, itemID, loot, playerInventory);
        }
 
        return loot;
    }
}
