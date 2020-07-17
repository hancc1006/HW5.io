// Array holds all of the drinks available
var Months = [
    "January", "February", "March", "April","May","June","July","August","September","October", "November", "Decemter"
  ];

var Days=[
    "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
]

var Time = 
    {8:"8AM", 
    9:"9AM", 
    10:"10AM", 
    11:"11AM",
    12:"12PM",
    13:"1PM", 
    14:"2PM",
    15:"3PM",
    16:"4PM",
    17:"5PM"};

var Time1=[8,9,10,11,12,13,14,15,16,17]
//var Time=["8AM","9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
let date= new Date();
let day = date.getDate();
let month = date.getMonth();
let year= date.getFullYear();
let week=date.getDay();
let fullDate = Days[week]+ "\n"+Months[month] + " "+ day + ", " + year;
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
let time= hours+ ":" + minutes+":"+seconds;
// console.log(fullDate);
// console.log(date);
// console.log(time);
// console.log(hours);
//console.log(Time[0][8]);
var timeBlock = document.createElement("div");

function block(){
    $("#currentDay").append(fullDate);
    //console.log(Time);
    //console.log(Object.keys(Time).length);
    //let key = [];
    // x= Object.keys(Time).forEach(function eachKey(key){console.log(key);});
   
    for(let i=8; i<Object.keys(Time).length + 8;i++){
    //for(let i=0; Time.length;i++){
        // $(timeBlock).append(Time);
        // console.log(timeBlock);
        var block = document.createElement("div");
        //console.log("test");
        block.textContent=Time[i];
        
        //console.log(Object.keys(Time).length);
        //console.log(key);
        block.align="Left";
        col = $("<div>").addClass("col-md-3");
        col1=$("<div>").addClass("col-md-9");
        col.append(block);
        row=$("<div>").addClass("row future");
        //row.addClass("future");
        for(var j=0; j<Time1.length;j++){
            //key.push(Object.keys(Time)[j]);
            //console.log(key);
            row.removeClass("future present past");
            if(hours < Time1[j]){
                row.addClass("future");
            }
            else if(hours === Time1[j]){
                row.addClass("present");
            }
            else if(hours > Time1[j]){
                row.addClass("past");
            }
        }
        button=$("<button>").addClass("saveBtn").append("Save");
        button.css("align","right");
        col1.append(row);
        col1.append(button);
        // $(".time-block").append(block);
        // $(".time-block").append(row);
        // $(".time-block").append(button);
        $(".time-block").append(col);
        $(".time-block").append(col1);
        //key.pop();
        

    }
    

}
block();
