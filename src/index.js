function component() {
  var element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  /* element.a = add(1, 3);*/

  return element;
}

document.body.appendChild(component());

