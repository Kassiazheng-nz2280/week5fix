let data;

let MinMinHeight;
let MaxMaxHeight;
let MinMinAge;
let MaxMaxAge;

function preload() {
  data = loadTable("dog_breeds.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < data.getRowCount(); i++) {
    let MinHeight = data.getNum(i, "MinHeight");
    let MaxHeight = data.getNum(i, "MaxHeight");
    let MinAge = data.getNum(i, "MinAge");
    let MaxAge = data.getNum(i, "MaxAge");

    MinMinHeight = min(MinMinHeight, MinHeight);
    MaxMaxHeight = max(MaxMaxHeight, MaxHeight);
    MinMinAge = min(MinMinAge, MinAge);
    MaxMaxAge = max(MaxMaxAge, MaxAge);
  }
}

  function draw() {
    background(0);
    fill(255, 153, 204, 100);
    stroke("yellow");
  
    for (let i = 0; i < data.getRowCount(); i++) {
      
      let MinHeight = data.getNum(i, "MinHeight");
      let MaxHeight = data.getNum(i, "MaxHeight");
      let MinAge = data.getNum(i, "MinAge");
      let MaxAge = data.getNum(i, "MaxAge");
      let x0 = map(MinAge, MinMinAge, MaxMaxAge, 0, width);
      let x1 = map(MaxAge, MinMinAge, MaxMaxAge, 0, width);
      let y0 = map(MinHeight, MinMinHeight, MaxMaxHeight, height, 0);
      let y1 = map(MaxHeight, MinMinHeight, MaxMaxHeight, height, 0);
      let r = map(x0, 0, width, 0, 255);
      let b = map(y0, height, 0, 0, 255);
      fill(r, 10, b, 100);
      rect(x0, y0, x1 - x0, y0 - y1);
      
    }
    noLoop();
}