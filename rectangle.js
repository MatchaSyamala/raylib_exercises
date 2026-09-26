const r = require("raylib");
const windowWidth = 250;
const windowHeight = 250;
const width = 75;
const height = 50;


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
function update() {

}
function startingPoint(width, height) {
    return (width - height) / 2;
}
function draw() {
    r.BeginDrawing();
    const x = startingPoint(windowWidth, width);
    const y = startingPoint(windowHeight, height);
    r.ClearBackground(r.WHITE);
    r.DrawRectangle(x, y, width, height, r.BLACK);
    r.EndDrawing();
}
function main() {
    setup();
    loop();
    r.CloseWindow();
}
main();

