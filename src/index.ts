// Редкость
enum RARITY {
    COMMON,
    RARE,
    EPIC,
    LEGENDARY
}
// Тип предмета
enum ITEMTYPE {
    HELMET,
    WEAPON,
    SHIELD,
    ARMOR
}
// Настройки предмета
interface IItemSettings {
    name: string;
}
// Класс предмета
class Item {
    name: string;
    constructor(settings: IItemSettings) {
        this.name = settings.name;
    }
}
// База предметов, ключ - ID предмета.
let itemsBase: {[ID: number]: Item} = {
    1 : new Item({name: "Shiny Sword"}), // пример добавления экземпляра предмета
};
// Интерфейс инвентаря. Ключ - ID предмета, значение - количество экземпляров этого предмета в инвентаре
interface IInventory {
    [key: number]: number
}
// Настройки простого бустерпака
interface IBoosterSettings {
    rarity: RARITY;
}
// Класс простого бустерпака
class Booster {
    rarity: RARITY;
    constructor(settings: IBoosterSettings) {
        this.rarity = settings.rarity;
    }
    getBoosterLoot(playerInventory: IInventory): Item[] {}
}
// Настройки бустерпака удачи
interface ILuckBoosterSettings extends IBoosterSettings {}
// Класс бустерпака удачи
class LuckBooster extends Booster {
    constructor(settings: ILuckBoosterSettings) {}
}
// коллекция экземпляров бустерпаков, ключ - ID бустерпака
let boostersBase = {
    1: new Booster({rarity: RARITY.RARE}), // пример добавления экземпляра бустерпака
};
// API
// функция открытия бустерпака
function getBoosterLoot(boosterID: number, playerInventory: IInventory): Item[] {
    return boosters[boosterID].getBoosterLoot(playerInventory);
}
// TEST