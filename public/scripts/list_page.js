angular.module('hundredBest')

.controller('listCtl', ['$scope', 'listSvc', function($scope, listSvc) {
  console.log('inside listCtl');
  $scope.selectedList = list;
  $scope.selectedItem = {};
  $scope.newItem = {};
  $scope.openAddItem = false;

  console.log($scope.selectedList);

  $scope.addItemToList = function() {
    console.log('adding item to the list: ', $scope.newItem);
    console.log('list: ', $scope.selectedList);
    var payload = {
      name: $scope.newItem.name,
      listId: $scope.selectedList._id
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
      listId: $scope.selectedList._id
    };

    listSvc.getListInfo(payload, function(list) {
      $scope.selectedList = list;
      console.log('Updated list: ', $scope.selectedList);
    });
  };
}])