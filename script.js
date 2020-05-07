'use strict';

const button = document.getElementById('run');

button.onclick = function getText() {
  // custom name
  const nameVal = document.getElementById('themeName').value;
  // get the textarea
  const text = document.getElementById('myText').value;
  // find the value for every color
  const findVal = [
    text.search('black='),
    text.search('red='),
    text.search('green='),
    text.search('yellow='),
    text.search('blue='),
    text.search('magenta='),
    text.search('cyan='),
    text.search('white='),
    text.search('black[(]b'),
    text.search('red[(]b'),
    text.search('green[(]b'),
    text.search('yellow[(]b'),
    text.search('blue[(]b'),
    text.search('magenta[(]b'),
    text.search('cyan[(]b'),
    text.search('white[(]b'),
    text.search('background='),
    text.search('text=')
  ];
  // format the value
  const blackVal = `"#${text.substr(findVal[0] + 6, 6)}"`;
  const redVal = `"#${text.substr(findVal[1] + 4, 6)}"`;
  const greenVal = `"#${text.substr(findVal[2] + 6, 6)}"`;
  const yellowVal = `"#${text.substr(findVal[3] + 7, 6)}"`;
  const blueVal = `"#${text.substr(findVal[4] + 5, 6)}"`;
  const purpleVal = `"#${text.substr(findVal[5] + 8, 6)}"`;
  const cyanVal = `"#${text.substr(findVal[6] + 5, 6)}"`;
  const whiteVal = `"#${text.substr(findVal[7] + 6, 6)}"`;
  const bBlackVal = `"#${text.substr(findVal[8] + 12, 6)}"`;
  const bRedVal = `"#${text.substr(findVal[9] + 10, 6)}"`;
  const bGreenVal = `"#${text.substr(findVal[10] + 12, 6)}"`;
  const bYellowVal = `"#${text.substr(findVal[11] + 13, 6)}"`;
  const bBlueVal = `"#${text.substr(findVal[12] + 11, 6)}"`;
  const bPurpleVal = `"#${text.substr(findVal[13] + 14, 6)}"`;
  const bCyanVal = `"#${text.substr(findVal[14] + 11, 6)}"`;
  const bWhiteVal = `"#${text.substr(findVal[15] + 12, 6)}"`;
  const backgroundVal = `"#${text.substr(findVal[16] + 11, 6)}"`;
  const foregroundVal = `"#${text.substr(findVal[17] + 5, 6)}"`;
  // the result table
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
    `;
  // check the text input if it correct
  // first line
  const start = text.search('\\[');
  if (start === 0) {
    // last line
    const name0 = text.search('name0=');
    const finN0 = text.substr(name0, 5);
    if (finN0 === 'name0') {
      // run the script
      document.getElementById('done').innerText = result;
    } else {
      // print error 1
      document.getElementById('done').innerText =
        'your xshell color scheme code is not complete';
    }
  } else {
    // print error 2
    document.getElementById('done').innerText =
      'please enter xshell color scheme code your code is wrong';
  }
};
