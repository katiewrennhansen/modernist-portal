import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

const Popup = (props) => {
    return (
        <div
            className="popup"
            latitude={props.selected.lat} 
            longitude={props.selected.lng}
        >
            <CloseIcon
                fontSize="large"
                className="close-icon"
                onClick={() => {
                    props.setSelected(null)
                }}/>
            <h3>{props.selected.name}</h3>
            <div>
                <p>{props.selected.address}</p>
                <p>Architect: {props.selected.architect}</p>
                <p>{props.selected.description}</p>
            </div>
        </div>
    )
}

export default Popup