
window.addEventListener("load", function() {
  initContainer();
});

//Copy below this line to SVG script and call initContainer();
//initContainer();
var svgns = "http://www.w3.org/2000/svg";

let embedded = false;

let width = 1000;
let height = 1000;

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
  var circle = document.createElementNS(svgns, 'circle');
  circle.setAttributeNS(null, 'cx', width/2);
  circle.setAttributeNS(null, 'cy', height/2);
  circle.setAttributeNS(null, 'r', 50);
  circle.setAttributeNS(null, 'fill', 'red');
  container.appendChild(circle);

  container.setAttribute('style','background-color:black');

  var plane = new Plane(container, 128,Math.random()*360);
  var plane2 = new Plane(container, 128,Math.random()*360);
  var plane3 = new Plane(container, 128,Math.random()*360);
};

class Plane {
  constructor(container, n, color) {
    this.color = "hsl("+color+",100%, 50%, 80%)";
    this.offSet = (Math.random() * (0.2) - 0.1);
    this.speedOffset = (Math.random() * (0.003-0.001) + 0.001);
    this.rotation = 0;

    for (var i=0; i< n; i++) {
      var line = document.createElementNS(svgns, 'line');
      line.setAttributeNS(null, 'x1', (i*(width/n)-width/2)*1.3+4);
      line.setAttributeNS(null, 'y1', -height);
      line.setAttributeNS(null, 'x2', (i*(width/n)-width/2)*1.3+4);
      line.setAttributeNS(null, 'y2', height);
      line.setAttributeNS(null, 'stroke-width', 4);
      line.setAttributeNS(null, 'stroke', this.color);
      line.setAttributeNS(null, 'transform',
          'translate('+(width/2)+','+(height/2)+') '
          +'rotate('+(Math.sin((0.001+this.speedOffset)+this.offSet))*360+')');
      container.appendChild(line);
    }
  }
}
