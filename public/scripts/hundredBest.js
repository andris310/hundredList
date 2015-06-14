angular.module('hundredBest', [
  'ngResource',
  'ngRoute',
  'ngAnimate',
  'hbServices',
  'hbDirectives'
])

.controller('mainCtl', ['$scope', '$timeout', 'listSvc', 'searchSvc', function($scope, $timeout, listSvc, searchSvc) {
  $scope.title = 'Hundred Best';
  $scope.selectedList = '';
  $scope.notifications = [];

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