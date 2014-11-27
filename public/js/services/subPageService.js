angular.module('SubPageService', []).factory('SubPage', ['$http', function($http) {
    return {
        get: function() {
            return $http.get('/api/subPage');
        },

        create: function(nerdData) {
            return $http.post('/api/subPage', nerdData);
        },

        delete: function(id) {
            return $http.delete('/api/subPage/' + id);
        }
    }
}]);