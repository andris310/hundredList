angular.module('hundredBest')

.controller('listCtl', ['$scope', 'listSvc', function($scope, listSvc) {
  console.log('inside listCtl');
  $scope.selectedList = list;
  $scope.selectedItem = {};
  $scope.newItem = {};
  $scope.openAddItem = false;

  console.log($scope.selectedList);

  $scope.addItemToList = function() {
    console.log('adding item to the list: ', $scope.selectedItem);
    console.log('list: ', $scope.selectedList);
    var payload = {
      title: $scope.selectedItem.title,
      author: $scope.selectedItem.author,
      detailPageUrl: $scope.selectedItem.detailPageUrl,
      isbn: $scope.selectedItem.isbn,
      largeImage: $scope.selectedItem.largeImage,
      smallImage: $scope.selectedItem.smallImage,
      listId: $scope.selectedList._id
    };

    listSvc.addItemToList(payload, function(res) {
      console.log('inside listSvc: ', res);
      $scope.openAddItem = false;
      $scope.newItem = {};
      $scope.getListInfo();
    }, function(err) {
      if (err.data.msg) {
        $scope.notify('warn', err.data.msg);
      }
      console.log('ERROR: ', err);
    });
  };

  $scope.upvote = function(item) {
    console.log('Upvote: ', item);
    var payload = {
      itemId: item._id
    };

    listSvc.upvote(payload, function(res) {
      console.log('res: ', res);
    }, function(err) {
      if (err.data.msg) {
        $scope.notify('warn', err.data.msg);
        return;
      }
      $scope.notify('error', 'Sorry, something went wrong.');
    });
  }

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