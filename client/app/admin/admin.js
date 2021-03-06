'use strict';

angular.module('dashboardApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        controller: 'AdminCtrl',
        templateUrl: 'app/admin/admin.html',
        sp: {
          authorize: {
            group: 'Admins'
          }
        }
      });
  });
