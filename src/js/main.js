;(function(){
  var app = angular.module("Tiy-Github", []);

app.run(function($http, $rootScope){
  $http.get('/apis/github/users/octocat.json')
    .then(function (response){
      // $rootScope.login = "octocat";            //baby step 1

        // $rootScope.login = response.data.login;      //baby step 2
        // $rootScope.name = response.data.name;
        // $rootScope.location = response.data.location;
        // $rootScope.company = response.data.company;
        // $rootScope.blog = response.data.blog;
        // $rootScope.email = response.data.email;
        // $rootScope.followers = response.data.followers;
        // $rootScope.created_at = response.data.created_at;
        // $rootScope.following = response.data.following;

      $rootScope.user = response.data; //final form
    }) //END OF .THEN
}) //END OF $HTTP

app.run(function($http, $rootScope){
  $http.get('/apis/github/users/octocat/repositories.json')
    .then(function (response){

      $rootScope.repo = response.data;

    })
  })   //end of repo function

  app.run(function($http, $rootScope){
    $http.get('/apis/github/users/ricecoder/comments.json')
    // $http.get('https://api.github.com/repos/TIY-Durham/2015-FALL-FEE/issues/511/comments')
      .then(function (response){
        // $rootScope.created_at = "TODAY";
        $rootScope.comments = response.data;
        // $rootScope.comment = response.data;
      })
  })  //END COMMENT FUNCTION
//HOW TO USE FIREBASE WITH GITHUB! https://www.firebase.com/docs/web/guide/login/github.html

})();






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

//
// jQuery.getJSON("../apis/github/users/octocat.json", function(data) {
//   $('#name').html('<h1>' + data.name);
//   $('#login').html('<h2>' + data.login);
//   $('#company').html('<li>' + data.company);
//   $('#location').html('<li>' + data.location);
//   $('#email').html('<li>' + data.email);
//   $('#blog').html('<li>' + data.blog);
//   $('#created_at').html('<li>' + data.created_at);
//   $('#followers').html('<li>' + data.followers);
//   // $('#starred_url').html('<h1>' + data.starred_url);
//   $('#following').html('<h1>' + data.following);
// });
//
// /*MAY OR MAY NOT POPULATE MY TEMPLATE
//  jQuery.getJSON("../apis/github/users/ricecoder/ricecoder.json", function(data) {
//    $('#profile').html(data.this);
//  });
// */
//
//
//
// /* LODASH
// var info = _.template(NEEDS A STRING?);
// info({})
//
// */
//
//
// //CODE FOR TABS
//
// //TODO select tabs add click listener to them
// //TODO add class "active" to SPECIFIC element clicked
$('a[href="#contributions"]').on('click', function() {
  $('#contributions').toggleClass('active');
  $('#repos').removeClass('active');
  $('#public').removeClass('active');

});

$('a[href="#repos"]').on('click', function() {
  $('div#repos').toggleClass('active');
  $('div#contributions').removeClass('active');
  $('div#public').removeClass('active');
});

$('a[href="#public"]').on('click', function() {
  $('#public').toggleClass('active');
  $('#repos').removeClass('active');
  $('#contributions').removeClass('active');
});
//
//


//FOR LATER THE .ACTIVE INFO http://stackoverflow.com/questions/3148225/jquery-active-function
