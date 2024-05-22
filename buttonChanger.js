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
var logoclicktimes = 0;
var message0 = 0;
var message1 = 0;
var click = 0;

function secretMessageButton1()

{
    click = click + 1;
    document.getElementById("clicks").innerHTML = click;

    logoclicktimes = logoclicktimes + 1;

    if( message0 == 0 && logoclicktimes >= 5)
    {
        document.getElementById('secretButton1').style.display = 'block';
        message0++;
    }
    if( message1 == 0 && logoclicktimes >= 1)
    {
        document.getElementById('clicks').style.display = 'block';
        message1++;
    }
    if(logoclicktimes >= 1)
    {
        document.getElementById('clicks').innerHTML = 'you are at ' + click +' clicks.'
    }
}
