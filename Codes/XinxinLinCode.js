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
src(o0)
 .saturate(1)
 .scale(1)
 .color(1.01,1,1.01)
 .hue(.01)
 .modulateHue(src(o1).hue(0.9).posterize(-5).contrast(.7),2)
  .layer(src(o1)
         .luma()
         .mult(gradient(1)
               .saturate(.9)))
  .out(o0)

noise(1, .2)
  .rotate(2,.5)
  .layer(src(o0)
  .scrollX(.2))
  .out(o1) //bgm纯音乐的时候解锁下一段，播完了就运行下一段


// Section 2 - Apocalyptic Chaotic Thunderclouds
// Section 3 - The Collapse and Rebirth of the Universe
// Section 4 - The Call for "Ah Mi" Resounds by Lugu Lake
// Section 5 - The Thriving Matrilineal Family
// [See Zimin's work]


// Section 6 - The Fire-Fueled Flourishing of Culture

shape(5,0.1,1).modulate(noise(7),()=>a.fft[0]).rotate( () => time%360*1 ).brightness( () => Math.sin(time*2) ).color(5,1,0.01).out(o0)


// Section 7 - Eco-friendly Development

//This section is based on Ritchse Teixido's "tropical juice"
voronoi(3,0.3,0.2).shift(5).kaleid(5)
.modulatePixelate(voronoi(10,0.2),45,2)
.scale(()=>1+(Math.sin(time*2.5)*0.025))
.diff(osc(3,0.15,3).rotate())
.color(0.3,5,0.5)
.diff(voronoi(3,1).shift(0.1).kaleid(10))
.brightness(0.01).contrast(0.8).saturate(0.8)
	.out()
speed = 3


// Section 8 - Endless Harmony Flows with the Mother Lake

shape(99, 0.1, 0.1) // 生成接近圆形的基本波纹形状
  .scale(({time}) => 1 + Math.sin(time * 0.1) * 0.1) // 动态缩放模拟波纹扩散效果
  .modulate(osc(4, 0.1).rotate(0, 0.1), 0.3) // 调制形状边缘，增加波动的随机性
  .add(noise(2, 0.1,2))
  .color(0, 1, 2)
  .brightness(0.05) // 提高亮度，使波纹更加清晰
  .contrast(2) // 增强对比度，使水波纹更明显
  .out(o1);
osc(6, 0.1, 0.6) // 生成接近圆形的基本波纹形状
  .scale(({time}) => 0.8 + Math.sin(time * 1) * 0.1) // 动态缩放模拟波纹扩散效果
  .modulate(osc(1, 0.1).rotate(0, 0.1), 0.3) // 调制形状边缘，增加波动的随机性
  .add(noise(2, 0.1,2))
  .color(0, 1, 2)
.add(o1)
  .out(o0);
speed=3
