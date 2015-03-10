var app = angular.module('todoApp', []);

app.controller('todoCtrl', function ($scope) {
	$scope.todos = [
		{title: "Make todo list app", completed: false},
		{title: "???", completed: false},
		{title: "PROFIT!!!", completed: false},
	];

	$scope.addTodo = function(){
		if (!$scope.newTodo) {
			return;
		}

		var newTodo = {
			title: $scope.newTodo.trim(),
			completed: false
		};

		$scope.todos.push(newTodo);
		$scope.newTodo = '';
	};

	$scope.removeTodo = function(todo){
		var index = $scope.todos.indexOf(todo);
		if (index != -1) {
			$scope.todos.splice(index, 1);
		}
	};

	// Extra Credit
	$scope.clearCompleted = function(){
		$scope.todos = $scope.todos.filter(function(todo) {
			return !todo.completed;
		});
	};

});