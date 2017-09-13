var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d0744f97376662a577a42292784c610c';
//API key: d0744f97376662a577a42292784c610c


module.exports = {
  //returns a promise.
  getTemp: function(location){
    // in ``, everthing is excecuted or evaluated.
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=metric`;
    console.log(requestUrl);
    return axios.get(requestUrl).then(
      function(res){
        if (res.data.cod && res.data.message){
          throw new Error(res.data.message);
        }else {
          return res.data.main.temp;
        }
      }, function(res){
        throw new Error(res.data.message);

      }
    );
  }
};
