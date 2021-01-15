import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import NewAd from "./c/NewAd";
import AdList from "./c/AdList";
import Header from "./c/Header";
const App = () => {
    return (
        <div calssName='ui container'>           
            <BrowserRouter>
            <Header />
            <Route path="/" exact component={AdList}/>
            <Route path="/NewAd" exact component={NewAd}/>
            </BrowserRouter>
        </div>

    );
};
export default App;