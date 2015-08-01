angular.module('hbDirectives', ['hbServices'])

.directive('amSearch', ['searchSvc', function(searchSvc) {
  return{
    restrict: 'E',
    templateUrl: '/directives/am-search',
    replace: true,
    scope: {
      list: '=',
      newItem: '='
    },
    link: function(scope, element, attr, ctrl) {
      scope.searching = false;
      scope.searchResults = [];

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
            console.log('ERR: ', err);
          });
        }
      };

      scope.setSelectedItem = function(item) {
        console.log('element', element);
        console.log('set selected item: ', item)
        scope.newItem = item;
        scope.searchParam = '';
        scope.searchResults = [];
      };
    }
  };
}])