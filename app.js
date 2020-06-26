// The very basics of Express and what it can give for a local server
// https://expressjs.com/

// Declare and require at the top
const express = require("express");

// Express App / Invoke that function
// Create a instance of the express app
const app = express();

// Register view engine 
// This time will be ejs (a bit messy) / https://ejs.co/
// Automatically express and ejs will look in folder of "views"
app.set('view engine', 'ejs');


// Listen for request on a specific port
// Automatically infers you want to use localhost
app.listen(3000);

// Get request for your home
// The parameters take in a request and response
// Thr root __dirname is meant to be realtive to the root of the project
app.get("/", (req, res) => {
  // res.send('<p>Home Page</p>');
  // res.sendFile("./views/index.html", { root: __dirname });
  res.render('index', {title: 'Home'});
});

// Get request for about with a request and a response
// You can make multiple get handlers
// With the link of html you addtionally pass in the root
app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render('about', {title: 'About Node'});
});

// Redirects in Express
// Under the hood sends a response the browser include the response number! (304)
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

app.get('/blogs/create', (req, res) => {
  res.render('create', {title: 'Create Node'});
})

// 404 Page
// The use function will require for every single request so the position is important in the code (top to bottom)
// Will fire for every request if none above are a match
// with .status to edit the status code
app.use((req, res) => {
  res.status(404).render('404', {title: 'Oops Node!'});
});
