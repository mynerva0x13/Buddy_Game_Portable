
import {sheetIcon_0,sheet_0 
    ,getFuncSprite,getContainerButton,container, 
    container2,container3,background0 ,
    loader,Sprite,PIXI,index_container

} from './../js/setup.js';
import {
    css,
    animatePLay,
    textTo
} from './resources/myClass.js'
import * as main_campus from './../js/setup.js'

export function go_toDestine() {
    let id_1_lake;
    let id_1_canteen,id_1_kitchen;;
    let text_1
    let text_1_canteen,text_1_kitchen;
    let layer_back;
    let background

    let sheetIcon = sheetIcon_0
    let spriteBack = sheet_0
    this.to = function(set_to) {
        
        console.log(background0[1])
        saveDat = set_to 
        let destine = [
            "go_campus", "go_lake","","","go_canteen","go_kitchen"
        ]
        if (destine[saveDat] == "go_lake") {
            container2.visible = false
            layer_back = 1
            //back.visible = false
            background = new PIXI.Sprite(spriteBack.textures[background0[1]]);
            background.x = 0
            background.y = 0
            
            container3.visible = true
            container3.addChild(background)
            toSave( saveDat, background0)
            getContainerButton_from_lake(sheetIcon,background0, background)
        }
        else if (destine[saveDat] == "go_canteen") {
            container2.visible = false
            layer_back = 1
            //back.visible = false
            background = new PIXI.Sprite(spriteBack.textures[background0[4]]);
            background.x = 0
            background.y = 0
            container3.zIndex = 1
            container3.visible = true
            container3.addChild(background)
            toSave( saveDat, background0)
            getContainerButton_from_canteen(sheetIcon)
        }
        else      if (destine[saveDat] == "go_kitchen") {
            container2.visible = false
            layer_back = 1
            //back.visible = false
            background = new PIXI.Sprite(spriteBack.textures[background0[5]]);
            background.x = 0
            background.y = 0
            
            container3.visible = true
            container3.addChild(background)
            toSave( saveDat, background0)
           getContainerButton_from_kitchen(sheetIcon)
        }
        else if (destine[saveDat] == "go_campus") {
            background = new PIXI.Sprite(spriteBack.textures[background0[saveDat]]);
            background.x = 0
            background.y = 0
            background.visible = true
            container.sortableChildren = true
            container.zIndex = 3
            container.visible=true
            getContainerButton(container, sheetIcon_0, sheet_0) // CALL THE FUNCTION OF getContainerButton
            index_container.addChild(background) //ADD CHILD OF BACKGROUND IMAGE
          
                container3.visible = false
        }
        else {}
        }
        
        function getContainerButton_from_kitchen(sheetIcon) {
            let obj_to_main_kitchen = new PIXI.Sprite(sheetIcon.textures["next_Place.png"])
            let design__to_main_kitchen = new css({
                x: 480,
                y: 480,
                w: 50,
                h: 50
            }).setCss(container3,obj_to_main_kitchen)
            obj_to_main_kitchen .mouseover = function() {
                id_1_canteen = new PIXI.Graphics()
                new animatePLay({
                    x: 480,
                    y: 310,
                    z:-1
                }).animatePulse(id_1_canteen,container3)
    
                text_1_canteen = new PIXI.Text("Outside Campus", {
                    font: "20px Arial",
                    fill: "white"
                });
                new textTo({
                    x: 595,
                    y: 350
                }).toSay(text_1_canteen,container3)
                console.log("ACT OKAY")

                obj_to_main_kitchen.on('click',function(){
                    loader.reset()
                    new go_toDestine().to(4)
                })
            }

            obj_to_main_kitchen.mouseout = function() {
                console.log("OUR")
                new animatePLay().removeAnimate(id_1_canteen)
    
                new textTo().toRemove(text_1_canteen)
            }

        }
        function getContainerButton_from_canteen(sheetIcon) {
            let obj_to_main_campus_canteen = new PIXI.Sprite(sheetIcon.textures["next_Place.png"])
            let design_to_main_campus = new css({
                x: 480,
                y: 310,
                w: 30,
                h: 30
            }).setCss(container3, obj_to_main_campus_canteen)

            obj_to_main_campus_canteen .mouseover = function() {
                id_1_canteen = new PIXI.Graphics()
                new animatePLay({
                    x: 480,
                    y: 310,
                    z:-1
                }).animatePulse(id_1_canteen,container3)
    
                text_1_canteen = new PIXI.Text("Outside Campus", {
                    font: "20px Arial",
                    fill: "white"
                });
                new textTo({
                    x: 595,
                    y: 350
                }).toSay(text_1_canteen,container3)
                console.log("ACT OKAY")

                obj_to_main_campus_canteen.on('click',function(){
                    loader.reset()
                    new go_toDestine().to(0)
                })
            }

            obj_to_main_campus_canteen.mouseout = function() {
                console.log("OUR")
                new animatePLay().removeAnimate(id_1_canteen)
    
                new textTo().toRemove(text_1_canteen)
            }

            
            let obj_to_kitchen = new PIXI.Sprite(sheetIcon.textures["next_Place.png"])
            let design_to_kitchen = new css({
                x: 470,
                y: 480,
                w: 50,
                h: 50
            }).setCss(container3, obj_to_kitchen)
            obj_to_kitchen.mouseover = function() {
                id_1_kitchen = new PIXI.Graphics()
                new animatePLay({
                    x: 480,
                    y: 485,
                    z:-1
                }).animatePulse(id_1_kitchen,container3)
    
                text_1_kitchen = new PIXI.Text("Kitchen", {
                    font: "20px Arial",
                    fill: "white"
                });
                new textTo({
                    x: 595,
                    y: 350
                }).toSay(text_1_kitchen,container3)
                console.log("ACT OKAY")

                obj_to_kitchen.on('click',function(){
                    loader.reset()
                    new go_toDestine().to(5)
                })
            }

            obj_to_kitchen.mouseout = function() {
                console.log("OUR")
                new animatePLay().removeAnimate(id_1_kitchen)
    
                new textTo().toRemove(text_1_kitchen)
            }

        }


        function getContainerButton_from_lake(sheetIcon) {
            let obj_to_main_campus = new PIXI.Sprite(sheetIcon.textures["next_Place.png"])
            let design_to_main_campus = new css({
                x: 600,
                y: 500,
                w: 50,
                h: 50
            }).setCss(container3, obj_to_main_campus)

            obj_to_main_campus.mouseover = function() {
                id_1_lake = new PIXI.Graphics()
                new animatePLay({
                    x: 610,
                    y: 510,
                    z:-1
                }).animatePulse(id_1_lake,container3)
    
                text_1 = new PIXI.Text("Canteen", {
                    font: "20px Arial",
                    fill: "white"
                });
                new textTo({
                    x: 565,
                    y: 450
                }).toSay(text_1,container3)

                obj_to_main_campus.on('click', function(){
                    new go_toDestine().to(0)
                })
            }
            obj_to_main_campus.mouseout = function() {
                console.log("OUR")
                new animatePLay().removeAnimate(id_1_lake)
                new textTo().toRemove(text_1)
            }


        }
function toSave(saveDat,back0) {
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
        container3.addChild(saveButton);
        container3.addChild(buttonSaveText)

        saveButton.interactive = true

        saveButton.on('click', function() {
            localStorage.setItem("map_0", saveDat)
            localStorage.setItem("back_0", JSON.stringify(back0))
        })
    }
    }



/*
    MAIN CAPUS HAS
        BTN 1
            GO TO LAKE
            HIDE THE MAIN CAMPUS

            OR

            GO_DESTINE(LAKE.ID)
        BTN 2
    
        BTN3
    
    LAKE HAS
        BTN 1
            BACK TO MAIN CAMPUS
*/