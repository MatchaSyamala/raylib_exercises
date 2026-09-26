const r = require("raylib");
const windowWidth = 500;
const windowHeight = 400;
const widthRec1 = 250;
const heightRec1 = 100;
const widthRec2 = 75;
const heightRec2 = 50;
const x = 10;
const y = 20;


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


function startingPointOfRectangle1(outerRec, innerRec) {
    return (outerRec - innerRec) / 2;
}


function draw() {
    r.BeginDrawing();
    const x1 = startingPointOfRectangle1(widthRec1, widthRec2);
    const y1 = startingPointOfRectangle1(heightRec1, heightRec2);
    r.ClearBackground(r.WHITE);
    r.DrawRectangle(x, y, widthRec1, heightRec1, r.RED);
    r.DrawRectangle(x1 + x, y1 + y, widthRec2, heightRec2, r.BLACK);
    r.EndDrawing();
}
function main() {
    setup();
    loop();
    r.CloseWindow();

}
main();
