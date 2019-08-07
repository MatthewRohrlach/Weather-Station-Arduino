// JavaScript Document
$(document).ready(function(){
    
    var randomNumber = randomize(100);
    var temperature = getCell(1, 7, 3);

    $('#temperature').html(randomNumber);

});