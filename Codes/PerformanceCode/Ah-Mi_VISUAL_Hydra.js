s0.initVideo("https://raw.githubusercontent.com/ZiminYue/Ah-Mi---HydraLiveCodingProject/main/assets/video/videotest3.mp4")
shape(30,0.0001,5).color(3,1,0).modulate(src(s0),1).out(o0)//cover-introduce the theme


//  s0.initImage("https://raw.githubusercontent.com/ZiminYue/Ah-Mi---HydraLiveCodingProject/main/assets/images/COVER2.jpg");
// shape(30, 0.0001, 5).color(1, 1, 1).modulate(src(s0), 1).out(o0);//What happened to the Internet? (Move to next part after human voice appears)



// //Increasing Noise
// src(o0)
//  .saturate(1)
//  .scale(1)
//  .color(1.01,1,1.01)
//  .hue(.01)
//  .modulateHue(src(o1).hue(0.9).posterize(-5).contrast(.7),2)
//   .layer(src(o1)
//          .luma()
//          .mult(gradient(1)
//                .saturate(.9)))
//   .out(o0)
// //↓This has to be here
// noise(1, .2)
//   .rotate(2,.5)
//   .layer(src(o0)
//   .scrollX(.2))
//   .out(o1) //Uncomment the next section when plain music is playing, and play it after this is finished


// //Chaotic Thunderclouds (gobbling sound)
// shape([4,5,6].fast(0.5).smooth(1),0.000001,[0.2,0.7].smooth(0))
// .color(0.5,0.4,0.3)
// .scrollX(()=>Math.sin(time*0.27))
// .add(
//   shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.5,0.3].smooth(1))
//   .color(0.6,0.2,0.5)
//   .scrollY(0.3)
//   .scrollX(()=>Math.sin(time*0.33)))
// .add(
//   shape([4,5,6].fast(0.5).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1))
//   .color(0.2,0.4,0.6)
//   .scrollY(-0.35)
//   .scrollX(()=>Math.sin(time*0.41)*-1))
// .add(
//       src(o0).shift(0.001,0.01,0.001)
//       .scrollX([0.05,-0.05].fast(0.1).smooth(1))
//       .scale([1.05,0.9].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.6).smooth(1))
//       ,0.85)
// .modulate(voronoi(15,2,2))
// .out()

// //Start after crying (cry several times)
// shape(30,0.5,0.1).scale(0.08,0.5,1).out(o1)//clean up o1, making a singularity
// osc(3, 0.1, 0.4)
// .color(1.2,1.2,1.3)
// // .saturate(0.4)
// .modulateRepeat(osc(2),1, 2, 4, 3)
// .modulateKaleid(osc(12,0.05,0),1)
// .luma (0.4)
// .rotate(4, 0.5,1)
// .brightness( () => Math.sin(time*0.5 ))
// .scale(1).diff(o1)
// .out(o0)
// ////↓the pattern go fade out for some time
//  osc(3, 0.1, 0.4)
//  .color(1.2,1.2,1.3)
//  .modulateRepeat(osc(2),1, 2, 4, 3)
//  .modulateKaleid(osc(12,0.05,0),1)
//  .rotate(4, 0.5,1)
//  .brightness( () => Math.sin(time*50))
//  .luma (0.4)
//  .scale(1).diff(o1)
//  .out(o0)


// ////Ah-mi calling
// ////Ripple in Lugu Lake
// voronoi(10,3,5)
//   .color(0.5,1,2)		
//   .kaleid(15)
//   .modulate(noise(3.5),()=>a.fft[0]).out(o0)



// ////Mother starts family //Drum beat (Waiting for the signal, while uncommenting the next section)
// voronoi(15,3,5)
//   .color([5,2,1].smooth(10),1,0)		
//   .kaleid(20)
//   .out(o0)


// ////Celebrating Fire //Fire sizzles + people sing (Uncomment the next part)
// shape(5,0.1,1).modulate(noise(7),()=>a.fft[0]).rotate( () => time%360*1 ).brightness( () => Math.sin(time*2) ).color(5,1,0.01).out(o0)


// //Jungle //Uncomment the next part when hear a very slow bird tweet
// voronoi(3,0.3,0.2).shift(5).kaleid(5)
// .modulatePixelate(voronoi(10,0.2),45,2)
// .scale(()=>1+(Math.sin(time*2.5)*0.025))
// .diff(osc(3,0.15,3).rotate())
// .color(0.3,5,0.5)
// .diff(voronoi(3,1).shift(0.1).kaleid(10))
// .brightness(0.01).contrast(0.8).saturate(0.8)
// 	.out()
// speed = 3



// //Last peace mother lake
// shape(99, 0.1, 0.1) // Generate a basic ripple shape close to a circle
//   .scale(({time}) => 1 + Math.sin(time * 0.1) * 0.1) // Dynamically scale to simulate the ripple diffusion effect
//   .modulate(osc(4, 0.1).rotate(0, 0.1), 0.3) // Modulate the shape edge to increase the randomness of the fluctuation
//   .add(noise(2, 0.1,2))
//   .color(0, 1, 2)
//   .brightness(0.05)
//   .contrast(2) 
//   .out(o1);
// osc(6, 0.1, 0.6) 
//   .scale(({time}) => 0.8 + Math.sin(time * 1) * 0.1) 
//   .modulate(osc(1, 0.1).rotate(0, 0.1), 0.3) 
//   .add(noise(2, 0.1,2))
//   .color(0, 1, 2)
// .add(o1)
//   .out(o0);
// speed=3
