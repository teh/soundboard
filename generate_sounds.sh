for i in $(seq 0 10)
do 
 sox  -n -t ogg tone_$i.ogg synth .8 pluck '%'$(( i - 10 )) fade h 0.0 .8 .4 rate 48k 
done
