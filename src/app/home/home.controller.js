class HomeController {
  constructor ($rootScope) {
    'ngInject';

    $rootScope.bodyClass = 'main-page';

    this.activate();
  }

  activate() {

  }
}

export default HomeController;
