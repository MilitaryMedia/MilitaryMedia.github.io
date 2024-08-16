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
var wheel = 0;
var nextCost = 10;
var WheelnextCost = 100;
var Cage = 0;
var clickpower = 1;
var cursorMult = 1;
var wheelMult = 1;
var cageMult = 1;
/* following is part of template just replace "NEW_ITEM" with new item name */
/*
var NEW_ITEM = 0;
*/

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}
function logoclick()
{
    document.getElementById('Message').style.display = 'block';
    
}

function hamsterclick(input){
    click = click + input*clickpower;
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

    //draw()
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));  
    var WheelCost = Math.floor(100 * Math.pow(1.1,wheel));
    
    
}
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

    //draw()
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));  
    var WheelCost = Math.floor(100 * Math.pow(1.1,wheel));
    //var clickpowerUPGCost = Math.floor(15 * Math.pow(1.1,clickpower));
    
}

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(click >= cursorCost){
        document.getElementById('cursor_img').style.display = 'block';                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	click = click - cursorCost;                          //removes the click spent
        document.getElementById('cursors').innerHTML = prettify(cursors) + 'x';  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
        document.getElementById('cursorCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user
    };
}    
function buyWheel(){
        var WheelCost = Math.floor(100 * Math.pow(1.1,wheel));     //works out the cost of this cursor
        if(click >= WheelCost){
            document.getElementById('wheel_img').style.display = 'block';                                   //checks that the player can afford the cursor
            wheel = wheel + 1;                                   //increases number of cursors
            click = click - WheelCost;                          //removes the click spent
            document.getElementById('wheel').innerHTML = prettify(wheel) + 'x';  //updates the number of cursors for the user
            document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
            var WheelnextCost = Math.floor(100 * Math.pow(1.1,wheel));       //works out the cost of the next cursor
            document.getElementById('wheelCost').innerHTML = prettify(WheelnextCost);  //updates the cursor cost for the user
        };
};

function buyCage(){
    var CageCost = Math.floor(250 * Math.pow(1.1,Cage));     //works out the cost of this cursor
    if(click >= CageCost){
        document.getElementById('Cage_img').style.display = 'block';                                   //checks that the player can afford the cursor
        Cage = Cage + 1;                                   //increases number of cursors
        click = click - CageCost;                          //removes the click spent
        document.getElementById('Cage').innerHTML = prettify(Cage) + 'x';  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var CagenextCost = Math.floor(250 * Math.pow(1.1,Cage));       //works out the cost of the next cursor
        document.getElementById('CageCost').innerHTML = prettify(CagenextCost);  //updates the cursor cost for the user
    };
};


var clickpowerUPGlvl = 1;
function buyclickingupgrade(){
    var clickUpgCost = Math.floor(15 * Math.pow(1.3,clickpowerUPGlvl));     //works out the cost of this cursor
    if(click >= clickUpgCost){                                   //checks that the player can afford the cursor
        clickpower = clickpower + 1;                                   //increases number of cursors
        clickpowerUPGlvl = clickpowerUPGlvl + 1;
        click = click - clickUpgCost;                          //removes the click spent
        document.getElementById('clickpowerUPG').innerHTML = prettify(clickpowerUPGlvl);  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var clickpowerUPGnextCost = Math.floor(15 * Math.pow(1.3, clickpowerUPGlvl));       //works out the cost of the next cursor
        document.getElementById('clickpowerUPGcost').innerHTML = prettify(clickpowerUPGnextCost);  //updates the cursor cost for the user
    };
};

var cursorMult = 1;
function buycursorMult(){
    var cursorMultCost = Math.floor(100 * Math.pow(1.1,cursorMult));     //works out the cost of this cursor
    if(click >= cursorMultCost){                                   //checks that the player can afford the cursor
        cursorMult = cursorMult + 1;                                   //increases number of cursors
        click = click - cursorMultCost;                          //removes the click spent
        document.getElementById('cursorMultUPG').innerHTML = prettify(cursorMult);  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var cursorMultnextCost = Math.floor(100 * Math.pow(1.1, cursorMult));       //works out the cost of the next cursor
        document.getElementById('cursorMultcost').innerHTML = prettify(cursorMultnextCost);  //updates the cursor cost for the user
    };
};

