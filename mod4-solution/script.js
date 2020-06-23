/*(function (window) {
	var names = ["Shanth", "Nilu", "Jenu", "Siva", "jesus", "Vaanu", "Loosy", "janu", "Rani", "Tusa"];
	for (var i in names) {
	if (names[i].startsWith("j") == true || names[i].startsWith("J") == true) {
    	window.byeSpeaker.speak(names[i]);
    } else {
    	window.helloSpeaker.speak(names[i]);
	}
	}
})(window);
*/


(function () {

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
});
