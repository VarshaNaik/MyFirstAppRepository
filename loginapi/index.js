var express = require('express');
var router = express.Router();
var fs = require('fs');
var slice = require('array-slice');
var request = require('request');

router.get('/listUser', function (req, res) {
fs.readFile('./data/login.data', (e, content) => {
    var data = JSON.parse(content.toString()); 
    console.log(data.users); 
    res.send(data.users);
});
});

router.get('/checkUserID/:userid', function (req, res) {
    fs.readFile('./data/login.data', (e, content) => {
        var data = JSON.parse(content.toString()); 
        var username =req.params.userid;
        var userexists =  data.users.filter(function(user){
                return user.id.toLowerCase().indexOf(username) !== -1;
              }).length ? true:false;
            if(userexists) 
            res.send('ID EXISTS');
            else
            res.send('ID AVAILABLE');
    });
    });

    router.get('/checkUserEmail/:email', function (req, res) {
        fs.readFile('./data/login.data', (e, content) => {
            var data = JSON.parse(content.toString()); 
            var useremail =req.params.email;
            console.log(useremail);
            var emailexists =  data.users.filter(function(user){
                console.log(user.email.toLowerCase());
                console.log(user.email.toLowerCase() === useremail );
                      return  user.email.toLowerCase() === useremail });
                     
                if(emailexists.length > 0) 
                res.send('EMAIL EXISTS');
                else
                res.send('EMAIL AVAILABLE');
        });
        });

        router.get('/getTop5Porduct', function (req, res) {
            fs.readFile('./data/products.data', (e, content) => {
                var data = JSON.parse(content.toString()); 
                res.send( slice(data.results,0,5));
                  req.params["name"];
            });
            });

            router.get('/serachitunes/:pname', function(req, res){
                try{
                                var prodToFind = req.params["pname"];
                                request("https://itunes.apple.com/search?term="+ prodToFind, function (error, response, body) {
                                 
                              /*  console.log('error:', error); // Print the error if one occurred
                                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received*/
                                console.log('body:', body);
                               
                                if(body != undefined)
                                {
                                    var ituneData= body;
                                 res.send( body.toString()); // Print the HTML for the Google homepage.
                                }
                                 else
                                 rese.send("Error in api");
                               
                              });
                             
                            }
                            catch(error)
                            {console.log(error);}
        
               });

/*fs.readFile('./data/login.data',function(err,content){
    if(err) throw err;
    var data = JSON.parse(content.toString());
    var users = data.users;
    var user = {
        id:"Varsha",
        email:"varsha.naik@gmail.com",
        password:"Emirates@123"
    };
    data.users.push(user);
    console.log(data)
    fs.writeFile('./data/login.data',JSON.stringify(data),function(err){
      if(err) throw err;
  })
})*/

module.exports = router;