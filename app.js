
$("#searchSubmit").on("click", function(){
    console.log("Search Button Clicked");

let articleQuery = $("#searchTerm").val();
    console.log(articleQuery);

let numRecords= $("#numOfRecords").val();
    console.log(numRecords);
// let startYear = $("#startYear");
// let endYear = $("#endYear");

let queryurl="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ articleQuery +"&api-key=BLujw6QB4o3UHSrHd4yd5wtzQFqjWOyo";  

    $.ajax({
        url: queryurl, 
        method: "get"  
    }).then(function(response){
 
            for(i = 0; i < numRecords; i++){

                var newArticle = $("<h2>");
                newArticle.text(response.response.docs[i].snippet);
                var author = $("<p>");
                author.text(response.response.docs[i].byline.original);
                $("#articlesResults").append(newArticle);
                $("#articlesResults").append(author);
            }        
        })
})


    
