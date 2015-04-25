angular.module('hbDirectives', [])

.directive('amSearch', ['amSearchSvc', function(amSearchSvc) {
  return{
    templateUrl: '/directives/am_search',
    ....
  }
}])