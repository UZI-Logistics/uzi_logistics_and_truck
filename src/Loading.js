import React from 'react';
import logo from "../src/images/logo.png";

const Loading = () => {
    return (
        <div className="loading">
            <img src={logo} loading="lazy" alt="logo" />
            {/* <h3>Africa Logisitics Platform....</h3>
             */}
            <h3>Nigeria No. 1 Logisitics Platform...</h3>

        </div>
    )
}

export default Loading;
