import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
let currentDate = new Date(2023, 10, 22,19);
currentDate = currentDate.getHours();
let greeting="";
const cssStyle = {};
if(currentDate>= 1 && currentDate <12){
  greeting="Good Morning Pakistan";
  cssStyle.color= "green";
}else if(currentDate>= 12 && currentDate <19){
  greeting="Good Afternoon Karachi"; 
  cssStyle.color= "red";
}else{
  greeting="Good Night World";
  cssStyle.color= "purple"; 
} 

ReactDOM.render(
  <>
  <div>
    <h1> <span style={cssStyle}> {greeting}</span>!</h1>
    </div>
  </>,
document.getElementById("root"));