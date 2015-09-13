

echo $1 is the quote

convert -background "#CECECE" -size 1900x1600 -fill "#08080A" -pointsize 72 -gravity center label:"$1" $pwd/output.png;
sqlite3 ~/Library/Application\ Support/Dock/desktoppicture.db "update data set value = '$pwd/output.png'";
killall Dock;

