const r = require("raylib");
const windowWidth = 500;
const windowHeight = 500;

const sourcex = 10;
const sourcey = 20;

const target1x = 40;
const target1y = 480;

const target2x = 470;
const target2y = 450;

const radius = 30;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "modifyTarget");
    r.SetTargetFPS(50);
}


function loop() {
    while (!r.WindowShouldClose()) {
        draw();
        update();
    }
}
function update() { }

function sqr(x) {
    return x * x;
}

function sqrt(x) {
    return x ** 0.5;
}

function distanceBetweenCircles(sourcex, sourcey, targetx, targety) {
    return sqrt(sqr(targetx - sourcex) + sqr(targety - sourcey));
}
function draw() {
    r.BeginDrawing();
    let linex = target1x;
    let liney = target1y;

    const distanceC1 = distanceBetweenCircles(sourcex, target1x, target2x);
    const distanceC2 = distanceBetweenCircles(sourcey, target1y, target2y);
    if (distanceC1 < distanceC2) {
        linex = target2x;
        liney = target2y;
    }

    r.DrawCircle(sourcex, sourcey, radius, r.BLUE);
    r.DrawCircle(target1x, target1y, radius, r.RED);

    r.DrawCircle(target2x, target2y, radius, r.RED);
    r.DrawLine(sourcex, sourcey, linex, liney, r.WHITE);

    r.EndDrawing();
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
