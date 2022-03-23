var numerOfDrawButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < numerOfDrawButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)

    this.style.color = "white";

}

// var audio = new Audio('sounds/tom-1.mp3');
//             audio.play();