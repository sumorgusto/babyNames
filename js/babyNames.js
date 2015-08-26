var constructedJSON = {};
constructedJSON["California"] = {};

var State = "California";


function buildNames(){
	$.getJSON('https://cdph.data.ca.gov/api/views/9h3n-g3p4/rows.json?accessType=DOWNLOAD', function (
			nameList) {
		

		console.log(nameList);
		for ( var index = 0; index < nameList["data"].length; index++) {
			
			var name = nameList["data"][index][10].toUpperCase();
			var count = parseInt(nameList["data"][index][11], 10);
			
			if (!constructedJSON["California"][name]) {
				constructedJSON["California"][name] = count;
			} else {
				constructedJSON["California"][name] = constructedJSON["California"][name] + count;	
			}
		}


		
	});
}

buildNames();


function searchNames (e) {
	e.preventDefault();
	$('.baby_name h4').remove();
	var babyName = $("#baby-search").val().toUpperCase();
	var countOfName = constructedJSON["California"][babyName];
	//append these to the DOM:
	var sentence = $('<h4>').text("There are " + countOfName + " " + babyName + "'s in California.");
	$(".baby_name").append(sentence);
	console.log(countOfName);
}

$("#submit-button").click(searchNames);
