const r = require("raylib");
const windowWidth = 500;
const windowHeight = 400;
const x = 10;
const y = 20;
const widthRec1 = 250;
const heightRec1 = 100;

const percentageOfRec2 = 0.9;


function setup() {
    r.InitWindow(windowWidth, windowHeight, "Center a Rectangle");
    r.SetTargetFPS(50);
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
        update();
    }
}
function update() { }


function startingPointOfRectangle1(a, b) {
    return (a - b) / 2;
}


function draw() {
    r.BeginDrawing();
    const x1 = startingPointOfRectangle1(widthRec1, widthRec1 * percentageOfRec2);
    const y1 = startingPointOfRectangle1(heightRec1, heightRec1 * percentageOfRec2);
    r.ClearBackground(r.WHITE);
    r.DrawRectangle(x, y, widthRec1, heightRec1, r.RED);
    r.DrawRectangle(
        x1 + x,
        y1 + y,
        widthRec1 * percentageOfRec2,
        heightRec1 * percentageOfRec2,
        r.BLACK,
    );
    r.EndDrawing();
}


function main() {
    setup();
    loop();
    r.CloseWindow();
}
main()