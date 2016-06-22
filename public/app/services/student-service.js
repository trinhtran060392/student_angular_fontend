define(['student/module'], function (module) {

  'use strict';

  module.registerFactory('StudentService', ['$http', function ($http) {

    return {
      create: function (name, callback) {
        var request = {
          method: 'POST',
          url: appConfig.RestEntry + '/api/student',
          data: {name : name}
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

        $http(request).success(function(data, status) {
          callback(data, status);
        }).error(function(data, status) {
          callback(data, status);
        });
      }
    }
  }]);
})