var wheelMult = 1;
function buywheelMult(){
    var wheelMultCost = Math.floor(500 * Math.pow(1.1,wheelMult));     //works out the cost of this cursor
    if(click >= wheelMultCost){                                   //checks that the player can afford the cursor
        wheelMult = wheelMult + 1;                                   //increases number of cursors
        click = click - wheelMultCost;                          //removes the click spent
        document.getElementById('wheelMultUPG').innerHTML = prettify(wheelMult);  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
        var wheelMultnextCost = Math.floor(500 * Math.pow(1.1, wheelMult));       //works out the cost of the next cursor
        document.getElementById('wheelMultcost').innerHTML = prettify(wheelMultnextCost);  //updates the cursor cost for the user
    };
};
/* Following is part of template, replace "NEW_ITEM" with item name and "STARTING_COST" with starting cost of item */
/*
function buyNEW_ITEM(){
        var NEW_ITEMCost = Math.floor(STARTING_COST * Math.pow(1.1,NEW_ITEM));     //works out the cost of this cursor
        if(click >= NEW_ITEMCost){
            document.getElementById('NEW_ITEM_img').style.display = 'block';                                   //checks that the player can afford the cursor
            NEW_ITEM = NEW_ITEM + 1;                                   //increases number of cursors
            click = click - NEW_ITEMCost;                          //removes the click spent
            document.getElementById('NEW_ITEM').innerHTML = prettify(NEW_ITEM) + 'x';  //updates the number of cursors for the user
            document.getElementById('clicks').innerHTML = "you are at " + prettify(click) + " clicks.";  //updates the number of click for the user
            var NEW_ITEMnextCost = Math.floor(STARTING_COST * Math.pow(1.1,NEW_ITEM));       //works out the cost of the next cursor
            document.getElementById('NEW_ITEMCost').innerHTML = prettify(NEW_ITEMnextCost);  //updates the cursor cost for the user
        };
};
*/

window.setInterval(function(){
	if(cursors >= 1){
        var cursorPower = cursors*cursorMult;
	    secretMessageButton1(cursorPower);
    };
	//document.getElementById('hampter_clicker').style.animation="shake 0.1s"
}, 1000);

window.setInterval(function(){
    if(wheel >= 1){
        var wheelPower = wheel*wheelMult;
        secretMessageButton1(wheelPower);
    };
}, 200)

window.setInterval(function(){
    if(Cage >= 1){
        var cagePower = Cage*cageMult;
        secretMessageButton1(cagePower);
    };
    }, 100)

