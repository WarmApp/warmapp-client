/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';

angular.module('warmappClient', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngRoute'])
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .controller('MainController', MainController)
