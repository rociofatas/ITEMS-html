var listApp = angular.module('listApp', []);

listApp.factory('items', [function(){
	var i = {
		items: [
			{type:"build", serial:"TenroxR1_1235", owner:"", time:"4/18/2014 12:12pm", state:"Pending", metrics:{state:"", progress:""}, build:{state:"", progress:""}, unitTest:{state:"", progress:""}, functTest:{state:"", progress:""}},
			{type:"firewall", serial:"432462", owner:"jtuck", time:"4/18/2014 12:12pm", state:"Running", metrics:{state:"Running", progress:"60"}, build:{state:"", progress:""}, unitTest:{state:"", progress:""}, functTest:{state:"",progress:""}},
			{type:"firewall", serial:"432461", owner:"samy", time:"4/18/2014 10:53am", state:"Rejected", metrics:{state:"Rejected", progress:"100"}, build:{state:"Accepted", progress:"100"}, unitTest:{state:"Accepted", progress:"100"}, functTest:{state:"Accepted",progress:"100"}},
			{type:"build", serial:"TenroxR1_1234", owner:"", time:"4/17/2014 9:42am", state:"Complete", metrics:{state:"Complete", progress:"100"}, build:{state:"Complete", progress:"100"}, unitTest:{state:"Complete", progress:"100"}, functTest:{state:"Complete", progress:"100"}},
			{type:"firewall", serial:"432460", owner:"samy", time:"4/17/2014 7:51am", state:"Rejected", metrics:{state:"Rejected", progress:"100"}, build:{state:"", progress:""}, unitTest:{state:"", progress:""}, functTest:{state:"", progress:""}},
			{type:"firewall", serial:"432459", owner:"samy", time:"4/16/2014 6:43am", state:"Accepted", metrics:{state:"Accepted", progress:"100"}, build:{state:"Accepted", progress:"100"}, unitTest:{state:"Accepted", progress:"100"}, functTest:{state:"Accepted", progress:"100"}}
		]
	}
	return i;
}]);

listApp.controller('ItemsCtrl', ['$scope', 'items', function($scope,items){
	$scope.items = items.items;
	console.log(items.type)

	$scope.showDetail = function(item) {
		if ($scope.active != item) { 
			$scope.active = item;
		}else {
			$scope.active = null;
		}
	}
}])

