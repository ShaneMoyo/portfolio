page('/', myProjects);
page('/About123', myAbout);
page();
var repos = [];
const render = Handlebars.compile($('#repo-template').text());

function myProjects(){
  console.log('going to projects!');
  $('#information').hide();
  $('#projectholder').show();
  $.get({
    url: `github/user/repos`,
    type: 'GET'
  })
    .then(data => repos = data, err => console.error(err)) 
    .then(renderToDom);
}

function myAbout() {
  console.log('going to about!');
  $('#projectholder').hide();
  $('#information').show();  
}

function renderToDom(){
  $('#projectholder ul').append(
    repos.map(render));
}