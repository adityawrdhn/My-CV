import React from "react";
import iconError from "assets/img/error-404.svg";
import "assets/css/error404.css";

const Error404 = () => {
    return (
        <div>
            <div className="group-error">
                <img src={iconError} alt="icon-error-404" />
                <div className="error-text">
                    Page Not Found
                    <span>We are unable to find the page you're looking for</span>
                </div>
            </div>
        </div>
    );
};

export default Error404;
