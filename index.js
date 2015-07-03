//Globals
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var shapes = [];
var index = 0;
var mousedown = false;

// Line constructor
var Line = function(x, y, a, b){
  this.c=document.getElementById("myCanvas");
  this.ctx=this.c.getContext("2d");
  this.ctx.beginPath();
  this.ctx.moveTo(x,y);
  this.ctx.lineTo(a,b);
};
Line.prototype.draw = function(ctx) {
  this.ctx.stroke();
}

var redraw = function(){
  clearCanvas();
  for(var i=0;i<shapes.length; i++){
    var line = new Line(shapes[i].x,shapes[i].y,shapes[i].a,shapes[i].b);
    line.draw();
  }
}

 var clearCanvas = function(){
  console.log("clearCanvas");
  context.clearRect(0, 0, 1000, 1000);
}




var createLine = function(event){

      var x;
      var y;
      var a;
      var b;

      $('#line').removeClass('btn-primary');
      $('#line').addClass('btn-default');

      // Capture mouse move event
      canvas.addEventListener("mousedown",down, false);
      function down(event){

         mousedown = true;

         console.log(event);
         x = event.offsetX;
         y = event.offsetY;

         shapes.push({

           'type': 'line',
           'a': x,
           'b': y,
           'x': x,
           'y': y,
           'selection': []

           });
          shapes[index].selection.push ([x,y]);
          shapes[index].selection.push ([x,y]);

         var line = new Line(x,y,x,y);

       }

        canvas.addEventListener("mousemove", move, false);
        function move(event){
          if(mousedown == true){
            a = event.offsetX;
            b = event.offsetY;

           shapes[index].a = a;
           shapes[index].b = b;

           shapes[index].selection.pop();
           shapes[index].selection.push ([a, b]);

           redraw();
          }
        }

        canvas.addEventListener("mouseup", up, false);
        function up(){
          mousedown = false;
          midx = (shapes[index].x +shapes[index].a)/2;
          midy = (shapes[index].y +shapes[index].b)/2;
          shapes[index].selection.push([midx,midy]);
          console.log(shapes[index].selection);
          index = index+1;

        }
}
