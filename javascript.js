let queryURL = "https:api.nytimes.com/svc/search/v2/articlesearch.json"

let adlar = ""
$.ajax({
    url: queryURL,
    data:{
       "q": "baku",
       "api-key": "kaLVcy5INHCydVBGAu18ZnvFMmi9M8Ep",
       "begin_date": "20180101",
       "end_date":"20180101",
        
    }
}).done(function(response){
    console.log(response)
}).done(function(response){
    
})
