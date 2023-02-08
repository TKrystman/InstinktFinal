
//Sets up the variables that will be used as buttons for the timer
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

//Variables for the various counts.
let counter = 00;
let minute = 00;
let second = 00;

//checks for if the user has clicked the start button.
start.addEventListener('click', function () {
         setTimeout(function(){ //delays the time untill the countdown is done
             
	timer = true;
	stopWatch(); //If yes then count begins.
              }, 3000);
});

//checks for if the user has clicked the stop button.
stop.addEventListener('click', function () {
	timer = false;
});

//checks for if the user has clicked the reset button.
reset.addEventListener('click', function () {
	timer = false;
 //if yes then all numbers reset to 0
	minute = 0;
	second = 0;
	counter = 0;
    

    document.getElementById('ct').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	
});
      
function stopWatch() {
  
	if (timer) {
		counter++; //counter increases

		if (counter == 100) {
			second++; //every 100 point on the counter seconds increase by 1 
			counter = 0;
		}

		if (second == 60) {
			minute++; //every 60 seconds minute increases by 1
			second = 0;
		}


        //converts the intagers into strings 
	    let ctString = counter;
		let minString = minute;
		let secString = second;
	



		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}

		if (counter < 10) {
			ctString = "0" + ctString;
		}

        if(minute == 1){ //switches players at 2 mins
             var node = document.getElementById('ptx')
                node.style.opacity= '0';
                           var node = document.getElementById('ptx2')
                node.style.opacity= '100';
        }
        
              if(minute == 2){ //stops timer at 4 mins
          timer = false;
                    var node = document.getElementById('ptx2')
                node.style.opacity= '0';
                   var node = document.getElementById('ptx3')
                node.style.opacity= '100';
        }
        
        document.getElementById('ct').innerHTML = ctString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		
		setTimeout(stopWatch, 7);
        
        	sendData({m:minString,s:secString,c:ctString})
        
	
	}
    
}


		