const r = require("raylib");
const windowWidth = 500;
const windowHeight = 500;

const circle1x = 50;
const circle1y = 60;
const radiusC1 = 30;

const circle2x = 100;
const circle2y = 60;
const radiusC2 = 30;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Insecting circles");
    r.SetTargetFPS(50);
}
function loop() {
    while (!r.WindowShouldClose()) {
        draw();
        //update();
    }
}
function sqr(x) {
    return x * x;
}

function sqrt(x) {
    return x ** 0.5;
}

function distanceBetweenCenters(circle1x, circle1y, circle2x, circle2y) {
    return sqrt(sqr(circle2x - circle1x) + sqr(circle2y - circle1y));
}

function checkIntersection(radiusC1, radiusC2, distance) {
    return (radiusC1 + radiusC2) > distance
}

function chooseColor(isIntersecting) {
    return isIntersecting ? r.RED : r.BLACK;
}


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const distance = distanceBetweenCenters(circle1x, circle1y, circle2x, circle2y);
    const isIntersecting = checkIntersection(radiusC1, radiusC2, distance);
    const colorChange = chooseColor(isIntersecting);

    r.DrawCircle(circle1x, circle1y, radiusC1, colorChange);
    r.DrawCircle(circle2x, circle2y, radiusC2, colorChange);
    r.EndDrawing();
}
// function update() { }
function main() {
    setup();
    loop();
    r.CloseWindow();
}
main();
