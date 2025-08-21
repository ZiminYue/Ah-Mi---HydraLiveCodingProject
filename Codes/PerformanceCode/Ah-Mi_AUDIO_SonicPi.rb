###Ah Mi
###Audio Live Coding by Zimin Yue

#---------------------------------------------------------------------------------------


# Audio Credits
# Music: James Primate, 泸沽湖做客栈的菜正好 [The Dishes at Lugu Lake Inn Are Just Right], 影像中国 [Video China]
# Sound Effects: Freesound.org, Sonic Pi library & Xinxin’s recording;

# NOTE: Please comment out all the code first, and then unlock and run it in order.


#---------------------------------------------------------------------------------------


###Section 1 - World of Increasing Noise

##Noise Becomes More (Start running, then comment all this and uncomment next)

#Effect 1 - Noises
2.times do
  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/noise.ogg", attack: 5,rate: 0.6
  sleep 5
end

#Effect 2 - Digital-overload Music
2.times do
  sleep 5
  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/Random Gods.ogg", attack: 5,release: 5
end



###Section 2 - Apocalyptic Chaotic Thunderclouds

##Noise Turns into Dark Clouds (When previous music is playing, uncomment Effect 1; When music stops, run this)

#Remember to uncomment "end" first

#Effect 1 - Gubbling (with "end")
loop do
  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/weirdBubble.ogg", attack: 2,amp:4
  sleep 3
  
  #Effect 2 - Drone Sound (Start when Effect 1 loops enough)
  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/weirdNoise.ogg", attack: 2,amp:0.5
  sleep 6
  
  #Effect 3 - Crying (Start when Effect 1 & 2 loops enough)
  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/Crying.ogg", attack: 0.5,amp:0.5,rate:1.3
  sleep 0.7
  
end



###Section 3 - The Collapse and Rebirth of the Universe

##When sounds above loop enough, quick ALT+S ALT+R to stop above and start below

#Sound of universe collapsing
play 48
sample :ambi_lunar_land,attack:0.5,release:0.3,rate:0.7,amp:0.8
sample :ambi_drone,release:0.3,rate:0.5



###Section 4 - The Call for "Ah Mi" Resounds by Lugu Lake

##Call AH MI!!! (Start run this then fast uncomment next one)

#Sound of "Ah Mi"(recorded by Xinxin), with a little echo
with_fx :reverb, phase: 0.125, decay: 8 do
  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/CallAhMi.ogg", amp:0.5,rate:1.2
end



###Section 5 - The Thriving Matrilineal Family

##Drums Becomes More (Rate 3 is best)

#Adding new loops of drums by changing "rate" and "amp", every change start with an "Ah Mi" call
#When lastly adding a new loop, comment this
loop do
  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/Drum.ogg",rate:7,amp:4
  sleep 1
end



###Section 6 - The Fire-Fueled Flourishing of Culture

##When sounds above loop enough, quick ALT+S ALT+R to stop above and start below

#Effect 1 - Fire Sounds
2.times do
  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/firesizz.mp3",attack:0.5,release:1,rate:0.7
  sleep 3
end

#Effect 2 - Crowd Singing (When start singing, comment this whole section and unlock next)
2.times do
  sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/MosuoCelebrate.ogg",attack:0.7,release:3,amp:3
  sleep 10
end



###Section 7 - Eco-friendly Development

##Manually loop some times, then run "Rate 0.5" with commenting this & uncommenting next section

#Bird Nature Sounds
sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/BirdsNature.ogg",rate:0.5,release:0.5,amp:3



###Section 8 - Endless Harmony Flows with the Mother Lake

##Change Amp 2→0.25, run the second one when she sings a long note (manually create an echo)

#Mosuo Woman Singing
sample "F:/UAL/Feminist Coding Practices/Assets/Audio-Edited/MosuoSinging.ogg",amp:0.25
