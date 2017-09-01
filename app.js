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
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');
  $newArticle.find('.byline a').html(this.author);
  $newArticle.find('.byline a').attr('href', this.url);
  $newArticle.find('h1:first').html(this.title);
  $newArticle.find('.article-body').html(this.description);
  $newArticle.append('<hr>');
  return $newArticle;
};

for (var i = 0; i < rawData.length; i++){
  articles.push(new Projects(rawData[i]));
}

articles.forEach(function(article){
  $('#articles').append(article.toHtml());
});

$('.icon-menu').click(function(){
  console.log(event.target);
  $('#list').toggleClass('template');
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


