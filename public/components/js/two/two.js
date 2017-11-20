module.exports = function (app) {
	app.controller('twoApp', [
    '$scope', 
    '$state', 
    '$rootScope', 
    '$cookies', 
    '$timeout',
    'getFactory',
    function($scope, $state, $rootScope, $cookies, $timeout, getFactory) {		
    	$scope.redactConfig = function () {
				console.log("main controller", $("#redactor"))
				$('#redactor').redactor({
						focus: true,
						toolbarFixedTarget: '#toolbar-box'
				})
			}
	}])
}

