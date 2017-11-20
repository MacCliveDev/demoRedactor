module.exports = function (app) {
	app.controller('fourApp', [
	'$scope', 
	'$state', 
	'$rootScope', 
	'$cookies', 
	'$timeout',
	'getFactory',
	function($scope, $state, $rootScope, $cookies, $timeout, getFactory) {		
		$scope.redactConfig = function () {
			$('#redactor').redactor({		
				plugins: ['inlinestyle', 'source', 'table', 'fullscreen', 'alignment', 'fontsize'],		
				maxHeight: 300
			})
		}
	}])
}

