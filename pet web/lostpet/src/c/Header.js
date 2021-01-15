import React from 'react';
import { Link } from "react-router-dom"
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return(
        <div>
        <div className="middle menu">
                <img class="ui small centered image" src="lostpets_icon.png"></img>
            </div>
        <div className="ui secondary pointing menu">
            <Link to="/NewAd" className="item">
                Create new ad
            </Link>
            <Link to="/" className="item">
                Show list of ads
            </Link>
            <div className="right menu">
            <GoogleAuth />
            </div>
            
        </div>
        </div>
        
    );
};
export default Header;