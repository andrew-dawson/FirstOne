var randomnumber = Math.random();

function DonutShop (loc, hoursOfOp, minCustomersPerHr, maxCustomersPerHr, AvgDonutsPerCustomer, CustCount, DonutsPerHour, DonutsPerDay) {
	this.loc = loc;
	this.hoursOfOp = hoursOfOp;
	this.minCustomersPerHr = minCustomersPerHr;
	this.maxCustomersPerHr = maxCustomersPerHr;
	this.AvgDonutsPerCustomer = AvgDonutsPerCustomer;
	var test = this;

//Method to return random customer count within parameters of each shop

	test.CustCount = function() {
	var custy = Math.floor((randomnumber) * (this.maxCustomersPerHr - this.minCustomersPerHr) + 1) + this.minCustomersPerHr; return custy;
	};
	console.log(this.loc + " " + "Random customer count:" + test.CustCount())

//Method to return Donuts per hour

	test.DonutsPerHour = function() {
		var DPH = Math.ceil(test.CustCount() * this.AvgDonutsPerCustomer); return DPH;
	};
	console.log(this.loc + " " + "Donuts to bake per hour:" + test.DonutsPerHour())

//Method to return Donuts per day for each random 

	test.DonutsPerDay = function() {
		var DPD = Math.ceil(test.CustCount() * this.AvgDonutsPerCustomer) * hoursOfOp; return DPD;
	};
	console.log(this.loc + " " + "Donuts to bake per day:" + test.DonutsPerDay())
};

//Donut Shop Declarations Declare these objects as an array and use the code Mark put on the board

var Shops = [5];

Shops[0] = new DonutShop("Downtown", 8, 8, 43, 4.5);

Shops[1] = new DonutShop("Capitol Hill", 24, 4, 37, 2);

Shops[2] = new DonutShop("South Lake Union", 10, 9, 23, 6.33);

Shops[3] = new DonutShop("Wedgewood", 7, 2, 28, 1.25);

Shops[4] = new DonutShop("Ballard", 10, 8, 58, 3.75); 

//Populate #shopGrid table with the declared DonutShop objects

$(function() {
	var id=0;
	$.each(Shops, function() {
		$row = $("<tr id=Shop-" + this.loc + "></tr>");
		$('#shopGrid tbody').append($row);
		$row.append($("<td>" + this.loc + "</td>"));
		$row.append($("<div id=buttonBucket" + id + "><td><button input type=submit class=tbutton>" + "change" + "<br></br><div>" + this.AvgDonutsPerCustomer + "</div></button></td></div>"));
		$row.append($("<td>" + this.CustCount(Shops) + "</td>"));
		$row.append($("<td id=PerHr-" + id + ">" + this.DonutsPerHour(Shops) + "</td>"));
		$row.append($("<td id=PerDay-" + id + ">" + this.DonutsPerDay(Shops) + "</td>"));
		++id;
	});
});

//JQuery function that hides an html list and adds a button. Upon click of the button, the list appears.

$(function() {
	var $h3 = $('h3');
	$('ul').hide();
	$h3.append('<a class="SeeMore">See More</a>');
$h3.on('click', function() {
	$h3.next('ul')
	.fadeIn(500)
	.children('.cool')
	.addClass('complete');
	$h3.find('a').fadeOut();
});
});	

//broken-out JS prompt function

var promptfunction = function(idx) {
	var promptX = window.prompt("What would you like to change the number to?", 0);
	var promptNum = parseInt(promptX);
	if (promptNum >= 0) {
		Shops[idx].AvgDonutsPerCustomer = promptNum;
		updateButton(idx);	
		}
		console.log(promptNum);
		console.log("promptfunction");
		console.log(Shops);
};

//function that allows the user to change the value of the Average Donuts per customer calculation

$(function() {
	$('#buttonBucket0').on('click', function() {
		promptfunction(0);
		});
	$('#buttonBucket1').on('click', function() {
		promptfunction(1);
		});
	$('#buttonBucket2').on('click', function() {
		promptfunction(2);
		});
	$('#buttonBucket3').on('click', function() {
		promptfunction(3);
		});
	$('#buttonBucket4').on('click', function() {
		promptfunction(4);
		});
});

//JS function that takes the input of the user from the promptfunction and updates the button (then bounces to recalc)

var updateButton = function(idx) {
	console.log("updateButton worked " + idx);
	console.log("#buttonBucket " + idx + "button div");
	$('#buttonBucket'+idx+' button div').text(Shops[idx].AvgDonutsPerCustomer);
	console.log("updateButton done");
	recalc(idx);
	};

//JS function that recalculates the math in the table based on the user prompt and, subsequently, button change

var recalc = function(idx) {
		console.log("recalc worked " + idx);
		console.log("Shop = ", Shops[idx]);
		$("#PerHr-" + idx).text(Shops[idx].DonutsPerHour());
		$("#PerDay-" + idx).text(Shops[idx].DonutsPerDay());
		console.log("recalc done " + idx);
		};