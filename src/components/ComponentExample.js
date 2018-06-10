import React from "react";
import ButtonExamplePrimary from "../../ds-components/Button/examples/ButtonExamplePrimary";
import ButtonExampleSmall from "../../ds-components/Button/examples/ButtonExampleSmall";
import CardExample from "../../ds-components/Card/examples/CardExample";

const ComponentExample = ({ component }) => {
    switch(component) {
        case 'button':
            return <ButtonExamplePrimary />;
        case 'button-small':
            return <ButtonExampleSmall/>;
        case 'card':
            return <CardExample />;
        default:
            return null;
    }
}

export default ComponentExample;
