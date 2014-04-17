
//Elgatha Lee
//April 13, 2014
//Project 3 SDI 1404
//Assignment 3
//Personal Story in Code


//GLOBAL VARIABLES

var myFamily = ["Mum", " Sister", " Brother", " Nieces", " Brother-in-Law", " Aunts", " Uncles", " & Cousins"];

console.log(myFamily);
console.log(myFamily + " That's everyone!")



//STRING

var myNationality = "Bahamian";

//NUMBER

var bloodPure = 100;

//ARRAY

var customsAgent = ["bca", "bip", "police"];


//REUSE LATER

var customStop = function(inspect) {

	console.log(inspect);
};



//NUMBER FUNCTION, LOCAL VARIABLES, WHILE LOOP, MATH, RETURN NUMNBER

var gifts = function(cash) {
	var receiptTotal = 325;
	cashTotal = 325;

//WHILE LOOP START

while(cashTotal >= 325)
		{
			//NESTED CONDITIONAL
			if (cash < receiptTotal)
			{

				console.log("I have enough moolah to to buy what I need to. Yay!");

				cashTotal = receiptTotal;
				
										}

										//NESTED CONDITIONAL

										else
										{
											cashTotal = Math.floor(cash - receiptTotal);

										}

										return cashTotal;

			};

				//WHILE LOOP STOP

		};

		var shoping = gifts(500);

//STRING FUNCTION, LOCAL VARIABLES, STRING CONCATENTATION, RETURN STRING

var inspection = function(){

			var customsAgent = ["bca", "bci", "cops"];
			viewsPerSteps = customsAgent.length;

			airportstop("Leaving Nassau " + customsAgent + " stopped me for inspection after " + viewsPerSteps + "steps. Seriously?!");

		};

		//METHOD PROCEDURE

//FUNCTIONS
var myProcedure = function(argArray) {

	console.log("It was really great to see " + argArray + "."); 

};
//STRING

var myNationality = "Bahamian";

//NUMBER

var bloodPure = 100;

//ARRAY

var customsAgent = ["bca", "bip", "police"];


//REUSE LATER

var customStop = function(inspect) {

	console.log(inspect);
};

//BOOLEAN FUNCTION
var immigrationStatus = function(bloodStatus){

	var pureBlood = function(mother){
		var bloodResult = mother;

		return bloodResult === Math.floor(bloodResult)
	};

//CONDITIONAL
if (pureBlood(bloodStatus, 20)) {return false;}

//NESTED  CONDITIONAL
else if (pureBlood(bloodStatus, 100)) {return true;}

//NESTED CONDITIONAL
else if (pureBlood(bloodStatus, 80)) {return true;}

//NESTED CONDITIONAL
else {return false;}

};

//NUMBER FUNCTION, LOCAL VARIABLES, WHILE LOOP, MATH, RETURN NUMNBER

var gifts = function(cash) {
	var receiptTotal = 325;
	cashTotal = 325;

//WHILE LOOP START

while(cashTotal >= 325)
		{
			//NESTED CONDITIONAL
			if (cash < receiptTotal)
			{

				console.log("I have enough moolah to to buy what I need to. Yay!");

				cashTotal = receiptTotal;
				
										}

										//NESTED CONDITIONAL

										else
										{
											cashTotal = Math.floor(cash - receiptTotal);

										}

										return cashTotal;

			};

				//WHILE LOOP STOP

		};

		var shoping = gifts(500);


//STRING FUNCTION, LOCAL VARIABLES, STRING CONCATENTATION, RETURN STRING

var viewsPerSteps = function() {
		var customsAgent = ["bca", "bci", "cops"];
				viewsPerSteps = customsAgent.length;

		airportstop("Leaving Nassau " + customsAgent + " stopped me for inspection after " + viewsPerSteps + "steps. Seriously?!");

	}



var myJSON = function() {
	
	for (var key in jsonData.bahamasCustomsAgents) {
		
				for  (var newKey in jsonData.bahamasCustomsAgents[key]) {
					
					if (newKey === "agentName") {
					
						console.log(newkey + ";" + bahamasCustomsAgents[key][newKey]);
				     
					}
				}
	}
}



