
var selection = function(){

  console.log(window);

  var mx;
  var my;
  var distance;
  var minDist = 999;
  var indexSelected;



  canvas.addEventListener("mousedown",random, false);
  function random(event){

    mx = event.offsetX;
    my = event.offsetY;

    for(var i=0;i<shapes.length;i++){
      for(var j=0; j<shapes[i].selection.length; j++){

        var x = shapes[i].selection[j][0];
        var y = shapes[i].selection[j][1];

        distance = Math.sqrt((mx-x)*(mx-x) +  (my-y)*(my-y));

        if(distance < minDist){
          minDist = distance;
          indexSelected = i;
        }

      }
    }

    }

    console.log(minDist);
    console.log(indexSelected);

}
