import {Bird} from '../bird';
import {EuropeanSwallow} from '../bird';
import {AfricanSwallow} from '../bird';
import {NorwegianBlueParrot} from '../bird';

describe('Bird', () => {
    let bird: Bird;
    let europeanSwallow: Bird;
    let africanSwallow: Bird
    let norwegianBlueParrot: Bird;

    beforeEach(() => {
        bird = new Bird('African', 2, 100);
    });

    it('should return unknown for plumage', () => {
        expect(bird.getPlumage()).toEqual('unknown');
    });

    it('should return average for european swallow plumage', () => {
        europeanSwallow = new EuropeanSwallow('European', 2, 100);
        expect(europeanSwallow.getPlumage()).toEqual('average');
    });

    it('should return tired for african swallow plumage', () => {
        africanSwallow = new AfricanSwallow('African', 3, 100);
        expect(africanSwallow.getPlumage()).toEqual('tired');
    });

    it('should return average for african swallow plumage', () => {
        africanSwallow = new AfricanSwallow('African', 1, 100);
        expect(africanSwallow.getPlumage()).toEqual('average');
    });

    it('should return scorched for norwegian blue parrot plumage', () => {
        norwegianBlueParrot = new NorwegianBlueParrot('Norwegian', 2, 101);
        expect(norwegianBlueParrot.getPlumage()).toEqual('scorched');
    });

    it('should return beautiful for norwegian blue parrot plumage', () => {
        norwegianBlueParrot = new NorwegianBlueParrot('Norwegian', 2, 99);
        expect(norwegianBlueParrot.getPlumage()).toEqual('beautiful');
    });

});