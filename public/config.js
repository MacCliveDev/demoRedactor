module.exports = function (app) {
	app.config(states)
}

function states($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.hashPrefix('')
	$stateProvider
	.state('home', state.home)
	.state('one', state.one)
	.state('two', state.two)
	.state('three', state.three)	
	.state('four', state.four)	
	

	$urlRouterProvider
	.otherwise('/home')

}

var state = {
	home : {
		url : '/home',
		views: 
		{
			'' : {
				templateUrl : '/components/header.html',				
			},
			'navbar@home' : {
				templateUrl : '/components/navbar.html'
			},
			data : {
				requiredLogin : false
			}	
		}	
	}
	,
	one : {
		url : '/one',
		views: 
		{ 
			'' : {
				templateUrl : '/components/login.html',				
			},
			'navbar@one' : {
				templateUrl : '/components/navbar.html'
			},
			data : {
				requiredLogin : false
			}	
		}
	}
	,
	two : {
		url : '/two',
		views: 
		{ 
			'' : {
				templateUrl : '/components/two.html',				
			},
			'navbar@two' : {
				templateUrl : '/components/navbar.html'
			},
			data : {
				requiredLogin : false
			}	
		}
	}
	,
	three : {
		url : '/three',
		views: { 
			'' : 
			{
				templateUrl : '/components/three.html',
			},
			'navbar@three' : {
				templateUrl : '/components/navbar.html',
			},
			data : {
				requiredLogin : false
			}	
		}
	}
	,
	four : {
		url : '/four',
		views: 
		{ 
			'' : {
				templateUrl : '/components/four.html',				
			},
			'navbar@activate' : {
				templateUrl : '/components/navbar.html'
			},
			data : {
				requiredLogin : false
			}	
		}
	}
}


