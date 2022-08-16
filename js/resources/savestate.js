import * as PIXI from 'pixi.js'
import { go_toDestine } from './../currentState.js'
export function saveState() {
    if(localStorage.getItem("map_0")==1) {
        new go_toDestine().to(1)
      }
      else if (localStorage.getItem("map_0")==4){
        new go_toDestine().to(4)
      }
      if(localStorage.getItem("map_0")==5) {
        new go_toDestine().to(5)
      }
    else if(localStorage.getItem("map_0")==0) {
      new go_toDestine().to(0)
    }
}       