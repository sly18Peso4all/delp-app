import React, {useState, createContext}  from 'react';

export const RestaurantsDetails = createContext();

export const RestaurantsDetailsProvider = props => {
    const [ restaurants, setRestaurants] = useState([])

    return (
        <RestaurantsDetails.Provider value={{restaurants, setRestaurants}}>
            {props.children}
        </RestaurantsDetails.Provider>
    )
}