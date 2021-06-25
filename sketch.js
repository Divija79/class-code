var n1,n2;
var b1,b2,b3,b4;
var int1,int2;
function setup() {
  
  createCanvas(400, 400);
  
  num1 = createInput();
  num1.position(5, 60);
  
  num2 = createInput();
  num2.position(200, 60);
  
  b1 = createButton("add");
  b1.position(10, 200);
  b1.mousePressed(add);
  
  b2 = createButton("Multiply");
  b2.position(100, 200);
  b2.mousePressed(mul);

  b3 = createButton("Substract");
  b3.position(200, 200);
  b3.mousePressed(sub);

  b4 = createButton("Divide");
  b4.position(300, 200);
  b4.mousePressed(Divide);
  
  
  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background(200,10,200)
  text("Number 1",70,50)
  text("Number 2",270,50)
  int1=parseInt(num1.value());
  int2=parseInt(num2.value());


}
function add(){
console.log(int1+int2);
}
function mul(){
console.log(int1*int2);
}
function sub(){
  console.log(int1-int2);
}
function Divide(){
  console.log(int1/int2);
}