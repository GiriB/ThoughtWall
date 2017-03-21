
#ThoughtWall
---
#### AIM

Electron app that pulls subscribed ThoughtForToday from your Gmail and sets them as you wallpaper.


[Read more here](https://giribhatnagar.wordpress.com/2015/09/12/daily-thought-for-today-wallpapers-for-mac/). 

#### HOW TO USE?



1.You need to be subscribed to "Thought For Today" emailing list. You can subscribe here. https://feedburner.google.com/fb/a/mailverify?uri=homeinsteaders/KhCJ<br>

2.Now go do something else. Come back 2 days later (because you'll be receiving only an email a day :( )


3.After you get the emails , you need to run the following in sequence.

1. `sh makeInit.sh` 


    This makes three folder named html txt and quote that'l we'll be using to store intermediate files in.
2. `node quickstart.js`


   This is for gmail authentication .Run this again and it'll will download the mails and store .html in html


3. `node extractThought.js`

    This will extract a raw text message from .html files and place them in txt/ <br>
4. `node extractTextOnly.js` 

     This will extract pure 'quote' from .txt files and place them in quotes/ folder.


    **The following step works only on MacOS**.
      Read makeWallFile.sh , and you'll understand how to do this in your OS.




5. `sh makeWallFile.sh quote/filename.txt`

    Pick any random file from quote. The quote from the file will be set as your desktop wallpaper.
              
