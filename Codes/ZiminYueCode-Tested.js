s0.initImage("https://raw.githubusercontent.com/ZiminYue/Ah-Mi---HydraLiveCodingProject/main/assets/images/test.png")

shape(30,0.0001,5).color(1,0,0).modulate(src(s0),1).out(o0)

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

shape([4,5,6].fast(0.5).smooth(1),0.000001,[0.2,0.7].smooth(0))
.color(0.2,0.4,0.3)
.scrollX(()=>Math.sin(time*0.27))
.add(
  shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.5,0.3].smooth(1))
  .color(0.6,0.2,0.5)
  .scrollY(0.3)
  .scrollX(()=>Math.sin(time*0.33)))
.add(
  shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1))
  .color(0.2,0.4,0.6)
  .scrollY(-0.35)
  .scrollX(()=>Math.sin(time*0.41)*-1))
.add(
      src(o0).shift(0.001,0.01,0.001)
      .scrollX([0.05,-0.05].fast(0.1).smooth(1))
      .scale([1.05,0.9].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1))
      ,0.85)
.modulate(voronoi(10,2,2))
.out()

