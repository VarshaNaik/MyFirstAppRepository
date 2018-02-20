var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('my first api string');
});

router.post('/api/listUser', function (req, res) {
  res.render('index',{title: 'from post', value:'POST request to the homepage'})
  });
  /* post object */
  router.post('/post', function (req, res) {
  res.render('index',{title: 'from post', value:'POST request to the homepage'})
  });
  /* Json response */
  router.get('/json', function(req, res, next) {
  console.log('Accessing the /json section ...')
      res.json({key:'respond with a resource using nodemon suing dev script'});
  });

  /* used by all types and routes */
router.all('/*', function (req, res, next) {
  console.log('Accessing the all section ...')
  next()
  })
  
  /* parameters */
  router.get('/json/fname/:param1/lname/:param2', function (req, res) {
  res.send(req.params)
  })
  
  router.get('/json/name/:from-:to', function (req, res, next) {
  res.send(req.params)
  })
  
  /** query string parameters */
  router.get('/qstring', function (req, res, next) {
  res.send(req.query)
  }); 
  
  
module.exports = router;