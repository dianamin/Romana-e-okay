app.factory('CommentsFactory', function ($http) {
	var url = 'php/user_homeworks.php';
	var getJson = $http.get(url);
	return {
		getComments: function() {
			return getJson;
		}
	}
});