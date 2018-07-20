angular.module('feedReader').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
       $stateProvider.state('home', {
           url: "/",
           templateUrl:"../templates/views/home/home.html"
       }).state('feeds', {
           url: "/feeds",
           templateUrl: "../templates/views/feeds/feeds.html"
       }).state('posts', {
           url: "/posts",
           templateUrl: "../templates/views/posts/posts.html"
       })
       
       $urlRouterProvider.otherwise('/')
    }
])