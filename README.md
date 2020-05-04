# xshell to Windows terminal color scheme converter

this is a small JavaScript converter that convert xshell to windows terminal JSON theme 

you need xshell color scheme code like from any source like [terminal.sexy](www.terminal.sexy) or any xshell color file

*example of xshell color code*

```
[terminal.sexy]
text=c5c8c6
text(bold)=c5c8c6
background=1d1f21
black=282a2e
black(bold)=373b41
red=a54242
red(bold)=cc6666
green=8c9440
green(bold)=b5bd68
yellow=de935f
yellow(bold)=f0c674
blue=5f819d
blue(bold)=81a2be
magenta=85678f
magenta(bold)=b294bb
cyan=5e8d87
cyan(bold)=8abeb7
white=707880
white(bold)=c5c8c6
[Names]
name0=terminal.sexy
count=1

```

*the result after running the script*

```
,{
"name": "Your theme name",
"black": "#282a2e",
"red": "#a54242",
"green": "#8c9440",
"yellow": "#de935f",
"blue": "#5f819d",
"purple": "#85678f",
"cyan": "#5e8d87",
"white": "#707880",
"brightBlack": "#373b41",
"brightRed": "#cc6666",
"brightGreen": "#b5bd68",
"brightYellow": "#f0c674",
"brightBlue": "#81a2be",
"brightPurple": "#b294bb",
"brightCyan": "#8abeb7",
"brightWhite": "#c5c8c6",
"background": "#1d1f21",
"foreground": "#c5c8c6"
}
```
