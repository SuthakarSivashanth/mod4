var names = ["Shanth","Shiva","Nilaxy","john","Vaanu","Joe"];
console.log(names);

for(var i=0; i<names.length; i++){
	if(names[i].startsWith("j") == true || names[i].startsWith("J") == true) {
		console.log("Goodbye "+names[i]);
	}
	else{
		console.log("Hello "+names[i]);
	}
}

<!--<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Module 4 Solution Starter</title>
  <script src="SpeakHello.js"></script>
  <script src="SpeakGoodBye.js"></script>
  <script src="script.js"></script>
</head>
<body>
  <h1>Module 4 Solution Starter</h1>
</body>
</html> -->


/*byeSpeaker = function speak(name) {
	var speakWord = "Good Bye";
  	console.log(speakWord + " " + name);
}*/




/*helloSpeaker = function speak(name) {
	var speakWord = "Hello";
  	console.log(speakWord + " " + name);
}*/




/*(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

	var firstLetter = names[i].charAt(0).toLowerCase();

 	if (firstLetter == 'j') {
    	byeSpeaker.speak(names[i]);
  	} 
  	else {
    	helloSpeaker.speak(names[i]);
  }
}
})();
*/
