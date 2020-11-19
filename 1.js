$('document').ready(function(){
    $('#SE').on('change', function(){
        $.ajax({
            url: 'https://run.mocky.io/v3/03927357-2c61-46d5-86d6-0d59b72955ec',
            method: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            success: function(result){
                $("#country").empty();
                var value = $("#SE").val();
                // alert(value);
                if ( value === 'Google' )
                {
                    for(i = 0; i < result.GOOGLE.length; i++)
                    {
                        $("#country").append('<option>' + result.GOOGLE[i].NAME + '</option>');
                    }
                }

                if ( value === 'Bing' )
                {
                    for(i = 0; i < result.BING.length; i++)
                    {
                        $("#country").append('<option>' + result.BING[i].NAME + '</option>');
                    }
                }
            }
        });
    });    
});