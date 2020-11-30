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

 // set(key, value) – stores the value by the key, returns the map itself. 
 // map.get(key) – returns the value by the key, undefined if key doesn't exist in map

let mp = new Map([[ 1, 'one' ],[ 2, 'two' ]]);
mp.set("0", "foo");
mp.set(10, "bar");
mp.set({id:1}, 3);
mp.set([1,2], 'buzz');
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