// Ah Mi

// Xinxin Lin (24009560)


//---------------------------------------------------------------------------------------


// Audio Credits
// Music: James Primate, 泸沽湖做客栈的菜正好 [The Dishes at Lugu Lake Inn Are Just Right], 影像中国 [Video China]
// Sound Effects: Freesound.org, Sonic Pi library & Xinxin’s recording;

//NOTE: It is recommended to comment out all the code first, and then unlock and run it section by section in order.


//---------------------------------------------------------------------------------------


// The cover of the project'AH MI'
//Here I have placed a animated video I made myself used AI and AE software, which aims to introduce the ethnic background of the Mosuo people.
s0.initVideo("https://raw.githubusercontent.com/ZiminYue/Ah-Mi---HydraLiveCodingProject/main/assets/video/videotest3.mp4")
// Here I use the.color() to make an orange hue, due to represent the passionate national characteristic of Mosuo.
shape(30,0.0001,5)
	.color(3,1,0)
	.modulate(src(s0),1)
	.out(o0)

// Section 1 - World of Increasing Noise
// Here I have designed a black and white text poster to introduce the theme of the Internet.
s0.initImage("https://raw.githubusercontent.com/ZiminYue/Ah-Mi---HydraLiveCodingProject/main/assets/images/COVER2.jpg");
shape(30, 0.0001, 5).color(1, 1, 1).modulate(src(s0), 1).out(o0)


//This part is based on Marianne Teixido's "Pixelscape"
// Here was based on the last .out(o0) output to make a new noise effect, due to show the effect of collapse of the Internet's big data overload.
 src(o0)
.saturate(1)
 .scale(1)
 .color(1.01,1,1.01)
 .hue(.01)
 // Here I adjusted the .hue() and .posterize() to change the color hue and increase the number of color layers, make the visual effect of noise is made more intense.
 .modulateHue(src(o1).hue(0.9).posterize(-5).contrast(.7),2)
  .layer(src(o1)
         .luma()
         .mult(gradient(1)
               .saturate(.9)))
  .out(o0)


// Section 2 - Apocalyptic Chaotic Thunderclouds
// Section 3 - The Collapse and Rebirth of the Universe
// Section 4 - The Call for "Ah Mi" Resounds by Lugu Lake
// Section 5 - The Thriving Matrilineal Family
// [See Zimin's work]


// Section 6 - The Fire-Fueled Flourishing of Culture
// use .shape() to make a roughly fuzzy shape
shape(5,0.1,1)
// here use the .noise() to enriche the graphical interface.
// and the graph can change with the sound by a.fft[0]
// The screen can be dynamically rotated according to the time by use the .rotate(() => time % 360 * 1)
.modulate(noise(7),()=>a.fft[0]).rotate( () => time%360*1 )
// Dynamically adjusts screen brightness
.brightness( () => Math.sin(time*2) )
// use the .color() to make a color of flame.
.color(5,1,0.01)
.out(o0)


// Section 7 - Eco-friendly Development

//This section is based on Ritchse Teixido's "tropical juice"
// In this section, we want to make a nature and jungle visual effect.
// Here I adjusted the .voronoi() and .shift()，to make the graph become more dense and dynamic.
// I add the .kaleid() to make the graph vary with center-symmetry.
voronoi(3,0.3,0.2).shift(5).kaleid(5)
//Here I add the parameter of voronoi from '4' to '10', '32' to '45', to make the pixelation of the graphics larger and the texture denser. 
.modulatePixelate(voronoi(10,0.2),45,2)
// I adjust the time rate of the .scale(), make dynamic changes more subtle.
.scale(()=>1+(Math.sin(time*2.5)*0.025))
.diff(osc(3,0.15,3).rotate())
// Here I add the .color(), to fill the frame with a natural atmosphere.
.color(0.3,5,0.5)
// Here I adjust the .voronoi() and .shift(), also add the .kaleid, to make the texture more complex.
.diff(voronoi(3,1).shift(0.1).kaleid(10))
// Here I decreased the .brightness(), .contrast() and .saturate(), to make the hole effect softer.
.brightness(0.01).contrast(0.8).saturate(0.8)
	.out()
// Here we can adjust the speed of the effect with the music rhythm.
speed = 3


// Section 8 - Endless Harmony Flows with the Mother Lake
// Make a pattern that is close to circular and has soft edges.
shape(99, 0.1, 0.1) 
// Scale the graph according to the time period
  .scale(({time}) => 1 + Math.sin(time * 0.1) * 0.1) 
// Increase the randomness of the graphical fluctuations
  .modulate(osc(4, 0.1).rotate(0, 0.1), 0.3) 
// add the noise on the pattern，make the image richer.
  .add(noise(2, 0.1,2))
// make a blue hue.
  .color(0, 1, 2)
// add the .brightness() and .contrast() to add a richer gradation to the blue tones.
  .brightness(0.05) .contrast(2) 
// take the result into .out(), for further layer stacking.
  .out(o1);
// Here use .osc() to generate a gentle ripple pattern.
osc(6, 0.1, 0.6) 
// The Math.sin can periodically changes the shape of the figure.
  .scale(({time}) => 0.8 + Math.sin(time * 1) * 0.1) 
// Continue to stack and adjust the dynamic effects of the graphics.
  .modulate(osc(1, 0.1).rotate(0, 0.1), 0.3) .add(noise(2, 0.1,2))
// Provides a cool blue hue to the image.
  .color(0, 1, 2)
.add(o1)
  .out(o0);
// Control the speed of the screen changes.
speed=3
