var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })
        .when('/blog', {
            templateUrl: 'pages/blog.html',
            controller: 'BlogController'
        })
        .when('/about', {
            templateUrl: 'pages/about.html', 
            controller: 'AboutController'
        })
        .otherwise({redirectTo: '/'});
});

app.controller('HomeController', function($scope) {
    $scope.message = 'This is the content sent from the HomeController'
});
app.controller('BlogController', function($scope) { 
    $scope.message = 'This is the content sent from BlogController';
});
app.controller('AboutController', function($scope) {
    $scope.message = 'This is the content sent from AboutController';
});
