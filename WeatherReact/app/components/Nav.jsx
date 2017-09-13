var React = require('react');
//if You use IndexRoute, use IndexLink
var {Link, IndexLink} = require('react-router');
//OR: var Link = require('react-router').Link.
/*
var Nav = React.createClass({
  render: function(){
    return (
      <div>
        nav comp
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}} >Get Weather</IndexLink>
        <Link to="about" activeClassName="active"  activeStyle={{fontWeight:'bold'}} >About</Link>
        <Link to="examples" activeClassName="active"  activeStyle={{fontWeight:'bold'}} >Examples</Link>
        <a href="#/about" activeClassName="active" >about </a>
      </div>
    );
  }
});
*/

var Nav = (props)=> {
  return (
    <div>
      nav comp
      {/*
        for CSS, camel case everything!
        e.g. font-weight ---> fontWeight.
      */}
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}} >Get Weather</IndexLink>
      <Link to="about" activeClassName="active"  activeStyle={{fontWeight:'bold'}} >About</Link>
      <Link to="examples" activeClassName="active"  activeStyle={{fontWeight:'bold'}} >Examples</Link>
      <a href="#/about" activeClassName="active" >about </a>
    </div>
  );
};

module.exports=Nav;
