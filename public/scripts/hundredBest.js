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

.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 60;   // always scroll by 50 extra pixels
}])

.controller('mainCtl', ['$scope', '$timeout', '$location', '$window', '$anchorScroll', 'userSvc', 'listSvc', 'searchSvc', function($scope, $timeout, $location, $window, $anchorScroll, userSvc, listSvc, searchSvc) {
  $scope.title = 'Hundred Best';
  $scope.showVeil = false;
  $scope.fbLoaded = $window.fbLoaded;
  $scope.selectedList = '';
  $scope.notifications = [];
  $scope.userVotes = {};
  $scope.showLogin = false;
  if ($location.path() === '/') {
    $scope.selectedList = listSvc.getHomePageList(function() {
      $scope.afterGotList();
    });
  }

  $scope.controls = {
    openAddItem: false
  };

  $scope.hideVeil = function() {
    $scope.showLogin = false;
    $scope.showVeil = false;
  };

  $scope.getListInfo = function() {
    var payload = {
      listId: $scope.selectedList._id
    };

    listSvc.getListInfo(payload, function(list) {
      $scope.selectedList = list;
      $scope.afterGotList();
    });
  };

  angular.element("#fb-root").bind("facebook:init", function() {
    var target = angular.element('#' + $scope.selectedList._id);
    FB.XFBML.parse(target[0]);
    target.find('.fb-comments iframe').load();
  });

  $scope.afterGotList = function() {
    if ($scope.selectedList && $scope.selectedList._id) {
      $scope.itemType = $scope.selectedList.items.length ? $scope.selectedList.items[0].itemType : '';
      $scope.getUserVotes();
      $scope.safeApply();
    }
  };

  $scope.getUserVotes = function() {
    userSvc.getInfo({listId: $scope.selectedList._id}, function(res) {
      $scope.userVotes = res.votes;
    });
  };
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
  };

  $scope.scrollTo = function(id) {
    $location.hash(id);
    $anchorScroll();
    $location.hash('');
  };

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
  $scope.selectedItem = {};
  $scope.newItem = {};

  $scope.toggleComments = function(item, event) {
    var targetElem = angular.element(event.target);
    var loader = targetElem.children('.loading-comments');

    if (!item.showComments) {
      loader.addClass('loading');
    }

    item.showComments = item.showComments ? false : true;
    FB.XFBML.parse(event.target);
    targetElem.find('.fb-comments iframe').load(function() {
      loader.removeClass('loading');
    });
  };

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

    listSvc.checkListForItem({listId: $scope.selectedList._id, itemTitle: $scope.selectedItem.title}, function(res) {
      if (res.listHasItem) {
        $scope.notify('info', 'This ' + res.item.itemType + ' already exists in this list!');
        $scope.controls.openAddItem = false;
        $scope.selectedItem = {};
        setTimeout(function() {
          // $scope.scrollTo(res.item._id);
          $('html,body').animate({scrollTop: $('#' + res.item._id).offset().top - 65});
        }, 100);

        return;
      }

      listSvc.addItemToList(payload, function(res) {
        $scope.controls.openAddItem = false;
        $scope.newItem = {};
        $scope.selectedItem = {};
        $scope.getListInfo();
      }, function(err) {
        if (err.data && err.data.msg) {
          $scope.notify('warn', err.data.msg);
          return;
        }

        $scope.notify('error', 'Sorry, there was an issue while adding to the list.');
      });
    }, function(err) {
      console.log('checkListForItem ERROR: ', err);
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
}])
