//Globals
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


var mode = '';

var shapes = [];
var index = 0;
var mousedown = false;


var redraw = function(){
  clearCanvas();
  for(var i=0;i<shapes.length; i++){
    switch (shapes[i].type) {
      case 'line':
          var x = shapes[i].constructorpoints[0][0];
          var y = shapes[i].constructorpoints[0][1];
          var a = shapes[i].constructorpoints[1][0];
          var b = shapes[i].constructorpoints[1][1];
          var line = new Line(x,y,a,b);
          line.draw();
          break;
      default:

    }

  }
}

var clearCanvas = function(){
  console.log("clearCanvas");
  context.clearRect(0, 0, 1000, 1000);
}


var canvasMousedown = function(event){

  console.log("canvasMousedown");
  mousedown = true;
  mx = event.offsetX;
  my = event.offsetY;

  switch (mode) {
    case 'line':

        shapes.push({
          'type': 'line',
          'constructorpoints': [],
          'selection': []
          });

         shapes[index].constructorpoints.push ([mx,my]);
         shapes[index].constructorpoints.push ([mx,my]);
         shapes[index].selection.push ([mx,my]);
         shapes[index].selection.push ([mx,my]);

        var line = new Line(mx,my,mx,my);
        break;
    case 'move':
        indexSelected = selection(mx, my);
        break;
    default:
        break;

  }


}
var canvasMousemove = function(event){

  var a;
  var b;

  if(mousedown == true){
    a = event.offsetX;
    b = event.offsetY;

    switch(mode){
      case 'line':

        shapes[index].constructorpoints.pop();
        shapes[index].constructorpoints.push ([a, b]);

        shapes[index].selection.pop();
        shapes[index].selection.push ([a, b]);

        redraw();
      case 'move':


        for(var i=0;i<shapes[indexSelected.constructorpoints.length;])
        console.log(shapes[indexSelected].constructorpoints[0][]);

      break;


      default:
      break;
    }

  }

}

var canvasMouseup = function(event){

  mousedown = false;
  switch (mode) {
    case 'line':
      var midx;
      var midy;

      midx = (shapes[index].x +shapes[index].a)/2;
      midy = (shapes[index].y +shapes[index].b)/2;
      shapes[index].selection.push([midx,midy]);
      console.log(shapes[index].selection);
      index = index+1;
      break;
    default:
     break;

  }
}
