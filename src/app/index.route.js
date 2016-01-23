function routerConfig ($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/', {
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    })
    .when('/events/:id', {
      templateUrl: 'app/events/events.html',
      controller: 'EventsController',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
}

export default routerConfig;
