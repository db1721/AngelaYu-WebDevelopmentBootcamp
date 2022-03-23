var numerOfDrawButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < numerOfDrawButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)

    function handleClick() {
        alert("I got clicked")
        var audio = new Audio('audio_file.mp3');
        audio.play();
    }
}