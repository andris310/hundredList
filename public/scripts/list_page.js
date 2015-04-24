angular.module('hundredBest')

.controller('listCtl', ['$scope', 'listSvc', function($scope, listSvc) {
  console.log('inside listCtl')
  $scope.list = list;
  $scope.newItem = {};
  $scope.openAddItem = false;

  $scope.addItemToList = function() {
    console.log('adding item to the list: ', $scope.newItem);
    console.log('list: ', $scope.list);
    var payload = {
      name: $scope.newItem.name,
      listId: $scope.list._id
    };

    listSvc.addItemToList(payload, function(res) {
      console.log('inside listSvc: ', res);
      $scope.openAddItem = false;
      $scope.newItem = {};
      $scope.getListInfo();
    });
  };

  $scope.getListInfo = function() {
    var payload = {
      listId: $scope.list._id
    };

    listSvc.getListInfo(payload, function(list) {
      $scope.list = list;
      console.log('Updated list: ', $scope.list);
    });
  };
}])