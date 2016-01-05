var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.db;

ds.automigrate('customer', function(err) {
  if (err) throw err;

  var customer = { email: 'konrad@webkrak.pl', password: 'konrad123' };

  app.models.Customer.create(customer, function(err, model) {
    if (err) throw err;
    console.log('Created:', model);
  });
});

ds.automigrate(['accountant', 'ACL'], function(err) {
  if (err) throw err;
});

ds.disconnect();
