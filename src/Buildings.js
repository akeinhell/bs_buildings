import { BUILDINGS, coefficients } from './constants';

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
                    this[alias] = this.findMaxLevel(alias);
                }
            });
        }
    }

    resolveStorage() {
        // TODO sort and find biggest
        const maxResource = Object.entries(this)
            .filter(([, v]) => v)
            .map(([k, v]) => this.calc(k, v - 1, v));

        const a = 50;
        const b = 1000;
        const c = -maxResource;
        this.storage = Math.floor(-b / 2 / a + Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a);
    }

    findMaxLevel(alias) {
        if (!this.storage) {
            this.resolveStorage();
        }

        let current = 0;
        const capacity = this.storageCapacity();
        while (this.calc(alias, current, current + 1) < capacity) {
            current++;
        }

        this[alias] = current;

        return this;
    }

    calc(alias, current, target) {
        const { wood, stone } = coefficients[alias];
        const coefficient = Math.max(wood, stone);

        const res =
            (1 / 6) *
            coefficient *
            (target * (target + 1) * (target + 2) -
                current * (current + 1) * (current + 2));

        return Math.round(res);
    }

    /**
     *
     * @param { BuildingAlias } alias
     * @param { number } value
     * @returns { Buildings }
     */
    static fromBuilding(alias, value) {
        alias = value;
        return new Buildings();
    }

    /**
     *
     * @param {number} value
     * @returns {Buildings}
     */
    static fromGold(value) {
        const tower = Math.round(value / 500000);

        return new Buildings(
            {
                tower,
            },
            true
        );
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
        return buffs ? 0 : -1;
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

    maxLevels(buildings) {
        return buildings;
    }

    /**
     *
     * @param {BuildingAlias} alias
     * @param {boolean} format
     */
    estimatedTime(alias, format = false) {
        return 0 && format;
    }
}
