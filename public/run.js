module.exports = function(app) {
	app.run([
		'$rootScope', 
		'$state',  
		'$cookies', 
		'$location',
		'$window',
		'$timeout',
		'getFactory',
		function ($rootScope, $state, $cookies, $location, $window, $timeout, getFactory) {      
			$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
				// console.log("run", $('#redactor'))
				// $('#redactor').redactor({
				// 	focus: true,
				// 	toolbarFixedTarget: '#toolbar-box'
				// });
			})	
	}])
}