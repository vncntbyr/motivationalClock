import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as timeCalculator from "../utils/timeCalculator";
import * as screenloader from "../utils/screenloader";
import * as Database from "../common/database";

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////elements///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const textbox = document.getElementById("quote");
const author = document.getElementById("author");

const rect1 = document.getElementById("top-left");
const rect2 = document.getElementById("top-right");
const rect3 = document.getElementById("bottom-left");
const rect4 = document.getElementById("bottom-right");

const item1 = document.getElementById("list-item-1");
const item2 = document.getElementById("list-item-2");
const item3 = document.getElementById("list-item-3");
const item4 = document.getElementById("list-item-4");

let counter = 0;
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////Clock////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");

myLabel.style.display = "inline";

clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = timeCalculator.zeroPad(hours);
    
    if(parseInt(hours) == 24){
      nextDay();
    }
  }
  let mins = timeCalculator.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
  
}

////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////Styling////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

textbox.style.display = "inline";
author.style.display = "inline";

rect1.layer, rect2.layer, rect3.layer, rect4.layer = 3;


// load all elements in the js
screenloader.load(myLabel, rect1, rect2, rect3, rect4);

//onclick rect1 top-left (show cute picutre)
rect1.onclick = function() {
  screenloader.loadscreen1(myLabel, rect1, rect2, rect3, rect4);
}; 

//onclick rect2 top-right (vital dates)
rect2.onclick = function() {
   
  screenloader.loadscreen2(myLabel, rect1, rect2, rect3, rect4, item1, item2, item3, item4);
}; 
  

//onclick rect3 bottom-left (one page to the left / one quote back)
rect3.onclick = function() {
  if(counter == 0)
  {}
  else {
  counter--;
  }
  textbox.text = Database.data[counter].quote;
   author.text =Database.data[counter].author;
};
//onclick rect4 bottom-right (one page to the right / skip a quote)
rect4.onclick = function() {
  counter++;
  textbox.text = Database.data[counter].quote;
   author.text =Database.data[counter].author;
};
//onclick rect5 middle (initial quote)
  textbox.text = Database.data[0].quote;
   author.text =Database.data[0].author;
//One Quote further
function nextDay() {
   counter++;
  textbox.text = Database.data[counter].quote;
   author.text =Database.data[counter].author;
}

