/**
 * FanController
 *
 * @description :: Server-side logic for managing fans
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// Create function
create: function(req, res) {
    if (req.method == "POST") {
        Fan.create(req.body.Fan).exec( function(err, model) {
            return res.send("Successfully Created!");
        });
    } else {
        return res.view('fan/create');
    }
},

// admin function
admin: function (req, res) {
   var limitN=6;
   Fan.find().paginate({page: req.query.page, limit: limitN})
        .exec( function(err, persons) {
            Fan.count().exec( function(err, value) {
                var pages = Math.ceil(value / limitN );
                return res.view( 'fan/admin', {'persons': persons, 'count':pages});
            });
        });
},

// index
homepage: function(req, res){

   Fan.find().paginate({ limit:6})
  // .where({'DealValidTill':{'>=':new Date()}})
        .exec( function(err, fans) {
            Fan.count().exec( function(err, value) {
                var pages = Math.ceil(value / 5 );
                return res.view( 'homepage', {'fans': fans, 'count':pages});
            });
        });
  // Fan.find().exec( function(err, fans) {
  //     res.view('homepage', {'fans': fans});
  // });
},

// search function
view:function(req,res){
    Fan.find().exec( function(err, model) {
        if (model != null)
            return res.view('fan/view', {'person': model});
        else
            return res.send("No such person");
    });
},

// delete function
delete: function(req, res) {
   Fan.findOne(req.params.id).exec( function(err, model) {
        if (model != null) {
            model.destroy();
            return res.send("Person Deleted");
        } else {
            return res.send("Person not found");
        }
    });
},

// update function
update: function(req, res) {
    if (req.method == "GET") {
        Fan.findOne(req.params.id).exec( function(err, model) {
            if (model == null)
                return res.send("No such person!");
            else
                return res.view('fan/update', {'person': model});
        });
    } else {
         Fan.findOne(req.params.id).exec( function(err, model) {
                model.region = req.body.Person.region;
                model.city = req.body.Person.city;
                model.price = req.body.Person.price;
                model.image = req.body.Person.image;
                model.deal = req.body.Person.deal;
                model.quota = req.body.Person.quota;
                model.class_ = req.body.Person.class_;
                model.save();
            return res.send("Record updated");
        });
    }
},

json: function (req, res){

  Fan.find().exec( function(err, model) {

          return res.json( model);

  });


},
search: function (req, res) {
    Fan.find()
        .where({Region: {contains: req.query.region}})
        .where({Price: {contains: req.query.price}})
				.where({Dates: {contains: req.query.daterange}})
        .sort('region')
        .exec( function (err, persons) {
            return res.view('fan/search', {'fan': persons});
        })
},

};
