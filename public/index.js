var angular 						= require('angular')
var ui_router 					= require('angular-ui-router')
var angular_cookies 		= require('angular-cookies')
var angularRedactor     = require('angular-redactor')
var built               = require('built.io-browserify')

/*************************************************************************
 * JS files required in Index.js
 *************************************************************************/
var home						    = require('./components/js/home/home.js')
var login 							= require('./components/js/login/login.js')
var twoApp 					    = require('./components/js/two/two.js')
var threeApp 						= require('./components/js/three/three.js')
var fourApp 						= require('./components/js/four/four.js')
var config							= require('./config.js')
var controller					= require('./controller.js')
var factory							= require('./factory.js')
var run 								= require('./run.js')
var redactorDirective   = require('./directives/redactor/redactor.js')

/*************************************************************************
 * Initializing Application Module
 *************************************************************************/
var app 								= angular.module('demoRedactor', ['ui.router', 'ngCookies', 'angular-redactor'])

/*************************************************************************
 * Calling all JS files
 *************************************************************************/
home(app)
login(app)
twoApp(app)
threeApp(app)
fourApp(app)
config(app)

/*************************************************************************
 * Main Controller  
 *************************************************************************/
controller(app)

/*************************************************************************
 * Calling all Directives
 *************************************************************************/
redactorDirective(app)

/*************************************************************************
 * Main factory
 *************************************************************************/
factory(app)

/*************************************************************************
 * Run
 *************************************************************************/
run(app)