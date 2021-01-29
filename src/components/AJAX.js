$.ajax({
    url      : 'https://api.yelp.com/v3/businesses/search?term=vegan&latitude=36.174465&longitude=-86.767960',
    dataType : 'jsonp',
    data     : {term : 'restaurant', lat : xxx, long : xxx}, // callback is not necessary
    success  : function(data) {
        // data is a normal response shown on yelp's API page
    }
});