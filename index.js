function textChanger(input)
    {
        document.getElementById(input).textContent = "Go!";
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