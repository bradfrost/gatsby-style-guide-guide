import React from "react";

const Iframe = ({ src }) => (
    <div className="iffframe">

        <iframe className="iffframe__iframe" frameBorder="0" width="100%" height="100%" src={ src }></iframe>

        <div className="iffframe__handle"></div>

    </div>
);

export default Iframe;
