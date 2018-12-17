// Created by MUHAMMAD AMIRUDDIN BIN BUSTAMAN | 1711905
$(document).ready(function () {
    $("button").click(function (e) { 
        e.preventDefault();
        alert("Your Message have been submitted :)");
        // Reset the value of all inputs
        $("input").val("");
        // Reset the value of all textareas     
        $("textarea").val("");
        // console.log("OK");    
    });
});