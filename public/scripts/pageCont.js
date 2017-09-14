page('/', myHome);
page('/About123', myAbout);
page();

function myHome(){
  console.log('going home!');
  $('#information').hide();
  $('article').show();
}

function myAbout(){
  console.log('going to about!');
  $('article').hide();
  $('#information').show();
}