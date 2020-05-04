function getText(){
    //custom name
    const nameVal =document.getElementById("themeName").value;
    //get the textarea
    const        text = document.getElementById("myText").value;
    // find the value for every color
    const   findVal =   [text.search('black='), text.search('red='), text.search('green='),
                         text.search('yellow='), text.search('blue='), text.search('magenta='),
                         text.search('cyan='), text.search('white='), text.search('black[(]b'),
                         text.search('red[(]b'), text.search('green[(]b'), text.search('yellow[(]b'),
                         text.search('blue[(]b'), text.search('magenta[(]b'), text.search('cyan[(]b'),
                         text.search('white[(]b'), text.search('background='), text.search('text='),
                        ];
    //format the value
            blackVal = '"' + '#'+text.substring(findVal[0]+6, findVal[0]+12)+'"' ,
            redVal = '"' + '#'+text.substring(findVal[1]+4, findVal[1]+10)+'"',
            greenVal = '"' + '#'+text.substring(findVal[2]+6, findVal[2]+12)+'"',
            yellowVal = '"' + '#'+text.substring(findVal[3]+7, findVal[3]+13)+'"',
            blueVal = '"' + '#'+text.substring(findVal[4]+5, findVal[4]+11)+'"',
            purpleVal = '"' + '#'+text.substring(findVal[5]+8, findVal[5]+14)+'"',
            cyanVal = '"' + '#'+text.substring(findVal[6]+5, findVal[6]+11)+'"',
            whiteVal = '"' + '#'+text.substring(findVal[7]+6, findVal[7]+12)+'"',
            bBlackVal = '"' + '#'+text.substring(findVal[8]+12, findVal[8]+18)+'"',
            bRedVal = '"' + '#'+text.substring(findVal[9]+10, findVal[9]+16)+'"',
            bGreenVal = '"' + '#'+text.substring(findVal[10]+12, findVal[10]+18)+'"',
            bYellowVal = '"' + '#'+text.substring(findVal[11]+13, findVal[11]+19)+'"',
            bBlueVal = '"' + '#'+text.substring(findVal[12]+11, findVal[12]+17)+'"',
            bPurpleVal = '"' + '#'+text.substring(findVal[13]+14, findVal[13]+20)+'"',
            bCyanVal = '"' + '#'+text.substring(findVal[14]+11, findVal[14]+17)+'"',
            bWhiteVal = '"' + '#'+text.substring(findVal[15]+12, findVal[15]+18)+'"',
            backgroundVal = '"' + '#'+text.substring(findVal[16]+11, findVal[16]+17)+'"',
            foregroundVal = '"' + '#'+text.substring(findVal[17]+5, findVal[17]+11)+'"';
   //the result table
    const result = `,{
    "name": "${nameVal}",
    "black": ${blackVal},
    "red": ${redVal},
    "green": ${greenVal},
    "yellow": ${yellowVal},
    "blue": ${blueVal},
    "purple": ${purpleVal},
    "cyan": ${cyanVal},
    "white": ${whiteVal},
    "brightBlack": ${bBlackVal},
    "brightRed": ${bRedVal},
    "brightGreen": ${bGreenVal},
    "brightYellow": ${bYellowVal},
    "brightBlue": ${bBlueVal},
    "brightPurple": ${bPurpleVal},
    "brightCyan": ${bCyanVal},
    "brightWhite": ${bWhiteVal},
    "background": ${backgroundVal},
    "foreground": ${foregroundVal}
    }
    `
    //check the text input if it correct
    //first line
    let start = text.search('\\[');
    if (start === 0){
        //last line
        let name0 = text.search('name0=');
        let finN0 = text.substring(name0, name0+5);
        if (finN0 === 'name0'){
            //run the script
            document.getElementById("done").innerText = result;
        }
        else {
        //print error 1
        document.getElementById("done").innerText = 'your xshell color scheme code is not complete'; 
        }
    } 
   else { 
    //print error 2
    document.getElementById("done").innerText = 'please enter xshell color scheme code your code is wrong';
   }

}        
