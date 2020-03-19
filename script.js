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



































})


