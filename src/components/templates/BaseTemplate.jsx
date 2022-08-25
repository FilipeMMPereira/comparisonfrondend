import React from "react";
import Navbar from "../layouts/Navbar";


function BaseTemplate(props) {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}

export default BaseTemplate