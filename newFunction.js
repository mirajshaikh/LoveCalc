newFunction();
function newFunction() {
	$(document).ready(function () {
		$("#calc").click(function () {
			var name1 = $("#name1").val();
			var name2 = $("#name2").val();
			var settings = {
				"async": true,
				"crossDomain": true,
				"url": "https://love-calculator.p.rapidapi.com/getPercentage?fname=" + name1 + "&sname=" + name2,
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "love-calculator.p.rapidapi.com",
					"x-rapidapi-key": "5f9fbe5894msh8704fe51688ba10p129888jsndc791e2a21ab"
				}
			};
			$.ajax(settings).done(function (response) {
				console.log(response);
			});
		});
	});
}
