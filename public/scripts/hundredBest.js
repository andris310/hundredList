angular.module('hundredBest', [
  'ngResource',
  'ngRoute',
  'hbServices',
  'hbDirectives'
])

.controller('mainCtl', ['$scope', 'listSvc', 'searchSvc', function($scope, listSvc, searchSvc) {
  $scope.title = 'Hundred Best';
  $scope.selectedList = '';

}])