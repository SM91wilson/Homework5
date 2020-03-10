// function to set the time and change css depending on hour
function updateTimeBlock(){
var dayHours = (new Date()).getHours();
if(dayHours < 9){
    // var hours = document.querySelectorAll(".hour")
    // hours.className ="future";
    document.querySelectorAll(".hour").className = "future";
}else
if(dayHours === 9){ 
    var nine = document.getElementById("9");
    nine.className = "current";

}else 
if(dayHours === 10){
    nine.className = "past";
    var ten = document.getElementById("10");
    ten.className = "current";

}else 
if(dayHours === 11){
    ten.className = "past";
    var eleven = document.getElementById("11");
    eleven.className = "current";

}else
if(dayHours === 12){
    eleven.className = "past";
    var twelve = document.getElementById("12");
    twelve.className = "current";

}else
if(dayHours ===13){
    twelve.className = "past";
    var thirteen = document.getElementById("13");
    thirteen.className = "current";

}else
if(dayHours ===14){
    thirteen.className = "past";
    var fourteen = document.getElementById("14");
    fourteen.className = "current";
}else
if(dayHours ===15){
    fourteen.className = "past";
    var fifteen = document.getElementById("15");
    fifteen.className = "current";
}else
if(dayHours ===16){
    fifteen.className = "past";
    var sixteen = document.getElementById("16");
    sixteen.className = "current";
}else
if(dayHours ===17){
    sixteen.className = "past";
    var seventeen = document.getElementById("17");
    seventeen.className = "current";
}else{
    // hours.className = "past";
    // console.log(hours);
    document.querySelectorAll(".hour").className = "past";
};
console.log(dayHours);

// when time block === time, set class to current
// time block > time, set class to past
// time block < time, set class to future
}
setInterval(updateTimeBlock, 1000*60);
updateTimeBlock();

