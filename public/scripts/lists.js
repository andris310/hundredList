angular.module('hundredBest')

.controller('listsCtl', ['$scope', 'listSvc', function($scope, listSvc) {
  console.log('inside listCtl');
  listSvc.getAllLists(function(res) {
    console.log('List resultssssss', res);
    $scope.allLists = res;
  });
}])