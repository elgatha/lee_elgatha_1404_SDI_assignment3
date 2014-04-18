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
};


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

myProcedure(myFamily);
myJSON();
inspection(customsAgents);

//STRING FUNCTION, LOCAL VARIABLES, STRING CONCATENTATION, RETURN STRING
            var giftsToTake = function(){
            var customsAgent = "Davis";
                inspectionsPerSuitcase = customsAgent.length;
checkPoint("Leaving Nassau, I am stopped by " + customsAgent + " he has to check my bags to make sure I'm not carrying any endangered reef or coral. He went throught my suitcaseses " + inspectionsPerSuitcase + " times in 45 minutes. What the hell?");
			};
console.log("I have a lot of decisions to make over the next few months, like relocating.");
