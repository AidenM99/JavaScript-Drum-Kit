document.addEventListener("keydown",  function(){
    playSound(event.keyCode);
    playAnimation(event.keyCode);
});

function playSound(e) {
    switch (e) {
        case 65:
            const clap = new Audio("sounds/clap.wav");
            clap.play();
            break;
        case 83:
            const hihat = new Audio("sounds/hihat.wav");
            hihat.play();
            break;
        case 68:
            const kick = new Audio("sounds/kick.wav");
            kick.play();
            break;
        case 70:
            const openhat = new Audio("sounds/openhat.wav");
            openhat.play();
            break;
        case 71:
            const boom = new Audio("sounds/boom.wav");
            boom.play();
            break;
        case 72:
            const ride = new Audio("sounds/ride.wav");
            ride.play();
            break;
        case 74:
            const snare = new Audio("sounds/snare.wav");
            snare.play();
            break;
        case 75:
            const tom = new Audio("sounds/tom.wav");
            tom.play();
            break;
        case 76:
            const tink = new Audio("sounds/tink.wav");
            tink.play();
            break;

        default:
            console.log("An unspecified button was pressed");
    };
};

function playAnimation(e){
    const div = document.querySelectorAll(".key");
    div.forEach(function(item) {
        item.addEventListener("click", function(){
            console.log("hi");
        });
    });
};