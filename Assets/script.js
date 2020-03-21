$(document).ready(function() {

    //Local storage for 9 AM
    $(".saveBtn.b9").click(function() {
        console.log("click");
        var description = $(".d9").val();
    
        localStorage.setItem("9:00 AM", description);
        
    })

    $(".d9").val(localStorage.getItem("9:00 AM"));


    //Local storage for 10 AM
    $(".saveBtn.b10").click(function() {
        console.log("click");
        var description = $(".d10").val();
    
        localStorage.setItem("10:00 AM", description);
        
    })

    $(".d10").val(localStorage.getItem("10:00 AM"));


    //Local storage for 11 AM
    $(".saveBtn.b11").click(function() {
        console.log("click");
        var description = $(".d11").val();
    
        localStorage.setItem("11:00 AM", description);
        
    })

    $(".d11").val(localStorage.getItem("11:00 AM"));


    //Local storage for 12 PM
    $(".saveBtn.b12").click(function() {
        console.log("click");
        var description = $(".d12").val();
    
        localStorage.setItem("12:00 PM", description);
        
    })

    $(".d12").val(localStorage.getItem("12:00 PM"));

    //Local storage for 1 PM
    $(".saveBtn.b1").click(function() {
        console.log("click");
        var description = $(".d1").val();
    
        localStorage.setItem("1:00 PM", description);
        
    })

    $(".d1").val(localStorage.getItem("1:00 PM"));

    //Local storage for 2 PM
    $(".saveBtn.b2").click(function() {
        console.log("click");
        var description = $(".d2").val();
    
        localStorage.setItem("2:00 PM", description);
        
    })

    $(".d2").val(localStorage.getItem("2:00 PM"));

    //Local storage for 3 PM
    $(".saveBtn.b3").click(function() {
        console.log("click");
        var description = $(".d3").val();

        localStorage.setItem("3:00 PM", description);
        
    })

    $(".d3").val(localStorage.getItem("3:00 PM"));

    //Local storage for 3 PM
    $(".saveBtn.b3").click(function() {
        console.log("click");
        var description = $(".d3").val();
    
        localStorage.setItem("3:00 PM", description);
        
    })

    $(".d3").val(localStorage.getItem("3:00 PM"));


    //Local storage for 4 PM
    $(".saveBtn.b4").click(function() {
        console.log("click");
        var description = $(".d4").val();
    
        localStorage.setItem("4:00 PM", description);
        
    })

    $(".d4").val(localStorage.getItem("4:00 PM"));

    //Local storage for 5 PM
    $(".saveBtn.b5").click(function() {
        console.log("click");
        var description = $(".d5").val();
    
        localStorage.setItem("5:00 PM", description);
        
    })

    $(".d5").val(localStorage.getItem("5:00 PM"));



    //set todays date in the header
    var todaysDate = moment().format("dddd, MMMM Do YYYY");
    
    //color coding the time boxes
    $("#currentDay").text(todaysDate);

    //declaring the current hour in 24 hr format
    var currentHour = moment().format("H");
    currentHour = parseInt(currentHour);

    //getting the time of the each hour box in the planner & turning it to a number
    var t9 = $(".t9").text();
    var t9 = parseInt(t9);

    var t10 = $(".t10").text();
    var t10 = parseInt(t10);

    var t11 = $(".t11").text();
    var t11 = parseInt(t11);

    var t12 = $(".t12").text();
    var t12 = parseInt(t12);

    //need to add 12 to the afternoon hours to match the 24 hour format and work with below if statements
    var t1 = $(".t1").text();
    var t1 = parseInt(t1) +12;

    var t2 = $(".t2").text();
    var t2 = parseInt(t2) +12;

    var t3 = $(".t3").text();
    var t3 = parseInt(t3) +12;

    var t4 = $(".t4").text();
    var t4 = parseInt(t4) +12;

    var t5 = $(".t5").text();
    var t5 = parseInt(t5) +12;



    //arrays to hold both the 
    
    var timeBlocks = [t9, t10, t11, t12, t1, t2, t3, t4, t5];

    var plannerBlocks = [".d9", ".d10", ".d11", ".d12", ".d1", ".d2", ".d3", ".d4", ".d5"];
    
    
    
    //loop through the calendar blocks and assign classes to color the planner appropriately

    for (var i = 0; i < timeBlocks.length; i++) {

        if (timeBlocks[i] === currentHour) {
            $(plannerBlocks[i]).addClass("present");
        } else if(timeBlocks[i] < currentHour) {
            $(plannerBlocks[i]).addClass("past");
        } else {
            $(plannerBlocks[i]).addClass("future");
        }
    }




































})


