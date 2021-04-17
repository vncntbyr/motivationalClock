import document from "document";
import * as timeCalculator from "../utils/timeCalculator";
import { HeartRateSensor } from "heart-rate";
import { display } from "display";
import { today } from "user-activity";

export {loadscreen1, loadscreen2, loadmainscreen, load };

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
 screen1.style.display = "inline";
 screen2.style.display = "none";

// global variables for the rect1
  let img1 = document.getElementById("watch2");
  img1.style.display = "none";

// global variables for the rect2
  let screen2aktiv = false;
  let hrm = new HeartRateSensor();
  let dateanchor = new Date();



  
  
  

function load(myLabel, rect1, rect2, rect3, rect4) {
 
  rect1.style.display = "inline";
  rect2.style.display = "inline";
  rect3.style.display = "inline";
  rect4.style.display = "inline";
  rect1.layer = 3;
  rect2.layer = 3;
  rect3.layer = 3;
  rect4.layer = 3;
}

function loadscreen1(myLabel, rect1, rect2, rect3, rect4){
  //onclick rect1 top-left (show cute picutre)

  //Get a handle on the img for screen 2 and remove initial display
  

  //let text and watch disappear
  screen1.style.display = (screen1.style.display === "inline") ? "none" : "inline";
  myLabel.style.display = (myLabel.style.display === "inline") ? "none" : "inline";
  //let image appear
  img1.style.display = (img1.style.display === "inline") ? "none" : "inline";
  //Deactivate other rectangles
  rect2.style.display = (rect2.style.display === "inline") ? "none" : "inline";
  rect3.style.display = (rect3.style.display === "inline") ? "none" : "inline";
  rect4.style.display = (rect4.style.display === "inline") ? "none" : "inline";
}

function loadscreen2(myLabel, rect1, rect2, rect3, rect4, item1, item2, item3, item4){
  
  //Wechseln auf Screen2
  if(!screen2aktiv) {  
  //toggle the quote and author
  screen1.style.display = (screen1.style.display === "inline") ? "none" : "inline";
  //toggle the list for vital data
  screen2.style.display = "inline";
  //reactivate the other rectangles
  rect1.style.display = (rect1.style.display === "inline") ? "none" : "inline";
  rect3.style.display = (rect3.style.display === "inline") ? "none" : "inline";
  rect4.style.display = (rect4.style.display === "inline") ? "none" : "inline";
    
  // item1 - Create Date and corresponding Day and show it as first list item
  let daynumeric = dateanchor.getDate();
  let month = dateanchor.getMonth();
  let dayindex = dateanchor.getDay();
    
  item1.text = "" + timeCalculator.dayfinder(dayindex) + ", " + daynumeric + ". " + timeCalculator.monthfinder(month);
   
  //item 2 - Heartrate Monitor
  hrm.start();
  if (HeartRateSensor) {
    console.log("success");
  hrm.addEventListener("reading", () => {
    item2.text = " : " + hrm.heartRate;
  });
  display.addEventListener("change", () => {
    // Automatically stop the sensor when the screen is off to conserve battery
    display.on ? hrm.start() : hrm.stop();
  });
  }
   screen2aktiv = true;
    
   //Wechseln auf Screen 1 
  } else {
  //toggle the quote and author
  screen1.style.display = (screen1.style.display === "inline") ? "none" : "inline";
  //toggle the list for vital data
  screen2.style.display = (screen2.style.display === "inline") ? "none" : "inline";
  //deactivate the other rectangles  
  rect1.style.display = (rect1.style.display === "inline") ? "none" : "inline";
  rect3.style.display = (rect3.style.display === "inline") ? "none" : "inline";
  rect4.style.display = (rect4.style.display === "inline") ? "none" : "inline";
    
    hrm.stop();
  screen2aktiv = false;  
  }
  
  //item3 - Pedometer (counts your steps)
  item3.text = " : " + today.adjusted.steps;
  
  //item 4 - Burned Calories
  item4.text = " : " + today.adjusted.calories;
}

function loadmainscreen(){
  
}