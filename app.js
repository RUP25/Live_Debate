var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    User        = require("./models/user");

//requiring routes
var indexRoutes = require("./routes/index.js");    

mongoose.Promise = global.Promise;

const databaseUri = process.env.MONGODB_URI || 'mongodb://localhost/live_debate';

mongoose.connect(databaseUri, {useNewUrlParser: true,  useUnifiedTopology: true })
      .then(() => console.log(`Database connected`))
      .catch(err => console.log(`Database connection error: ${err.message}`));

      app.use(bodyParser.urlencoded({extended: true}));
      app.set("view engine", "ejs");
      app.use(express.static(__dirname + "/public"));
      app.use("/", indexRoutes);
      
      app.listen(5000, function(){
        console.log("Listening on port *5000!");
     });      