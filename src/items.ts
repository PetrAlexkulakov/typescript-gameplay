import { RARITY, ITEMTYPE, IItemSettings } from "./interfaces";

// Класс предмета
class Item {
    name: string;
    rarity: RARITY;
    itemType: ITEMTYPE;

    constructor(settings: IItemSettings) {
        this.name = settings.name;
        this.rarity = settings.rarity;
        this.itemType = settings.itemType;
    }
}
// База предметов, ключ - ID предмета.
let itemsBase: {[ID: number]: Item} = {
    1: new Item({ name: "Bronze Helmet", rarity: RARITY.COMMON, itemType: ITEMTYPE.HELMET }),
    2: new Item({ name: "Leather Helmet", rarity: RARITY.COMMON, itemType: ITEMTYPE.HELMET }),
    3: new Item({ name: "Wooden Sword", rarity: RARITY.COMMON, itemType: ITEMTYPE.WEAPON }),
    4: new Item({ name: "Rusty Dagger", rarity: RARITY.COMMON, itemType: ITEMTYPE.WEAPON }),
    5: new Item({ name: "Wooden Shield", rarity: RARITY.COMMON, itemType: ITEMTYPE.SHIELD }),
    6: new Item({ name: "Buckler", rarity: RARITY.COMMON, itemType: ITEMTYPE.SHIELD }),
    7: new Item({ name: "Cloth Armor", rarity: RARITY.COMMON, itemType: ITEMTYPE.ARMOR }),
    8: new Item({ name: "Ragged Tunic", rarity: RARITY.COMMON, itemType: ITEMTYPE.ARMOR }),
    9: new Item({ name: "Iron Helmet", rarity: RARITY.RARE, itemType: ITEMTYPE.HELMET }),
    10: new Item({ name: "Steel Helmet", rarity: RARITY.RARE, itemType: ITEMTYPE.HELMET }),
    11: new Item({ name: "Longsword", rarity: RARITY.RARE, itemType: ITEMTYPE.WEAPON }),
    12: new Item({ name: "Crossbow", rarity: RARITY.RARE, itemType: ITEMTYPE.WEAPON }),
    13: new Item({ name: "Reinforced Shield", rarity: RARITY.RARE, itemType: ITEMTYPE.SHIELD }),
    14: new Item({ name: "Tower Shield", rarity: RARITY.RARE, itemType: ITEMTYPE.SHIELD }),
    15: new Item({ name: "Chainmail Armor", rarity: RARITY.RARE, itemType: ITEMTYPE.ARMOR }),
    16: new Item({ name: "Scale Mail", rarity: RARITY.RARE, itemType: ITEMTYPE.ARMOR }),
    17: new Item({ name: "Epic Helmet", rarity: RARITY.EPIC, itemType: ITEMTYPE.HELMET }),
    18: new Item({ name: "Legendary Helmet", rarity: RARITY.EPIC, itemType: ITEMTYPE.HELMET }),
    19: new Item({ name: "War Axe", rarity: RARITY.EPIC, itemType: ITEMTYPE.WEAPON }),
    20: new Item({ name: "Mage Staff", rarity: RARITY.EPIC, itemType: ITEMTYPE.WEAPON }),
    21: new Item({ name: "Ancient Shield", rarity: RARITY.EPIC, itemType: ITEMTYPE.SHIELD }),
    22: new Item({ name: "Enchanted Shield", rarity: RARITY.EPIC, itemType: ITEMTYPE.SHIELD }),
    23: new Item({ name: "Plate Armor", rarity: RARITY.EPIC, itemType: ITEMTYPE.ARMOR }),
    24: new Item({ name: "Dragon Scale Armor", rarity: RARITY.EPIC, itemType: ITEMTYPE.ARMOR }),
    25: new Item({ name: "Legendary Helm of Wisdom", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.HELMET }),
    26: new Item({ name: "Frostforged Helmet", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.HELMET }),
    27: new Item({ name: "Sword of Kings", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.WEAPON }),
    28: new Item({ name: "Staff of Arcane Power", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.WEAPON }),
    29: new Item({ name: "Shield of Eternal Guardians", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.SHIELD }),
    30: new Item({ name: "Aegis of the Ancients", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.SHIELD }),
    31: new Item({ name: "Armor of Light", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.ARMOR }),
    32: new Item({ name: "Draconic Plate", rarity: RARITY.LEGENDARY, itemType: ITEMTYPE.ARMOR }),
};