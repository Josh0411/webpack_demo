import React from 'react';
import Dis from '../dumbComponent/Dis.jsx';
import Stateless from '../dumbComponent/stateless.jsx';

export default class Demo extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			list: [{name:"linfeng"},{name:"nate"}]
		};
	}

	render() {


       var lists = this.state.list.map((value,index)=>{
       	return (<li key={name}><Dis label={value.name}/></li>);
       });

       return (<div><div className="title">{this.state.title}</div><ul>{lists}</ul><Stateless label="default text"/></div>);


	}


}