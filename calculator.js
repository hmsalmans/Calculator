$(document).ready(function() {


    // Variables needed
    
    var number1 = "";
    var number2 = "";
    var operator = "";
    var firstNumber = true;
    
    
    
    //Building functions for number keys
    
    $(".number").on("click", function(){
        if (firstNumber){
            number1 += $(this).attr("value");
            $("#first").html(number1);
        }
        else {
            number2 += $(this).attr("value");
            $("#second").html(number2);
        }
    
    });
    
    
    
    //Building functions for operations
    
    
    $(".operator").on("click", function(){
        firstNumber = flase;
        if (firstNumber){
            number1 += $(this).attr("value");
            $("#first").html(number1);
        }
        else {
            number2 += $(this).attr("value");
            $("#second").html(number2);
        }
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    });