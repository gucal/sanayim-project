const googleMapsClient = require('@google/maps').createClient({
  key: 'YOUR API'
});

googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function (err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});