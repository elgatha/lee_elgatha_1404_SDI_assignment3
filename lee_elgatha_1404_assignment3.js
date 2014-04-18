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


//STRING

var myNationality = "Bahamian";

//NUMBER

var pureBlood = 100;

//FUNCTIONS
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


