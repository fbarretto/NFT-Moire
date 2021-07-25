
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

};
