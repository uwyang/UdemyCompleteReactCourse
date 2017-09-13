var React = require('react');
var ReactDOM = require('react-dom');


//will be added into ES6.
var obj1 = {
  name: 'Alice',
  location: 'Ancaster',
};

var obj2 = {
  age: 34,
  //spread
  ...obj1,
}; 

console.log(obj2);

ReactDOM.render(
  <h1>BoilerPlate apps</h1>,
  document.getElementById('app')
);
