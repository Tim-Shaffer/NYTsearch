
$("#searchSubmit").on("click", function(){

let articleQuery = $("#searchTerm");

let numRecords= $("#numOfRecords").attr("value");
let startYear = $("#startYear");
let endYear = $("#endYear");

let queryurl="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+articleQuery+"&api-key=BLujw6QB4o3UHSrHd4yd5wtzQFqjWOyo";  //whatever is in var articleQuery is what get from ui team


// q=obama&facet_fields=source&facet=true&begin_date=20120101&end_date=20121231

// headline 



        $.ajax({
            url: queryurl, 
            method: "get"  
            }).then(function(response){
                console.log(response)
            for(i = 0; i < numRecords; i++){
                console.log(response.docs[i].snippet);
            }        
        }   

                    )
                })


    
