angular.module('hundredBest')

.controller('listsCtl', ['$scope', 'listSvc', function($scope, listSvc) {
  listSvc.getAllLists(function(res) {

    $scope.allLists = res;
  });
}])