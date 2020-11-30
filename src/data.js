export const array = [1, 2, 3, 4, 5];

export const array3 = [1, 2, 3, 4, -1, 6];

export const array4 = [
    {
        id: '1',
        name: 'bob'
    }, 
    {
        id: '2',
        name: 'harry'
    }, 
    {
        id: '3',
        name: 'june'
    }
];

export const array5 = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

export const object = {
    id: '1',
    type: 'Code',
    name: 'Jason'
};

let mp = new Map([[ 1, 'one' ],[ 2, 'two' ]]);
mp.set("0", "foo");
mp.set(1, "bar");
mp.set({}, "baz");
mp.set([], 3);
export const map = mp;

const set1 = new Set(['1', '2', '3']);
const set2 = new Set([{1: 'one'}, {2: 'two'}, {3: 'three'}]);

export default {
    array,
    array3,
    array4,
    array5,
    object,
    map,
    set1,
    set2
}