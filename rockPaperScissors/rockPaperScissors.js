/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function() {
var choice =["rock","paper","scissors"];
var result=[];

for (var i=0;i<choice.length;i++){
	for(var b=0;b<choice.length;b++){
		for(var k=0;k<choice.length;k++){
			result.push([].concat(choice[i], choice[b],choice[k]));

		}

	}
}
return JSON.stringify(result);

  // fill me out!
};