module.exports = function (app) {
	app.controller('homeApp', [
    '$scope', 
    '$state', 
    '$rootScope', 
    '$cookies', 
    '$timeout',
    'getFactory',
    function($scope, $state, $rootScope, $cookies, $timeout, getFactory) {		
    	$scope.redactConfig = function () {
				$('#redactor').redactor()
			}
	}])
}

