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

	$scope.removeTodo = function(index){
		$scope.todos.splice(index, 1);
	};

	$scope.toggleCompleted = function(todo){
		todo.completed = !todo.completed;
	};

	// Extra Credit
	$scope.clearCompleted = function(){
		angular.forEach($scope.todos, function(todo, index) {
			if (todo.completed) {
				$scope.todos.splice(index, 1);
			}
		});
	};

});