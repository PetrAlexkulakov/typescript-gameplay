// Редкость
export enum RARITY {
    COMMON,
    RARE,
    EPIC,
    LEGENDARY
}
// Тип предмета
export enum ITEMTYPE {
    HELMET,
    WEAPON,
    SHIELD,
    ARMOR
}
// Настройки предмета
export interface IItemSettings {
    name: string;
    rarity: RARITY;
    itemType: ITEMTYPE;
}

// Интерфейс инвентаря. Ключ - ID предмета, значение - количество экземпляров этого предмета в инвентаре
export interface IInventory {
    [key: number]: number
}