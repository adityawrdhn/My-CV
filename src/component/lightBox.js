import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import cancel from "assets/img/cancel.svg";

const LightBox = ({ onClick, children, ...props }) => {
    const [showBox, setshowBox] = useState(false);

    const handleOnclick = () => {
        if (onClick) onClick();
        setshowBox(!showBox);
    };

    useEffect(() => {
        document.body.style.overflow = showBox ? "hidden" : "";
        return () => (document.body.style.overflow = "");
    }, [showBox]);

    return (
        <>
            <div {...props} onClick={() => handleOnclick()}>
                {children}
            </div>

            {showBox &&
                ReactDOM.createPortal(
                    <div className="container-lightbox">
                        <button className="btn-close-lightbox" onClick={() => setshowBox(false)}>
                            <img src={cancel} alt="button cancel emart light" />
                        </button>

                        <div className="content-lightbox">
                          {children}
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
};

export default LightBox;
