function textChanger(input)
{
    document.getElementById(input).textContent = 'Go to '+input;
}
    
function textReverter(input)
{
    document.getElementById(input).textContent = input;
}
/*

ADD THIS TO BUTTONS TO MAKE THEM INTERACTIVE!
Change the Insert part to whatever the button is saposed to say.

id="Insert" onmouseover="textChanger('Insert')" onmouseleave="textReverter('Insert')"

*/
var click = 0;
var message1 = 0;
var cursors = 0;

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}
function logoclick() {document.getElementById('Message').style.display = 'block';}
function secretMessageButton1(input){
    click = click + input;
    document.getElementById("clicks").innerHTML = prettify(click);
    
    if( message1 == 0 && click >= 1){
        document.getElementById('clicks').style.display = 'block';
        message1++;
        document.getElementById('secretButton1').style.display = 'block';
        document.getElementById('cursorBuy').style.display = 'block';
    }
    if(click >= 1){
        document.getElementById('clicks').innerHTML = 'you are at ' + click +' clicks.'
    }
}

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(click >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	click = click - cursorCost;                          //removes the click spent
        document.getElementById('cursors').innerHTML = prettify(cursors);  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
        document.getElementById('cursorCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user
    };
    
};

window.setInterval(function(){
	
	secretMessageButton1(cursors);
	
}, 1000);

function save(){
    var save = {
         click:click,
         cursors:cursors,
         cursorCost:cursorCost
    }
       localStorage.setItem("save",JSON.stringify(save));
  };
  function load(){
  var savegame = JSON.parse(localStorage.getItem("save"));
       if (typeof savegame.click !== "undefined") click = savegame.click;
  document.getElementById("clicks").innerHTML = prettify(click);
  if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
  document.getElementById("cursors").innerHTML = prettify(cursors);
  //if (typeof savegame.cursorCost !== "undefined") cursorCost = savegame.cursorCost;
  //document.getElementById("cursorCost").innerHTML = cursorCost;
  var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
        document.getElementById('cursorCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user
  };

  function onClickCode(cb) {
    var input = '';
    var key = '13161316';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) {
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
  onClickCode(function () {secretMessageButton1(1)})
