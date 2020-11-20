import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantPage from "./routes/RestaurantPage";
import { RestaurantsDetailsProvider } from './ContextApi/RestaurantsDetails';

const App = () => {
    return (
    <RestaurantsDetailsProvider>
        <div className="container">
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/restaurants/:id/update" component={UpdatePage}></Route>
                <Route exact path="/resturants/:id" component={RestaurantPage}></Route>
            </Switch>
        </Router>
       </div>
    </RestaurantsDetailsProvider>    
    
    )
};

export default App;