//
$(".drum").click(function(){

var drumClicked = $(this).html();
makeSound(drumClicked);
addAnimation(drumClicked);
  });

$(document).keydown(function(){
  var btnPressed = event.key;
  makeSound(btnPressed);
  addAnimation(btnPressed);
});


function addAnimation(letterReceived){
  switch(letterReceived) {
    case("w"):
    $(".w").addClass("pressed");
    setTimeout(function(){$(".w").removeClass("pressed"); },500);
    break;

    case("a"):
    $(".a").addClass("pressed");
    setTimeout(function(){$(".a").removeClass("pressed");},500);
    break;

    case("s"):
     $(".s").addClass("pressed");
     setTimeout(function(){$(".s").removeClass("pressed");},500);
    break;

    case("d"):
    $(".d").addClass("pressed");
    setTimeout(function(){$(".d").removeClass("pressed");},500);
    break;

    case("j"):
    $(".j").addClass("pressed");
    setTimeout(function(){$(".j").removeClass("pressed");},500);
    break;

    case("k"):
    $(".k").addClass("pressed");
    setTimeout(function(){$(".k").removeClass("pressed");},500);
    break;

    case("l"):
    $(".l").addClass("pressed");
    setTimeout(function(){$(".l").removeClass("pressed");},500);
    break;

   default:
  console.log("Wrong key pressed");
  }



}




function makeSound(letterReceived){
  switch(letterReceived) {
    case("w") :
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case("a"):
    var kick_Bass = new Audio('sounds/kick-bass.mp3');
    kick_Bass.play();
    break;

    case("s"):
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case("d"):
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case("j"):
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case("k"):
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case("l"):
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

   default:
  console.log("Wrong key pressed");
  }

}
