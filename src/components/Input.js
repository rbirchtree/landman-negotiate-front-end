import React from 'react';

export default function Input(props) {
    const labelStyle = {
    	display: 'block'
    };

    return (
        <div>
            <label style={labelStyle} htmlFor={props.id}>{props.label}</label>
            <input type="text" id={props.id} min={props.min} max={props.max}
                onChange={e => props.onChange(e.target.value)} value={props.value} />
        </div>
    );
}

