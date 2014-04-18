//Elgatha Lee
//April 13, 2014
//Project 3 SDI 1404
//Assignment 3
//Personal Story in Code


//GLOBAL VARIABLES

var jsonData = {
	
	"bahamasCustomsAgents": [
	
				{
					"firstAgentName" : "Davis",
					"agentNumber" : 2257
				},
				{
					"secondAgentName" : "Cartwright",
					"agentNumber" : 6650
				}
				
	   ]
}

var myFamily = ["Mum", " Sister", " Brother", " Nieces", " Brother-in-Law", " Aunts", " Uncles", " & Cousins"];

console.log(myFamily + " That's everyone!")

var customsAgents = ["bca","bci","agents"];

//STRING

var myNationality = "Bahamian";

//NUMBER

var pureBlood = 100;

//ARRAY

var customsAgents = ["bca","bci","agents"];

var bahamasCustoms = "Davis";
var errands = function(inspect) {
	console.log(inspect);
};
var customsStop = function(inspect) {
	console.log(inspect);
};

//BOOLEAN FUNCTION

var bahamianStatus = function(pureBlood) {
	
	var blood = function(mum, grandmum) {
		var bloodResult = mum / grandmum;
		
		return (bloodResult === Math.floor(bloodResult));
		
	};
//CONDITIONAL
if (pureBlood(bloodStatus, 20)) {return false;}

//NESTED  CONDITIONAL
else if (pureBlood(bloodStatus, 100)) {return true;}

//NESTED CONDITIONAL
else if (pureBlood(bloodStatus, 80)) {return true;}

//NESTED CONDITIONAL
else {return true;}

};
			
//FUNCTIONS


//NUMBER FUNCTION, LOCAL VARIABLES, WHILE LOOP, MATH, RETURN NUMBER
var runErrands = function(spendCash) {
	var receiptTotal = 175,
		cashTotal;
	if (spendCash < receiptTotal) {
		console.log("I don't think I have enough cash to complete all of my errands today. I want to buy my Grandmother a really great gift. I may need to use my credit card, I only have " + receiptTotal + " in cash on me. Oh, Bugger and Bollocks!!!!");
		cashTotal = receiptTotal;
	}
	else {
	cashTotal = Math.floor(spendCash - receiptTotal);
	}
	return cashTotal;
};
var gotGift = runErrands(150);

//STRING FUNCTION, LOCAL VARIABLES, STRING CONCATENTATION, RETURN STRING
var stopsPerErrand = function() {
	var location = ["nassau", " paradise island", " cable beach", " fox hill"];
	stopsPerErrand = location.length;
	errands("I went to " + location + " all in search of a gift for my Grandmother\'s 90th birthday, " + stopsPerErrand + " different locations, I went to. I went every where today, I finally found the perfect gift, woohoo!!!");
};

/*use in a WHILE loop.
var giftShoppingTrip = function(leaveHome) {
	var leaveHome = 0;
	while (leaveHome < 3) {
	errands("I left home to go  " + giftShopping);
	leaveHome ++;
	};
};
*/

//STRING FUNCTION, LOCAL VARIABLES, STRING CONCATENTATION, RETURN STRING

var inspection = function(argArray) {
var customsAgents = ["bca","bci","agents"];
            var customsAgentsLength = argArray.length;
            var viewsPerSteps = customsAgents.length;

            console.log("Leaving Nassau " + customsAgentsLength + " agents stopped me for inspection after " + viewsPerSteps + "steps. I mean Seriously?!");

        };

var myProcedure = function(argArray) {

	var familyLength = argArray.length;

	console.log("For my GrandMother's 90th Birthday we had " + familyLength + " lines of family there. It was pretty awesome!");
	
	for (var i = 1; i < familyLength; i++) {
 		console.log(argArray[i])


	};
		console.log("my Mum, made a rare appearance, which I think, was great");
		console.log("Everyone was there except my Aunt Debra, I was disappointed in that, but didn't let it bother me. It was really great to see " + argArray + "."); 		 
		console.log("My Mum, made a rare appearance, which I think, was greatEveryone was there except my Aunt Debra, I was disappointed in that, but didn't let it bother me. It was really great to see " + argArray + " I have a lot of decisions to make over the next few months, if I plan on relocating."); 		 
};

//ARRAY FUNCTION WITH NUMBER, ARRAY ARGUMENTS, FOR LOOP

//ARRAY FUNCTION WITH NUMBER, ARRAY ARGUMENTS, FOR LOOP
var theFamily = ["Cousins"," Siblings"," Aunts and Uncles", " Everyone"],
numberOfFamily = [ 80, 2, 13, 95 ];

var oneFamily = function(theFamily, numberOfFamily) {
console.log("I can not believe " + theFamily + " has gatherered " + numberOfFamily + " people for my Grandmother's birthday. ");
for (var number = 1; number < numberOfFamily; number += 1) {
var numberRemain = numberOfFamily = numberOfFamily;
console.log("I saw " + numberOfFamily + " members of my family, " + theFamily + " was gathered for this special day,  " + numberRemain + " people remained because we stayed late to catch up with everyone");
}
console.log("I was determined to see " + theFamily + " in my family since it has been so long since I've seen them all. ");
};
var my$Family = function(familyToo, fromThisFamily) {
for (var familyNumber = 0; familyNumber < familyToo.length; familyNumber++)
var family = familyToo[familyNumber],
numberOfFamily = fromThisFamily[familyNumber];
oneFamily(theFamily, numberOfFamily);
console.log("Since I spent so much time with my family, I realized how much I've missed them. So, I'm moving back to Nassau, to spend time with them!");
	}


var myJSON = function() {
	
   for (var key in jsonData.bahamasCustomsAgents) {
		
	   for  (var newKey in jsonData.bahamasCustomsAgents[key]) {
		   
		   if(newKey === "agentName") {
			   
			   console.log(newKey + ":" + jsonData.bahamasCustomsAgents[key][newKey])
		   }
					
		   	     
	    }
		
		
	}
	
}

//MAIN CODE w/ FUNCTION CALLS

runErrands(50);
stopsPerErrand(4);
myProcedure(myFamily);
myJSON();
my$Family(theFamily, numberOfFamily);
inspection(customsAgents);
customsStop("When I was leaving Nassau, I was stopped for inspection with Customs and Immigration Inspector " + bahamasCustoms + " and was asked questions and searched then, I was fingerprinted, which was a shock");

//STRING FUNCTION, LOCAL VARIABLES, STRING CONCATENTATION, RETURN STRING
            var giftsToTake = function(){
            var customsAgent = "Davis";
                inspectionsPerSuitcase = customsAgent.length;
checkPoint("Leaving Nassau, I am stopped by " + customsAgent + " he has to check my bags to make sure I'm not carrying any endangered reef or coral. He went throught my suitcaseses " + inspectionsPerSuitcase + " times in 45 minutes. What the hell?");
			};
console.log("I have a lot of decisions to make over the next few months, like relocating.");
			};