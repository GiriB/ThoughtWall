cat $1
quote=$(cat "$1")
path=$(pwd)
echo $quote is the quote and $path

convert -background "#CECECE" -size 1900x1600 -fill "#08080A" -pointsize 60 -gravity center label:"$quote" "$path"/output.png;
sqlite3 ~/Library/Application\ Support/Dock/desktoppicture.db "update data set value = '$path/output.png'";
killall Dock;

