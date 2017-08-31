'use strict';

//Project poost constructor function. 
function Projects (rawData){
  this.title = rawData.title;
  this.url = rawData.url;
  this.image = rawData.image;
  this.description = rawData.description;
  this.author = 'shane'
}

Projects.prototype.toHtml = function() {
  console.log('yayyy');
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass('template');
  $newArticle.find('.byline a').html(this.author);
  $newArticle.find('.byline a').attr('href', this.url);
  $newArticle.find('h1:first').html(this.title);
  $newArticle.find('.article-body').html(this.description);
  $newArticle.append();
  return $newArticle;
};

for (var i = 0; i < rawData.length; i++){
  var newPost = new Projects(rawData[i]);
  newPost.toHtml();
}
console.log(newPost);