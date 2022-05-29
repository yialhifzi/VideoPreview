console.log("page loaded...");

function over(element){
    document.getElementById("vidtest").addEventListener("mouseover", function() {this.play();})
}

function out(element){
    document.getElementById("vidtest").addEventListener("mouseleave", function() {this.pause();})
}