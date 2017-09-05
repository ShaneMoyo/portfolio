'use strict';
var articles = [];
//Project poost constructor function. 
function Projects (rawData){
  this.title = rawData.title;
  this.url = rawData.url;
  this.image = rawData.image;
  this.description = rawData.description;
  this.author = 'shane'
}

if(localStorage.rawData){
  fillArray(JSON.parse(localStorage.getItem('rawData')));
} else {
  $.getJSON('/data.json')
   .done(function(data){
    localStorage.setItem('rawData', JSON.stringify(data))
  })
  fillArray(JSON.parse(localStorage.getItem('rawData')));
}

Projects.prototype.toHtml = function() {
  var template = $( '#post-template' ).html();
  var templateFiller = Handlebars.compile( template );
  var filledTemplate = templateFiller( this );
  return filledTemplate;

};

function fillArray (rawData){
  for (var i = 0; i < rawData.length; i++){
    articles.push(new Projects(rawData[i]));
  }
}

articles.forEach(function(article){
  $('.holdpost').append(article.toHtml());
});

$('.icon-menu').click(function(){
  console.log(event.target);
  $('#list').toggleClass('show');
  console.log($('#list'));
})

$('#list').click(function(){
  console.log(event.target.id);
  if( event.target.id === "home" ){
    $('#information').hide();
    $('article').show();
  }
  if( event.target.id === "AboutMe" ){
    $('article').hide();
    $('#information').show();
  }
})


