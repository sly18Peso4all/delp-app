import React from 'react';


const SearchRestaurant = () => {
    return  (
    
       <div className="mb-4">
         <form action="" method="get" className="">
             <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control width" placeholder="burgers, barbers, spas, handymen.."/>
                </div>
                <div className="col">
                    <input type="text" className="form-control width" placeholder="Berlin, Germany"/>
                </div>
                <div className="col">
                    <button className="btn btn-secondary">Search</button>
                </div>

             </div>
         </form>
       </div>

    )
};

export default SearchRestaurant;