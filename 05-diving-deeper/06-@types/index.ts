import { get } from 'lodash';

const object = { 'a': [{ 'b': { 'c': 3 } }] };

console.log(get(object, 'a[0].b.c'));
