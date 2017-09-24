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
  $('.show li').toggle();
  console.log($('#list'));
})



