x1 = -10;
y1 = -10; 

x2 = 10;
y2 = -10;

x3 = 10;
y3 = 10;

x4 = -10;
y4 = 10;

xFlyt = 190;
yFlyt = 190;

skalar = 1;

function setup() {
  createCanvas(400, 400);

  slider = createSlider(0, 30, 1, 0,1);
  slider.position(250, 30);
}

function draw() {
  background(220);

  skalar = slider.value();

  point(x1 * skalar + xFlyt, y1 * skalar + yFlyt);
  point(x2 * skalar + xFlyt, y2 * skalar + yFlyt);
  point(x3 * skalar + xFlyt, y3 * skalar + yFlyt);
  point(x4 * skalar + xFlyt, y4 * skalar + yFlyt);

  line(x1 * skalar + xFlyt, y1 * skalar + yFlyt, x2 * skalar + xFlyt, y2 * skalar + yFlyt);
  line(x2 * skalar + xFlyt, y2 * skalar + yFlyt, x3 * skalar + xFlyt, y3 * skalar + yFlyt);
  line(x3 * skalar + xFlyt, y3 * skalar + yFlyt, x4 * skalar + xFlyt, y4 * skalar + yFlyt);
  line(x4 * skalar + xFlyt, y4 * skalar + yFlyt, x1 * skalar + xFlyt, y1 * skalar + yFlyt);

}
