    
//Initialises The colorPicker
let colorPicker;
        //This function runs when the page loads, it creates the canvas and the color picker that us used for drawing functionality.
		function setup(){
			 createCanvas(400, 400); 
    print('setup function!');
     background(234,182,118);
   colorPicker = createColorPicker('#000000');
 colorPicker.position(10,);
		}

//when the mouse is pressed it creates the ellipse that starts the drawing.
//This function is hereso that you can create dots and so that it looks smother
function mousePressed() {
  noStroke();
    fill(colorPicker.color());
    ellipse(mouseX,mouseY,20,20);
	sendData({x:mouseX, y:mouseY})
}

//As the mouse is moved this fuction creates the ellipse on the page ad sends the data to the glitch server.
		function mouseDragged(){
noStroke(); //no stroke makes it so that there is no visible division between two circles.
            
            ellipse(mouseX,mouseY,20,20);
			sendData({x:mouseX, y:mouseY})
         
		}