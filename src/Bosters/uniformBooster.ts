import { IInventory, ITEMTYPE } from "../interfaces";
import { Item } from "../items";
import { LuckBooster, ILuckBoosterSettings } from "./luckBooster";

// Класс бустерпака равномерного распределения
export class UniformBooster extends LuckBooster {
    numberOfItems: number;

    constructor(settings: ILuckBoosterSettings) {
        super(settings);
        this.numberOfItems = Math.max(settings.numberOfItems, 4);
    }

    private shouldBeUniform(loot: Item[], newItem: Item): boolean {
        const uniqueItemTypes = new Set(loot.map(item => item.itemType));
        const itemTypesLength = Object.keys(ITEMTYPE).length / 2
        if (uniqueItemTypes.size === itemTypesLength) {
            return false
        } 
        if (loot.some(item => item.itemType === newItem.itemType)) {
            return true
        }

        return false
    }

    protected uniformItems(loot: Item[], i: number): [Item, number] {
        let [newItem, itemID] = this.UpgradeItem(...super.findElement(i))

        while (this.shouldBeUniform(loot, newItem)) { 
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