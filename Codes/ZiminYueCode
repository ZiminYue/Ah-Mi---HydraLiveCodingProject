// Ah Mi

// Zimin Yue (24004556)


//---------------------------------------------------------------------------------------


// Audio Credits
// Music: James Primate, 泸沽湖做客栈的菜正好 [The Dishes at Lugu Lake Inn Are Just Right], 影像中国 [Video China]
// Sound Effects: Freesound.org, Sonic Pi library & Xinxin’s recording;

//NOTE: It is recommended to comment out all the code first, and then unlock and run it section by section in order.


//---------------------------------------------------------------------------------------


// Section 1 - World of Increasing Noise
// See Xinxin's work


// Section 2 - Apocalyptic Chaotic Thunderclouds

//This section is based on Nesso's "clouds of passage"
//Here I adjusted ".fast()" to fasten part of the moving speed and ".smooth()" to create sharper changes
 shape([4,5,6].fast(0.5).smooth(1),0.000001,[0.2,0.7].smooth(0)) 
//Then I adjusted ".color()" to make the clouds have warmer color (indecating a sense of burnt)
 .color(0.5,0.4,0.3)
 .scrollX(()=>Math.sin(time*0.27))
 .add(
   shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.5,0.3].smooth(1))
   .color(0.6,0.2,0.5)
   .scrollY(0.3)
   .scrollX(()=>Math.sin(time*0.33)))
 .add(
   shape([4,5,6].fast(0.5).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1))
   .color(0.2,0.4,0.6)
   .scrollY(-0.35)
   .scrollX(()=>Math.sin(time*0.41)*-1))
 .add(
       src(o0).shift(0.001,0.01,0.001)
       .scrollX([0.05,-0.05].fast(0.1).smooth(1))
//Here I adjusted ".fast()" to fasten another part of the moving speed
       .scale([1.05,0.9].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.6).smooth(1))
       ,0.85)
//And I increased the first value of the "voronoi" parameter to make more intricate pieces of clouds
 .modulate(voronoi(15,2,2))
 .out()


// Section 3 - The Collapse and Rebirth of the Universe

//This piece is for cleaning up "o1", preventing the display of a picture from Section 1 and creating a singularity
 shape(30,0.5,0.1).scale(0.08,0.5,1).out(o1)

//This part is based on CNDSD's "sand spirals"
//Here I changed the second value to make a slightly faster and more obvious color change
 osc(3, 0.1, 0.4)
//I removed ".saturate()" for its non-obvious function and to keep the code shorter
 .color(1.2,1.2,1.3)
 .modulateRepeat(osc(2),1, 2, 4, 3)
 .modulateKaleid(osc(12,0.05,0),1)
 .luma (0.4)
//Here I adjust the second value to make the rotation faster
 .rotate(4, 0.5,1)
//I deleted the mouse-related code to make the effect simpler
//And I added '.brightness' to create a periodic "pure blank scene"
 .brightness( () => Math.sin(time*0.5 ))
 .scale(1).diff(o1)
 .out(o0)


// Section 4 - The Call for "Ah Mi" Resounds by Lugu Lake

//This section is based on my previous function exploration work
 voronoi(10,3,5)
   .color(0.5,1,2)		
   .kaleid(15)
//fft is the main feature, for creating ripple-like patterns with the sound of calling "Ah Mi"
   .modulate(noise(3.5),()=>a.fft[0]).out(o0)


// Section 5 - The Thriving Matrilineal Family

//This section is also based on my previous function exploration work
 voronoi(15,3,5)
//Here I used ".color()" and ".smooth()" to create a changing color for the "thriving" pattern, symbolizing the unity and diversity in this society
   .color([5,2,1].smooth(10),1,0)		
//Adjusted the value here to create a "more and denser" effect
   .kaleid(20)
   .out(o0)


// Section 6 - The Fire-Fueled Flourishing of Culture
// Section 7 - Eco-friendly Development
// Section 8 - Endless Harmony Flows with the Mother Lake
// See Xinxin's work
