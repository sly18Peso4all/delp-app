import React, { useEffect } from 'react';
import RestaurantFinder from "../apis/RestaurantFinder";

const fakeData = [


    {
      "id": 2233,
      "name": "Aley Foods-berlin",
      "city": {
        "id": 25233,
        "name": "Berlin"
      },
      "comments": [
        {
          "id": 12213,
          "text": "my first yelp comment",
          "date": "timestamp"
        }
      ],
      "tag": [
        {
          "id": 121,
          "name": "italian"
        }
      ]
    },
    {
      "id": 123,
      "name": "Henry Foods-berlin",
      "city": {
        "id": 25233,
        "name": "Berlin"
      },
      "comments": [
        {
          "id": 1243,
          "text": "my first yelp comment",
          "date": "timestamp"
        }
      ],
      "tag": [
        {
          "id": 1213,
          "name": "italian"
        }
      ]
    },
    {
      "id": 22345,
      "name": "Aley Foods-berlin",
      "city": {
        "id": 2342,
        "name": "Berlin"
      },
      "comments": [
        {
          "id": 1273,
          "text": "my first yelp comment",
          "date": "timestamp"
        }
      ],
      "tag": [
        {
          "id": 12122,
          "name": "italian"
        }
      ]
    }
  
  ]



const RestaurantList = () => {




    return  (
    
       <div className="list-group">
          <table class="table table-borderless table-dark table-hover">
            <thead>
                <tr>
                <th scope="col">Restaurant</th>
                <th scope="col">Locations</th> 
                <th scope="col">Search Restaurant</th>

                </tr>
            </thead>
            <tbody>
                {fakeData.map(restaurant => (
                   <tr>
                        <td>{restaurant.name}</td>
                        <td>{restaurant.city.name}</td> 
                        <button className="btn btn-success text-center">Visit Website</button>
                  </tr>
                ))}
                
                
            </tbody>
            </table>
       </div>

    )
};

export default RestaurantList;


// [


//     {
//       "id": 2233,
//       "name": "Aley Foods-berlin",
//       "city": {
//         "id": 25233,
//         "name": "Berlin"
//       },
//       "comments": [
//         {
//           "id": 12213,
//           "text": "my first yelp comment",
//           "date": "timestamp"
//         }
//       ],
//       "tag": [
//         {
//           "id": 121,
//           "name": "italian"
//         }
//       ]
//     },
//     {
//       "id": 123,
//       "name": "Henry Foods-berlin",
//       "city": {
//         "id": 25233,
//         "name": "Berlin"
//       },
//       "comments": [
//         {
//           "id": 1243,
//           "text": "my first yelp comment",
//           "date": "timestamp"
//         }
//       ],
//       "tag": [
//         {
//           "id": 1213,
//           "name": "italian"
//         }
//       ]
//     },
//     {
//       "id": 22345,
//       "name": "Aley Foods-berlin",
//       "city": {
//         "id": 2342,
//         "name": "Berlin"
//       },
//       "comments": [
//         {
//           "id": 1273,
//           "text": "my first yelp comment",
//           "date": "timestamp"
//         }
//       ],
//       "tag": [
//         {
//           "id": 12122,
//           "name": "italian"
//         }
//       ]
//     }
  
//   ]




//    useEffect(() => {
//       try {
//           RestaurantFinder.get("/")
//       } catch (err) {

//       }
//    },[])