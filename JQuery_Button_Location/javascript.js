$(document).ready(function(){
    $("button").click(function(){

        let top = random(0, 900);
        let left = random(0, 900);

        $("button").css("top", `${top}px`);
        $("button").css("left", `${left}px`);

    });

  });


  
   function random (min,max){ //random on steroids
     if (min instanceof Array){ //returns random array item
         if(min.length === 0){
             return undefined;
         }
         if(min.length === 1){
             return min[0];
         }
         return min[this.rnd(0,min.length-1)];
     }
     if(typeof min === "object"){ // returns random object member
         min = Object.keys(min);
         return min[this.rnd(min.length-1)];
     }
     min = min === undefined?100:min;
     if (!max){
         max = min;
         min = 0;
     }
     return    Math.floor(Math.random() * (max-min+1) + min);
  ;



 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}