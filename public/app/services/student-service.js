define(['student/module'], function (module) {

  'use strict';

  module.registerFactory('StudentService', ['$http', '$cookies', function ($http, $cookies) {

    return {
      save: function (student, callback) {
        var request = {
          method: 'POST',
          url: appConfig.RestEntry + '/student',
          data: student,
          headers: {
            'X-Auth-Token': $cookies.get('X-Auth-Token')
          }
        };

        $http(request).success(function(data, status) {
          callback(data, status);
        }).error(function(data, status) {
          callback(data, status);
        });
      },
      list: function (callback) {
        var request = {
          method: 'GET',
          url: appConfig.RestEntry + '/student'
        };

        $http(request).success(function(data, status, headers, config) {
          callback(data, status, headers, config);
        }).error(function(data, status) {
          callback(data, status);
        });
      }
    }
  }]);
})