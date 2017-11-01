
import React from 'react';

export default function (props) {

	var divDom

	var handleClick = (event) => {
		divDom.innerHTML = 'This is the text has been changed by clicking';
	};

	return (<div><div ref={(node)=>{divDom = node}}>{props.label}</div><input onClick={handleClick} type="button" value="点击"/></div>);

}