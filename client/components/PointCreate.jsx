﻿import React,{PropTypes} from 'react';
import {Link} from 'react-router';
//声明组件
const PointCreate = React.createClass({
	componentWillMount(){
		this.saveAddTemplateNode();
		this.saveUpdateTemplateNode();
	},
	saveAddTemplateNode(){
		const param = {};
		this.props.addTemplateNode(param);
	},
	saveUpdateTemplateNode(){
		const param = {};
		this.props.updateTemplateNode(param);
	},
	render(){
		return (
			<section className="main">
				PointCreate.
			</section>
		)
	}
});

//导出组件
export default PointCreate;