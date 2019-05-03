// Enemies our player must avoid
var Enemy = function(x,y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.positionX = x;
    this.positionY = y;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
	let s=220;
        for(var i=0; i<allEnemies.length; i++){
            allEnemies[i].speed=s;
			s+=20;
        }
   
    // multiplying any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed*dt;

  
    if( this.x >= 505 ){
    this.x = this.positionX;
    this.y = this.positionY;
    }
	
    //if collision occurs
    if( player.x >= this.x -40 && player.x <=this.x + 40 ){
        if( player.y >= this.y -40 && player.y <=  this.y+40 ){
            player.x = 200;
            player.y = 400;
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
	var img = new Image();
    img.src = this.sprite;
    ctx.drawImage(img,this.x, this.y);
};


var Player = function(x,y){
    this.sprite =  'images/char-cat-girl.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function(dt){
    if( this.y < -20 ){
        this.x = 200;
        this.y = 400;
       alert('congratulations .. You Won !');
    }
        
};
Player.prototype.render = function(){
	var img = new Image();
    img.src = this.sprite;
    ctx.drawImage(img,this.x, this.y);
};


Player.prototype.handleInput = function(keyPress){
    if( keyPress === 'left' && this.x > 0 )  
        this.x -= 102;
    else if( keyPress === 'right' && this.x < 405)
        this.x += 102;
    else if( keyPress === 'up' && this.y > -50)
        this.y-= 83;
    else if( keyPress === 'down' && this.y < 405)
        this.y +=83;
};
	
	
 

var Player = new Player(200,400);
var Enemy1 = new Enemy(-100,120);
var Enemy2 = new Enemy(-600,60);
var Enemy3 = new Enemy(-165,140);
var Enemy4 = new Enemy(-500,140);
var Enemy5 = new Enemy(-250,220);
var Enemy6 = new Enemy(-400,220);



var allEnemies = [Enemy1,Enemy2,Enemy3,Enemy4,Enemy5,Enemy6];
var player = Player;




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
