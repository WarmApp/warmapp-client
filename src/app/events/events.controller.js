class EventsController {
  constructor ($rootScope, $scope, $routeParams, $http, API) {
    'ngInject';

    $rootScope.bodyClass = 'b-playlist';

    $scope.player = {};
    $scope.current = {
      videoId: 'Hm49qF7DAXw'
    }

    this.metadata = {};
    this.feeds = [];
    this.current = {
      videoId: 'dhza0DBAong'
    };

    window.vm = this;

    this.activate($scope, $routeParams, $http, API);
  }

  activate($scope, $routeParams, $http, API) {
    var url = API.url + 'events/' + $routeParams.id + '.json';

    $http.get(url).then((res) => {
      console.log(res);
      if (res.status == 200) {
        this.metadata = res.data.event.metadata;
        this.feeds = res.data.event.feeds;
      }
    });
  }
}

export default EventsController;
