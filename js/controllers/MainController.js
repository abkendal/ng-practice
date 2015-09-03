app.controller('MainController', ['$scope', function($scope){
	$scope.today = new Date();

	$scope.days =[{
		name: 'Monday',
		desc: 'Worst day of the week'
	},
	{
		name:'Tuesday',
		desc: 'Starting to get into it'
	},
	{
		name:'Wednesday',
		desc: 'Hump day'
	},
	{
		name:'Thursday',
		desc: 'Come on Friday...'
	},
	{
		name:'Friday',
		desc: 'Im out!'
	},
	{
		name:'Saturday',
		desc: 'Time to parrrrtttyyyyy'
	},
	{
		name:'Sunday',
		desc: 'Get ready to start it all over again!'
	},
	];
}]);