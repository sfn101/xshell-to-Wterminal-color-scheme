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
  const black = 'black=';
  const red = 'red=';
  const green = 'green=';
  const yellow = 'yellow=';
  const blue = 'blue=';
  const purple = 'magenta=';
  const cyan = 'cyan=';
  const white = 'white=';
  const brightBlack = 'black[(]b';
  const brightRed = 'red[(]b';
  const brightGreen = 'green[(]b';
  const brightYellow = 'yellow[(]b';
  const brightBlue = 'blue[(]b';
  const brightPurple = 'magenta[(]b';
  const brightCyan = 'cyan[(]b';
  const brightWhite = 'white[(]b';
  const background = 'background=';
  const foreground = 'text=';
  // the result table
  const result = `,{
    "name": "${nameVal}",
    "black": ${formatVal(findVal(black), black)},
    "red": ${formatVal(findVal(red), red)},
    "green": ${formatVal(findVal(green), green)},
    "yellow": ${formatVal(findVal(yellow), yellow)},
    "blue": ${formatVal(findVal(blue), blue)},
    "purple": ${formatVal(findVal(purple), purple)},
    "cyan": ${formatVal(findVal(cyan), cyan)},
    "white": ${formatVal(findVal(white), black)},
    "brightBlack": ${formatVal(findVal(brightBlack), brightBlack)},
    "brightRed": ${formatVal(findVal(brightRed), brightRed)},
    "brightGreen": ${formatVal(findVal(brightGreen), brightGreen)},
    "brightYellow": ${formatVal(findVal(brightYellow), brightYellow)},
    "brightBlue": ${formatVal(findVal(brightBlue), brightBlue)},
    "brightPurple": ${formatVal(findVal(brightPurple), brightPurple)},
    "brightCyan": ${formatVal(findVal(brightCyan), brightCyan)},
    "brightWhite": ${formatVal(findVal(brightWhite), brightWhite)},
    "background": ${formatVal(findVal(background), background)},
    "foreground": ${formatVal(findVal(foreground), foreground)}
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
