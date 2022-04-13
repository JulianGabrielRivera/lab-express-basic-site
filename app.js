const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
// ...
// our first Route:
app.get('/home', (request, response, next) =>
  response.sendFile(__dirname + '/views/home-page.html')
);
app.get('/about', (request, response, next) =>
  response.sendFile(__dirname + '/views/about-page.html')
);
app.get('/works', (request, response, next) =>
  response.sendFile(__dirname + '/views/works-page.html')
);
// cat route:

// ...

// app.get('/about', (request, response, next) => {
//   console.log(request);
//   response.send('<h1>Welcome Ironhacker. :)</h1>');
// });

// app.get('/works', (request, response, next) => {
//   console.log(request);
//   response.send('<h1>Welcome Ironhacker. :)</h1>');
// });

//start the server
app.listen(3000, () => console.log('My first app listening on port 3000! '));
