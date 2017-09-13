var React = require('react');


var WeatherForm = React.createClass({
  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"/>
          <button>Submit</button>
        </form>
      </div>
    );
  },

  onFormSubmit: function(e){
    //prevent the whole page from loading.

    e.preventDefault();
    var location = this.refs.location.value;
    if (location.length >0){
      this.refs.location.value = "";
      console.log("calling this.props.onSearch(location)");
      this.props.onSearch(location);
    }
  }
});

module.exports = WeatherForm;