//METHOD PROCEDURE
//RETURN
var myMessage = " This has been the most challenging class of my life. SDI 1404 April 14, 2014"

var say = function(myMessage)

{
	console.log(myMessage)
};

var bca = 

			//THIS IS A PROPERT STORED FOR AN OBJECT
					bcaNumber: "2257";
					bcaName: "Davis";

			//METHOD FUNCTION STORED FOR AN OBJECT
					beginInspection: function ()
					
					{
						console.log("bca officer " + bca.bcaName + " with collar number " + bca.bcaNumber + " asks me to step out of the line so that my Oakley bag can be inspected, because it is suspicious");
					}
			};
//RETURN
say(myMessage)

//RETURN METHOD
bca.beginInspection();

bca.beginInspection = function() {
	
	console.log("Inspection was completed by the bca officer " + bca.bcaName);
};

//FOR IN LOOP

//FOR EACH KEY IN THE PHASE

for var key in bca)
{
	//THIS IS GOING TO CONVERT ALL LOOPS TO STRINGS
	//console.log("key " + key + ", security " + phase[key]);
	//COMMA IS USED TO SEE THE RAW VALUES
	//console.log("Raw Values View -> key: " + key + ", value " bca[key]);
	
				//NESTED LOOP
				for (var key in bca)
						{
							concole.log("key " + key + ", security " + phase[key]);
						};
};

//RETURN
bca["beginInspection"]();

//ARRAY FUNCTION WITH NUMBER, ARRAY ARGUMENTS, FOR LOOP

var family = ["Cousins"," Siblings"," Aunts and Uncles", " Everyone"],
numberOfFamily = [ 80, 2, 13, 95 ];

var oneFamily = function(family, numberOfFamily) {
console.log("I can not believe " + family + " has gatherered " + numberOfFamily + " people for my Grandmother's birthday. ");

			//LOOP

for (var number = 1; number < numberOfFamily; number += 1) {
var numberRemain = numberOfFamily;
console.log("I saw " + numberOfFamily + " members of my family, " + family + " was gathered for this special day,  " + numberRemain + " people remained because we stayed late to catch up with everyone");
}
console.log("I was determined to see " + family + " in my family since it has been so long since I've seen them all. ");
};

var myFamily = function(familyToo, fromThisFamily) {
	
	//LOOP

for (var familyNumber = 0; familyNumber < familyToo.length; familyNumber++)
var family = familyToo[familyNumber],
numberOfFamily = fromThisFamily[familyNumber];
oneFamily(family, numberOfFamily);
console.log("Since I spent so much time with my family, I realized how much I've missed them. So, I'm moving back to Nassau, to spend time with them!");
	};

			//STRING FUNCTION, LOCAL VARIABLES, STRING CONCATENTATION, RETURN STRING
			var giftsToTake = function(){
			var customsAgent = "Davis";
				inspectionsPerSuitcase = customsAgent.length;
checkPoint("Leaving Nassau, I am stopped by " + customsAgent + " he has to check my bags to make sure I'm not carrying any endangered reef or coral. He went throught my suitcaseses " + inspectionsPerSuitcase + " times in 45 minutes. What the hell?");

			};
console.log("I have a lot of decisions to make over the next few months, like relocating.");

//SHOW THE STORY IN FIREBUG CONSOLE MESSAGE
//RETURN blood
bahamianStatus(100);

//RETURN HOW MUCH MONEY TO SPEND SHOPPING
goShopping(1000);

//RETURN HOW MANY TIMES INSPECTED BY CUSTOMS
customsStop(2);

//RETURN CUSTOMS EXPERIENCE
customsStop("The inspection was completed by bca agent " + bca.bcaName + ". He was nice enough and extremely thorough, but I felt like a guy getting a prostate exam.");

//RETURN TIME SPENT WITH FAMILY
timeWithFamily(96);

//FUNCTIONS
var myProcedure = function(argArray) {

	console.log("It was really great to see " + argArray + "."); 

};

//MAIN CODE w/ FUNCTION CALLS

myProcedure(myFamily);
//RETURN BLOOD

myJSON();
