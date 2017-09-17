page('/', myHome);
page('/About123', myAbout);
page();
var repos = [];
function myHome(){
  console.log('going home!');
  $('#information').hide();
  $('article').show();
}

function myAbout() {
  console.log('going to about!');
  $('article').hide();
  $('#information').show();
  $.get({
    url: `github/user/repos`,
    type: 'GET'
  })
    .then(data => repos = data, err => console.error(err)) 
    .then(console.log(repos));
}