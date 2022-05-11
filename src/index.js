import { Application } from "pixi.js";
import { Sprite } from "pixi.js";

const app = new Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

// Scale mode for all textures, will retain pixelation
// PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const sprite = Sprite.from('./assets/pikachu.jpg');

// Set the initial position
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

// Opt-in to interactivity
sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;

// Pointers normalize touch and mouse
sprite.on('pointerdown', onClick);

function onClick() {
	console.log('Mouse Clicked');
}

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

app.stage.addChild(sprite);