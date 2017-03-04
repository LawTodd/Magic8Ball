function myMove() {
	document.getElementById("answer").innerHTML =
		"The Magic 8 ball is searching for your answer!";
	var elem = document.getElementById("animate");
	var pos = 0;
	var mover = 0;
	var id = setInterval(frame, 5);
	var answers = ["Try saving it!",
					"I think you should try drinking more first!",
					"Try using the Inspector!",
					"Make sure your js and css is in the same folder as your HTML!",
					"I'm not sure what to tell you, Try again!"]
	function frame() {
		if (pos == 300) {
			clearInterval(id);
			document.getElementById("answer").innerHTML =
			answers[Math.floor(Math.random() * 5)];
			setTimeout(myReset, 3000);
		} else {
			pos++;
			mover = Math.floor(Math.random() * 20);
			elem.style.top = mover + 'px';
			mover = Math.floor(Math.random() * 20);
			elem.style.left = mover + 'px';	
		};
	};

	function myReset(){
		document.getElementById("answer").innerHTML =
		"Click the Magic 8 ball to get your answer!";
	}
};