const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

//this will allow us to serve up static files, css, images, and JS.
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = "My Home Page";
  var heading = "My Website";
  res.render('pages/index',{
    'title':title,
    'heading':heading
  })
})

app.get('/about', (req, res) => {
  var title = "Valorant";
  var heading = "My Website"
  res.render('pages/about',{
    'title':title,
    'heading':heading
  })
})

app.get('/contact', (req, res) => {
  var title = "Grand Theft Auto V";
  var heading = "My Website"
  res.render('pages/contact',{
    'title':title,
    'heading':heading
  })
})

app.get('/brain', (req, res) => {
  var title = "Undertale";
  var heading = "My Website"
  res.render('pages/brain',{
    'title':title,
    'heading':heading
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

