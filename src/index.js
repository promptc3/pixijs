// import * as Pixi from "pixi.js";
import "./style.css";
import { Application } from "pixi.js";
import { Sprite } from "pixi.js";
import { Texture } from "pixi.js";
import { Graphics } from "pixi.js";
import { gsap } from "gsap";
// import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Loader } from '@pixi/loaders';
import { AnimatedGIFLoader } from '@pixi/gif';
import { Chapter } from './chapter.js';

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(PixiPlugin);
Loader.registerPlugin(AnimatedGIFLoader);

const app = new Application({ 
	backgroundColor: 0xffffff,
	autoResize: true,
	resolution: devicePixelRatio });

app.renderer.resize(window.innerWidth,window.innerHeight); // added this to resize
document.body.appendChild(app.view);

// creates and adds trigger to DOM
// triggerExample: 'chapter1page1trigger1'
// Chapter(id, pageCount, triggerArray)
const chapter1 = new Chapter(1, 1, [4])
chapter1.addElements(); 

// GSAP based animation of sprite
// directly done on PIXI sprite
// we can directly use properties of PIXI sprites
// to animate in GSAP
// create a gsap timeline

// ------------------------- CHAPTER 1 ----------------------------------- //
// Load first video
const ch1video = document.createElement('video')
ch1video.crossOrigin = 'anonymous'
ch1video.preload = ''
ch1video.src = './assets/animations/chapter1anim.mp4'
ch1video.preload = 'auto'
ch1video.autoload = true
ch1video.muted = true
const anim = new Sprite.from(ch1video)
anim.width = app.screen.width;
anim.height = app.screen.height;

ScrollTrigger.create({
  trigger: ".chapter1",
  start: "top 80%",
  end: "bottom 50%",
  onEnter: self => {
    // add new sprites to the stage
    app.stage.addChild(anim);
  },
  // markers: true,
});

ScrollTrigger.create({
  trigger: ".chapter1end",
  start: "top 80%",
  end: "bottom 68%",
  onEnter: self => {
    // scene change
    // destroy all the previous objects
    chapter1.removeElements();
    app.stage.removeChildren();
    // remove all DOM Elements
    // console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
  }
});

// ------------------------- CHAPTER 2 ----------------------------------- //
const chapter2 = new Chapter(2, 1, [1]);
chapter2.addElements();
const sprite_1_1 = Sprite.from('./assets/1/1_1.png');
sprite_1_1.position.set(window.innerWidth/2 - 350, window.innerHeight/2 - 250);
ScrollTrigger.create({
  trigger: ".chapter2",
  start: "top 80%",
  end: "bottom 68%",
  onEnter: self => {
    app.stage.addChild(sprite_1_1);
  }
});

ScrollTrigger.create({
  trigger: ".chapter2end",
  start: "top 80%",
  end: "bottom 68%",
  onEnter: self => {
    chapter2.removeElements();
    app.stage.removeChildren();
  }
});

// ------------------------- CHAPTER 3 ----------------------------------- //
// Load sprites and videos for chapter 3
const sprite_2_2 = Sprite.from('./assets/2/2_2.png');
sprite_2_2.anchor.set(0.5)
sprite_2_2.position.set(window.innerWidth - 950, window.innerHeight - 400);
sprite_2_2.scale.set(0.1)
const sprite_2_1 = Sprite.from('./assets/2/2_1.png');
sprite_2_1.anchor.set(0.5)
sprite_2_1.position.set(window.innerWidth - 250, window.innerHeight - 400);
sprite_2_1.scale.set(0.1)
const ch2video = document.createElement('video')
ch2video.crossOrigin = 'anonymous'
ch2video.preload = ''
ch2video.src = './assets/animations/chapter3anim.mp4'
ch2video.preload = 'auto'
ch2video.autoload = true
ch2video.muted = true
ch2video.loop = true
const anim2 = new Sprite.from(ch2video)
anim2.position.set(window.innerWidth - 500, window.innerHeight - 550);
anim2.scale.set(0.3)
app.loader.add('bird', './assets/2/Animations/Turn.gif');

const chapter3 = new Chapter(3, 1, [2])
chapter3.addElements(); 
ScrollTrigger.create({
  trigger: ".chapter3",
  start: "top 80%",
  end: "bottom 50%",
  onEnter: self => {
    // add new sprites to the stage
    app.stage.addChild(sprite_2_2);
    app.stage.addChild(anim2);
    app.loader.load((loader, resources) => {
      const image = resources.bird.animation;
      image.scale.set(0.07);
      image.position.set(window.innerWidth - 920, window.innerHeight - 430);
      app.stage.addChild(image);
    });
  },
});

gsap.to(sprite_2_1, {
	scrollTrigger: {
		trigger: ".chapter3page0trigger1",
		start: "top 82%",
    end: "bottom 70%",
		markers: false // markers enabled for debugging
	},
  duration: 5,
  alpha: 1.0
})

ScrollTrigger.create({
  trigger: ".chapter3end",
  start: "top 80%",
  end: "bottom 50%",
  onEnter: self => {
    chapter3.removeElements();
    app.stage.removeChildren();
  },
});

// ------------------------- CHAPTER 4 ----------------------------------- //
const chapter4 = new Chapter(4, 1, [4]);
chapter4.addElements();

const sprite_3_4 = Sprite.from('./assets/3/3_4.png');
sprite_3_4.anchor.set(0.5)
sprite_3_4.position.set(window.innerWidth - 250, window.innerHeight - 400);
sprite_3_4.scale.set(0.1)
const sprite_3_1 = Sprite.from('./assets/3/3_1.png');
sprite_3_1.anchor.set(0.5)
sprite_3_1.position.set(window.innerWidth - 250, window.innerHeight - 400);
sprite_3_1.scale.set(0.1)
sprite_3_1.alpha = 0
ScrollTrigger.create({
  trigger: ".chapter4",
  start: "top 80%",
  end: "bottom 50%",
  onEnter: self => {
    app.stage.addChild(sprite_3_1);
  },
});

gsap.to(sprite_3_1, {
	scrollTrigger: {
		trigger: ".chapter4page0trigger1",
		start: "top 82%",
    end: "bottom 70%",
		markers: false // markers enabled for debugging
	},
  duration: 5,
  alpha: 1.0
})