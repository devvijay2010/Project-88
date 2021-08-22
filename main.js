var canvas = new fabric.Canvas("myCanvas");
// Create canvas variable

var hole_obj = "";
var ball_obj = "";
//Set initial positions for ball and hole images.
block_y = 0;
block_x = 0;
hole_y = 400;
hole_x = 800;
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({top:hole_y, left:hole_x});
	
	canvas.add(hole_obj)
});
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
		fabric.Image.fromURL("ball.png", function(Img){
			ball_obj = Img;
			ball_obj.scaleToWidth(50);
			ball_obj.scaleToHeight(50);
			ball_obj.set({top:block_y, left:block_x});
		
		canvas.add(ball_obj)
	});
	
		// write code to Upload golf image on the canvas
	}
	// write code to Upload ball image on canvas

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((block_y == hole_y) && (block_x == hole_x)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You Have Hit The Goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{   if(block_y >= 0){
		block_y = block_y - block_image_height;
        console.log("When up arrow key is pressed, x = " +block_x + " y = " + block_y);
        canvas.remove(ball_obj);
		new_image();
	}
		// Write a code to move ball upward.
	}

	function down()
	{
		if(block_y <= 450){
		block_y = block_y + block_image_height;
        console.log("When down arrow key is pressed, x = " +block_x + " y = " + block_y);
        canvas.remove(ball_obj);
		new_image();
		}
		 // Write a code to move ball downward.
	}

	function left()
	{
		if(block_x >= 0)
		{
				block_x = block_x - block_image_width;
				console.log("When left arrow key is pressed, x = " +block_x + " y = " + block_y);
				canvas.remove(ball_obj);
				new_image();
				
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(block_x <=1050)
		{
				block_x = block_x + block_image_width;
				console.log("When right arrow key is pressed, x = " +block_x + " y = " + block_y);
				canvas.remove(ball_obj);
				new_image();	
			// Write a code to move ball right side.
		}
	}	
}

