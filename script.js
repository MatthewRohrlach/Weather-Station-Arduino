$(document).ready(function(){
    
    //var randomNumber = randomize(100);
    //$('#temperature').html(randomNumber);

    var value;

    function getCell(){

        var data;
        var api = 'https://spreadsheets.google.com/feeds/cells/';
        var spreadsheet = "18rLzJDnUOZxU7rbbwUoyvdtouVP5rR-k1oScEW8DqTI";
        var worksheet = "default";
        
        var row = 3;
        var col = 1;
        var url = api+spreadsheet+'/'+worksheet+'/public/basic/R'+row+'C'+col+'?alt=json';
        console.log(url);

        $.getJSON(url, function(data){

            value = data.entry.content['$t'];
            console.log(value);
            console.log(data);

            $('#temperature').html(value + "°C");

        });

        var row2 = 3;
        var col2 = 2;
        var url2 = api+spreadsheet+'/'+worksheet+'/public/basic/R'+row2+'C'+col2+'?alt=json';

        $.getJSON(url2, function(data){

            value = data.entry.content['$t'];
            console.log(value);
            console.log(data);

            $('#humidity').html(value + "%");

        });

        var row3 = 3;
        var col3 = 3;
        var url3 = api+spreadsheet+'/'+worksheet+'/public/basic/R'+row3+'C'+col3+'?alt=json';

        $.getJSON(url3, function(data){

            value = data.entry.content['$t'];
            console.log(value);
            console.log(data);

            $('#windspeed').html(value + "km/h");

        });

        var row4 = 3;
        var col4 = 4;
        var url4 = api+spreadsheet+'/'+worksheet+'/public/basic/R'+row4+'C'+col4+'?alt=json';

        $.getJSON(url4, function(data){

            value = data.entry.content['$t'];
            console.log(value);
            console.log(data);

            $('#UV').html(value + "nm");

        });

        var row5 = 3;
        var col5 = 5;
        var url5 = api+spreadsheet+'/'+worksheet+'/public/basic/R'+row5+'C'+col5+'?alt=json';

        $.getJSON(url5, function(data){

            value = data.entry.content['$t'];
            console.log(value);
            console.log(data);

            $('#ambientLight').html("<br>" + value + " Lux");

        });

        //return value;
        //console.log(value);

    }

    /*function getSecondCell(){

        var data;
        var api = 'https://spreadsheets.google.com/feeds/cells/';
        var spreadsheet = "18rLzJDnUOZxU7rbbwUoyvdtouVP5rR-k1oScEW8DqTI";
        var worksheet = "default";

        var row2 = value;
        var col2 = 1;
        var url2 = api+spreadsheet+'/'+worksheet+'/public/basic/R'+row2+'C'+col2+'?alt=json';
        console.log(url2);

        $.getJSON(url2,function(data){

            var finalvalue = data.entry.content['$t'];
            console.log(finalvalue);

        });

    }*/

});