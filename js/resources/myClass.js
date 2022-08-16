import * as PIXI from 'pixi.js'
class css {
    constructor(evt) {
        this.evt = evt
    }
    setCss(ap, id) {
        id.x = this.evt.x
        id.y = this.evt.y
        id.width = this.evt.w
        id.height = this.evt.h
        id.interactive = this.evt || false
        ap.addChild(id)
    }
}

let getPosition = 0
let getanim
let backer
class animatePLay {
    constructor(cssT) {
        this.cssT = cssT
    }

    animatePulse(circle,cont) {

        
        let con = new PIXI.Container()
        cont.addChild(con)
        circle.lineStyle(2, 0xFFFFFF);
circle.drawCircle(18, 18, 18);

circle.endFill();
circle.x = this.cssT.x + 16
circle.y =  this.cssT.y +16
circle.pivot.x = circle.width / 2;
circle.pivot.y = circle.height / 2;
con.zIndex =- 1
circle.visible=true
con.addChild(circle);

let scale = 1,
  motion = 1;
app.ticker.add(() => animateLoop());

function animateLoop() {
  if (motion == 1) {
    if (scale < 3) {
      scale += 0.1;
    } else {
      motion = 0;
    }
  } else {
    if (scale > 1) {
      scale -= 0.1;
    } else {
      motion = 1;
    }
  }
  circle.scale.set(scale, scale);
}
//         let x = this.cssT.x + 15
//         let y = this.cssT.y + 15

//         let con = new PIXI.Container()
//         cont.addChild(con)
        
//         id.drawCircle(x, y, getPosition)
        
// let scale = 1,
// motion = 1;
//         app.animationUpdate = function(delta) {
//             // just for fun, let's rotate mr rabbit a little
//             // delta is 1 if running at 100% performance
//             // creates frame-independent tranformation
//             if (motion == 1) {
//                 if (scale < 3) {
//                   scale += 0.1;
//                 } else {
//                   motion = 0;
//                 }
//               } else {
//                 if (scale > 1) {
//                   scale -= 0.1;
//                 } else {
//                   motion = 1;
//                 }
//               }
//               id.scale.set(scale, scale);
//         }
//         id.endFill()
//         // Listen for animate update
//         con.zIndex = this.cssT.z;
//         console.log(this.cssT.z)
//         con.addChild(id)
//         app.ticker.add(app.animationUpdate)

    }
    removeAnimate(circle) {
        circle.visible = false
    }
}
class textTo {
    constructor(cssA) {
        this.cssA = cssA
    }
    toSay(id, con) {
        id.x = 1000
        id.y = 528
        //id.y=1000
        id.visible = true

        backer = new PIXI.Graphics()
        backer.beginFill(0x68ba5d);

        // draw a rectangle
        backer.drawRect(10, 10, 500, 50);
        backer.x = 1000 //750
        backer.y = 515
        backer.visible = true
        con.addChild(backer)
        let i=1000,x=1000
        let animbutton0 = setInterval(function(){
            i = i - 30
            if(i<720) {
                clearInterval(animbutton0)
            }
            else {
                id.x = i
            }
        },5)
        let animbutton1 = setInterval(function(){
        
            x = x -10
            if(x<600) {
                clearInterval(animbutton1)
            }
            else {
                backer.x = x
            }
        },4)
        con.addChild(id);
    }
    toRemove(id) {
        id.visible = false
        backer.visible = false
        console.log(id)
    }
    displayTextButton(con) {
        let buttonText = new PIXI.Graphics();
        buttonText.beginFill(0x68ba5d);
        // draw a rectangle
        buttonText.drawRect(10, 10, 80, 30);
        con.addChild(buttonText)

    }

    
}
function gradient(from, to) {
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    const grd = ctx.createLinearGradient(0,0,100,100);
    grd.addColorStop(0, from);
    grd.addColorStop(1, to);
    ctx.fillStyle = grd;
    ctx.fillRect(0,0,100,100);
    return new PIXI.Texture.from(c);
  }
export {
    css,
    animatePLay,
    textTo
}