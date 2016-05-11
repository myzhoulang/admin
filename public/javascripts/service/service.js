/**
 * Created by mk on 2016/5/11.
 */
define(['app'], function(app){

  app.serviceProvider('register', ['$http', '$q', function($http, $q){
    this.register = function(data){
      return $http.post('/api/register', data);
    };
  }])
});