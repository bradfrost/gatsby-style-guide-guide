import React from "react";

const Iframe = ({ src }) => (
    <div className="c-iframe">

        <iframe className="c-iframe__iframe" frameBorder="0" width="100%" height="100%" src={ src }></iframe>

        <div className="c-iframe__handle"></div>

    </div>
);

export default Iframe;
