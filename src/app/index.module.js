import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import HomeController from './home/home.controller';
import EventsController from './events/events.controller';

angular
  .module('warmappClient', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngRoute'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .constant('API', {
    url: 'http://localhost:3000/api/v1/',
  })
  .controller('HomeController', HomeController)
  .controller('EventsController', EventsController)
