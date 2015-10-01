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

jQuery.ajax('../apis/github/users/octocat.json').then(function(data){
 console.log(arguments);
});
