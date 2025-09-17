const canvas = document.getElementById("road-canvas");
canvas.width = 400;
const context = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9, 5);
const car = new Car(road.getLaneCenter(2), 450, 25, 50);
animate();
function animate() {
    car.update();
    canvas.height = 600;
    road.draw(context);
    car.draw(context);
    requestAnimationFrame(animate);
}
