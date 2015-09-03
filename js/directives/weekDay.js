app.directive('weekDay', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/weekDay.html',
  }; 
});