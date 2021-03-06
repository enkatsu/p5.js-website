/*
 * @name No Loop
 * @description noLoop() 函数使 draw() 只执行一次。
 *如果不调用 noLoop() ，draw() 内的代码会持续运行。
 */
var y;

// 程序开始时，setup() 函数中的语句执行一次。
function setup() 
{
  // createCanvas 必须是第一条语句
  createCanvas(720, 400);  
  stroke(255);     // 线条绘制颜色设置为白色
  noLoop();
  
  y = height * 0.5;
}

// draw() 中的语句一直执行到程序停止为止。每个语句都按顺序执行，并且在读取最后一行之后，将再次执行第一行。
function draw() 
{ 
  background(0);   // 将背景设置为黑色
  y = y - 1; 
  if (y < 0) { y = height; } 
  line(0, y, width, y);  
} 
