$(document).ready(function() {

    $(".saveBtn").click(function() {
        console.log("click");
        var description = $("d9").val();
        // need to turn description into something that storage can read
        localStorage.setItem("9:00 AM: ", description);
        $("d9").text("9:00 AM: " + localStorage.getItem("9:00 AM:"))
    })




































})


