const canvas = document.getElementById("road-canvas");
canvas.width = 400;
const context = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width * 0.9, 5);
const car = new Car(road.getLaneCenter(2), 450, 25, 50);
animate();
function animate() {
    car.update();
    canvas.height = 600;
   context.save(); 
 context.translate(0,-car.y+canvas.height*0.75); 
    road.draw(context);
    car.draw(context);
    context.restore(); 
    requestAnimationFrame(animate);
}
