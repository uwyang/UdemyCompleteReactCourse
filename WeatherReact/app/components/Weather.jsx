var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  render: function(){

      var {isLoading, temp, location} = this.state;
      function renderMessage(){
        if (isLoading){
          return (<h3>Fetching Weather.... </h3>);
        }else if (temp && location){
          return (<WeatherMessage temp={temp} location = {location}/>);
        }
      }
      return (
        <div>
          <h3>Weather Component</h3>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
    );
  },

  handleSearch: function(location){
    this.setState({isLoading: true, });
    var self = this;
    openWeatherMap.getTemp(location).then(function(temp){
      self.setState({
        location: location,
        temp: temp,
        isLoading: false,
      })
    }, function(errMsg){
      self.setState({isLoading: false});
      console.log(errMsg);
    })

    console.log('handel search. ' + location);
  },

  getInitialState: function(){
    return {
      isLoading: false,
    };
  }

});

module.exports = Weather;
