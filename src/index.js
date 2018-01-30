import _ from 'lodash';
/* import { ComponentA as componentA } from '../component';*/
/* import * as Component from '../component';*/
function component() {
  /* Component.ComponentA('hello');*/

  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
