//Xinxin lin codes start here!
//湖面泡泡水
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// 3.0
// by ΔNDR0M3DΔ
// https://www.instagram.com/androm3_da/


noise(3,0.3,3).thresh(0.3,0.03).diff(o3,0.3).out(o1)
gradient([0.3,0.3,3]).diff(o0).blend(o1).out(o3)
voronoi(33,3,30).rotate(3,0.3,0).modulateScale(o2,0.3).color(-3,3,0).brightness(3).out(o0)
shape(30,0.3,1).invert(({time})=>Math.sin(time)*3).out(o2)

render(o3)


fixed jungle
voronoi(1,0.3,0.2).shift(8)
.modulatePixelate(voronoi(4,0.2),32,2)
.scale(()=>1+(Math.sin(time*2.5)*0.05))
.diff(voronoi(3).shift(0.5))
.diff(osc(3,0.15,3).rotate())
.brightness(0.23).contrast(1.2).saturate(1)
	.out()
speed = 0.8


改后：蓝色水波纹背景绿色？
shape(99, 0.1, 0.5) // 生成接近圆形的基本波纹形状
  .scale(({time}) => 1 + Math.sin(time * 0.6) * 0.2) // 动态缩放模拟波纹扩散效果
  .modulate(osc(10, 0.1).rotate(0, 0.1), 0.3) // 调制形状边缘，增加波动的随机性
  .add(noise(3, 0.1,2))
  .color(0, 0, 8)
  .brightness(0.2) // 提高亮度，使波纹更加清晰
  .contrast(0.2) // 增强对比度，使水波纹更明显
  .out(o0);
