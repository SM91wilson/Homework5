var today = new Date();
var currentDate = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
document.getElementById("currentDay").textContent = currentDate;
console.log(currentDate);
let hours = document.querySelectorAll(".hour")
var nine = document.getElementById("9");
var ten = document.getElementById("10");
var eleven = document.getElementById("11");
var twelve = document.getElementById("12");
var thirteen = document.getElementById("13");
var fourteen = document.getElementById("14");
var fifteen = document.getElementById("15");
var sixteen = document.getElementById("16");
var seventeen = document.getElementById("17");
// hours.classList.add("future");
console.log(hours);

// function to set the time and change css depending on hour
function updateTimeBlock(){
var dayHours = today.getHours();
console.log(dayHours);

// if(dayHours < 9){
    
// }else
if(dayHours === 9){ 
    nine.classList.add("present");

}else 
if(dayHours === 10){
    nine.classList.add("past");
    ten.classList.add("present");

}else 
if(dayHours === 11){
    ten.classList.add("past");
    eleven.classList.add("present");

}else
if(dayHours === 12){
    eleven.classList.add("past");
    twelve.classList.add("present");

}else
if(dayHours ===13){
    twelve.classList.add("past");
    thirteen.classList.add("present");

}else
if(dayHours ===14){
    thirteen.classList.add("past");
    fourteen.classList.add("present");
    
}else
if(dayHours ===15){
    fourteen.classList.add("past");
    fifteen.classList.add("present");
}else
if(dayHours ===16){
    fifteen.classList.add("past");
    sixteen.classList.add("present");
}else
if(dayHours ===17){
    sixteen.classList.add("past");
    seventeen.classList.add("present");
}else{
    hours.classList.add("past");
    console.log(hours);
    document.querySelectorAll(".hour").classList.add("past");
};



// when time block === time, set class to current
// time block > time, set class to past
// time block < time, set class to future
}
setInterval(updateTimeBlock, 1000*60);
updateTimeBlock();

