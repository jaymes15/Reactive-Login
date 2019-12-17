import React, {Component} from 'react';
import Welcome from './Welcome.js';
import Form from './Form.js';


class Parent extends Component{
  constructor(props){
		super(props)

		this.state = {
			message:'',
      form:'',
			username:''
		}
	}

	componentDidMount(){
		const welcome = <Welcome   />
		this.setState({
			message: welcome,
      
		})
	}

  render() {
  	
    return (
    	<div>
    	 {this.state.message}
    	 
    	 </div>
    	)
  }
}

export default Parent;
