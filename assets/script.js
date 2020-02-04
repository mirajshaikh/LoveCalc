$(document).ready(function () {
		$("#calc").click(function () {
			var name1 = $("#name1").val();
			var name2 = $("#name2").val();
			if (name1=="" || name2==""){
				alert("Name is not Valid");
			}
			else{
				$.ajax("https://love-calculator.p.rapidapi.com/getPercentage?fname="+name1+"&sname="+name2, {
					"method": "GET",
					"headers": {
						"x-rapidapi-host": "love-calculator.p.rapidapi.com",
						"x-rapidapi-key": "5f9fbe5894msh8704fe51688ba10p129888jsndc791e2a21ab"
					}
				})
				.then(response => {
					console.log(response.percentage); 
					$("#res").text(response.result);
					var dt = response.percentage;
					console.log(dt);
					var bar = new ldBar(".myBar", {
						"stroke": '#f00',
						"stroke-width": 10,
						"preset": "bubble",
						"value": 65
					   });
					bar.set(
						dt,     /* target value. */
						true   /* enable animation. default is true */
					  );
					  
				})
				};
		
		});  
	});
