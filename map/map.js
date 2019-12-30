const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDz0cHDaq86hNmoqY9Mg1DB-tsTjPs5EnY'
});

googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function (err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});