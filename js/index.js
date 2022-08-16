import * as PIXI from 'pixi.js'
import * as contain from './setup.js';
import {
    go_toDestine
} from './currentState.js'
import {
    sheetIcon_0,
    sheet_0
} from './setup.js';

const Application = PIXI.Application;

window.app = new PIXI.Application({
    autoResize: true,
    //resolution: devicePixelRatio,
    width:1000,
    height:560,
    x:100,
    antialias: true, // default: false
    transparent: false, // default: false
    resolution: 1 // default: 1
});

app.renderer.backgroundColor = "green"
document.body.appendChild(app.view);

let background


function resize() {
    // Resize the renderer
    app.renderer.resize(window.innerWidth, window.innerHeight);

    // You can use the 'screen' property as the renderer visible
    // area, this is more useful than view.width/height because
    // it handles resolution
    //rect.position.set(app.screen.width, app.screen.height);
}

//resize();
contain.getFuncSprite(app);