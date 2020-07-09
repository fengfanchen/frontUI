;

import * as Two from "JS/two";
import * as $ from "JS/jquery";

let two;
let mouse;
let isPressed = false;
let originalPositionX = 0;
let originalPositionY = 0;
let map = new Map();
let rect;

export function drawGraphic(){

  let elem = document.getElementById("draw-shapes");
  let params = {

    type: Two.Types['webgl'],
    fullscreen: true,
    autostart: true
  };

  two = new Two(params).appendTo(elem);
  mouse = new Two.ZUI(two.scene);
  mouse.addLimits(0.1, 10);

  let $stage = $(two.renderer.domElement);
  $stage.bind('mousewheel wheel', function(event){

    let e = event.originalEvent;
    e.stopPropagation();
    e.preventDefault();

    let dy = (e.wheelDeltaY || -e.deltaY) / 1000;
    mouse.zoomBy(dy, e.clientX, e.clientY);
  });

  $stage.bind('mouseup', function(event){

    isPressed = false;
  });
  $stage.bind('mouseout', function(event){

    isPressed = false;
  });

  $stage.bind('mousedown', function(event){

    isPressed = true;
    originalPositionX = event.clientX;
    originalPositionY = event.clientY;

    let x = event.clientX;
    let y = event.clientY;

    let letX = (rect._translation._x / 2 * (two.scene._matrix.elements[0]) + two.scene._matrix.elements[2]);
    let letY = (rect._translation._y / 2 * (two.scene._matrix.elements[4]) + two.scene._matrix.elements[5]);
    let letWidth = rect._width * two.scene._matrix.elements[0];
    let letHeight = rect._height *two.scene._matrix.elements[4];

    // if(x > letX &&
    //   y > letY &&
    //   x < letX + letWidth &&
    //   y < letY + letHeight
    // ){
    //
    //   console.log("find it");
    // }

    // console.log("坐标 x=" + x + "  y=" + y);

    console.log(two);
    for(let value of map){

      let xOffset = value[0]._width / 2;
      let yOffset = value[0]._height / 2;
      // console.log("xOffset:" + xOffset);
      // console.log("yOffset:" + yOffset);

      // console.log(value[0])
      let letX = ((value[0]._translation._x - xOffset) * (two.scene._matrix.elements[0]) + two.scene._matrix.elements[2]);
      let letY = ((value[0]._translation._y - yOffset) * (two.scene._matrix.elements[4]) + two.scene._matrix.elements[5]);
      let letWidth = value[0]._width * two.scene._matrix.elements[0];
      let letHeight = value[0]._height * two.scene._matrix.elements[4];

      // console.log("id:" + value[0].myId);
      // console.log("letX:" + letX + "  letY:" + letY);
      // console.log("letWidth: " + letWidth + "  letHeight:" + letHeight);
      // console.log("");

      if(x > letX &&
        y > letY &&
        x < letX + letWidth &&
        y < letY + letHeight
      ){

        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);

        let rgbStr = "rgb(" + r + "," + g + "," + b + ")";
        value[0].fill = rgbStr;
        console.log("find it " + value[0].myId);
        break;
      }
    }

    // console.log("---------------------------------");

  });

  $stage.bind('mousemove', function(event){

    if(isPressed){

      let boolX = event.clientX - originalPositionX;
      let boolY = event.clientY - originalPositionY;
      mouse.graphicMove(boolX, boolY);
      originalPositionX = event.clientX;
      originalPositionY = event.clientY;
    }
  });

  createBtn(1001, 200, 200, 500, "red");
  createBtn(1002, 400, 400, 500, "green");
  createBtn(1003, 600, 600, 500, "blue");
  createBtn(1004, 800, 800, 500, "black");
  createBtn(1005, 1000, 1000, 500, "yellow");
  createBtn(1006, 400, 800, 500, "purple");
}

function createBtn(id, x, y, weight, color) {

  rect = two.makeRectangle(x, y, 200, 200);
  rect.noStroke();
  rect.fill = color;
  rect.myId = id;

  map.set(rect, weight);
}
