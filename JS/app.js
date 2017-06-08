var app=angular.module('app',[]);
app.controller('ctrl',['$scope',function($scope){
	$scope.test='hello world';
}]);
app.filter('myFilter',function(){
	return function(value,i){return value+i;}
})