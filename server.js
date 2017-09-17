
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use( express.static('./public'));
app.get('/', function( request, response ){
  response.sendFile('index.html', { root: '/public'});
});

function proxyGitHub( request, response ) {
  console.log( 'Routing GitHub request for', request.params[0] );
  ( requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);
app.listen(PORT, function(){
})

