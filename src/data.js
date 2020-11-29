export const array = [1, 2, 3, 4, 5];

export const array3 = [1, 2, 3, 4, -1, 6];

export const array4 = [{
    id: '1'
}, {
    id: '2'
}, {
    id: '3'
}];

export const array5 = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

export const object = {
    id: '1',
    type: 'Code',
    name: 'Jason'
};

let mp = new Map();
mp.set("0", "foo");
mp.set(1, "bar");
mp.set({}, "baz");
export const map = mp;

export default {
    array,
    array3,
    array4,
    array5,
    object,
    map
}