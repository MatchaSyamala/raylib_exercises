const r = require("raylib");
const windowWidth = 500;
const windowHeight = 500;

const sourcex = 10;
const sourcey = 20;

const Target1x = 40;
const Target1y = 50;

const Target2x = 470;
const Target2y = 450;

const radius = 30;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "modifyTarget");
    r.SetTargetFPS(50);
}

function nearBy(s, t1, t2) {
    return s - t1 > s - t2 ? t1 : t2;
}

function loop() {
    while (!r.WindowShouldClose()) {
        draw();
    }
}

function draw() {
    r.BeginDrawing();
    const linex = nearBy(sourcex, Target1x, Target2x);
    const liney = nearBy(sourcey, Target1y, Target2y);
    r.DrawCircle(sourcex, sourcey, radius, r.BLUE);
    r.DrawCircle(Target1x, Target1y, radius, r.RED);
    r.DrawCircle(Target1x, Target2y, radius, r.RED);
    r.DrawLine(sourcex, sourcey, linex, liney, r.WHITE);
    r.EndDrawing();
}
function main() {
    setup();
    loop();
    r.CloseWindow();
}
main();
