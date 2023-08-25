import { IInventory, RARITY } from "../interfaces";
import { Item } from "../items";
import { Booster, IBoosterSettings } from "./boster";

// Настройки бустерпака удачи
export interface ILuckBoosterSettings extends IBoosterSettings {
    upgradeChance: number;
}
  
// Класс бустерпака удачи
export class LuckBooster extends Booster {
  private upgradeChance: number;

  constructor(settings: ILuckBoosterSettings) {
    super(settings);
    this.upgradeChance = settings.upgradeChance
  }

  protected isUpgrade(item: Item): boolean {
    const ammountOfItems = Object.keys(RARITY).length / 2 - 1
    const upgradeChance = this.upgradeChance / ( 10 ** item.rarity )
    return Math.random() < upgradeChance && item.rarity !== ammountOfItems
  }

  protected UpgradeItem(item: Item, id: number): [Item, number] {
    if(this.isUpgrade(item)) {
        const rarity = item.rarity + 1;
        return super.findElementWithRarity(rarity);
    }

    return [item, id]
  }

  getBoosterLoot(playerInventory: IInventory): Item[] {
    // Реализация выдачи предметов с учетом шанса на повышение редкости
    const loot: Item[] = [];
        
    for (let i = 0; i < this.numberOfItems; i++) {
        let [newItem, itemID] = this.UpgradeItem(...super.findElement(i))

        super.pushItemToLootAndPlayerInventory(newItem, itemID, loot, playerInventory);
    }

    return loot;
  }
}

// console.log( new LuckBooster({ rarity: RARITY.RARE, numberOfItems: 5, upgradeChance: 0.10 }).getBoosterLoot({}))
// console.log( new LuckBooster({ rarity: RARITY.LEGENDARY, numberOfItems: 4, upgradeChance: 0.45 }).getBoosterLoot({}))