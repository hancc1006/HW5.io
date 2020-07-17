// Array holds all of the drinks available
var Months = [
    "January", "February", "March", "April","May","June","July","August","September","October", "November", "Decemter"
  ];

var Days=[
    "Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
]

var Time = [
    "8AM", "9AM", "10AM", "11AM","12PM","1PM", "2PM","3PM","4PM","5PM"
]

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
console.log(fullDate);
console.log(date);
console.log(time);

var timeBlock = document.createElement("div");

function block(){
    $("#currentDay").append(fullDate);
    for(var i=0; i<Time.length;i++){
        // $(timeBlock).append(Time);
        // console.log(timeBlock);
        var block = document.createElement("div");
        block.textContent= Time[i];
        $(".time-block").append(block);
        

    }

}
block();