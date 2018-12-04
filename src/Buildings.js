import {BUILDINGS} from './constants';

/**
 * @typedef {'storage'|'house'} BuildingAlias
 */

export default class Buildings {
    storage = null;
    house = null;
    food = null;
    wood = null;
    stone = null;
    barrack = null;
    wall = null;
    treb = null;
    ballista = null;

    /**
     * 
     * @param {Object} values 
     * @param {boolean} calc 
     */
    constructor(values = {}, calc = false) {
        Object.entries(values).forEach(([key, value]) => {
            if (!BUILDINGS.includes(key)) {
                throw new Error(`invalid key: '${key}'`);
            }
            this[key] = value;
        });

        if (calc) {
            BUILDINGS.forEach(alias => {
                if (!this.alias) {
                    this[alias] = this.calc(alias);
                }
            });
        }
    }

    calc(alias) {

    }

    /**
     *
     * @param { BuildingAlias } alias
     * @param { number } value
     * @returns { Buildings }
     */
    static fromBuilding(alias, value) {
        return new Buildings();
    }

    /**
     *
     * @param {number} value
     * @returns {Buildings}
     */
    static fromGold(value) {
        const tower = Math.round(value / 500000);

        return new Buildings({
            tower
        }, true);
    }

    /**
     *
     * @param { Object } buffs
     * @param { 1.1|1.2|1.3 } [buffs.castle]
     * @param { boolean } [buffs.conqueror]
     * @param { boolean } [buffs.devil]
     * @param { boolean } [buffs.start]
     *
     * @returns {number}
     */
    moneyIncome(buffs = {}) {
        return 0;
    }

    /**
     * @returns {number}
     */
    storageCapacity() {
        return 0;
    }

    /**
     * @returns {number}
     */
    towerCapacity() {
        return 0;
    }

    maxLevels(buildings) {}

    /**
     *
     * @param {BuildingAlias} alias
     * @param {boolean} format
     */
    estimatedTime(alias, format = false) {
        return 0;
    }
}
