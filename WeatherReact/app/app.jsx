var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//ES6 object de-structuring.
var {Route, Router, IndexRoute, hashHistory}=require('react-router');

{/*

  this is a jsx comment.
*/}

ReactDOM.render(
  <Router history={hashHistory}>
    {/*
      Main component is shown on every page. 
      Weather is index Route, e.g., the default choice.
    */}
    <Route path ="/" component={Main}>
      <Route path="about" component ={About} />
      <Route path="examples" component ={Examples} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);
