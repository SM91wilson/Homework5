$(document).ready(function () {
    // gets the current date
    var today = new Date();
    var day = ("0" + today.getDate()).slice(-2) + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + today.getFullYear();
    // function for setting whether time block is past present or future
    function updateTimeBlock() {
        // gets the current hour
        var dayHours = today.getHours();
        // function to run through every timeblock and compare id number to current hour of the day
        $(".time-block").each(function () {
            // var to get the number value of each timeblock
            var timeBlock = parseInt($(this).attr("id"));
            // if statement to check f the timeblock is past, present or future
            if (timeBlock > dayHours) {
                $(this).addClass("future");
            } else if (timeBlock === dayHours) {
                $(this).addClass("present");
                $(this).removeClass("past");
            } else {
                $(this).removeClass("future", "present");
                $(this).addClass("past");
            }
        })
    };

    // saving action to local storage
    $(".saveBtn").on("click", function (e) {
        var button = e.target
        var objective = $(button).siblings(".description").val();
        var timeSlot = $(button).parent().attr("id");
        localStorage.setItem(timeSlot, objective);
    })

    // loading action from local storage
    $("#9 .description").text(localStorage.getItem("9"));
    $("#10 .description").text(localStorage.getItem("10"));
    $("#11 .description").text(localStorage.getItem("11"));
    $("#12 .description").text(localStorage.getItem("12"));
    $("#13 .description").text(localStorage.getItem("13"));
    $("#14 .description").text(localStorage.getItem("14"));
    $("#15 .description").text(localStorage.getItem("15"));
    $("#16 .description").text(localStorage.getItem("16"));
    $("#17 .description").text(localStorage.getItem("17"));

    // display current date
    $("#currentDay").text(day);
    // check for new hour every minute
    setInterval(updateTimeBlock, 1000 * 60);
    updateTimeBlock();
})


