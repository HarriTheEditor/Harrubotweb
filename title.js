var Titles = [
    "Harrubot"
    , "Harrubot: Discord.js approves!"
    , "Harrubot: It's kind of fun?"
    , "Harrubot: Now we're talking!"
    , "Harrubot: What goes here?"
    , "Harrubot 2: Electric Boogaloo"
    , "Harrubot: We like dad jokes over here."
    , "Harrubot: Who knows?"
    ]
var Title = '';
var TitleExample = Math.floor(Math.random() * Titles.length);
Title += Titles[TitleExample];
document.title = Title;