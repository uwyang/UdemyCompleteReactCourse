var React = require('react')

/*
var WeatherMessage = React.createClass({
  render: function(){
    // can not pass state?
    //props are passed.
    var {temp, location} = this.props;
      return (
      <h3>It's {temp} degrees in {location}! </h3>
    );
  },

});
*/

var WeatherMessage = ({temp, location}) => {
  //var {temp, location} = props;
    return (
    <h3>It's {temp} degrees in {location}! </h3>
  );
};

module.exports = WeatherMessage;
