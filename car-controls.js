class Controls {
    constructor() {
        this.forward = false;
        this.reverse = false;
        this.right = false;
        this.left = false;
        this.#addKeyboardListeners();
    }
    #addKeyboardListeners() {
            document.addEventListener("keydown", (event) => {
                const roadCanvas = document.getElementById("road-canvas");
                const simWindow = roadCanvas ? roadCanvas.closest(".simulation-window") : null;
                const active = document.activeElement;
                const isRoadActive = active === roadCanvas || active === simWindow;
                if (isRoadActive) {
                    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
                        event.preventDefault();
                    }
                }
                switch (event.key) {
                    case "ArrowLeft":
                        if (isRoadActive) this.left = true;
                        break;
                    case "ArrowRight":
                        if (isRoadActive) this.right = true;
                        break;
                    case "ArrowUp":
                        if (isRoadActive) this.forward = true;
                        break;
                    case "ArrowDown":
                        if (isRoadActive) this.reverse = true;
                        break;
                }
            });
            document.addEventListener("keyup", (event) => {
                const roadCanvas = document.getElementById("road-canvas");
                const simWindow = roadCanvas ? roadCanvas.closest(".simulation-window") : null;
                const active = document.activeElement;
                const isRoadActive = active === roadCanvas || active === simWindow;
                switch (event.key) {
                    case "ArrowLeft":
                        if (isRoadActive) this.left = false;
                        break;
                    case "ArrowRight":
                        if (isRoadActive) this.right = false;
                        break;
                    case "ArrowUp":
                        if (isRoadActive) this.forward = false;
                        break;
                    case "ArrowDown":
                        if (isRoadActive) this.reverse = false;
                        break;
                }
            });
    }
}
