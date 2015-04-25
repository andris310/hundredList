angular.module('hundredBest', [
  'ngResource',
  'hbServices'
])

.controller('mainCtl', ['$scope', 'listSvc', function($scope, listSvc) {
  $scope.title = 'Hundred Best';
  $scope.selectedList = '';
  $scope.searchAm = function() {
    console.log('searhcing.....')
    if ($scope.searchParam) {
      console.log($scope.searchParam);
    }
  }
}])