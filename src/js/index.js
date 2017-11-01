
// console.log('this is the index page');

// import {add} from 'utilsPath/util';

// console.log(add(3,6));

 //import findIndex from 'lodash/findIndex';

// var findIndex = require('lodash/sortBy');

import _ from 'lodash';
import React from 'react';
import dom from 'react-dom';
import Demo from '../smartComponent/Demo.jsx';

/*var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

var index = _.findIndex(users, function(chr) {
  return chr.user == 'fred';
});

console.log(index);*/

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
var result = _.sortBy(users, function(o) { return o.age; });

console.log(result);

dom.render(<Demo title="this is the name list:"/>,document.getElementById('container'));










