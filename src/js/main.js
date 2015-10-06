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

//CODE FOR TABS

//TODO select tabs add click listener to them
//TODO add class "active" to SPECIFIC element clicked
$('#con').on('click', function() {
  $('#con').addClass('active');

});

$('#rep').on('click', function() {
  $('#rep').addClass('active');
});

$('#act').on('click', function() {
  $('#act').addClass('active');
});




//FOR LATER THE .ACTIVE INFO http://stackoverflow.com/questions/3148225/jquery-active-function
