var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
   
    .when("/addIssues", {
        templateUrl : "html/add_issues.html",
        controller : 'addIssuesController'
    })
    .when("/editIssues", {
        templateUrl : "html/edit_issues.html"
    })
  
});


