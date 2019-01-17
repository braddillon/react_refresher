import React from 'react';

const ContactDetail = (props) => {
    return (
        <div className="padding">
            <h4>Contact Details</h4>
            Name: {props.name}<br />
            Phone Number: {props.phone}<br />
            Email: {props.email}<br />
            <button type="button" className="btn btn-danger" onClick={props.onReset}>Reset</button>
        </div>
    )
}

export default ContactDetail;