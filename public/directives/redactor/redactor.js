module.exports = function (app) {
  app.directive('redactoredit', function () {
    return {
      templateUrl: function () {
        return './directives/redactor/redactor.html'
      }
    };
  })
}