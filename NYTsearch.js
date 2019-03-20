/* Javascript File */

console.log("External JS Loaded - main.js")

$(document).ready(function() { console.log("JQuery Loaded");


    $("#submit").on("click", function() {
        event.preventDefault();

        //Search Varibles
        var searchQuery = $('#searchT').val();
        var startYear = $('#startYear').val();
        var endYear = $('#endYear').val();
        var searchYear = startYear + "-" + endYear;

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchQuery + "&pub_year=" + searchYear + "&api-key=M1DXCfTnWaAMkWhAKP4hMdnV4akgOLGJ";

        console.log(queryURL);


        $.ajax({
            url: queryURL,
            method: 'GET',
            success: function (response) {
                $("#articleSpace").empty();

                console.log(response);
                var returnJson = response;

                //var resultsArray = response.response.docs;
                var resultsLimit = $('#searchLimit').val();

                for (i = 0; i < resultsLimit; i++) {
                //console.log(returnJson);


                //Results Varibles
                var url = returnJson.response.docs[i].web_url;
                var headLine = returnJson.response.docs[i].headline.main;
                var summary = returnJson.response.docs[i].snippet;
                var author = returnJson.response.docs[i].byline.original;

                /*
                console.log(url);
                console.log(headLine);
                console.log(summary);
                console.log(author);
                */

                var result = $("<p>");
                result.attr('class','searchResult');
                result.attr('href', url);
                result.html("<h1>"+headLine+"</h1>"+"<i>"+author+"<i>"+"<p>"+summary+"</p>");

                $("#articleSpace").append(result);

                };




            }
    });
    });
});
