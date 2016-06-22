define(['student/module'], function (module){
	'use strict';
	module.registerController('StudentCtrl', ['$scope', 'StudentService', '$cookies', function ($scope, StudentService, $cookies) {
	  

	  StudentService.list(function (data, status, headers, config) {

	  	$scope.students = data.students;
	  	$cookies.put('X-Auth-Token', data.TOKEN);
	  });

	  $scope.save = function () {
	  	StudentService.save($scope.student, function (data, status) {

	  	});
	  }
  }])
})
