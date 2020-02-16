let circleDiameter = 175;
var img;
let scoreBoard;

function preload() {
    img = loadImage('card_bkg.png');
}

function setup () {
    createCanvas(1000, 1000);
    background('pink');
    noStroke();

}
function draw () {
    for (let i = 130; i < 900; i += 250){
        ellipse(i, 150, circleDiameter);
        ellipse(i, 360, circleDiameter);
        ellipse(i, 570, circleDiameter);
        ellipse(i, 790, circleDiameter);
    }
    
    scoreBoard = createElement ('h2', ['Your score to be displayed here']);
    scoreBoard.position(300, 925);
}
