//Globals
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var shapes = [];

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
  for(var i=0;i<shapes.length; i++){
    var line = new Line(shapes[i].x,shapes[i].y,shapes[i].a,shapes[i].b);
    line.draw();
  }
}

var delet = function(){
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

         console.log(event);
         x = event.offsetX;
         y = event.offsetY;

        canvas.addEventListener("mousemove", move, false);
        function move(event){

           a = event.offsetX;
           b = event.offsetY;

        }
        canvas.addEventListener("mouseup", up, false);
        function up(){

          console.log("x:" + x + " y:" + y);
          console.log( "movex: " +a+ "movey: " +b);

          //save the state
          shapes.push({
            'type': 'line',
            'a': a,
            'b': b,
            'x': x,
            'y': y
          });

          var line = new Line(x,y,a,b);
          line.draw();

        }

      }
}

//move

var move = function(){



}
