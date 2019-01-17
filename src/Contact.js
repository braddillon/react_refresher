import React from 'react';

const Contact = (props) => {
    return (<li className="list-group-item" onClick={props.onClick}>{props.name} {props.phone}</li>)
}

export default Contact