////Trying to make a Cover
s0.initImage("https://raw.githubusercontent.com/ZiminYue/Ah-Mi---HydraLiveCodingProject/main/assets/images/test.png")
// osc(6).modulate(src(s0),1).out(o0)

shape(30,0.0001,5).scale(1.5,1,1).modulate(src(s0),1).out(o0)
