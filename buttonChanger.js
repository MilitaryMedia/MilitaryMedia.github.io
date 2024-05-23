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
var message0 = 0;
var message1 = 0;
var cursor = 0;

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

function secretMessageButton1(input)

{
    click = click + input;
    document.getElementById("clicks").innerHTML = prettify(click);


    if( message0 == 0 && click >= 5)
    {
        document.getElementById('secretButton1').style.display = 'block';
        message0++;
        document.getElementById('cursorBuy').style.display = 'block';
    }
    if( message1 == 0 && click >= 1)
    {
        document.getElementById('clicks').style.display = 'block';
        message1++;
    }
    if(click >= 1)
    {
        document.getElementById('clicks').innerHTML = 'you are at ' + click +' clicks.'
    }
}
var cursors = 0;
function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(click >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	click = click - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = prettify(cursors);  //updates the number of cursors for the user
        document.getElementById('clicks').innerHTML = prettify(click);  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	secretMessageButton1(cursors);
	
}, 1000);