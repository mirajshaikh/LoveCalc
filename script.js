var name1 = ("miraj")
var name2 = ("shaikh")

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://love-calculator.p.rapidapi.com/getPercentage?fname=miraj&sname=Alice",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "5f9fbe5894msh8704fe51688ba10p129888jsndc791e2a21ab"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});
