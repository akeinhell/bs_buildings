import { expect } from 'chai';
import * as c from '../src/constants';
import Buildings from '../src/Buildings';

describe('should have keys with coefficients', () => {
    c.BUILDINGS.forEach(b => {
        it(`[${b}] should have coefficient`, () => {
            expect(c.coefficients[b]).to.be.not.equal(undefined);
        });
    });

    Object.keys(c.coefficients).forEach(key => {
        it(`[${key}] should be referenced in BUILDINGS`, () => {
            expect(c.BUILDINGS.includes(key)).to.be.equal(true);
        });
    });
});

describe('resolve buildings from other', () => {
    const buildingsExample = {
        [c.TOWER]: 476,
        [c.HOUSE]: 674,
        [c.FOOD]: 953,
        [c.WOOD]: 953,
        [c.STONE]: 953,
        [c.STORAGE]: 665,
        [c.BARRACK]: 674,
        [c.WALL]: 173,
        [c.TREB]: 212,
        [c.BALLISTA]: 125,
    };

    Object.entries(buildingsExample).forEach(([key, value]) => {
        it(`sholud resolve from [${key}]`, () => {
            expect(key).to.be.equal(value);
        });
    });

    it('should resolve from tower capacity', () => {
        const result = Buildings.fromGold(238000000);

        expect(result[c.TOWER]).to.be.equal(475);
    });
});

describe('correct calculate money income', () => {
    const buildings = Buildings.fromBuilding('tower', 476);

    const variants = [
        { name: 'conqueror', buffs: { conqueror: true }, value: 778065 },
        { name: 'ruby castle', buffs: { castle: 1.2 }, value: 778065 },
        { name: 'no buff', buffs: { castle: 1.2 }, value: 648388 },
    ];

    variants.forEach(({name, buffs, value}) => {
        it(`should resolve money income: [${name}]`, () => {
            expect(buildings.moneyIncome(buffs)).to.be.equal(value);
        });
    });
});
