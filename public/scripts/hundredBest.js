angular.module('hundredBest', [
  'ngResource',
  'hbServices'
])

.controller('mainCtl', ['$scope', function($scope) {
  $scope.title = 'Hundred Best';
  $scope.selectedList = '';
  console.log('lists on scope', $scope.lists)
}])