////Trying to make a Cover
s0.initImage("https://raw.githubusercontent.com/ZiminYue/Ah-Mi---HydraLiveCodingProject/main/assets/images/test.png")
shape(30,0.0001,5).color(1,0,0).modulate(src(s0),1).out(o0)


////Trying to add noise

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//Pixelscape
//Marianne Teixido
//https://github.com/MarianneTeixido

src(o0)
 .saturate(1.01)
 .scale(.999)
 .color(1.01,1.01,1.01)
 .hue(.01)
 .modulateHue(src(o1).hue(.3).posterize(-1).contrast(.7),2)
  .layer(src(o1)
         .luma()
         .mult(gradient(1)
               .saturate(.9)))
  .out(o0)

noise(1, .2)
  .rotate(2,.5)
  .layer(src(o0)
  .scrollX(.2))
  .out(o1)


////I dunno why it becomes like raining gold?!
src(o0)
 .saturate(1)
 .scale(1)
 .color(1.01,0.9,0.9)
 .hue(.01)
 .modulateHue(src(o1).hue(.2).posterize(-5).contrast(.7),2)
  .layer(src(o1)
         .luma()
         .mult(gradient(1)
               .saturate(.9)))
  .out(o0)

