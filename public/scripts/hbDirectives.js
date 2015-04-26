angular.module('hbDirectives', ['hbServices'])

.directive('amSearch', ['searchSvc', function(searchSvc) {
  return{
    restrict: 'E',
    templateUrl: '/directives/am-search',
    link: function(scope, element, attr, ctrl) {
      scope.searchResults = [];

      scope.searchAmBooks = function() {
        console.log('searhcing.....')
        if (scope.searchParam) {
          console.log(scope.searchParam);
          searchSvc.searchAmBooks({searchParam: scope.searchParam}, function(res) {
            console.log('RESULT: ', res);
            scope.searchResults = res;
          }, function(err) {
            console.log('ERR: ', err);
          });
        }
      };
    }
  };
}])