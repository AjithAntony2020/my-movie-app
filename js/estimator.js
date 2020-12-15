//Scripted by Ashiq Mohammed Rafy

var classArr = ["Silver - $30","Gold - $40","Platinum - $50"];

$(document).ready(function() {
    var snacksToggle = false;
//    Hide snack div when page is loaded
    $("#snacksDiv").toggle();
    $("#seats").focus();
//    Populate Movies Dropdown From localStorage
    var populateTitles = function(){
        var movies;

        movies = JSON.parse(localStorage.getItem("MovieList")); 
        if(movies == null){
            alert("Please Add Movies to List From Home Page");
            window.location.replace("index.html");
        }
        
        var dropdown = document.getElementById("movies");
        var listItems = dropdown.innerHTML;
        for(var i = 0; i < movies.length; i++){
            listItems += "<option>" + movies[i].title + "</option>"          
        }
        dropdown.innerHTML = listItems;

     };


     populateTitles();
    
//    Populate classes dropdown from array
    var classesHtml = "";
    for(var index in classArr){
        classesHtml += "<option>"+classArr[index]+"</option>";     
    }
    $("#classes").html(classesHtml);
    
//    Display snacks div when clicking radio Btn
    $("#yesradio").click(function(){
        if($("#snacksDiv").is(":hidden")){
            $("#snacksDiv").toggle();
            snacksToggle = true;
        }
    });
    
//    Display snacks div when clicking radio Btn
    $("#noradio").click(function(){
        if($("#snacksDiv").is(":visible")){
            $("#snacksDiv").toggle();
            snacksToggle = false;
        }
    });
    
//    Calculate Cost
    $("#calculate").click(function(){
        var isValid = true;
        
        var movieSelected = $('#movies :selected').text();
        var classSelected = $('#classes :selected').text();
        var seats = $("#seats").val().trim();
        var snackSekected = "";
        var snackAmount = "";
        
//        Validate Input
        if(!isNaN(seats) && seats != ""){
            seats = parseInt($("#seats").val());
            if(seats < 0 || seats > 25){
                $("#seats").next().text("Must be a valid value between 1 and 25.");
                isValid = false;
            }else{
                $("#seats").next().text("");
                $("#seats").val(seats);
            }
        }else{
            $("#seats").next().text("Must be a valid value between 1 and 25.");
            isValid = false;
            console.log("3");
        }
        if(snacksToggle){
            snackSekected = $('#selectSnack :selected').text();
            snackAmount = $("#selectSnackAmount").val().trim();
            if(!isNaN(snackAmount) && snackAmount != ""){
                snackAmount = parseInt($("#selectSnackAmount").val());
                if(snackAmount < 0 || snackAmount > 25){
                    $("#selectSnackAmount").next().text("Must be a valid value between 1 and 25.");
                    isValid = false;
                }else{
                    $("#selectSnackAmount").next().text("");
                    $("#selectSnackAmount").val(snackAmount);
                }
            }else{
                $("#selectSnackAmount").next().text("Must be a valid value between 1 and 25.");
                isValid = false;
            }
        }
    //        Calculate Ticket Cost if Validation is Passed
    if(isValid){
        $("#ticketCost").next().text("");
        var ticketCost = 0;
        if(classSelected == classArr[0]){
            ticketCost += 30;
        }else if(classSelected == classArr[1]){
            ticketCost += 40;
        }else
            ticketCost += 50;
//        Add $10 if movie name contains 3D
        if(movieSelected.toLowerCase().indexOf("3d") != -1){
            ticketCost += 10;
            $("#ticketCost").next().text("Extra $10 for 3D Movie");
        }
        ticketCost = ticketCost * seats;
        if(seats > 0 && seats <= 5){
            $("#seats").next().text("5% Discount Applied");
            ticketCost = ticketCost * 0.95;
        }else if(seats > 5 && seats <= 10){
            $("#seats").next().text("10% Discount Applied");
            ticketCost = ticketCost * 0.9;
        }else{
            $("#seats").next().text("20% Discount Applied");
            ticketCost = ticketCost * 0.8;
        }
        $("#ticketCost").val(ticketCost);
        
//        Calculate Snack Cost
        var snackCost = 0;
        if(snacksToggle){
            if(snackSekected == "Popcorn - $3"){
                snackCost = 3;
            }else
                snackCost = 5;
            snackCost = snackCost * snackAmount;
        }
        $("#snackCost").val(snackCost);
        $("#total").val(ticketCost+snackCost);
    }
        
    });
    
//    Reset All Fields
    $("#reset").click(function(){
        $("#selectSnackAmount").next().text("*");
        $("#seats").next().text("*");
        if($("#snacksDiv").is(":visible")){
            $("#snacksDiv").toggle();
            snacksToggle = false;
        }
    });
    
}); // end ready