// let parks = []

// export const useParks = () => {
//   return parks.slice()
// }

// //"http://localhost:8088/data"

// export const getParks = () => {
//   return fetch("https://developer.nps.gov/api/v1/parks?limit=498&api_key=LQQm52ab9VPeOewpPtjcSGpReo200bsyBXFC0H33")
//   .then(response => response.json())
//   .then(
//     parsedParks => {
//       parks = parsedParks.data
//     }
//   )
// }

 var token = 'Bearer VJ1VwXpPjvS9d6SMBSx6DuCeWsTAqeTPPEvASg6WdVJpu6WK4nHsSimvCkn2pbU2kqRFEcs0P4ja3kctm__fedBLrLKclcpBBVKQTr4qwMR-jVFGMdCaT8m7ofYKYHYx'
 var yelp_search_url = 'https://api.yelp.com/v3/businesses/search'
 var cors_anywhere_url ='https://cors-anywhere.herokuapp.com'
 let restaurant = []

export const RestaurantProvider = () => {

    return  fetch(cors_anywhere_url + '/' + yelp_search_url + '?term=vegan&latitude=36.174465&longitude=-86.767960',
         {method: 'GET',
         headers: {
             'Authorization': token 
         }
         }

     ).then(res => res.json())
     .then(parsedRestaurants => {
         restautant = parsedRestaurants.data
     })
     .then(console.log)
}

