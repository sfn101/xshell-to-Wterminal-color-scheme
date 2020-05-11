'use strict';

const button = document.getElementById('run');

button.onclick = function getText() {
  // custom name
  const nameVal = document.getElementById('themeName').value;
  // get the textarea
  const text = document.getElementById('myText').value;
  // find the value for every color
  function findVal(colorName) {
    return text.search(colorName);
  }

  // format the value
  function formatVal(val, nal) {
    return `"#${text.substr(val + nal.length, 6)}"`;
  }

  // keywords variables
  const keyW = {
    black: 'black=',
    red: 'red=',
    green: 'green=',
    yellow: 'yellow=',
    blue: 'blue=',
    purple: 'magenta=',
    cyan: 'cyan=',
    white: 'white=',
    brightBlack: 'black[(]bold',
    brightRed: 'red[(]bold',
    brightGreen: 'green[(]bold',
    brightYellow: 'yellow[(]bold',
    brightBlue: 'blue[(]bold',
    brightPurple: 'magenta[(]bold',
    brightCyan: 'cyan[(]bold',
    brightWhite: 'white[(]bold',
    background: 'background=',
    foreground: 'text='
  };
  // the values for the colors
  const cVal = {
    black: formatVal(findVal(keyW.black), keyW.black),
    red: formatVal(findVal(keyW.red), keyW.red),
    green: formatVal(findVal(keyW.green), keyW.green),
    yellow: formatVal(findVal(keyW.yellow), keyW.yellow),
    blue: formatVal(findVal(keyW.blue), keyW.blue),
    purple: formatVal(findVal(keyW.purple), keyW.purple),
    cyan: formatVal(findVal(keyW.cyan), keyW.cyan),
    white: formatVal(findVal(keyW.white), keyW.black),
    brightBlack: formatVal(findVal(keyW.brightBlack), keyW.brightBlack),
    brightRed: formatVal(findVal(keyW.brightRed), keyW.brightRed),
    brightGreen: formatVal(findVal(keyW.brightGreen), keyW.brightGreen),
    brightYellow: formatVal(findVal(keyW.brightYellow), keyW.brightYellow),
    brightBlue: formatVal(findVal(keyW.brightBlue), keyW.brightBlue),
    brightPurple: formatVal(findVal(keyW.brightPurple), keyW.brightPurple),
    brightCyan: formatVal(findVal(keyW.brightCyan), keyW.brightCyan),
    brightWhite: formatVal(findVal(keyW.brightWhite), keyW.brightWhite),
    background: formatVal(findVal(keyW.background), keyW.background),
    foreground: formatVal(findVal(keyW.foreground), keyW.foreground)
  };
  // the result table
  const result = `,{
    "name": "${nameVal}",
    "black": ${cVal.black},
    "red": ${cVal.red},
    "green": ${cVal.green},
    "yellow": ${cVal.yellow},
    "blue": ${cVal.blue},
    "purple": ${cVal.purple},
    "cyan": ${cVal.cyan},
    "white": ${cVal.white},
    "brightBlack": ${cVal.brightBlack},
    "brightRed": ${cVal.brightRed},
    "brightGreen": ${cVal.brightGreen},
    "brightYellow": ${cVal.brightYellow},
    "brightBlue": ${cVal.brightBlue},
    "brightPurple": ${cVal.brightPurple},
    "brightCyan": ${cVal.brightCyan},
    "brightWhite": ${cVal.brightWhite},
    "background": ${cVal.background},
    "foreground": ${cVal.foreground}
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
