export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';

    require('../components/Travel/hello-world.scss');

    var travelController = require('../components/Travel/hello-world')
    $urlRouterProvider.otherwise('/home/step1');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/components/Travel/home.html',
            controller: travelController,

        })
        .state('home.step1', {
            url: '/step1',
            templateUrl: '/components/Travel/step1.html',
        })
        .state('home.step2', {
            url: '/step2',
            templateUrl:'/components/Travel/step2.html',

        })
        .state('home.step3', {
        url: '/step3',
        templateUrl:'/components/Travel/step3.html',
        })
}
/*

 function stateController($scope, appName) {
 'ngInject';
 this.data = {
 author: 'Pragati Kachare',
 appName: 'app',
 description: 'description is long'
 };

 }*/
