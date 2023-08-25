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