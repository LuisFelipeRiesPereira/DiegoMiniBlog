angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http, $location){
  var absUrl = $location.absUrl();
  var URL = absUrl.split("#/");
  console.log(URL)
  $http.get('https://api-fake-blog.herokuapp.com/postagem/' + URL[1]).
      success(function(data) {
          $scope.publicacao = data;
      }
  );
});
