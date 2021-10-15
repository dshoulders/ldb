rm static/images/design/thumbs/sml -r
rm static/images/design/thumbs/lge -r
rm static/images/illustration/thumbs/sml -r
rm static/images/illustration/thumbs/lge -r

# Make webp versions of all jpg in same directories
# find . -iname '*.jpg' -type f -exec bash -c 'gm convert -quality 80 "$0" "${0%.jpg}.webp"' {} \;

cd './static/images/illustration/thumbs'
gm mogrify +profile "*" -output-directory sml -create-directories -quality 80 -format webp -resize 750x *.jpg
gm mogrify +profile "*" -output-directory sml -create-directories -quality 80 -resize 750x *.jpg
gm mogrify +profile "*" -output-directory lge -create-directories -quality 80 -format webp -resize 2500x *.jpg
gm mogrify +profile "*" -output-directory lge -create-directories -quality 80 -resize 2500x *.jpg

cd '../../design/thumbs'
gm mogrify +profile "*" -output-directory sml -create-directories -quality 80 -format webp -resize 750x *.jpg
gm mogrify +profile "*" -output-directory sml -create-directories -quality 80 -resize 750x *.jpg
gm mogrify +profile "*" -output-directory lge -create-directories -quality 80 -format webp -resize 2500x *.jpg
gm mogrify +profile "*" -output-directory lge -create-directories -quality 80 -resize 2500x *.jpg
