/*function (window) {
	var helloSpeaker = {};
	var speakWord = "Hello";
	helloSpeaker.speak = function (name) {
  	console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;

})(window);
*/


var byeSpeaker = function speak(name) {
	var speakWord = "Good Bye";
  	console.log(speakWord + " " + name);
}