var React = require('react');
var Nav = require('Nav');

/*
var Main = React.createClass({
  render: function(){
    console.log(this.props);
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        <p>This.props.children are rendered here. </p>
        {this.props.children}
      </div>);
  },
});
*/

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2>Main Component</h2>
      <p>this.props.children are rendered here. </p>
      {props.children}
    </div>);
}


module.exports = Main;
