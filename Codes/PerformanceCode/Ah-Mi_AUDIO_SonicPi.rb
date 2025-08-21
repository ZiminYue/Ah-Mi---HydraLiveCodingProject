###Hi everyone, thanks for joining us! Our live coding project is called Ah Mi,
###meaning 'mother' in the Mosuo language. The Mosuo are the last remaining matriarchal
###society in China, known for their culture bounded by mothers' families without
### fathers and husbands, where the relationship with nature is deeply valued—much
### like ecofeminism. Today, we’ll present a story that reimagines a world that
### collapsed under patriarchy and then rerooted into a matriarchy. Hope you enjoy!

###Noise Becomes More (Start running then lock this and unlock next)
2.times do
  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/noise.ogg", attack: 5,rate: 0.6
  sleep 5
end
2.times do
  sleep 5
  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/Random Gods.ogg", attack: 5,release: 5
end

###Noise Turns into Dark Clouds (when↑ is playing music, start unlock↓, when bgm stop, ALT+R)
###remember to unlock "end"
#loop do
##Start this
#  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/weirdBubble.ogg", attack: 2,amp:4
#  sleep 3
##Then start this
#  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/weirdNoise.ogg", attack: 2,amp:0.5
#  sleep 6
##Then this
#  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/Crying.ogg", attack: 0.5,amp:0.5,rate:1.3
#  sleep 0.7
#end

##World collapse into a singularity
##Loop Enough then quick ALT+S ALT+R
#play 48
#sample :ambi_lunar_land,attack:0.5,release:0.3,rate:0.7,amp:0.8
#sample :ambi_drone,release:0.3,rate:0.5

##Call AH MI!!! Start run then fast unlock ↓,it's ok to loop drum with an AHMI
####Everything start with Mother's family, and thrive

#with_fx :reverb, phase: 0.125, decay: 8 do
#  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/CallAhMi.ogg", amp:0.5,rate:1.2
#end
##Drums becomes more (3 kinds，the 3 is best)
#loop do
#  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/Drum.ogg",rate:3,amp:9
#  sleep 1
#end

####Fire as Culture(unlock then quick ALT+S ALT+R)
##Fire sounds
#2.times do
#  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/firesizz.mp3",attack:0.5,release:1,rate:0.7
#  sleep 3
#end
#sleep 5
####People Celebrating (if time enough, lock↑)
#2.times do
#  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/MosuoCelebrate.ogg",attack:0.7,release:3,amp:3
#  sleep 10
#end


#When↑is singing,lock↑ and unlock↓

####Get along well with nature (Manually Loop some times, then with 0.5 start unlock↓)
#sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/BirdsNature.ogg",rate:2,release:0.5,amp:3


####Singing for the furture (2→0.25)
#sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/MosuoSinging.ogg",amp:2