/* following is part of template, replace "NEW_ITEM" with item name, replace "TIME_PER_CLICK" with the delay before you want to get 1 click (in milliseconds). */
/*
window.setInterval(function(){
    secretMessageButton1(NEW_ITEM);
    }, TIME_PER_CLICK)
*/
function save2TXT(){
    var obj = new String(click + ',' + cursors + ',' + wheel + ',' + Cage + ',' + clickpower + ',' + clickpowerUPGlvl + ',' + cursorMult + ',' + wheelMult);
    console.log(obj);
    document.getElementById("txtSaveNotification").innerHTML = "The following is your save data. Keep it safe!"
    var base64EncodeString = btoa(obj);
    document.getElementById("txtSave").innerHTML = base64EncodeString;
}
function save(){
    var save = {
         click:click,
         cursors:cursors,
         wheel:wheel,
         Cage:Cage,
         clickpower:clickpower,
         clickpowerUPGlvl:clickpowerUPGlvl, 
         cursorMult:cursorMult,
         wheelMult:wheelMult// ADD COMMA WHEN ADD NEW ITEM BELOW
         /*
         NEW_ITEM:NEW_ITEM 
         */
    }
       localStorage.setItem("save",JSON.stringify(save));
  };
  function load(){
  var savegame = JSON.parse(localStorage.getItem("save"));
       if (typeof savegame.click !== "undefined") click = savegame.click;
  document.getElementById("clicks").innerHTML = "you are at " + prettify(click) + " clicks.";
  if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
  document.getElementById("cursors").innerHTML = prettify(cursors) + 'x';
  //if (typeof savegame.cursorCost !== "undefined") cursorCost = savegame.cursorCost;
  //document.getElementById("cursorCost").innerHTML = cursorCost;
  if (cursors >= 1) document.getElementById('cursor_img').style.display = 'block';
  var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
        document.getElementById('cursorCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user
if (typeof savegame.wheel !== "undefined") wheel = savegame.wheel;
  document.getElementById("wheel").innerHTML = wheel;
  if (wheel >= 1) document.getElementById('wheel_img').style.display = 'block';
  var WheelnextCost = Math.floor(100 * Math.pow(1.1,wheel));       //works out the cost of the next cursor
  document.getElementById('wheelCost').innerHTML = prettify(WheelnextCost);  //updates the cursor cost for the user
  if (typeof savegame.Cage !== "undefined") Cage = savegame.Cage;
  document.getElementById("Cage").innerHTML = Cage;
  if (Cage >= 1) document.getElementById('Cage_img').style.display = 'block';
  var CagenextCost = Math.floor(250 * Math.pow(1.1,Cage));       //works out the cost of the next cursor
  document.getElementById('CageCost').innerHTML = prettify(CagenextCost);  //updates the cursor cost for the user
 
 
  if (typeof savegame.clickpower !== "undefined") clickpower = savegame.clickpower;
  
  if (typeof savegame.clickpowerUPGlvl !== "undefined") clickpowerUPGlvl = savegame.clickpowerUPGlvl;
  document.getElementById("clickpowerUPG").innerHTML = clickpowerUPGlvl;
  var clickpowerUPGnextCost = Math.floor(15 * Math.pow(1.3,clickpowerUPGlvl));       //works out the cost of the next cursor
  document.getElementById('clickpowerUPGcost').innerHTML = prettify(clickpowerUPGnextCost);

  if (typeof savegame.cursorMult !== "undefined") cursorMult = savegame.cursorMult;
  document.getElementById("cursorMultUPG").innerHTML = cursorMult;
  var cursorMultnextCost = Math.floor(100 * Math.pow(1.1,cursorMult));       //works out the cost of the next cursor
  document.getElementById('cursorMultcost').innerHTML = prettify(cursorMultnextCost);  //updates the cursor cost for the user
  
  if (typeof savegame.wheelMult !== "undefined") wheelMult = savegame.wheelMult;
  document.getElementById("wheelMultUPG").innerHTML = wheelMult;
  var wheelMultnextCost = Math.floor(500 * Math.pow(1.1,wheelMult));       //works out the cost of the next cursor
  document.getElementById('wheelMultcost').innerHTML = prettify(wheelMultnextCost);  //updates the cursor cost for the user
  

  /* PART OF TEMPLATE, REPLACE "NEW_ITEM" WITH NEW ITEM NAME AND "STARTING_COST" WITH STARTING COST*/
  /*
    if (typeof savegame.NEW_ITEM !== "undefined") NEW_ITEM = savegame.NEW_ITEM;
  document.getElementById("NEW_ITEM").innerHTML = NEW_ITEM;
  if (NEW_ITEM >= 1) document.getElementById('NEW_ITEM_img').style.display = 'block';
  var NEW_ITEMnextCost = Math.floor(STARTING_COST * Math.pow(1.1,NEW_ITEM));
  document.getElementById('NEW_ITEMCost').innerHTML = prettify(NEW_ITEMnextCost);
  */
  };



  function loadFromtxt() {

    const input = document.getElementById("TXTload");
const inputValue = input.value;
var txtDecodeString = atob(inputValue);

let TXTsavegame = txtDecodeString.split(",");



if (typeof TXTsavegame[0] !==  "0") click = parseInt(TXTsavegame[0]);
  document.getElementById("clicks").innerHTML = "you are at " + prettify(click) + " clicks.";

  if (typeof TXTsavegame[1] !==  "0") cursors = parseInt(TXTsavegame[1]);
  document.getElementById("cursors").innerHTML = prettify(cursors) + 'x';
  //if (typeof TXTsavegame.cursorCost !==  "0") cursorCost = TXTsavegame.cursorCost;
  //document.getElementById("cursorCost").innerHTML = cursorCost;
  if (cursors >= 1) document.getElementById('cursor_img').style.display = 'block';
  var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
        document.getElementById('cursorCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user

if (typeof TXTsavegame[2] !==  "0") wheel = parseInt(TXTsavegame[2]);
  document.getElementById("wheel").innerHTML = wheel;
  if (wheel >= 1) document.getElementById('wheel_img').style.display = 'block';
  var WheelnextCost = Math.floor(100 * Math.pow(1.1,wheel));       //works out the cost of the next cursor
  document.getElementById('wheelCost').innerHTML = prettify(WheelnextCost);  //updates the cursor cost for the user

  if (typeof TXTsavegame[3] !==  "0") Cage = parseInt(TXTsavegame[3]);
  document.getElementById("Cage").innerHTML = Cage;
  if (Cage >= 1) document.getElementById('Cage_img').style.display = 'block';
  var CagenextCost = Math.floor(250 * Math.pow(1.1,Cage));       //works out the cost of the next cursor
  document.getElementById('CageCost').innerHTML = prettify(CagenextCost);  //updates the cursor cost for the user
 
 
  if (typeof TXTsavegame[4] !==  "0") clickpower = parseInt(TXTsavegame[4]);
  
  if (typeof TXTsavegame[5] !==  "0") clickpowerUPGlvl = parseInt(TXTsavegame[5]);
  document.getElementById("clickpowerUPG").innerHTML = clickpowerUPGlvl;
  var clickpowerUPGnextCost = Math.floor(15 * Math.pow(1.3,clickpowerUPGlvl));       //works out the cost of the next cursor
  document.getElementById('clickpowerUPGcost').innerHTML = prettify(clickpowerUPGnextCost);

  if (typeof TXTsavegame[6] !==  "0") cursorMult = parseInt(TXTsavegame[6]);
  document.getElementById("cursorMultUPG").innerHTML = cursorMult;
  var cursorMultnextCost = Math.floor(100 * Math.pow(1.1,cursorMult));       //works out the cost of the next cursor
  document.getElementById('cursorMultcost').innerHTML = prettify(cursorMultnextCost);  //updates the cursor cost for the user
  
  if (typeof TXTsavegame[7] !==  "0") wheelMult = parseInt(TXTsavegame[7]);
  document.getElementById("wheelMultUPG").innerHTML = wheelMult;
  var wheelMultnextCost = Math.floor(500 * Math.pow(1.1,wheelMult));       //works out the cost of the next cursor
  document.getElementById('wheelMultcost').innerHTML = prettify(wheelMultnextCost);  //updates the cursor cost for the user


}


  
  function onClickCode(cb) {
    var input = '';
    var key = '13161316';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) { // anthony ignore the fact that it says depreciated, it still works
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
  onClickCode(function () {secretMessageButton1(1)})

  function onJudeSecret(cb) {
    var input = '';
    var key = '7765544849'; // ma60--fel1\f#c but must be inserted backward with a slash at the begining
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) { // anthony ignore the fact that it says depreciated, it still works
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  
  onJudeSecret(function () {secretMessageButton1(99999999999999999999999)})

 /* function export2txt() {
    const originalData1 = click
    const originalData2 = cursors
    const originalData3 = wheel
    const originalDataTotal = str(originalData1 + "," + originalData2 + "," + originalData3)
  
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(originalDataTotal, null, 2)], {
      type: "text/plain"
    }));
    a.setAttribute("download", "HAMMY_CLICKER_SAVE_v1-0-0.txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }



function draw()
{
    
    if(click >= nextCost)
        {
            document.getElementById('clickerBuy').style.backgroundColor = 'green';
        }
    else
        {
            document.getElementById('clickerBuy').style.backgroundColor = 'red';
        }
  
    if(click >= WheelnextCost)
        {
            document.getElementById('wheelBuy').style.backgroundColor = 'green';
        }
    else
        {
            document.getElementById('wheelBuy').style.backgroundColor = 'red';
        }
}

var nextCost = 10;
    var WheelnextCost = 100;
    draw()

*/
/*
function importfile() {
document.getElementById('inputfile')
.addEventListener('change', function () {

    let fr = new FileReader();
    var import_save = fr.result.str.split(",");       
    //fr.readAstext(this.files[0]);
 
  if (typeof import_save.0 !== "undefined") click = import_save.0;
    document.getElementById("clicks").innerHTML = "you are at " + prettify(click) + " clicks.";
  if (typeof import_save.1 !== "undefined") cursors = imort_save.1;
  document.getElementById("cursors").innerHTML = prettify(cursors) + 'x';
  //if (typeof savegame.cursorCost !== "undefined") cursorCost = savegame.cursorCost;
  //document.getElementById("cursorCost").innerHTML = cursorCost;
  if (cursors >= 1) document.getElementById('cursor_img').style.display = 'block';
  var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
        document.getElementById('cursorCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user
if (typeof savegame.wheel !== "undefined") wheel = savegame.wheel;
  document.getElementById("wheel").innerHTML = wheel;
  if (wheel >= 1) document.getElementById('wheel_img').style.display = 'block';
  var WheelnextCost = Math.floor(100 * Math.pow(1.1,wheel));       //works out the cost of the next cursor
  document.getElementById('wheelCost').innerHTML = prettify(WheelnextCost);  //updates the cursor cost for the user
})
}
*/
