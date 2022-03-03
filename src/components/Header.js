import React from "react";

const Header = ({handleToggleDarkMode})=> {
    return(
        <div className="header">
            <h1>Note Blocks</h1>
            <button onClick={()=> handleToggleDarkMode((previousDarkMode=> !previousDarkMode))} className="save" >Toggle</button>
        </div>

    );
};

export default Header;