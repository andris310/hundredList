angular.module('hbServices', ['ngResource'])

.factory('listSvc', ['$resource', function($resource) {
  return $resource('/api', {}, {
    addItemToList: { method: 'POST', url: '/api/add-item' },
    getListInfo: { method: 'POST', url: '/api/getListInfo' },
    getAllLists: { method: 'POST', url: '/api/getAllLists', isArray: true }
  });
}])
