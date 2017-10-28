/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *cc
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
var person = {"city": "Hawaii", "price":"$6400", "class":"Economy","deal":"10/29/2017","quota":"100","date":"10/01/2017-10/31/2017","image":"/images/1.jpg"}
    Fan.create(person).exec( function(err, model) {});

    person = {"city": "Walnut Creek", "price":"$7500", "class":"Business","deal":"10/29/2017","quota":"150","date":"10/01/2017-10/31/2017","image":"http://www.visitwalnutcreek.org/wp-content/uploads/2015/09/WC-Downtown-5.jpg"}

    Fan.create(person).exec( function(err, model) {});

  person = {"city": "Peul:", "price":"$8600", "class":"Economy","deal":"10/29/2017","quota":"160","date":"10/01/2017-10/31/2017","image":"https://gobear-images-cdn.azureedge.net/hk/gobear-zh/Media/blogs/GettyImages-473481530.jpg"}
    Fan.create(person).exec( function(err, model) {});
    person = {"city": "Rocky Mountain", "price":"$5300", "class":"Economy","deal":"10/29/2017","date":"10/01/2017-10/31/2017","quota":"110","image":"https://www.nationalparks.org/sites/default/files/RMNP%20-%20shutterstock_143431792%20%281%29.jpg"}
    Fan.create(person).exec( function(err, model) {});
  cb();
};
