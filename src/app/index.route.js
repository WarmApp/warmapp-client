function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
}

export default routerConfig;
