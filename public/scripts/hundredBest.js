angular.module('hundredBest', [
  'ngResource',
  'ngRoute',
  'ngAnimate',
  'hbServices',
  'hbDirectives'
])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
}])

.controller('mainCtl', ['$scope', '$timeout', 'listSvc', 'searchSvc', function($scope, $timeout, listSvc, searchSvc) {
  $scope.title = 'Hundred Best';
  $scope.showVeil = false;
  $scope.selectedList = '';
  $scope.notifications = [];
  $scope.showLogin = false;

    /**
   * Global function for displaying notification.
   * type - The message type. [error, warn, info, success] class for notification styles.
   * message - notification text.
   * displayTime - length of time in milliseconds. If 0 the user will have to click the close the box.
   **/
  // This varable is used to generate incremental notification ids
  var notification_id = 0;
  $scope.notify = function notify(type, message, displayTime) {
    if (angular.isUndefined(displayTime)) {
      displayTime =  5000;
    }

    var noteId = notification_id++;
    for (var i = 0; $scope.notifications.length > i; i++) {
      if ($scope.notifications[i].message === message) {
        return;
      }
    }

    $scope.notifications.push({
      id: noteId,
      class: type,
      message: message
    });

    $scope.safeApply();

    if (displayTime) {
      $timeout($scope.removeNotification.bind(null, noteId), displayTime);
    }

    return noteId;
  };

  $scope.removeNotification = function(noteId) {
    var noteIdx;
    var notes = $scope.notifications;
    for( noteIdx = 0; noteIdx < notes.length; noteIdx++ ) {
      if (notes[noteIdx].id == noteId) {
        break;
      }
    }
    if (noteIdx < notes.length) {
      $scope.notifications.splice(noteIdx, 1);
      $scope.safeApply();
    }
  }

  $scope.safeApply = function(fn) {
    var phase = this.$root.$$phase;
    if(phase == '$apply' || phase == '$digest') {
      if(fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };
}])

.controller('listCtl', ['$scope', '$routeParams', '$location', 'listSvc', 'userSvc', function($scope, $routeParams, $location, listSvc, userSvc) {
  console.log('inside listCtl');
  $scope.selectedList = list;
  $scope.selectedItem = {};
  $scope.newItem = {};
  $scope.userVotes = {};
  $scope.openAddItem = false;

  console.log($scope.selectedList);
  $scope.itemType = $scope.selectedList.items[0].itemType;

  var infoPayload = {
    listId: $scope.selectedList._id
  };

  userSvc.getInfo(infoPayload, function(res) {
    $scope.userVotes = res.votes;
    console.log('user: ', res);
  });

  $scope.addItemToList = function() {
    var payload = {
      title: $scope.selectedItem.title,
      author: $scope.selectedItem.author,
      detailPageUrl: $scope.selectedItem.detailPageUrl,
      isbn: $scope.selectedItem.isbn,
      largeImage: $scope.selectedItem.largeImage,
      smallImage: $scope.selectedItem.smallImage,
      listId: $scope.selectedList._id,
      itemType: $scope.selectedItem.itemType
    };

    listSvc.addItemToList(payload, function(res) {
      $scope.openAddItem = false;
      $scope.newItem = {};
      $scope.selectedItem = {};
      $scope.getListInfo();
    }, function(err) {
      if (err.data && err.data.msg) {
        $scope.notify('warn', err.data.msg);
        return;
      }
      console.log('ERROR: ', err);
      $scope.notify('error', 'Sorry, there was an issue while adding to the list.');
    });
  };

  $scope.upvote = function(item) {
    console.log(item);
    var payload = {
      itemId: item._id,
      listId: $scope.selectedList._id
    };

    listSvc.upvote(payload, function(res) {
      if (res.message) {
        $scope.notify('info', res.message);
      }
      console.log('Upvote res: ', res);
      $scope.getListInfo();
    }, function(err) {
      if (err.data && err.data.msg) {
        $scope.notify('warn', err.data.msg);
        return;
      }
      $scope.notify('error', 'Sorry, something went wrong.');
    });
  };

  $scope.getListInfo = function() {
    var payload = {
      listId: $scope.selectedList._id
    };

    listSvc.getListInfo(payload, function(list) {
      $scope.selectedList = list;
    });
  };
}])
