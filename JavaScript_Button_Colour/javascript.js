let element = document.getElementById("myBtn");

function press() {
    let bgcolor = ["aqua", "black", "blueviolet", "fuchsia", "red", "#b6da34"];
    let color = "black";

    let randd = random(0,5);
    let abc = bgcolor[`${randd}`];

    element.style.backgroundColor = `${abc}`;
    element.style.color = `${color}`;

}

element.addEventListener("click", press);

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
};