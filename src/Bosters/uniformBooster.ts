import { IInventory, RARITY } from "../interfaces";
import { Item } from "../items";
import { LuckBooster, ILuckBoosterSettings } from "./luckBooster";

// Класс бустерпака равномерного распределения
export class UniformBooster extends LuckBooster {
    numberOfItems: number;

    constructor(settings: ILuckBoosterSettings) {
        super(settings);
        this.numberOfItems = Math.min(settings.numberOfItems, 4);
    }

    protected uniformItems(loot: Item[], i: number): [Item, number] {
        let [newItem, itemID] = this.UpgradeItem(...super.findElement(i))
        while (loot.some(item => item.itemType === newItem.itemType)) {
            [newItem, itemID] = this.UpgradeItem(...super.findElement(i))
        }

        return [newItem, itemID]
    }

    getBoosterLoot(playerInventory: IInventory): Item[] {
        // Реализация выдачи предметов с учетом равномерного распределения
        const loot: Item[] = [];
        
        for (let i = 0; i < this.numberOfItems; i++) {
            let [newItem, itemID] = this.uniformItems(loot, i)

            super.pushItemToLootAndPlayerInventory(newItem, itemID, loot, playerInventory);
        }

        return loot;
    }
}

console.log(new UniformBooster({ rarity: RARITY.RARE, numberOfItems: 5, upgradeChance: 0.10 }).getBoosterLoot({}))
console.log(new UniformBooster({ rarity: RARITY.LEGENDARY, numberOfItems: 4, upgradeChance: 0.45 }).getBoosterLoot({}))