angular.module('hbServices', ['ngResource'])

.factory('listSvc', ['$resource', function($resource) {
  return $resource('/api', {}, {
    upvote: { method: 'POST', url: '/api/upvote' },
    addItemToList: { method: 'POST', url: '/api/add-item' },
    getListInfo: { method: 'POST', url: '/api/getListInfo' },
    getAllLists: { method: 'POST', url: '/api/getAllLists', isArray: true },
    checkListForItem: { method: 'POST', url: '/api/checkListForItem' }
  });
}])

.factory('searchSvc', ['$resource', function($resource) {
  return $resource('/api', {}, {
    searchAmBooks: { method: 'GET', url: '/api/searchAmBooks', isArray: true }
  });
}])

.factory('userSvc', ['$resource', function($resource) {
  return $resource('/api', {}, {
    getInfo: { method: 'GET', url: '/api/getInfo' }
  });
}])
