/* import 'babel-polyfill';*/
/* import _ from 'lodash';*/
import { ComponentA as componentA } from '../component';
/* import { add } from 'ramda';*/
/* import * as Component from '../component';*/
function component() {
  /* Component.ComponentA('hello');*/

  var element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  /* element.a = add(1, 3);*/

  return element;
}

document.body.appendChild(component());

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
    console.log(json)
  })
  .catch(error => console.error('Something went wrong when fetching this data: ', error))
