
import * as PIXI from 'pixi.js'
import * as currentState from './currentState.js';
import {
    css,
    animatePLay,
    textTo
} from './resources/myClass.js'
import {
    saveState
} from './resources/savestate.js'
//CREATE SEPARATED FUNCTION FOR SETUP 
let sheet_0, sheetIcon_0

let background0 = ["camp_main.png", "Lake_day.png","","","Messhall_day.png","Kitchen_day.png"]
let background
let background_lake
let container
let container2
let container3
let index_container
let loader,resources,Sprite
export function getFuncSprite(app) {
   loader = PIXI.Loader.shared,
   resources = PIXI.Loader.shared.resources,
   Sprite = PIXI.Sprite;
    var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, null);

    loader //LOADER OF EACH DATA SPRITESHEET
        .add("./js/images/spriteBackground.json")
        .add("./js/images/iconspreet.json")
        .load(setup);

    window.saveDat = 0
    index_container = new PIXI.Container();
    container = new PIXI.Container();
    container2 = new PIXI.Container();
    container3 = new PIXI.Container();
    
    app.stage.addChild( index_container );
    app.stage.addChild(container);
    app.stage.addChild(container2)
    app.stage.addChild(container3)


    function setup() {
        sheet_0 = loader.resources["./js/images/spriteBackground.json"];
        sheetIcon_0 = loader.resources["./js/images/iconspreet.json"];
        console.log(saveDat)
        if (localStorage.length <= 0 ) {
            new currentState.go_toDestine().to(0)
        } 
        else if(localStorage !==null) {
            saveState()
        }
    }

}
    //CREATE SEPARATION BUTTON OF FIRST FRAME
    function getContainerButton(thisApp, sheetIcon, sheetback) {
        let id_1, id_2, id_3, id_4, id_5 //DECLARE IDETIFICATION OF PULSE BUTTON ANIMATION
        let text_1, text_2, text_3, text_4, text_5
        let fontStyle = "1px Arial"
        //
        // START TO MAKE CABIN BUTTON
        //

        //CREATE CABIN 1 ICON Button
        let obj_to_Cabin_1 = new PIXI.Sprite(sheetIcon.textures["allow_OPEN.png"])
        let cabin_design = new css({
            x: 212,
            y: 240,
            w: 30,
            h: 30,
            interactive: true
        }).setCss(thisApp, obj_to_Cabin_1)

        // INTERACTIVE CABIN 1 Button
        obj_to_Cabin_1.mouseover = function() {

            id_1 = new PIXI.Graphics()
            new animatePLay({
                x: 212,
                y: 240,
                z:-1
            }).animatePulse(id_1,container)


            text_1 = new PIXI.Text("Cabin 1", {
                font:  fontStyle,
                fill: "white"
            });
           new textTo().toSay(text_1,container)
        }
        obj_to_Cabin_1.mouseout = function() {
            new animatePLay().removeAnimate(id_1)
            new textTo().toRemove(text_1)
        }

        //END CABIN 1 BUTTON


        //
        // START TO MAKE CABIN 2 BUTTON
        //

        //CREATE CABIN 2 ICON Button
        let obj_to_Cabin_2 = new PIXI.Sprite(sheetIcon.textures["not_Allow.png"])
        let cabin_2_design = new css({
            x: 765,
            y: 240,
            w: 30,
            h: 30
        }).setCss(thisApp, obj_to_Cabin_2)

        //INTERACTIVE CABIN 2 BUTTON
        obj_to_Cabin_2.mouseover = function() {
            id_2 = new PIXI.Graphics()
            new animatePLay({
                x: 765,
                y: 240,
                z:-1
            }).animatePulse(id_2,container)


            text_2 = new PIXI.Text("Cabin 2", {
                font: fontStyle,
                fill: "white"
            });
            new textTo({
                x: 945,
                y: 240
            }).toSay(text_2,container)
        }
        obj_to_Cabin_2.mouseout = function() {
            console.log("OUR")
            new animatePLay().removeAnimate(id_2)
            new textTo().toRemove(text_2)
        }

        //END CABIN 2 BUTTON


        //
        // START TO LAKE 2 BUTTON
        //

        //CREATE LAKE BUTTON
        let obj_to_Lake = new PIXI.Sprite(sheetIcon.textures["next_Place.png"])
        let lake_design = new css({
            x: 530,
            y: 220,
            w: 30,
            h: 30
        }).setCss(thisApp, obj_to_Lake)

        //INTRERACTIVE LAKE BUTTON
        obj_to_Lake.mouseover = function() {

            id_3 = new PIXI.Graphics()
            new animatePLay({
                x: 530,
                y: 220,
                z:-1
            }).animatePulse(id_3,container)

            text_3 = new PIXI.Text("Lake Buddy", {
                font: fontStyle,
                fill: "white"
            });
            new textTo({
                x: 700,
                y: 230
            }).toSay(text_3,container)

            obj_to_Lake.on('click', function() {

                new currentState.go_toDestine().to(1)

            })
        }
        obj_to_Lake.mouseout = function() {
            console.log("OUR")
            new animatePLay().removeAnimate(id_3)

            new textTo().toRemove(text_3)
        }

        //END LAKE BUTTON

        let obj_to_canteen = new PIXI.Sprite(sheetIcon.textures["next_Place.png"])
        let canteen_design = new css({
            x: 150,
            y: 350,
            w: 50,
            h: 50
        }).setCss(thisApp, obj_to_canteen)

        //INTRERACTIVE CANTEEN BUTTON
        obj_to_canteen.mouseover = function() {
            id_4 = new PIXI.Graphics()
            new animatePLay({
                x: 160,
                y: 360,
                z:-1
            }).animatePulse(id_4,container)

            text_4 = new PIXI.Text("Canteen", {
                font:  fontStyle,
                fill: "white"
            });
            new textTo({
                x: 180,
                y: 370
            }).toSay(text_4,container)

            obj_to_canteen.on('click', function() {

                new currentState.go_toDestine().to(4)

            })
        }
        obj_to_canteen.mouseout = function() {
            console.log("OUR")
            new animatePLay().removeAnimate(id_4)

            new textTo().toRemove(text_4)
        }

        let obj_to_office = new PIXI.Sprite(sheetIcon.textures["next_Place.png"])
        let office_design = new css({
            x: 1070,
            y: 350,
            w: 50,
            h: 50
        }).setCss(thisApp, obj_to_office)

        //INTRERACTIVE CANTEEN BUTTON
        obj_to_office.mouseover = function() {
            id_5 = new PIXI.Graphics()
            new animatePLay({
                x: 1080,
                y: 360,
                z:-1
            }).animatePulse(id_5,container)

            text_5 = new PIXI.Text("Office", {
                font: fontStyle,
                fill: "white"
            });
            new textTo({
                x: 1060,
                y: 380
            }).toSay(text_5,container)
        }
        obj_to_office.mouseout = function() {
            console.log("OUR")
            new animatePLay().removeAnimate(id_5)

            new textTo().toRemove(text_5)
        }
        let saveButton = new PIXI.Graphics();
        saveButton.beginFill(0x68ba5d);
    
        // draw a rectangle
        saveButton.drawRect(10, 10, 80, 30);
    
        let buttonSaveText = new PIXI.Text("Save Game", {
            font: "20px Arial",
            fill: "white"
        });
        buttonSaveText.position.x = 10
        buttonSaveText.position.y = 10
        container.addChild(saveButton);
        container.addChild(buttonSaveText)
    
        saveButton.interactive = true
    
        saveButton.on('click', function() {
            localStorage.setItem("map_0", saveDat)
            localStorage.setItem("back_0", JSON.stringify(background0))
        })

    }

export {
    sheetIcon_0,
    sheet_0,
    getContainerButton,
    index_container,
    container,
    container2,
    container3,
    background0,
    loader,resources,Sprite,PIXI
}
// function animatePlay(con) {
//     let max_position = 10
//     this.pulse = function(x,y,show) {
//         if(show==true) {}
//         const gr  = new PIXI.Graphics();
//         let getPosition = 0;

//             let ev = setInterval(function() {
//             getPosition += 1

//             if(getPosition < max_position) {

//             gr.beginFill(0xffffff);
//             gr.drawCircle(x+10, y+10, getPosition);
//             gr.endFill();
//             console.log(getPosition)
//             }



//         },100)

//         con.addChild(gr)

//         return ev
//     }
// }
// }