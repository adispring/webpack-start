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
