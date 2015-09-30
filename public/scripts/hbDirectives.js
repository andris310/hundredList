angular.module('hbDirectives', ['hbServices'])

.directive('amSearch', ['searchSvc', '$timeout', function(searchSvc, $timeout) {
  return{
    restrict: 'E',
    templateUrl: '/directives/am-search',
    replace: true,
    scope: {
      list: '=',
      newItem: '=',
      focusFlag: '='
    },
    link: function(scope, element, attr, ctrl) {
      scope.searching = false;
      scope.searchResults = [];

      scope.$watch('focusFlag', function(value) {
        if (value) {
          $timeout(function() {
            element.find('input').focus();
          }, 10);
        }
      });

      scope.searchAmBooks = function() {
        scope.searching = true;
        scope.newItem = {};
        if (scope.searchParam) {
          console.log(scope.searchParam);
          searchSvc.searchAmBooks({searchParam: scope.searchParam}, function(res) {
            console.log('RESULT: ', res);
            scope.searchResults = res;
            scope.searching = false;
          }, function(err) {
            scope.searching = false;
          });
        }
      };

      scope.setSelectedItem = function(item) {
        console.log('set selected item: ', item)
        scope.newItem = item;
        scope.searchParam = '';
        scope.searchResults = [];
      };
    }
  };
}])
