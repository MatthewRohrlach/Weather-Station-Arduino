getCell = function(){

    var data;
    var api = 'https://spreadsheets.google.com/feeds/cells/';
    
    var spreadsheet = "18rLzJDnUOZxU7rbbwUoyvdtouVP5rR-k1oScEW8DqTI";
    var worksheet = "default";
    
    var row = 3;
    var col = 7;
    //var newrow = then(function(data));

    var url = api+spreadsheet+'/'+worksheet+'/public/basic/R'+row+'C'+col+'?alt=json';

    $.getJSON(url,function(data){

        row = data.entry.content['$t'];
        col = 1;
        var url = api+spreadsheet+'/'+worksheet+'/public/basic/R'+row+'C'+col+'?alt=json';

    }).then(function(data){
        
        $.getJSON(url,function(data){

            var value = data.entry.content['$t'];
            console.log(value);

        });

    });    

    $.getJSON(url)

		.done(function(data){

        	console.log(data);
            
            if(data.entry){

                $('#results').prepend(data.entry.content['$t']+' <br />');
 
                $.getJSON(url)
                .done(function(data){
                    console.log(data)
                    if(data.entry){
                        $('#results').prepend(data.entry.content['$t']+' <br />');
                    }else{
                        $('#results').prepend('Failed to fetch data <br />');
                    }
                })
                .fail(function(){
                    $('#results').prepend('Failed to fetch data <br />');
                });

            }

        });

}