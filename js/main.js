
window.addEventListener("load", function() {
  initContainer();
});

//Copy below this line to SVG script and call initContainer();
//initContainer();
var svgns = "http://www.w3.org/2000/svg";

let embedded = false;

let width = 1000;
let height = 1000;

let frameCount = 0;

let planes = [];
let n = 3;

function initContainer() {
  if (embedded){
    var container = document.getElementById( 'container' );
  } else {
    var svgObject = document.getElementById('container');
    var svgDocument = svgObject.contentDocument;
    var container = svgDocument.getElementById( 'container' );
  }
  main(container);
};

function main(container) {
  // var circle = document.createElementNS(svgns, 'circle');
  // circle.setAttributeNS(null, 'cx', width/2);
  // circle.setAttributeNS(null, 'cy', height/2);
  // circle.setAttributeNS(null, 'r', 50);
  // circle.setAttributeNS(null, 'fill', 'red');
  // container.appendChild(circle);
  container.setAttribute('style','background-color:black');

  // let color = Math.random()*360;
  for (let i=0; i<n; i++) {
    let plane = new Plane(container, 128,Math.random()*360);
    planes.push(plane);
  }

  setInterval(update, 33,3);

};

function update() {
  frameCount++;
  planes.forEach(plane => {
    plane.update(frameCount);
  });
}

class Plane {
  constructor(container, n, color) {
    this.color = "hsl("+color+",100%, 50%, 80%)";
    this.offSet = (Math.random() * (0.2) - 0.1);
    this.speedOffset = (Math.random() * (0.003-0.001) + 0.001);
    this.angle = 0;
    this.lines = [];
    for (var i=0; i< n; i++) {
      var line = document.createElementNS(svgns, 'line');
      line.setAttributeNS(null, 'x1', (i*(width/n)-width/2)*1.3);
      line.setAttributeNS(null, 'y1', -height);
      line.setAttributeNS(null, 'x2', (i*(width/n)-width/2)*1.3);
      line.setAttributeNS(null, 'y2', height);
      line.setAttributeNS(null, 'stroke-width', 4);
      line.setAttributeNS(null, 'stroke', this.color);
      line.setAttributeNS(null, 'transform',
      'translate('+(width/2)+','+(height/2)+') '
      +'rotate('+this.angle+')');
      container.appendChild(line);
      this.lines.push(line);
    }
  }
  update(frameCount) {
    this.angle = Math.sin(frameCount*(0.001+this.speedOffset)+this.offSet)*45;
    this.lines.forEach(line =>{
      line.setAttribute('transform',
      'translate('+(width/2)+','+(height/2)+') '
      +'rotate('+this.angle+')')
    });
  }
}
