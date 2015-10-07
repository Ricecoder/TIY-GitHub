// (function() {
//   // the code here is executed once in its own scope
//   var octocatResult = $.ajax({ url: "https://api.github.com/users/octocat" });
//  console.log(octocatResult);
// })();


// (function() {
//   // the code here is executed once in its own scope
//   var octocatResult = $.ajax({ '../apis/github/users/octocat.json' });
//  console.log(octocatResult);
// })();

// jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
//  console.log(arguments);
// });


jQuery.getJSON("../apis/github/users/ricecoder/ricecoder.json", function(data) {
  $('#name').html('<h1>' + data.name);
  $('#login').html('<h2>' + data.login);
  $('#company').html('<li>' + data.company);
  $('#location').html('<li>' + data.location);
  $('#email').html('<li>' + data.email);
  $('#blog').html('<li>' + data.blog);
  $('#created_at').html('<li>' + data.created_at);
  $('#followers').html('<li>' + data.followers);
  $('#starred_url').html('<h1>' + data.starred_url);
  $('#following').html('<h1>' + data.following);
});

/*MAY OR MAY NOT POPULATE MY TEMPLATE
 jQuery.getJSON("../apis/github/users/ricecoder/ricecoder.json", function(data) {
   $('#profile').html(data.this);
 });
*/



/* LODASH
var info = _.template(NEEDS A STRING?);
info({})

*/


//CODE FOR TABS

//TODO select tabs add click listener to them
//TODO add class "active" to SPECIFIC element clicked
$('#con').on('click', function() {
  $('#con').addClass('active');
  $('#rep').removeClass('active');
  $('#act').removeClass('active');

});

$('#rep').on('click', function() {
  $('#rep').addClass('active');
  $('#con').removeClass('active');
  $('#act').removeClass('active');
});

$('#act').on('click', function() {
  $('#act').addClass('active');
  $('#rep').removeClass('active');
  $('#con').removeClass('active');
});




//FOR LATER THE .ACTIVE INFO http://stackoverflow.com/questions/3148225/jquery-active-function
